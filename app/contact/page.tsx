import type { Metadata } from 'next';
import { Mail, MapPin, Phone } from 'lucide-react';
import { ContactForm } from '@/components/ContactForm';
import { PageHeader } from '@/components/PageHeader';
import { site } from '@/lib/site';

export const metadata: Metadata = { title: 'Contact MA Motors Slough', description: 'Contact MA Motors in Slough by phone, email or enquiry form. View opening hours and showroom location.' };

export default function ContactPage() {
  return <main><PageHeader eyebrow="Contact" title="Speak to MA Motors" copy="Arrange a viewing, request a valuation, discuss finance or ask a question about our current stock in Slough." /><section className="section-pad bg-night"><div className="container-shell grid gap-10 lg:grid-cols-[.9fr_1.1fr]"><div className="space-y-5"><div className="luxury-panel rounded-sm p-6"><Phone className="text-gold" /><h2 className="mt-4 text-xl font-black">Phone</h2><a href="tel:07886438044" className="mt-2 block text-white/72 transition hover:text-gold">{site.phone}</a></div><div className="luxury-panel rounded-sm p-6"><Mail className="text-gold" /><h2 className="mt-4 text-xl font-black">Email</h2><a href={`mailto:${site.email}`} className="mt-2 block text-white/72 transition hover:text-gold">{site.email}</a></div><div className="luxury-panel rounded-sm p-6"><MapPin className="text-gold" /><h2 className="mt-4 text-xl font-black">Opening hours</h2><p className="mt-2 text-sm leading-7 text-white/62">{site.address}</p><div className="mt-4 grid gap-2 text-sm text-white/66">{site.hours.map(([day, hours]) => <p key={day} className="flex justify-between gap-4"><span>{day}</span><span>{hours}</span></p>)}</div></div></div><ContactForm /></div><div className="container-shell mt-10"><div className="overflow-hidden rounded-sm border border-white/10 bg-charcoal"><iframe title="MA Motors Google Maps" src="https://www.google.com/maps?q=1%20Sharney%20Avenue%20Slough%20SL3%208EB&output=embed" className="h-[360px] w-full border-0 grayscale" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div></div></section></main>;
}
