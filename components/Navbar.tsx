'use client';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Logo } from './Logo';
import { site } from '@/lib/site';
const links = [['Home','/'],['Stock','/stock'],['Sell Your Car','/sell-your-car'],['Finance','/finance'],['About','/about'],['Reviews','/reviews'],['Contact','/contact']];
export function Navbar() {
  const [open, setOpen] = useState(false); const pathname = usePathname();
  return <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-black/78 backdrop-blur-xl"><div className="container-shell flex h-20 items-center justify-between"><Logo /><nav className="hidden items-center gap-7 lg:flex">{links.map(([label, href]) => { const active = href === '/' ? pathname === href : pathname.startsWith(href); return <Link key={href} href={href} className={`text-sm font-semibold uppercase tracking-[0.16em] transition ${active ? 'text-gold' : 'text-white/74 hover:text-white'}`}>{label}</Link>; })}</nav><a href={`tel:${site.phone.replaceAll(' ', '')}`} className="hidden rounded-sm border border-gold/40 px-4 py-3 text-sm font-bold text-gold transition hover:border-gold hover:bg-gold hover:text-black md:inline-flex">{site.phone}</a><button className="inline-flex h-11 w-11 items-center justify-center rounded-sm border border-white/15 text-white lg:hidden" onClick={() => setOpen((value) => !value)} aria-label="Toggle navigation">{open ? <X size={22} /> : <Menu size={22} />}</button></div>{open && <div className="border-t border-white/10 bg-black lg:hidden"><nav className="container-shell grid gap-1 py-4">{links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)} className="rounded-sm px-2 py-3 text-sm font-bold uppercase tracking-[0.18em] text-white/82 hover:bg-white/[.08] hover:text-gold">{label}</Link>)}</nav></div>}</header>;
}

