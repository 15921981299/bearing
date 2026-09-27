"""Generate individual one-page reference sheets for core combined bearing models."""
from __future__ import annotations

import re
import shutil
from pathlib import Path

from reportlab.graphics.shapes import Circle, Drawing, Line, Rect, String
from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import KeepTogether, Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT / "src" / "data" / "combined-bearing-models.ts"
OUTPUT = ROOT / "output" / "pdf" / "model-sheets"
PUBLIC = ROOT / "public" / "downloads" / "model-sheets"
OUTPUT.mkdir(parents=True, exist_ok=True)
PUBLIC.mkdir(parents=True, exist_ok=True)

TARGET_SLUGS = [
    "winkel-4-053", "winkel-4-054", "winkel-4-055", "winkel-4-056",
    "winkel-4-057", "winkel-4-058", "winkel-4-059", "winkel-4-060",
    "winkel-4-061", "winkel-4-062", "winkel-4-063",
    "winkel-4-454", "winkel-4-455", "winkel-4-456", "winkel-4-457",
    "winkel-4-458", "winkel-4-459", "winkel-4-460", "winkel-4-461",
    "winkel-4-462", "winkel-4-463",
    "winkel-pr4-054", "winkel-pr4-055", "winkel-pr4-056",
    "winkel-pr4-058", "winkel-pr4-059", "winkel-pr4-061",
]

NAVY = colors.HexColor("#0f172a")
BLUE = colors.HexColor("#146ef5")
SLATE = colors.HexColor("#475569")
LIGHT = colors.HexColor("#e2e8f0")
PALE = colors.HexColor("#f8fafc")
AMBER = colors.HexColor("#fff7df")

styles = getSampleStyleSheet()
title_style = ParagraphStyle(
    "ModelTitle", parent=styles["Title"], fontName="Helvetica-Bold",
    fontSize=22, leading=25, textColor=NAVY, alignment=TA_LEFT, spaceAfter=4,
)
eyebrow_style = ParagraphStyle(
    "Eyebrow", parent=styles["BodyText"], fontName="Helvetica-Bold",
    fontSize=8, leading=10, textColor=BLUE, spaceAfter=5,
)
body_style = ParagraphStyle(
    "BodyCompact", parent=styles["BodyText"], fontName="Helvetica",
    fontSize=8.5, leading=11.5, textColor=SLATE, spaceAfter=6,
)
small_style = ParagraphStyle(
    "Small", parent=body_style, fontSize=7.4, leading=9.5, spaceAfter=0,
)
notice_style = ParagraphStyle(
    "Notice", parent=body_style, backColor=AMBER, borderColor=colors.HexColor("#f0c36a"),
    borderWidth=0.5, borderPadding=7, textColor=colors.HexColor("#694b13"),
)


def clean(value: str) -> str:
    return (
        value.replace("–", "-")
        .replace("—", "-")
        .replace("×", "x")
        .replace("Ø", "Dia ")
        .replace("µ", "um")
        .replace("°", " deg")
    )


def extract_string(body: str, key: str) -> str:
    match = re.search(rf'{key}:\s*"([^"]*)"', body)
    return clean(match.group(1)) if match else ""


def extract_record(text: str, slug: str) -> dict[str, object]:
    match = re.search(
        rf'\{{\s*slug:\s*"{re.escape(slug)}",(?P<body>.*?)\n\s{{2}}\}},',
        text,
        re.S,
    )
    if not match:
        raise ValueError(f"Could not parse {slug}")
    body = match.group("body")
    aliases_match = re.search(r"aliases:\s*\[(.*?)\],\s*image:", body, re.S)
    aliases = re.findall(r'"([^"]+)"', aliases_match.group(1)) if aliases_match else []
    specs_match = re.search(r"specs:\s*specs\(\{(.*?)\}\),", body, re.S)
    specs: list[tuple[str, str]] = []
    if specs_match:
        specs = [
            (key, clean(value))
            for key, value in re.findall(r'(\w+):\s*"([^"]*)"', specs_match.group(1))
        ]
    return {
        "slug": slug,
        "model": extract_string(body, "model"),
        "family": extract_string(body, "family"),
        "description": extract_string(body, "description"),
        "application": extract_string(body, "application"),
        "aliases": [clean(alias) for alias in aliases],
        "specs": specs,
    }


def bearing_drawing(model: str) -> Drawing:
    drawing = Drawing(170 * mm, 48 * mm)
    drawing.add(Rect(0, 0, 170 * mm, 48 * mm, fillColor=PALE, strokeColor=LIGHT, rx=5, ry=5))
    cx, cy = 37 * mm, 24 * mm
    drawing.add(Circle(cx, cy, 19 * mm, fillColor=colors.HexColor("#d9e1ea"), strokeColor=NAVY, strokeWidth=2))
    drawing.add(Circle(cx, cy, 10.5 * mm, fillColor=colors.white, strokeColor=NAVY, strokeWidth=1.4))
    drawing.add(Circle(66 * mm, 15 * mm, 7 * mm, fillColor=colors.HexColor("#d9e1ea"), strokeColor=NAVY, strokeWidth=1.4))
    drawing.add(Circle(66 * mm, 15 * mm, 2.8 * mm, fillColor=colors.white, strokeColor=NAVY, strokeWidth=1))
    drawing.add(Line(51 * mm, 24 * mm, 63 * mm, 18 * mm, strokeColor=NAVY, strokeWidth=4))
    drawing.add(String(87 * mm, 31 * mm, model, fontName="Helvetica-Bold", fontSize=15, fillColor=NAVY))
    drawing.add(String(87 * mm, 23 * mm, "Combined roller bearing", fontName="Helvetica", fontSize=9, fillColor=SLATE))
    drawing.add(String(87 * mm, 15 * mm, "Configuration illustration - not to scale", fontName="Helvetica", fontSize=7.5, fillColor=BLUE))
    return drawing


