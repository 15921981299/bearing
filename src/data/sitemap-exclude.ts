const STATIC_EXCLUDES = new Set(['/401/', '/404/', '/thank-you/']);
export function isSitemapExcluded(pathname:string):boolean {
  const normalized=pathname.endsWith('/')?pathname:`${pathname}/`;
  return STATIC_EXCLUDES.has(normalized);
}
export const sitemapExcludeStats={static:STATIC_EXCLUDES.size,total:STATIC_EXCLUDES.size};
