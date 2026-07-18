"""Generate Combined Bearing and SL series factory reference PDFs from site data."""
from __future__ import annotations

import re
from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4, landscape
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public" / "downloads"
OUTPUT = ROOT / "output" / "pdf"
PUBLIC.mkdir(parents=True, exist_ok=True)
OUTPUT.mkdir(parents=True, exist_ok=True)

styles = getSampleStyleSheet()
title_style = ParagraphStyle(
    "TitleCustom", parent=styles["Title"], fontName="Helvetica-Bold", fontSize=18,
    leading=22, textColor=colors.HexColor("#10243e"), alignment=TA_LEFT, spaceAfter=6,
)
body_style = ParagraphStyle(
    "Body", parent=styles["BodyText"], fontSize=9, leading=12,
    textColor=colors.HexColor("#334155"), spaceAfter=8,
)
notice_style = ParagraphStyle(
    "Notice", parent=body_style, backColor=colors.HexColor("#fff8e8"),
    borderPadding=7, textColor=colors.HexColor("#6b4b12"),
)


def footer(canvas, doc):
    canvas.saveState()
    width, _ = landscape(A4)
    canvas.setStrokeColor(colors.HexColor("#d7dee8"))
    canvas.line(14 * mm, 10 * mm, width - 14 * mm, 10 * mm)
    canvas.setFillColor(colors.HexColor("#64748b"))
    canvas.setFont("Helvetica", 7)
    canvas.drawString(
        14 * mm, 5.5 * mm,
        "Combined Bearing Source - factory technical reference - not a manufacturing drawing",
    )
    canvas.drawRightString(width - 14 * mm, 5.5 * mm, f"Page {doc.page}")
    canvas.restoreState()


def build_pdf(filename: str, title: str, intro: str, headers: list[str], rows: list[list[str]]):
    for folder in (PUBLIC, OUTPUT):
        path = folder / filename
        doc = SimpleDocTemplate(
            str(path), pagesize=landscape(A4),
            leftMargin=12 * mm, rightMargin=12 * mm,
            topMargin=12 * mm, bottomMargin=14 * mm,
            title=title, author="Combined Bearing Source",
        )
        table = Table([headers] + rows, repeatRows=1)
        table.setStyle(TableStyle([
            ("BACKGROUND", (0, 0), (-1, 0), colors.HexColor("#10243e")),
            ("TEXTCOLOR", (0, 0), (-1, 0), colors.white),
            ("FONTNAME", (0, 0), (-1, 0), "Helvetica-Bold"),
            ("FONTSIZE", (0, 0), (-1, -1), 7),
            ("ALIGN", (1, 0), (-1, -1), "CENTER"),
            ("GRID", (0, 0), (-1, -1), 0.35, colors.HexColor("#d7dee8")),
            ("ROWBACKGROUNDS", (0, 1), (-1, -1), [colors.white, colors.HexColor("#f8fafc")]),
            ("TOPPADDING", (0, 0), (-1, -1), 3.5),
            ("BOTTOMPADDING", (0, 0), (-1, -1), 3.5),
        ]))
        story = [
            Paragraph(title, title_style),
            Paragraph(intro, body_style),
            Paragraph(
                "Factory catalog values for preliminary identification. Confirm the controlled drawing, suffix and operating conditions before order.",
                notice_style,
            ),
            Spacer(1, 6),
            table,
        ]
        doc.build(story, onFirstPage=footer, onLaterPages=footer)
        print(f"wrote {path.relative_to(ROOT)}")


def parse_specs_block(block: str) -> dict[str, str]:
    specs: dict[str, str] = {}
    for match in re.finditer(r"([A-Za-z0-9]+):'([^']*)'", block):
        specs[match.group(1)] = match.group(2).replace(" mm", "").replace(" kN", "").replace(" rpm", "").replace(" kg", "")
    return specs


def load_combined_rows() -> list[list[str]]:
    text = (ROOT / "src/data/combined-bearing-models.ts").read_text(encoding="utf-8")
    rows: list[list[str]] = []
    for match in re.finditer(
        r"model:\s*'([^']+)'.*?aliases:\s*\[([^\]]*)\].*?specs:\s*specs\(\{([^}]*)\}\)",
        text,
        re.S,
    ):
        model = match.group(1)
        aliases = re.findall(r"'([^']+)'", match.group(2))
        specs = parse_specs_block(match.group(3))
        alias_text = " / ".join(aliases[:2]) if aliases else "-"
        rows.append([
            model,
            alias_text,
            specs.get("d", "-"),
            specs.get("D", "-"),
            specs.get("H", "-"),
            specs.get("B", "-"),
            specs.get("S", "-"),
            specs.get("T", "-"),
            specs.get("Cr", specs.get("C", "-")),
            specs.get("C0r", specs.get("C0", "-")),
            specs.get("Ca", "-"),
            specs.get("C0a", "-"),
            specs.get("Mass", "-"),
        ])
    return rows


def load_sl_rows() -> list[list[str]]:
    text = (ROOT / "src/data/extended-bearing-models.ts").read_text(encoding="utf-8")
    rows: list[list[str]] = []
    for match in re.finditer(
        r"\{slug:'([^']+)',model:'([^']+)',family:'Full Complement Cylindrical Roller Bearing'.*?aliases:\[([^\]]*)\].*?specs:s\(\{([^}]*)\}\)",
        text,
        re.S,
    ):
        model = match.group(2)
        aliases = re.findall(r"'([^']+)'", match.group(3))
        specs = parse_specs_block(match.group(4))
        rows.append([
            model,
            " / ".join(aliases[:2]) if aliases else "-",
            specs.get("d", "-"),
            specs.get("D", "-"),
            specs.get("B", "-"),
            specs.get("Cr", "-"),
            specs.get("C0r", "-"),
            specs.get("Seal", specs.get("Design", specs.get("Lubrication", "-"))),
            specs.get("Mass", "-"),
        ])
    # Add SL18 3004 from technical reference samples
    rows.insert(0, ["SL18 3004", "NCF3004V", "20", "42", "16", "30.5", "26", "Open / single-row", "0.11"])
    return rows


combined_rows = load_combined_rows()
if not combined_rows:
    raise SystemExit("No combined bearing rows parsed")

sl_rows = load_sl_rows()
if not sl_rows:
    raise SystemExit("No SL rows parsed")

build_pdf(
    "combined-bearing-standard-series-reference.pdf",
    "Combined Bearing Factory Series Reference",
    "Factory reference table for combined bearings used in forklift masts, steel profiles and linear guide systems, including common JD / MR / TR cross-references.",
    ["Model", "Aliases", "d", "D", "H", "B", "S", "T", "Cr", "C0r", "Ca", "C0a", "Mass"],
    combined_rows,
)
build_pdf(
    "sl-full-complement-bearing-reference.pdf",
    "SL Full Complement Bearing Factory Reference",
    "Factory sample catalog for SL18, SL04 and related full-complement cylindrical roller bearings used in gearboxes, sheaves and heavy drives.",
    ["Model", "Equivalents", "d", "D", "B", "Cr", "C0r", "Notes", "Mass"],
    sl_rows,
)
