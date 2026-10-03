import Image from 'next/image';
import Link from 'next/link';
import type { CSSProperties } from 'react';
import { dragonColors } from '@/lib/dragons';
import { Icon } from './Icon';

export function DragonColorGallery({ mode = 'home' }: { mode?: 'home' | 'guide' }) {
  return <div className={`dragon-color-grid dragon-color-grid-${mode}`}>
    {dragonColors.map((color, index) => {
      const style = { '--dragon-swatch': color.swatch, '--dragon-tint': color.tint } as CSSProperties;
      const content = <>
        <div className="dragon-color-image">
          <Image src={`/images/dragons/${color.id}.webp`} alt={`Original ${color.name.toLowerCase()} dragon illustration on a mountain ledge`} width={960} height={640} sizes={mode === 'guide' ? '(max-width: 560px) 45vw, (max-width: 800px) 46vw, 360px' : '(max-width: 560px) 45vw, (max-width: 800px) 46vw, (max-width: 1336px) 30vw, 400px'} />
          <span className="dragon-color-number" aria-hidden="true">0{index + 1}</span>
        </div>
        <div className="dragon-color-copy">
          <h3><span className="dragon-color-swatch" aria-hidden="true" />{color.name} dragon</h3>
          <p>{color.caption}</p>
          {mode === 'home' && <span className="dragon-color-more">View color reference <Icon name="arrow" /></span>}
        </div>
      </>;
      return mode === 'home'
        ? <Link href={`/dragon-results/#dragon-color-${color.id}`} className="dragon-color-card" style={style} key={color.id}>{content}</Link>
        : <article className="dragon-color-card" id={`dragon-color-${color.id}`} style={style} key={color.id}>{content}</article>;
    })}
  </div>;
}
