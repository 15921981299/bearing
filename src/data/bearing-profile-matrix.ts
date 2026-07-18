export type BearingProfileMatch = {
  profile: string;
  profileSlug: string;
  articleNumber: string;
  replacementReference: string;
  mass: string;
  matchedBearings: { model: string; slug: string }[];
  note: string;
};

export const bearingProfileMatrix: BearingProfileMatch[] = [
  {profile:'Standard 0 NbV',profileSlug:'standard-0-nbv-jdg62',articleNumber:'113.010.000',replacementReference:'JDG62',mass:'10.5 kg/m',matchedBearings:[{model:'4.054',slug:'winkel-4-054'},{model:'4.454',slug:'winkel-4-454'}],note:'Also used with 4.054HT and related 2.054 / KB references after drawing verification.'},
  {profile:'Standard 1 NbV',profileSlug:'standard-1-nbv-jdg70',articleNumber:'113.011.000',replacementReference:'JDG70',mass:'14.8 kg/m',matchedBearings:[{model:'4.055',slug:'winkel-4-055'},{model:'4.455',slug:'winkel-4-455'}],note:'Matched to the 70 mm combined-bearing class.'},
  {profile:'Standard 2 NbV',profileSlug:'standard-2-nbv-jdg78',articleNumber:'113.012.000',replacementReference:'JDG78',mass:'20.9 kg/m',matchedBearings:[{model:'4.056',slug:'winkel-4-056'},{model:'4.456',slug:'winkel-4-456'}],note:'Verify low-profile 4.057 variants separately.'},
  {profile:'Standard 3 NbV',profileSlug:'standard-3-nbv-jdg89',articleNumber:'113.013.000',replacementReference:'JDG89',mass:'28.6 kg/m',matchedBearings:[{model:'4.058',slug:'winkel-4-058'},{model:'4.458',slug:'winkel-4-458'}],note:'Common U-profile match for the 88.4 / 88.9 mm bearing class.'},
  {profile:'Standard 4 NbV',profileSlug:'standard-4-nbv-jdg108',articleNumber:'113.014.000',replacementReference:'JDG108',mass:'36.0 kg/m',matchedBearings:[{model:'4.061',slug:'winkel-4-061'},{model:'4.461',slug:'winkel-4-461'}],note:'Current official profile weight differs slightly from some legacy factory tables.'},
  {profile:'Standard 5 NbV',profileSlug:'standard-5-nbv-jdg123',articleNumber:'113.015.000',replacementReference:'JDG123',mass:'42.8 kg/m',matchedBearings:[{model:'4.062',slug:'winkel-4-062'},{model:'4.462',slug:'winkel-4-462'}],note:'Matched to the 123 mm combined-bearing class.'},
  {profile:'Standard 6 NbV',profileSlug:'standard-6-nbv-jdg150',articleNumber:'113.016.000',replacementReference:'JDG150',mass:'52.3 kg/m',matchedBearings:[{model:'4.063',slug:'winkel-4-063'},{model:'4.463',slug:'winkel-4-463'}],note:'Matched to the 149 mm combined-bearing class.'},
  {profile:'Standard 7 NbV',profileSlug:'standard-7-nbv',articleNumber:'113.017.000',replacementReference:'Standard 7 replacement profile',mass:'65.2 kg/m',matchedBearings:[{model:'4.064',slug:'winkel-4-064'}],note:'4.464 and PR4.064 / PR4.464 variants require execution-specific verification.'},
  {profile:'Standard 8 NbV',profileSlug:'standard-8-nbv',articleNumber:'113.018.000',replacementReference:'Standard 8 replacement profile',mass:'78.8 kg/m',matchedBearings:[{model:'4.085',slug:'winkel-4-085'}],note:'Also associated with PR4.085 variants; verify AP90-Q mounting geometry.'},
];

export const profileMatchByBearingSlug = Object.fromEntries(
  bearingProfileMatrix.flatMap((profile) => profile.matchedBearings.map((bearing) => [bearing.slug, profile])),
);
