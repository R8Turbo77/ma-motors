import { ArrowRight, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { MotionDiv } from './Motion';

export function Hero() {
  return <section className="relative flex min-h-[92vh] items-end overflow-hidden bg-black pt-28"><Image src="/images/stock/audi-a3-black-front.jpg" alt="MA Motors premium stock" fill priority sizes="100vw" className="object-cover opacity-58" /><div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.90),rgba(0,0,0,.42),rgba(0,0,0,.74)),linear-gradient(0deg,#050505_0%,rgba(5,5,5,.18)_42%,rgba(5,5,5,.62)_100%)]" /><div className="container-shell relative pb-16 md:pb-24"><MotionDiv initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }} className="max-w-4xl"><div className="mb-6 inline-flex items-center gap-3 rounded-sm border border-gold/35 bg-black/45 px-4 py-3 text-xs font-black uppercase tracking-[0.26em] text-gold"><ShieldCheck size={18} /> MA Motors</div><h1 className="font-display text-5xl font-bold leading-[1.02] text-white md:text-7xl">Premium Used Cars Bought &amp; Sold</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-white/72 md:text-2xl">Quality Vehicles. Fair Prices. Exceptional Service.</p><div className="mt-9 flex flex-col gap-3 sm:flex-row"><Link href="/stock" className="btn-primary"><ArrowRight size={19} />View Stock</Link><Link href="/sell-your-car" className="btn-secondary">Sell Your Car</Link></div></MotionDiv></div></section>;
}
