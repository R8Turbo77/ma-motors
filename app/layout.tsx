import type { Metadata } from 'next';
import './globals.css';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { WhatsappButton } from '@/components/WhatsappButton';
export const metadata: Metadata = { title: { default: 'MA Motors | Premium Used Cars Bought & Sold', template: '%s | MA Motors' }, description: 'MA Motors is a premium used car dealership buying and selling quality prestige vehicles with fair prices and exceptional service.', keywords: ['MA Motors','premium used cars','prestige cars','sell my car','car finance','Birmingham used cars'], openGraph: { title: 'MA Motors | Premium Used Cars Bought & Sold', description: 'Quality vehicles, fair prices and exceptional service.', type: 'website', locale: 'en_GB' } };
export default function RootLayout({ children }: { children: React.ReactNode }) { return <html lang="en"><body><Navbar />{children}<Footer /><WhatsappButton /></body></html>; }
