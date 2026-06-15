'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Footer } from '@/components/Footer';
import { Navbar } from '@/components/Navbar';
import { PageTransition } from '@/components/PageTransition';
import { WhatsappButton } from '@/components/WhatsappButton';

export function AppChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const isStudio = pathname.startsWith('/studio');

  useEffect(() => {
    if (isStudio) {
      setLoading(false);
      return;
    }

    setLoading(true);
    const timer = window.setTimeout(() => setLoading(false), 720);
    return () => window.clearTimeout(timer);
  }, [pathname, isStudio]);

  if (isStudio) {
    return <>{children}</>;
  }

  return (
    <>
      <PageTransition active={loading} />
      <Navbar />
      <div className={loading ? 'page-shell page-shell-loading' : 'page-shell'}>
        {children}
      </div>
      <Footer />
      <WhatsappButton />
    </>
  );
}
