import { MessageCircle } from 'lucide-react';
import { site } from '@/lib/site';
export function WhatsappButton() { return <a href={`https://wa.me/${site.whatsapp}`} target="_blank" rel="noreferrer" className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gold text-black shadow-gold transition hover:-translate-y-1" aria-label="Message MA Motors on WhatsApp"><MessageCircle size={25} /></a>; }
