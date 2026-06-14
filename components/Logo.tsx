import Image from 'next/image';
import Link from 'next/link';

export function Logo() {
  return <Link href="/" className="group flex items-center gap-3" aria-label="MA Motors home"><span className="relative h-12 w-20 overflow-hidden"><Image src="/images/brand/ma-motors-logo.png" alt="MA Motors" fill sizes="80px" className="object-contain" priority /></span><span className="leading-none"><span className="block text-sm font-black uppercase tracking-[0.28em] text-white">MA Motors</span><span className="mt-1 block text-[10px] uppercase tracking-[0.32em] text-gold/80">Prestige Cars</span></span></Link>;
}
