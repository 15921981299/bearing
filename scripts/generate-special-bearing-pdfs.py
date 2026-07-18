from pathlib import Path
from reportlab.lib import colors
from reportlab.lib.pagesizes import A4, landscape
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.units import mm
from reportlab.platypus import SimpleDocTemplate, Table, TableStyle, Paragraph, Spacer, PageBreak

OUT = Path(__file__).resolve().parents[1] / 'public' / 'downloads'
OUT.mkdir(parents=True, exist_ok=True)
NAVY = colors.HexColor('#0F172A')
BLUE = colors.HexColor('#0369A1')
LIGHT = colors.HexColor('#E2E8F0')
styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name='SmallBody', parent=styles['BodyText'], fontSize=8, leading=11, textColor=colors.HexColor('#334155')))
styles.add(ParagraphStyle(name='TableHeader', parent=styles['BodyText'], fontName='Helvetica-Bold', fontSize=8, leading=10, textColor=colors.white))

def footer(canvas, doc):
    canvas.saveState()
    canvas.setFont('Helvetica', 7)
    canvas.setFillColor(colors.HexColor('#475569'))
    canvas.drawString(15*mm, 9*mm, 'Combined Bearing Source - technical reference for RFQ and model verification')
    canvas.drawRightString(282*mm, 9*mm, f'Page {doc.page}')
    canvas.restoreState()

def make_pdf(filename, title, intro, columns, rows, notes):
    doc = SimpleDocTemplate(str(OUT / filename), pagesize=landscape(A4), leftMargin=12*mm, rightMargin=12*mm, topMargin=12*mm, bottomMargin=15*mm, title=title, author='Combined Bearing Source')
    story = [Paragraph(title, styles['Title']), Paragraph(intro, styles['SmallBody']), Spacer(1, 5*mm)]
    data = [[Paragraph(str(c), styles['TableHeader']) for c in columns]] + [[Paragraph(str(v), styles['SmallBody']) for v in row] for row in rows]
    table = Table(data, repeatRows=1, hAlign='LEFT')
    table.setStyle(TableStyle([
        ('BACKGROUND',(0,0),(-1,0),NAVY),('TEXTCOLOR',(0,0),(-1,0),colors.white),('FONTNAME',(0,0),(-1,0),'Helvetica-Bold'),
        ('GRID',(0,0),(-1,-1),0.35,colors.HexColor('#CBD5E1')),('ROWBACKGROUNDS',(0,1),(-1,-1),[colors.white,colors.HexColor('#F8FAFC')]),
        ('VALIGN',(0,0),(-1,-1),'TOP'),('LEFTPADDING',(0,0),(-1,-1),4),('RIGHTPADDING',(0,0),(-1,-1),4),('TOPPADDING',(0,0),(-1,-1),4),('BOTTOMPADDING',(0,0),(-1,-1),4),
    ]))
    story += [table, Spacer(1,5*mm), Paragraph('Verification notes', styles['Heading2'])]
    for note in notes: story.append(Paragraph(f'- {note}', styles['SmallBody']))
    story += [Spacer(1,3*mm), Paragraph('Before ordering, confirm the current controlled drawing, suffix, mounting geometry, load case, lubrication, temperature and inspection scope.', styles['SmallBody'])]
    doc.build(story, onFirstPage=footer, onLaterPages=footer)

load_cols=['Model','d mm','D mm','C mm','H / range mm','Cr kN','C0r kN','Ca kN','C0a kN','Speed rpm','Mass kg']
screw=[['MR.961','30','62','20','37.5-39.5','39','65','-','-','900','0.52'],['MR.962','35','70.1','23','38.5-40.5','56','93','-','-','900','0.60'],['MR.963','40','77.7','23','40.7-42.7','58','101.5','-','-','800','0.82'],['MR.964','45','88.9','30','48.5-51','84','133','15','22','700','1.43'],['MR.965','50','101.9','28','46-48.5','91','153','18','22','700','1.70'],['MR.966','55','107.7','31','53.5-56.5','94','162','31','40','650','2.45'],['MR.967','60','123','33','61.5-64.5','132','242','31','40','500','3.50'],['MR.968','60','149','43','75.5-79','179','353','68','71','400','6.50']]
high=[['MR.146','30','62','20','43','39','65','10','14','900','0.60'],['MR.147','35','70.1','23','48','56','93','10','14','900','0.90'],['MR.148','40','77.7','23','50.5','58','101.5','14','22','800','1.05'],['MR.149','40','78.3','23','45','58','101.5','14','22','800','0.95'],['MR.150','45','88.9','30','61','84','133','14','22','700','1.70'],['MR.151','50','101.9','28','50.5','91','153','18','22','700','1.85'],['MR.142 / 4.0784','60','107.7','31','69','94','162','39','57','650','2.40'],['MR.152 / 4.078','55','108.55','31','58.5','94','162','39','57','650','2.80'],['MR.153','60','123','37','75.8','132','242','39','57','500','4.10'],['MR.154','60','149','43','89','179','353','83','131','400','6.80']]
make_pdf('mr96-screw-adjustable-combined-bearings.pdf','MR.961-MR.968 Screw-Adjustable Combined Bearings','Factory catalog dimensions and ratings. Axial adjustment uses a UNI 5929 / DIN 916 screw.',load_cols,screw,['DIN 620 P0 tolerance and clearance basis.','ISO 76 and ISO 281 load-rating basis.','Outer ring 16NiCr4; inner ring and rolling elements 100Cr6.'])
make_pdf('high-load-axial-support-combined-bearings.pdf','MR.142 / MR.146-MR.154 High-Load Axial-Support Bearings','High-load combined bearings with hardened axial support and washer adjustment.',load_cols,high,['Adapter washers: 0.3, 0.5 and 1.0 mm.','MR.142 cross-references 4.0784; MR.152 cross-references 4.078.','Confirm tapered or cylindrical outer-ring execution.'])
make_pdf('4-078-shim-adjustable-combined-bearings.pdf','4.078 / 4.0784 Shim-Adjustable Combined Bearings','Focused cross-reference for the two shim-adjusted high-load models.',load_cols,[high[6],high[7]],['4.078 = MR.152 / JD108.55-58.5-KZ / 400-0078.','4.0784 = MR.142 / JD107.7-69-KZ.'])

