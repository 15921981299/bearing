export type NadellaSeries = {
  slug: string;
  code: string;
  name: string;
  design: string;
  mounting: string;
  rollingElements: string;
  seals: string;
  applications: string[];
  models: string[];
};

export const nadellaSeries: NadellaSeries[] = [
  { slug:'gc-gcr-cam-followers', code:'GC / GCR', name:'Stud Type Needle Roller Cam Followers', design:'heavy-section convex outer ring; GCR versions use an eccentric collar for position adjustment', mounting:'threaded stud with nut and lubrication provisions', rollingElements:'full-complement needle rollers', seals:'open, EE plastic seals or EEM metal shields on applicable sizes', applications:['cam mechanisms','automation tracks','packaging machinery','material handling'], models:['GC 10','GC 11','GC 12','GC 13','GC 14','GC 15','GC 16','GC 19','GC 22','GC 24','GC 26','GC 28','GC 30','GC 32','GC 35','GC 40','GC 47','GC 52','GC 62','GC 72','GC 80','GC 85','GC 90','GCR 16','GCR 19','GCR 22','GCR 24','GCR 26','GCR 28','GCR 30','GCR 32','GCR 35','GCR 40','GCR 47','GCR 52','GCR 62','GCR 72','GCR 80','GCR 85','GCR 90'] },
  { slug:'gcu-gcur-roller-followers', code:'GCU / GCUR', name:'Stud Type Full-Complement Roller Followers', design:'convex heavy outer ring; GCUR versions add an eccentric adjustment collar', mounting:'threaded stud mounting for high radial-load tracks', rollingElements:'full-complement cylindrical rollers', seals:'MM metal-sealed configurations', applications:['heavy material handling','lifting equipment','transfer systems','industrial guides'], models:['GCU 35','GCU 40','GCU 47','GCU 52','GCU 62','GCU 72','GCU 80','GCU 85','GCU 90','GCU 100','GCU 110','GCU 120','GCU 130','GCUR 35','GCUR 40','GCUR 47','GCUR 52','GCUR 62','GCUR 72','GCUR 80','GCUR 85','GCUR 90','GCUR 100','GCUR 110','GCUR 120','GCUR 130'] },
  { slug:'fg-yoke-rollers', code:'FG', name:'Yoke Type Needle Roller Cam Followers', design:'non-separable inner and outer rings with convex outer running surface', mounting:'shaft-mounted yoke roller retained through the inner ring', rollingElements:'full-complement needle rollers', seals:'open, EE plastic seals or EEM metal shields; FGL identifies cylindrical outer-ring variants', applications:['guide rails','cam tracks','conveyor equipment','automatic machinery'], models:['FG 5 16','FG 6 19','FG 8 24','FG 8 24 15','FG 10 30','FG 12 32','FG 15 35','FG 17 40','FG 20 47','FG 25 52','FG 30 62','FG 35 72','FG 40 80','FG 45 85','FG 50 90','FG 55 100','FG 60 110','FG 65 120','FG 70 125','FG 75 130','FG 80 140','FG 85 150','FG 90 160','FG 95 170','FG 100 180','FG 110 200','FG 120 215','FG 130 230','FG 140 250','FG 150 270'] },
  { slug:'fgu-yoke-roller-followers', code:'FGU', name:'Yoke Type Full-Complement Roller Followers', design:'light or heavy outer-ring series for different track-load requirements', mounting:'shaft-mounted through the inner ring with lateral support', rollingElements:'full-complement cylindrical rollers', seals:'MM metal-sealed configurations; FGUL denotes cylindrical outer-ring variants', applications:['steel processing','heavy conveyors','lifting systems','large guide tracks'], models:['FGU 15 35','FGU 17 40','FGU 20 47','FGU 25 52','FGU 30 62','FGU 35 72','FGU 40 80','FGU 45 85','FGU 50 90','FGU 55 100','FGU 60 110','FGU 65 120','FGU 70 125','FGU 75 130','FGU 80 140','FGU 85 150','FGU 90 160','FGU 95 170','FGU 100 180','FGU 110 200','FGU 120 215','FGU 130 230','FGU 140 250','FGU 150 270'] },
  { slug:'pk-pkr-guide-rollers', code:'PK / PKR', name:'Stud Type Guide Rollers', design:'sealed guide roller; PKR provides eccentric adjustment', mounting:'threaded stud with self-locking washer and nut', rollingElements:'precision rolling bearing assembly', seals:'standard sealed construction; special material options require confirmation', applications:['linear guides','warehouse equipment','handling systems','machine tracks'], models:['PK 52C','PK 62C','PK 72C','PK 90C','PK 110C','PKR 52C','PKR 62C','PKR 72C','PKR 90C','PKR 110C'] },
  { slug:'fk-guide-wheels', code:'FK', name:'Bore Mounted Guide Wheels', design:'guide wheel with side flange and cylindrical bore', mounting:'shaft mounting through the precision bore', rollingElements:'sealed rolling bearing assembly', seals:'standard sealed construction', applications:['linear guide systems','track guidance','automation','handling equipment'], models:['FK 52C','FK 62C','FK 72C','FK 90C','FK 110C'] },
  { slug:'fp-small-cam-followers', code:'FP', name:'Small Precision Cam Followers', design:'compact convex outer ring for high-precision cam motions', mounting:'small bore-mounted follower', rollingElements:'full-complement needle rollers', seals:'open compact construction', applications:['automatic machines','indexing equipment','positioners','compact cam mechanisms'], models:['FP 3 10','FP 3 11','FP 4 12','FP 4 13','FP 4 14','FP 4 15'] },
  { slug:'pfl-heavy-stud-cam-followers', code:'PFL', name:'Cam Followers with Heavy Stud', design:'compact follower with enlarged threaded stud', mounting:'heavy threaded stud mounting', rollingElements:'needle roller follower assembly', seals:'confirm lubrication and sealing requirement by model', applications:['compact automation','cam drives','indexing machinery','industrial mechanisms'], models:['PFL 10','PFL 11','PFL 12','PFL 13','PFL 14','PFL 15','PFL 16','PFL 19','PFL 22'] },
  { slug:'pfp-smooth-stud-cam-followers', code:'PFP', name:'Cam Followers with Smooth Stud', design:'convex outer ring with smooth precision stud', mounting:'smooth stud retained by the machine design', rollingElements:'needle roller follower assembly', seals:'lubrication arrangement must be confirmed', applications:['special machines','cam systems','automation fixtures','custom mechanisms'], models:['PFP 26','PFP 30','PFP 32','PFP 35','PFP 40','PFP 47','PFP 52','PFP 62','PFP 72'] },
  { slug:'pfdl-double-cam-followers', code:'PFDL', name:'Double Cam Followers', design:'two rollers arranged on one stud for double-contact cam movement', mounting:'threaded central stud', rollingElements:'dual follower roller arrangement', seals:'application-specific lubrication review', applications:['double-contact cams','positive cam drives','indexing systems','special automation'], models:['PFDL 24.10','PFDL 28.10','PFDL 32.10','PFDL 32.14'] },
];

export const nadellaModelPages = nadellaSeries.flatMap(series => series.models.map(model => ({
  series,
  model,
  slug: model.toLowerCase().replace(/\./g,'-').replace(/\s+/g,'-'),
})));

export function modelNumber(model: string) {
  const values = model.match(/\d+(?:\.\d+)?/g) ?? [];
  return values.join(' × ');
}
