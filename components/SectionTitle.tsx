type SectionTitleProps = { eyebrow?: string; title: string; copy?: string; align?: 'left' | 'center'; };
export function SectionTitle({ eyebrow, title, copy, align = 'left' }: SectionTitleProps) {
  return <div className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>{eyebrow && <p className="text-xs font-black uppercase tracking-[0.3em] text-gold">{eyebrow}</p>}<h2 className="mt-4 font-display text-3xl font-bold leading-tight text-white md:text-5xl">{title}</h2>{copy && <p className="mt-4 text-base leading-8 text-white/64 md:text-lg">{copy}</p>}</div>;
}
