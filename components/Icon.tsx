import type { SVGProps } from 'react';

type IconName = 'arrow' | 'external' | 'book' | 'clock' | 'compass' | 'spark' | 'mail' | 'shield' | 'chevron';
const paths: Record<IconName, string[]> = {
  arrow: ['M4 12h15', 'm13 5 7 7-7 7'],
  external: ['M14 3h7v7', 'M21 3 10 14', 'M10 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5'],
  book: ['M12 7v14', 'M3 3h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5v17h-5a4 4 0 0 0-4 1 4 4 0 0 0-4-1H3z'],
  clock: ['M12 8v5l3 2'],
  compass: ['m16 8-3 5-5 3 3-5z'],
  spark: ['m12 3 2.4 6.6L21 12l-6.6 2.4L12 21l-2.4-6.6L3 12l6.6-2.4z'],
  mail: ['M3 5h18v14H3z', 'm3 5 9 8 9-8'],
  shield: ['M12 3 3 7v5c0 5 9 9 9 9s9-4 9-9V7z', 'm8 12 3 3 5-6'],
  chevron: ['m9 5 7 7-7 7'],
};
export function Icon({ name, ...props }: SVGProps<SVGSVGElement> & { name: IconName }) {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    {(name === 'clock' || name === 'compass') && <circle cx="12" cy="12" r="9" />}
    {paths[name].map((d, i) => <path key={i} d={d} />)}
  </svg>;
}
