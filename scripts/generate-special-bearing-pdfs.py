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

def make_sectioned_pdf(filename, title, intro, sections, notes):
    doc = SimpleDocTemplate(str(OUT / filename), pagesize=landscape(A4), leftMargin=12*mm, rightMargin=12*mm, topMargin=12*mm, bottomMargin=15*mm, title=title, author='Combined Bearing Source')
    story = [Paragraph(title, styles['Title']), Paragraph(intro, styles['SmallBody']), Spacer(1, 4*mm)]
    for index, (heading, columns, rows) in enumerate(sections):
        if index: story.append(PageBreak())
        story += [Paragraph(heading, styles['Heading2']), Spacer(1, 2*mm)]
        data = [[Paragraph(str(c), styles['TableHeader']) for c in columns]] + [[Paragraph(str(v), styles['SmallBody']) for v in row] for row in rows]
        table = Table(data, repeatRows=1, hAlign='LEFT')
        table.setStyle(TableStyle([
            ('BACKGROUND',(0,0),(-1,0),NAVY),('GRID',(0,0),(-1,-1),0.35,colors.HexColor('#CBD5E1')),
            ('ROWBACKGROUNDS',(0,1),(-1,-1),[colors.white,colors.HexColor('#F8FAFC')]),('VALIGN',(0,0),(-1,-1),'TOP'),
            ('LEFTPADDING',(0,0),(-1,-1),3),('RIGHTPADDING',(0,0),(-1,-1),3),('TOPPADDING',(0,0),(-1,-1),3),('BOTTOMPADDING',(0,0),(-1,-1),3),
        ]))
        story.append(table)
    story += [Spacer(1,4*mm), Paragraph('Verification notes', styles['Heading2'])]
    for note in notes: story.append(Paragraph(f'- {note}', styles['SmallBody']))
    story.append(Paragraph('Confirm the current controlled drawing, suffix, mounting geometry, load case, lubrication, temperature and inspection scope before ordering.', styles['SmallBody']))
    doc.build(story, onFirstPage=footer, onLaterPages=footer)