def footer(canvas, doc):
    canvas.saveState()
    width, _ = A4
    canvas.setStrokeColor(LIGHT)
    canvas.line(15 * mm, 12 * mm, width - 15 * mm, 12 * mm)
    canvas.setFillColor(SLATE)
    canvas.setFont("Helvetica", 7)
    canvas.drawString(15 * mm, 7 * mm, "Combined Bearing Source | combinedbearingsource.com")
    canvas.drawRightString(width - 15 * mm, 7 * mm, "Reference sheet | Reviewed 2026-09-27")
    canvas.restoreState()


def generate(record: dict[str, object]) -> Path:
    slug = str(record["slug"])
    model = str(record["model"])
    path = OUTPUT / f"{slug}.pdf"
    doc = SimpleDocTemplate(
        str(path), pagesize=A4, leftMargin=15 * mm, rightMargin=15 * mm,
        topMargin=14 * mm, bottomMargin=17 * mm,
        title=f"{model} Combined Bearing Reference Sheet",
        author="Combined Bearing Source",
        subject="Preliminary combined bearing identification and RFQ reference",
    )
    aliases = record["aliases"] if isinstance(record["aliases"], list) else []
    specs = record["specs"] if isinstance(record["specs"], list) else []
    spec_rows = [[Paragraph("Parameter", small_style), Paragraph("Catalog value", small_style)]]
    for label, value in specs:
        spec_rows.append([Paragraph(str(label), small_style), Paragraph(str(value), small_style)])
    spec_table = Table(spec_rows, colWidths=[55 * mm, 55 * mm], repeatRows=1)
    spec_table.setStyle(TableStyle([
        ("BACKGROUND", (0, 0), (-1, 0), NAVY),
        ("TEXTCOLOR", (0, 0), (-1, 0), colors.white),
        ("FONTNAME", (0, 0), (-1, 0), "Helvetica-Bold"),
        ("GRID", (0, 0), (-1, -1), 0.4, LIGHT),
        ("ROWBACKGROUNDS", (0, 1), (-1, -1), [colors.white, PALE]),
        ("VALIGN", (0, 0), (-1, -1), "TOP"),
        ("LEFTPADDING", (0, 0), (-1, -1), 5),
        ("RIGHTPADDING", (0, 0), (-1, -1), 5),
        ("TOPPADDING", (0, 0), (-1, -1), 4),
        ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
    ]))
    verification = [
        "Confirm the complete designation, suffix and marking photographs.",
        "Verify d, D, H, h, B, S, T and every mounting interface on the controlled drawing.",
        "Check radial and axial load, speed, shock, duty cycle, profile and lubrication.",
        "Agree inspection records, marking and packing scope before order.",
    ]
    story = [
        Paragraph("CORE MODEL REFERENCE SHEET", eyebrow_style),
        Paragraph(f"{model} Combined Bearing", title_style),
        Paragraph(f"Family: {record['family']}", body_style),
        bearing_drawing(model),
        Spacer(1, 4 * mm),
        Paragraph(str(record["description"]), body_style),
        Paragraph(f"<b>Typical application:</b> {record['application']}", body_style),
        Paragraph(f"<b>Common references:</b> {' / '.join(aliases) if aliases else 'Confirm complete marking'}", body_style),
        Spacer(1, 2 * mm),
        KeepTogether([Paragraph("Catalog dimensions and ratings", styles["Heading2"]), spec_table]),
        Spacer(1, 4 * mm),
        Paragraph("Quotation verification", styles["Heading2"]),
        Paragraph("<br/>".join(f"- {item}" for item in verification), body_style),
        Paragraph(
            "Identification reference only. This sheet is not a controlled manufacturing drawing, interchange approval or batch inspection certificate. Final supply is governed by the confirmed quotation and controlled drawing.",
            notice_style,
        ),
    ]
    doc.build(story, onFirstPage=footer, onLaterPages=footer)
    public_path = PUBLIC / path.name
    shutil.copy2(path, public_path)
    return path


source_text = SOURCE.read_text(encoding="utf-8")
generated = [generate(extract_record(source_text, slug)) for slug in TARGET_SLUGS]
if len(generated) != len(TARGET_SLUGS):
    raise SystemExit(f"Expected {len(TARGET_SLUGS)} PDFs, generated {len(generated)}")
print(f"Generated {len(generated)} core model sheets in {OUTPUT}")
