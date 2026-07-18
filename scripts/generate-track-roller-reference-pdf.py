from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4, landscape
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import PageBreak, Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle
from reportlab.graphics.shapes import Circle, Drawing, Line, Polygon, String


ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "output" / "pdf" / "natr-pp-track-roller-reference.pdf"
OUTPUT.parent.mkdir(parents=True, exist_ok=True)

rows = [
    ["NATR5-PP", "5", "16", "12", "11", "12.5", "3.20", "3.45", "0.465", "14,000", "0.014"],
    ["NATR6-PP", "6", "19", "12", "11", "15", "3.55", "4.10", "0.560", "11,000", "0.019"],
    ["NATR8-PP", "8", "24", "15", "14", "19", "5.50", "6.70", "0.940", "7,500", "0.038"],
    ["NATR10-PP", "10", "30", "15", "14", "23", "6.80", "8.70", "1.240", "5,500", "0.064"],
    ["NATR12-PP", "12", "32", "15", "14", "25", "7.00", "9.20", "1.320", "4,500", "0.066"],
    ["NATR15-PP", "15", "35", "19", "18", "27.6", "9.70", "14.50", "1.860", "3,600", "0.095"],
    ["NATR17-PP", "17", "40", "21", "20", "31.5", "10.90", "16.00", "2.130", "2,900", "0.139"],
    ["NATR20-PP", "20", "47", "25", "24", "36.5", "15.40", "26.00", "3.450", "2,400", "0.236"],
    ["NATR25-PP", "25", "52", "25", "24", "41.5", "15.20", "27.00", "3.600", "1,800", "0.271"],
    ["NATR30-PP", "30", "62", "29", "28", "51", "23.30", "39.50", "5.300", "1,300", "0.444"],
    ["NATR35-PP", "35", "72", "29", "28", "58", "24.80", "45.00", "6.000", "1,000", "0.547"],
    ["NATR40-PP", "40", "80", "32", "30", "66", "32.50", "59.00", "8.400", "850", "0.795"],
    ["NATR50-PP", "50", "90", "32", "30", "76", "31.00", "60.00", "8.500", "650", "0.867"],
]


def footer(canvas, doc):
    canvas.saveState()
    width, _ = landscape(A4)
    canvas.setStrokeColor(colors.HexColor("#d7dee8"))
    canvas.line(16 * mm, 11 * mm, width - 16 * mm, 11 * mm)
    canvas.setFillColor(colors.HexColor("#64748b"))
    canvas.setFont("Helvetica", 7.5)
    canvas.drawString(16 * mm, 6.5 * mm, "Combined Bearing Source - processed technical reference - not a manufacturing drawing")
    canvas.drawRightString(width - 16 * mm, 6.5 * mm, f"Page {doc.page}")
    canvas.restoreState()


def dimension_arrow(drawing, x1, y1, x2, y2, label, label_dx=0, label_dy=5):
    drawing.add(Line(x1, y1, x2, y2, strokeColor=colors.HexColor("#146ef5"), strokeWidth=1))
    if y1 == y2:
        drawing.add(Polygon([x1, y1, x1 + 6, y1 + 3, x1 + 6, y1 - 3], fillColor=colors.HexColor("#146ef5"), strokeColor=None))
        drawing.add(Polygon([x2, y2, x2 - 6, y2 + 3, x2 - 6, y2 - 3], fillColor=colors.HexColor("#146ef5"), strokeColor=None))
    else:
        drawing.add(Polygon([x1, y1, x1 - 3, y1 + 6, x1 + 3, y1 + 6], fillColor=colors.HexColor("#146ef5"), strokeColor=None))
        drawing.add(Polygon([x2, y2, x2 - 3, y2 - 6, x2 + 3, y2 - 6], fillColor=colors.HexColor("#146ef5"), strokeColor=None))
    drawing.add(String((x1 + x2) / 2 + label_dx, (y1 + y2) / 2 + label_dy, label, textAnchor="middle", fontName="Helvetica-Bold", fontSize=9, fillColor=colors.HexColor("#0f3d86")))