load_cols=['Model','d mm','D mm','C mm','H / range mm','Cr kN','C0r kN','Ca kN','C0a kN','Speed rpm','Mass kg']
screw_geometry=[
['MR.961','30','62','20','37.5','39.5','30.5','32.5','7','50','-','Dia 26','42','20','3','500','500','2.5','-','M10'],['MR.962','35','70.1','23','38.5','40.5','31.5','33.5','7','57','-','Dia 30','48','20','3','500','500','3','M6x1','M10'],['MR.963','40','77.7','23','40.7','42.7','31.7','33.7','9','61','-','Dia 30','54','20','3','700','700','4','M6x1','M10'],['MR.964','45','88.9','30','48.5','51','36.5','39','12','68','21','Dia 33','59','20','4','700','700','4','M6x1','M10'],['MR.965','50','101.9','28','46','48.5','33','35.5','13','77','21','Dia 33','67','20','4','850','700','2.5','M6x1','M10'],['MR.966','55','107.7','31','53.5','56.5','41.5','44.5','12','82','30','Dia 42','71','20','4','1000','700','6','M6x1','M16'],['MR.967','60','123','33','61.5','64.5','49.5','52','12','94','30','Dia 42','78','15','4','1000','1000','6.5','M6x1','M16'],['MR.968','60','149','43','75.5','79','58.5','62','17','116','45','Dia 63','103','15','4','1000','1000','6.8','M6x1','M10']]
screw_ratings=[['MR.961','39','65','-','-','900','0.52'],['MR.962','56','93','-','-','900','0.60'],['MR.963','58','101.5','-','-','800','0.82'],['MR.964','84','133','15','22','700','1.43'],['MR.965','91','153','18','22','700','1.70'],['MR.966','94','162','31','40','650','2.45'],['MR.967','132','242','31','40','500','3.50'],['MR.968','179','353','68','71','400','6.50']]
high_geometry=[['MR.146','MR.146G2','30','62','20','43','33','10','50','16','42','5.5','20','3','500','500','40','25','22'],['MR.147','MR.146G2','35','70.1','23','48','40','8','57','16','48','6.5','20','4','500','500','40','25','22'],['MR.148','MR.148G2','40','77.7','23','50.5','39.5','11','61','21','54','7','20','4','700','700','52','33','28'],['MR.149','MR.148G2','40','78.3','23','45','34','11','61','21','54','7','20','4','850','700','52','33','28'],['MR.150','MR.148G2','45','88.9','30','61','48','13','69.5','21','59','7','20','3','850','700','52','33','28'],['MR.151','MR.151G2','50','101.9','28','50.5','37.5','13','77','21','67','7','20','3','850','700','52','33','28'],['MR.142 / 4.0784','MR.142G2','60','107.7','31','69','55','14','82','33','71','8','20','4','1000','700','74','48','38'],['MR.152 / 4.078','MR.142G2','55','108.55','31','58.5','44.5','14','82','33','71','8','20','4','1000','700','74','48','38'],['MR.153','MR.142G2','60','123','37','75.8','59.5','16.3','92','33','78','8','20','4','1000','1000','74','48','38'],['MR.154','MR.154G2','60','149','43','89','69','20','116','50','103','15','15','4','1000','1000','105','72','>55']]
high_ratings=[['MR.146','39','65','10','14','900','0.60'],['MR.147','56','93','10','14','900','0.90'],['MR.148','58','101.5','14','22','800','1.05'],['MR.149','58','101.5','14','22','800','0.95'],['MR.150','84','133','14','22','700','1.70'],['MR.151','91','153','18','22','700','1.85'],['MR.142 / 4.0784','94','162','39','57','650','2.40'],['MR.152 / 4.078','94','162','39','57','650','2.80'],['MR.153','132','242','39','57','500','4.10'],['MR.154','179','353','83','131','400','6.80']]
make_sectioned_pdf('mr96-screw-adjustable-combined-bearings.pdf','MR.961-MR.968 Screw-Adjustable Combined Bearings','Complete factory catalog geometry and ratings. Axial adjustment uses a UNI 5929 / DIN 916 screw.',[('Geometry',['Model','d','D','C','H min','H max','H1 min','H1 max','H2','D1','C1','D2','d1','Angle','r','R','R1','V','V1','Screw'],screw_geometry),('Load ratings, speed and mass',['Model','Cr kN','C0r kN','Ca kN','C0a kN','Speed rpm','Mass kg'],screw_ratings)],['DIN 620 P0 tolerance and clearance basis.','ISO 76 and ISO 281 load-rating basis.'])
make_sectioned_pdf('high-load-axial-support-combined-bearings.pdf','MR.142 / MR.146-MR.154 High-Load Axial-Support Bearings','Complete geometry and ratings for high-load combined bearings with hardened axial support.',[('Geometry',['Model','Support','d','D','C','H','H1','H2','D1','C1','d1','S','Angle','r','R','R1','D2','d2','H3'],high_geometry),('Load ratings, speed and mass',['Model','Cr kN','C0r kN','Ca kN','C0a kN','Speed rpm','Mass kg'],high_ratings)],['Adapter washers: 0.3, 0.5 and 1.0 mm.','MR.142 cross-references 4.0784; MR.152 cross-references 4.078.'])
make_sectioned_pdf('4-078-shim-adjustable-combined-bearings.pdf','4.078 / 4.0784 Shim-Adjustable Combined Bearings','Focused complete-geometry cross-reference for the two shim-adjusted high-load models.',[('Geometry',['Model','Support','d','D','C','H','H1','H2','D1','C1','d1','S','Angle','r','R','R1','D2','d2','H3'],[high_geometry[6],high_geometry[7]]),('Load ratings, speed and mass',['Model','Cr kN','C0r kN','Ca kN','C0a kN','Speed rpm','Mass kg'],[high_ratings[6],high_ratings[7]])],['4.078 = MR.152 / JD108.55-58.5-KZ / 400-0078.','4.0784 = MR.142 / JD107.7-69-KZ.'])

