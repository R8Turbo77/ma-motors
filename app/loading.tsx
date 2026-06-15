import Image from 'next/image';

export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black">
      <div className="flex flex-col items-center">
        <div className="relative h-24 w-36 overflow-hidden rounded-sm border border-white/10 bg-white/[.03] shadow-gold">
          <Image src="/images/brand/ma-motors-logo.png" alt="MA Motors" fill priority sizes="144px" className="object-cover" />
        </div>
        <div className="mt-7 h-px w-64 overflow-hidden bg-white/10">
          <div className="loading-line h-full bg-gold" />
        </div>
      </div>
    </main>
  );
}