styles = getSampleStyleSheet()
title = ParagraphStyle("TitleCustom", parent=styles["Title"], fontName="Helvetica-Bold", fontSize=24, leading=28, textColor=colors.HexColor("#10243e"), alignment=TA_LEFT, spaceAfter=8)
subtitle = ParagraphStyle("Subtitle", parent=styles["BodyText"], fontSize=10, leading=15, textColor=colors.HexColor("#475569"), spaceAfter=10)
h2 = ParagraphStyle("H2", parent=styles["Heading2"], fontName="Helvetica-Bold", fontSize=15, leading=18, textColor=colors.HexColor("#10243e"), spaceBefore=8, spaceAfter=6)
body = ParagraphStyle("Body", parent=styles["BodyText"], fontSize=9, leading=13, textColor=colors.HexColor("#334155"))
notice = ParagraphStyle("Notice", parent=body, backColor=colors.HexColor("#fff8e8"), borderColor=colors.HexColor("#d97706"), borderWidth=0.5, borderPadding=8, textColor=colors.HexColor("#6b4b12"), spaceBefore=8, spaceAfter=8)

doc = SimpleDocTemplate(
    str(OUTPUT), pagesize=landscape(A4), leftMargin=16 * mm, rightMargin=16 * mm,
    topMargin=15 * mm, bottomMargin=16 * mm, title="NATR..-PP Track Roller Technical Reference",
    author="Combined Bearing Source",
)

story = [
    Paragraph("NATR..-PP Track Roller Technical Reference", title),
    Paragraph("Dimensions, load ratings and a redrawn identification diagram for preliminary model comparison.", subtitle),
]

d = Drawing(745, 235)
d.add(Line(30, 18, 715, 18, strokeColor=colors.HexColor("#d7dee8"), strokeWidth=1))
cx, cy = 230, 125
d.add(Circle(cx, cy, 80, fillColor=colors.HexColor("#edf4ff"), strokeColor=colors.HexColor("#10243e"), strokeWidth=2))
d.add(Circle(cx, cy, 31, fillColor=colors.white, strokeColor=colors.HexColor("#10243e"), strokeWidth=2))
d.add(Circle(cx, cy, 56, fillColor=None, strokeColor=colors.HexColor("#64748b"), strokeWidth=1))
for angle_x, angle_y in [(0, 44), (31, 31), (44, 0), (31, -31), (0, -44), (-31, -31), (-44, 0), (-31, 31)]:
    d.add(Circle(cx + angle_x, cy + angle_y, 6, fillColor=colors.HexColor("#94a3b8"), strokeColor=colors.HexColor("#475569"), strokeWidth=0.6))
dimension_arrow(d, cx - 80, 28, cx + 80, 28, "D - outside diameter")
dimension_arrow(d, cx - 31, 55, cx + 31, 55, "d - bore", label_dy=5)

