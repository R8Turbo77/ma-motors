import type { LucideIcon } from 'lucide-react';
import { BadgePoundSterling, CarFront, Headphones, ShieldCheck, Sparkles } from 'lucide-react';
import Link from 'next/link';
import { Hero } from '@/components/Hero';
import { MotionDiv } from '@/components/Motion';
import { SectionTitle } from '@/components/SectionTitle';
import { VehicleCard } from '@/components/VehicleCard';
import { getFeaturedVehicles } from '@/lib/vehicle-data';

const values: [string, string, LucideIcon][] = [
  ['Prepared properly', 'Each vehicle is inspected, detailed and presented to a showroom standard.', ShieldCheck],
  ['Fair market pricing', 'Clear pricing and sensible part-exchange valuations from day one.', BadgePoundSterling],
  ['Service-led buying', 'A calm, helpful experience from first enquiry through handover.', Headphones]
];

export default async function HomePage() {
  const featuredVehicles = await getFeaturedVehicles();
  return <main><Hero /><section className="border-y border-white/10 bg-black py-5"><div className="container-shell grid gap-4 text-center text-xs font-black uppercase tracking-[0.22em] text-white/54 sm:grid-cols-3"><span>Prestige used cars</span><span className="text-gold">Finance available</span><span>Part exchange welcome</span></div></section><section className="section-pad bg-night"><div className="container-shell"><SectionTitle eyebrow="Latest arrivals" title="Curated stock, prepared for confident ownership" copy="Explore a changing selection of premium vehicles chosen for condition, specification and provenance." /><div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">{featuredVehicles.slice(0, 3).map((vehicle) => <VehicleCard key={vehicle.slug} vehicle={vehicle} />)}</div><div className="mt-9 text-center"><Link href="/stock" className="btn-secondary">View all stock</Link></div></div></section><section className="section-pad bg-[#0a0a0a]"><div className="container-shell grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center"><SectionTitle eyebrow="Why MA Motors" title="Luxury standards without the pressure" copy="We combine careful sourcing, transparent valuations and responsive aftersales support so every customer can buy or sell with confidence." /><div className="grid gap-4 sm:grid-cols-3">{values.map(([title, copy, Icon], index) => <MotionDiv key={title} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.08 }} className="luxury-panel rounded-sm p-5"><Icon className="text-gold" size={28} /><h3 className="mt-5 text-lg font-black text-white">{title}</h3><p className="mt-3 text-sm leading-6 text-white/58">{copy}</p></MotionDiv>)}</div></div></section><section className="section-pad bg-black"><div className="container-shell overflow-hidden rounded-sm border border-gold/25 bg-[linear-gradient(135deg,rgba(227,27,47,.18),rgba(255,255,255,.045),rgba(0,0,0,.65))] p-8 md:p-12"><div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center"><div><p className="text-xs font-black uppercase tracking-[0.3em] text-gold"><Sparkles className="mr-2 inline" size={16} />Ready to change vehicle?</p><h2 className="mt-4 font-display text-3xl font-bold text-white md:text-5xl">Get a strong valuation on your current car.</h2><p className="mt-4 max-w-2xl text-white/64">Send us the registration and mileage. We will review the specification, condition and market demand before making a clear offer.</p></div><Link href="/sell-your-car" className="btn-primary"><CarFront size={20} />Sell Your Car</Link></div></div></section></main>;
}