mr418=[['MR4180','70','170','51','109.7','84.7','49.7','98','11.2','4','195','360','85','130','Not published','Not published'],['MR4181','80','185','47','100','75','49.7','115','15','3','235','440','85','130','Not published','Not published'],['MR4182','110','220','60','115','90','70','150','13.5','5','365','720','105','230','Not published','Not published'],['MR4183','130','260','60','120','95','80','184','18.5','5','475','1000','165','280','Not published','Not published'],['MR4184','150','260','80','135','110','80','187','10','5','565','1300','165','280','Not published','Not published'],['MR4185','140','300','80','140','110','86','190','10','8','550','1275','195','335','Not published','Not published'],['MR4186','140','315','89','240','120','100','240','10','8','785','1690','225','390','Not published','Not published'],['MR4187','140','340','89','150','120','100','240','10','8','785','1690','225','390','Not published','Not published'],['MR4188','170','390','118','200','150','100','242','11','8','1075','2535','225','390','Not published','Not published']]
make_pdf('mr4180-mr4188-heavy-load-combined-bearings.pdf','MR4180-MR4188 Heavy-Load Adjustable Combined Bearings','Complete published heavy-load range for large steel-section guide systems.',['Model','d mm','D mm','B mm','H mm','H1 mm','C1 mm','d1 mm','S mm','r mm','Cr kN','C0r kN','Ca kN','C0a kN','Speed','Mass'],mr418,['Speed and mass are not published in the source table; confirm on the controlled quotation drawing.','DIN 620 P0 tolerance basis; ISO 76 and ISO 281 load-rating basis.'])

