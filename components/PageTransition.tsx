'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';

export function PageTransition({ active }: { active: boolean }) {
  return (
    <AnimatePresence>
      {active && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(227,27,47,.18),transparent_38%),linear-gradient(135deg,rgba(255,255,255,.05),transparent_42%)]" />
          <motion.div
            className="relative flex flex-col items-center"
            initial={{ opacity: 0, y: 14, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative h-24 w-36 overflow-hidden rounded-sm border border-white/10 bg-white/[.03] shadow-gold">
              <Image src="/images/brand/ma-motors-logo.png" alt="MA Motors" fill priority sizes="144px" className="object-cover" />
            </div>
            <div className="mt-7 h-px w-64 overflow-hidden bg-white/10">
              <motion.div
                className="h-full bg-gold"
                initial={{ x: '-100%' }}
                animate={{ x: '100%' }}
                transition={{ duration: 0.92, ease: [0.65, 0, 0.35, 1], repeat: Infinity }}
              />
            </div>
            <p className="mt-5 text-xs font-black uppercase tracking-[0.32em] text-white/58">MA Motors</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
