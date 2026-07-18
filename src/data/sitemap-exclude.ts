const STATIC_EXCLUDES = new Set(['/401/', '/404/', '/thank-you/']);
const PREFIX_EXCLUDES: string[] = [];
export function isSitemapExcluded(pathname:string):boolean {
  const normalized=pathname.endsWith('/')?pathname:`${pathname}/`;
  return STATIC_EXCLUDES.has(normalized) || PREFIX_EXCLUDES.some(prefix=>normalized.startsWith(prefix));
}
export const sitemapExcludeStats={static:STATIC_EXCLUDES.size,prefix:PREFIX_EXCLUDES.length,total:STATIC_EXCLUDES.size+PREFIX_EXCLUDES.length};