d.add(Line(450, 50, 450, 200, strokeColor=colors.HexColor("#10243e"), strokeWidth=2))
d.add(Line(565, 50, 565, 200, strokeColor=colors.HexColor("#10243e"), strokeWidth=2))
d.add(Line(465, 58, 465, 192, strokeColor=colors.HexColor("#64748b"), strokeWidth=1))
d.add(Line(550, 58, 550, 192, strokeColor=colors.HexColor("#64748b"), strokeWidth=1))
d.add(Line(450, 50, 565, 50, strokeColor=colors.HexColor("#10243e"), strokeWidth=2))
d.add(Line(450, 200, 565, 200, strokeColor=colors.HexColor("#10243e"), strokeWidth=2))
dimension_arrow(d, 450, 28, 565, 28, "B - bearing width")
dimension_arrow(d, 465, 220, 550, 220, "C - outer-ring width")
d.add(String(507, 118, "Generic side view", textAnchor="middle", fontName="Helvetica-Bold", fontSize=10, fillColor=colors.HexColor("#475569")))
d.add(String(675, 205, "Diagram purpose", fontName="Helvetica-Bold", fontSize=11, fillColor=colors.HexColor("#10243e")))
d.add(String(675, 187, "Identify dimension symbols", fontName="Helvetica", fontSize=8.5, fillColor=colors.HexColor("#475569")))
d.add(String(675, 173, "and compare envelope size.", fontName="Helvetica", fontSize=8.5, fillColor=colors.HexColor("#475569")))
d.add(String(675, 145, "Not shown", fontName="Helvetica-Bold", fontSize=11, fillColor=colors.HexColor("#10243e")))
d.add(String(675, 127, "Internal geometry, seals,", fontName="Helvetica", fontSize=8.5, fillColor=colors.HexColor("#475569")))
d.add(String(675, 113, "crowned profile and fits.", fontName="Helvetica", fontSize=8.5, fillColor=colors.HexColor("#475569")))
story.extend([
    d,
    Paragraph("How to use this sheet", h2),
    Paragraph("Match the complete designation and suffix first. Then compare d, D, B, C and d2. Load ratings are reference values for the published series and do not by themselves approve an interchange. Track material, hardness, outer-ring permissible load, lubrication and mounting must also be checked.", body),
    Paragraph("REFERENCE ONLY - NOT A CONTROLLED MANUFACTURING DRAWING. Confirm current manufacturer data and the quoted supplier drawing before purchase or installation.", notice),
    PageBreak(),
    Paragraph("NATR..-PP dimensions and load reference", title),
    Paragraph("Dimensions in mm. Load ratings in kN. Speed is the published permanent-grease reference speed in revolutions per minute.", subtitle),
])

headers = ["Model", "d", "D", "B", "C", "d2", "Crw", "C0rw", "Curw", "nDG rpm", "Mass kg"]
table = Table([headers] + rows, repeatRows=1, colWidths=[31 * mm, 13 * mm, 13 * mm, 13 * mm, 13 * mm, 17 * mm, 19 * mm, 20 * mm, 19 * mm, 24 * mm, 20 * mm])
table.setStyle(TableStyle([
    ("BACKGROUND", (0, 0), (-1, 0), colors.HexColor("#10243e")),
    ("TEXTCOLOR", (0, 0), (-1, 0), colors.white),
    ("FONTNAME", (0, 0), (-1, 0), "Helvetica-Bold"),
    ("FONTNAME", (0, 1), (0, -1), "Helvetica-Bold"),
    ("FONTSIZE", (0, 0), (-1, -1), 7.6),
    ("ALIGN", (1, 0), (-1, -1), "RIGHT"),
    ("ALIGN", (0, 0), (0, -1), "LEFT"),
    ("VALIGN", (0, 0), (-1, -1), "MIDDLE"),
    ("ROWBACKGROUNDS", (0, 1), (-1, -1), [colors.white, colors.HexColor("#f6f9fd")]),
    ("GRID", (0, 0), (-1, -1), 0.35, colors.HexColor("#cbd5e1")),
    ("TOPPADDING", (0, 0), (-1, -1), 4),
    ("BOTTOMPADDING", (0, 0), (-1, -1), 4),
    ("LEFTPADDING", (0, 0), (-1, -1), 5),
    ("RIGHTPADDING", (0, 0), (-1, -1), 5),
]))
story.extend([
    table,
    Spacer(1, 4 * mm),
    Paragraph("Source and processing notes", h2),
    Paragraph("Primary values: Schaeffler Aerospace Standard Products, section 6.1.5 NATR..-PP / NATV..-PP. Competitive benchmark reviewed: Jade Bearings NATR..-PP product page. Where public values differed, the current Schaeffler reference was used. No Jade photographs, drawings, certificates, reports or customer material are reproduced in this document.", body),
    Paragraph("Selection notice: suffix, internal design, permissible outer-ring load, lubrication, track hardness, fitting and current manufacturer data must be verified before quotation or use.", notice),
])

doc.build(story, onFirstPage=footer, onLaterPages=footer)
print(OUTPUT)