zrs=[['MR.706','-','30','52.5','19','33','27','6','43','16','40','2.5','10','3','500','500','26.5','46','6','6','800','0.39'],['MR.001','MR.021 / MR.430','30','62','20','37.5','30.5','7','50','20','42','2','20','3','500','500','-','39','65','14','21','900','0.52'],['MR.002','MR.022 / MR.1195','35','70.1','23','44','36','8','57','22','48','2','20','3','500','500','M6x1','56','93','17','25','900','0.78'],['MR.003','MR.023','40','77.7','23','48','36.5','11.5','61','24','54','2.5','20','3','700','700','M6x1','58','101.5','21','32','800','1.02'],['MR.005','MR.025','45','88.9','30','57','44','13','68','26','59','3','20','4','700','700','M6x1','84','133','28','43','700','1.61'],['MR.007','MR.027','60','107.7','31','69','55','14','82','34','71','3.5','20','4','1000','700','M6x1','94','162','46','84','650','2.69'],['MR.009','MR.029','60','123','37','72.3','56','16.3','92','40','80','4.5','20','4','1000','1000','M6x1','132','242','53','94','500','3.88'],['MR.010','MR.030','60','149','43','78.5','58.5','20','116','50','103','4.5','15','4','1000','1000','M6x1','179','353','83','131','400','6.65'],['MR.191','-','60','149','45','86','67','19','120','50','107','5','15','4','1000','1000','1/8 GAS','179','353','83','131','400','7.15']]
inclined=[['MR.031','MR.032','35','70.35','23','40.5','30.5','10','57','22','48','2.5','20','4','650','500','-','56','93','17','25','900','0.47'],['MR.004','MR.024','40','78.3','23','40.7','29','11.7','61','24','54','2.5','20','4','700','700','M6x1','58','101.5','21','32','800','0.88'],['MR.034','MR.035','45','89.25','30','50','37.5','12.5','68','26','59','3','20','4','850','700','M6x1','84','133','28','43','800','1.58'],['MR.006','MR.026','50','101.8','28','46','33','13','77','30','67','2.5','20','4','850','700','M6x1','91','153','32','50','700','1.72'],['MR.008','MR.028','55','108.55','31','53','38.5','14.5','82','34','71','3.5','20','4','1000','700','M6x1','94','162','39','66','700','2.22'],['MR.040','MR.041','60','123.5','33','57','42','15','94','33','78','2.5','15','4','1000','750','M6x1','134','211','39','57','500','3.20'],['MR.016','-','60','129.4','33','56.5','42.5','14','94','40','78','2.5','10','4','1000','750','M6x1','126','200','42','73','500','3.40'],['MR.011','-','80','165','36','61','46','15','130','60','113','2.5','10','4','1000','1000','M6x1','173','306','58','111','400','6.30']]
kres=[['KRES.062','30','62','20','37.5','39','30.5','32','7','50','20','42','2','20','3','500','500','39','65','14','21','900','0.52'],['KRES.070','35','70.1','23','44','45.5','36','37.5','8','57','20','48','2','20','3','500','500','56','93','14','21','900','0.78'],['KRES.078','40','77.7','23','48','50','36.5','38.5','11.5','61','24','53','2.5','20','3','700','700','58','101.5','21','32','800','1.02'],['KRES.089','45','88.9','30','57','59','44','46','13','68','26','59','3','20','4','700','700','84','133','28','43','700','1.61'],['KRES.101','50','101.9','28','46','48.5','33','35.5','13','77','26','67','2.5','20','4','850','700','91','153','30','35','700','1.75'],['KRES.108','60','107.7','31','69','71.5','55','57.5','14','82','34','71','3.5','20','4','1000','700','94','162','33','47','650','2.69'],['KRES.123','60','123','37','72.3','75.3','56','59','16.3','92','40','80','4.5','20','4','1000','700','132','242','53','94','500','3.88'],['KRES.149','60','149','43','78.5','81.5','58.5','61.5','20','116','50','103','4.5','15','4','1000','700','179','353','68','71','400','6.65']]
zrs_geometry=['Model','Alternate','d','D','C','H','H1','H2','D1','C1','d1','S','Angle','r','R','R1','V']
rating_headers=['Model','Cr kN','C0r kN','Ca kN','C0a kN','Speed rpm','Mass kg']
make_sectioned_pdf('zrs-steel-section-combined-bearings.pdf','Steel-Section ZRS Combined Bearings','Complete straight steel-section ZRS geometry and ratings.',[('Geometry',zrs_geometry,[r[:17] for r in zrs]),('Load ratings, speed and mass',rating_headers,[[r[0]]+r[17:] for r in zrs])],['MR.430 is the 62.5 mm OD request alternative; MR.1195 is a relubricable alternative.'])
make_sectioned_pdf('inclined-zrs-combined-bearings.pdf','Inclined-Section ZRS Combined Bearings','Complete inclined-profile ZRS geometry and ratings.',[('Geometry',zrs_geometry,[r[:17] for r in inclined]),('Load ratings, speed and mass',rating_headers,[[r[0]]+r[17:] for r in inclined])],['Confirm the steel-section angle and axial roller position before replacement.'])
kres_geometry=['Model','d','D','C','H min','H max','H1 min','H1 max','H2','D1','C1','d1','S','Angle','r','R','R1']
make_sectioned_pdf('kres-external-adjustable-combined-bearings.pdf','KRES Externally Adjustable Combined Bearings','Complete externally adjustable KRES geometry and ratings.',[('Geometry',kres_geometry,[r[:17] for r in kres]),('Load ratings, speed and mass',rating_headers,[[r[0]]+r[17:] for r in kres])],['KRES.101 uses a tapered outer profile. Confirm tool access and adjustment direction.'])
radial=[['2.0363','TR111','62 mm','62.5 mm','Confirm controlled drawing'],['2.054-2.062','Precision radial family','Model drawing','Model drawing','Confirm each model envelope'],['2.063','TR120 / MR0120','149 mm','74 mm','Confirm controlled drawing']]
make_pdf('radial-stud-combined-bearing-series.pdf','2-Series Radial Combined Bearings With Stud','Published identification references for radial combined bearings with stud.',['Model','Cross-reference','Published OD','Published height','Verification'],radial,['Load ratings and remaining mounting dimensions require the controlled drawing.'])

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
print('Generated 12 PDF references in', OUT)