ht=[[f'4.{n:03d}HT','High-temperature execution','Confirm base dimensions, grease, seals and rated temperature'] for n in range(54,64)]
pr=[[f'PR4.{n}','Precision eccentric-adjustable','Confirm precision OD, eccentric range and current drawing'] for n in range(454,464)]
make_pdf('high-temperature-combined-bearing-series.pdf','4.054HT-4.063HT High-Temperature Combined Bearings','Series identification sheet. HT capability depends on the quoted grease, seals and execution.',['Model','Execution','Verification'],ht,['Published family range: 4.054HT-4.063HT.','Do not infer temperature capability from the base model alone.'])
make_pdf('pr4-precision-adjustable-series.pdf','PR4.454-PR4.463 Precision Adjustable Combined Bearings','Precision eccentric-adjustable series identification and RFQ sheet.',['Model','Execution','Verification'],pr,['Published family range: PR4.454-PR4.463.','Plate-mounted versions require the complete AP drawing.'])

matrix=[
 ['Standard 0 NbV','113.010.000','JDG62','10.5','4.054 / 4.454'],['Standard 1 NbV','113.011.000','JDG70','14.8','4.055 / 4.455'],
 ['Standard 2 NbV','113.012.000','JDG78','20.9','4.056 / 4.456'],['Standard 3 NbV','113.013.000','JDG89','28.6','4.058 / 4.458'],
 ['Standard 4 NbV','113.014.000','JDG108','36.0','4.061 / 4.461'],['Standard 5 NbV','113.015.000','JDG123','42.8','4.062 / 4.462'],
 ['Standard 6 NbV','113.016.000','JDG150','52.3','4.063 / 4.463'],['Standard 7 NbV','113.017.000','Replacement profile','65.2','4.064 / 4.464'],
 ['Standard 8 NbV','113.018.000','Replacement profile','78.8','4.085 / PR4.085'],
]
make_pdf('combined-bearing-nbv-profile-matrix.pdf','Combined Bearing / Standard NbV 0-8 Matching Matrix','Bidirectional preliminary matching table for replacement bearings and U-profiles.',['Profile','Article number','Replacement reference','Mass kg/m','Matched bearing class'],matrix,['Confirm actual profile cross-section and bearing clearance.','4.059 and 4.060 are commonly associated with I-profile families rather than Standard U-profile NbV.','Legacy JDG152 remains a separate heavy profile and is not relabeled as Standard 7.'])

inspection = [
 ['Identification','Model, suffix, customer PO and batch/lot','Visual / document review','Marking and order specification agree',''],
 ['Envelope dimensions','d, D, B/C, H, T, S and mounting interfaces','Caliper, micrometer, height/length instrument','Controlled drawing tolerance',''],
 ['Running surfaces','Outer ring, axial roller and mating faces','Visual and optical inspection','No unapproved damage, corrosion or edge defects',''],
 ['Adjustment','Eccentric range, screw adjustment or shim stack','Dial indicator / agreed fixture','Controlled drawing or approved sample',''],
 ['Rotation','Smoothness, abnormal noise and interference','Manual / agreed rotation test','No binding or abnormal noise',''],
 ['Material / hardness','Specified rings, stud and axial support','Certificate and hardness test when ordered','Purchase specification',''],
 ['Lubrication / seals','Grease, seal execution and relubrication route','Visual / specification review','Approved order specification',''],
 ['Packing','Rust protection, labels, quantity and export packing','Visual / count','Approved packing instruction',''],
]
make_pdf('combined-bearing-inspection-checklist.pdf','Combined Bearing Inspection Checklist','Blank inspection-scope worksheet for quotation, first-article review and batch release. This is a template, not a batch inspection certificate.',['Inspection item','Characteristic','Suggested method','Acceptance basis','Result / report ID'],inspection,['Record the instrument ID, calibration status, sample size, inspector, date and measured values in the order-specific report.','State material, hardness, runout, load-test or first-article requirements before quotation.','A completed batch report must identify the actual product, lot and controlled drawing revision.'])
print('Generated 7 PDF references in', OUT)
