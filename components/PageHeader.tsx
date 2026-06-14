import { MotionDiv } from './Motion';
type PageHeaderProps = { eyebrow: string; title: string; copy: string; };
export function PageHeader({ eyebrow, title, copy }: PageHeaderProps) {
  return <section className="relative overflow-hidden border-b border-white/10 bg-black pt-32"><div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(212,175,55,.18),transparent_34%),linear-gradient(180deg,rgba(255,255,255,.06),transparent)]" /><div className="container-shell relative py-16 md:py-24"><MotionDiv initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}><p className="text-xs font-black uppercase tracking-[0.32em] text-gold">{eyebrow}</p><h1 className="mt-5 max-w-4xl font-display text-4xl font-bold leading-tight text-white md:text-6xl">{title}</h1><p className="mt-5 max-w-2xl text-base leading-8 text-white/68 md:text-lg">{copy}</p></MotionDiv></div></section>;
}
