"""Generate NUKR and NNTR factory reference PDFs into public/downloads and output/pdf."""
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
    "TitleCustom",
    parent=styles["Title"],
    fontName="Helvetica-Bold",
    fontSize=20,
    leading=24,
    textColor=colors.HexColor("#10243e"),
    alignment=TA_LEFT,
    spaceAfter=8,
)
body_style = ParagraphStyle(
    "Body",
    parent=styles["BodyText"],
    fontSize=9,
    leading=13,
    textColor=colors.HexColor("#334155"),
    spaceAfter=10,
)
notice_style = ParagraphStyle(
    "Notice",
    parent=body_style,
    backColor=colors.HexColor("#fff8e8"),
    borderPadding=8,
    textColor=colors.HexColor("#6b4b12"),
)


def footer(canvas, doc):
    canvas.saveState()
    width, _ = landscape(A4)
    canvas.setStrokeColor(colors.HexColor("#d7dee8"))
    canvas.line(16 * mm, 11 * mm, width - 16 * mm, 11 * mm)
    canvas.setFillColor(colors.HexColor("#64748b"))
    canvas.setFont("Helvetica", 7.5)
    canvas.drawString(
        16 * mm,
        6.5 * mm,
        "Combined Bearing Source - factory technical reference - not a manufacturing drawing",
    )
    canvas.drawRightString(width - 16 * mm, 6.5 * mm, f"Page {doc.page}")
    canvas.restoreState()


def build_pdf(filename: str, title: str, intro: str, headers: list[str], rows: list[list[str]]):
    for folder in (PUBLIC, OUTPUT):
        path = folder / filename
        doc = SimpleDocTemplate(
            str(path),
            pagesize=landscape(A4),
            leftMargin=16 * mm,
            rightMargin=16 * mm,
            topMargin=15 * mm,
            bottomMargin=16 * mm,
            title=title,
            author="Combined Bearing Source",
        )
        table = Table([headers] + rows, repeatRows=1)
        table.setStyle(
            TableStyle(
                [
                    ("BACKGROUND", (0, 0), (-1, 0), colors.HexColor("#10243e")),
                    ("TEXTCOLOR", (0, 0), (-1, 0), colors.white),
                    ("FONTNAME", (0, 0), (-1, 0), "Helvetica-Bold"),
                    ("FONTSIZE", (0, 0), (-1, -1), 8),
                    ("ALIGN", (1, 0), (-1, -1), "CENTER"),
                    ("GRID", (0, 0), (-1, -1), 0.4, colors.HexColor("#d7dee8")),
                    ("ROWBACKGROUNDS", (0, 1), (-1, -1), [colors.white, colors.HexColor("#f8fafc")]),
                    ("TOPPADDING", (0, 0), (-1, -1), 5),
                    ("BOTTOMPADDING", (0, 0), (-1, -1), 5),
                ]
            )
        )
        story = [
            Paragraph(title, title_style),
            Paragraph(intro, body_style),
            Paragraph(
                "Factory catalog values for preliminary identification. Confirm the controlled drawing, suffix and operating conditions before order.",
                notice_style,
            ),
            Spacer(1, 8),
            table,
        ]
        doc.build(story, onFirstPage=footer, onLaterPages=footer)
        print(f"wrote {path.relative_to(ROOT)}")


nukr_headers = ["Model", "D mm", "Stud d1", "B mm", "C mm", "Thread", "Crw kN", "C0rw kN", "nDG rpm", "Mass kg"]
nukr_rows = [
    ["NUKR35", "35", "16", "52", "18", "M16x1.5", "15.3", "18.7", "6,500", "0.164"],
    ["NUKR40", "40", "18", "58", "20", "M18x1.5", "18.7", "24.9", "5,500", "0.242"],
    ["NUKR47", "47", "20", "66", "24", "M20x1.5", "28.5", "37.5", "4,200", "0.380"],
    ["NUKR52", "52", "20", "66", "24", "M20x1.5", "29.0", "40.5", "4,200", "0.450"],
    ["NUKR62", "62", "24", "80", "28", "M24x1.5", "40.0", "55.0", "2,600", "0.795"],
    ["NUKR72", "72", "24", "80", "28", "M24x1.5", "45.0", "65.0", "2,100", "1.020"],
    ["NUKR80", "80", "30", "100", "35", "M30x1.5", "69.0", "104.0", "1,800", "1.600"],
    ["NUKR90", "90", "30", "100", "35", "M30x1.5", "78.0", "123.0", "1,800", "1.960"],
]

nntr_headers = ["Model", "d mm", "D mm", "B mm", "C mm", "Crw kN", "C0rw kN", "Mass kg"]
nntr_rows = [
    ["NNTR5512043", "55", "120", "43", "41", "170", "260", "2.7"],
    ["NNTR5013065", "50", "130", "65", "63", "188", "265", "5.2"],
    ["NNTR5514070", "55", "140", "70", "68", "218", "315", "6.4"],
]

build_pdf(
    "nukr-stud-track-roller-reference.pdf",
    "NUKR Stud Type Track Roller Technical Reference",
    "Metric stud-type cam followers manufactured for cam drives, conveyors and automation guide tracks.",
    nukr_headers,
    nukr_rows,
)
build_pdf(
    "nntr-rsu-support-roller-reference.pdf",
    "NNTR / RSU Support Roller Sample Reference",
    "Double-row full-complement support roller samples for steel equipment, heavy conveyors and guide tracks.",
    nntr_headers,
    nntr_rows,
)
