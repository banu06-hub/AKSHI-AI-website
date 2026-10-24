import { Suspense, lazy } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, ArrowUpRight, Layers3, Sparkles } from 'lucide-react'
import { CoreFallback } from '@/components/three/CoreFallback'
import { SceneErrorBoundary } from '@/components/ui/SceneErrorBoundary'
import { StatusPill } from '@/components/ui/StatusPill'

const HeroCanvas = lazy(() => import('@/components/three/HeroCanvas'))

export function Hero() {
  const reduce = useReducedMotion()

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.09, delayChildren: 0.12 },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  }

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pb-14 pt-28 md:pt-32 lg:pb-16"
    >
      {/* Atmosphere */}
      <div className="absolute inset-0 bg-page-grid opacity-60 mask-radial" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-40 top-[-10%] h-[780px] w-[780px] rounded-full bg-electric/[0.085] blur-[140px]" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-40 bottom-[-20%] h-[520px] w-[520px] rounded-full bg-cyan/[0.035] blur-[120px]" aria-hidden="true" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-obsidian to-transparent" aria-hidden="true" />

      {/* Technical frame marks */}
      <div className="pointer-events-none absolute inset-x-6 top-24 hidden justify-between md:flex" aria-hidden="true">
        <span className="font-mono text-[8px] uppercase tracking-[0.24em] text-silver/20">AKSHI / SYS.001</span>
        <span className="font-mono text-[8px] uppercase tracking-[0.24em] text-silver/20">35.0000 / 139.0000 · VIRTUAL</span>
      </div>

      <div className="container-page relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-0">
          <motion.div
            variants={container}
            initial={reduce ? false : 'hidden'}
            animate="show"
            className="relative z-20 max-w-[760px]"
          >
            <motion.div variants={item} className="flex flex-wrap items-center gap-4">
              <StatusPill tone="development" pulse>
                IN DEVELOPMENT
              </StatusPill>
              <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-silver/30">
                Phase 01 · Foundation
              </span>
            </motion.div>

            <motion.h1
              id="hero-heading"
              variants={item}
              className="mt-8 font-display text-[clamp(3rem,7vw,5.9rem)] font-medium leading-[0.93] tracking-[-0.05em]"
            >
              <span className="block text-mist">Intelligence,</span>
              <span className="metal-text block pb-1">Built Beyond</span>
              <span className="block text-mist">
                Boundaries<span className="text-electric">.</span>
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-7 max-w-[540px] text-[15px] leading-[1.75] text-silver/58 md:text-[16px]"
            >
              Discover AKSHI AI — a completely offline AI ecosystem designed around local intelligence, persistent
              memory, document understanding, and adaptive learning.
            </motion.p>

            <motion.div variants={item} className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a href="#vision" className="btn-primary group">
                Explore the Vision
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a href="#technology" className="btn-secondary group">
                <Layers3 className="h-4 w-4 text-cyan/70" />
                Discover the Architecture
                <ArrowDown className="h-3.5 w-3.5 text-silver/35 transition-transform duration-300 group-hover:translate-y-0.5" />
              </a>
            </motion.div>

            <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2">
              {['Completely offline', 'Local-first', 'Adaptive by design'].map((point, index) => (
                <div key={point} className="flex items-center gap-5">
                  {index > 0 && <span className="h-3 w-px bg-white/10" aria-hidden="true" />}
                  <span className="font-mono text-[8.5px] uppercase tracking-[0.2em] text-silver/35">{point}</span>
                </div>
              ))}
            </motion.div>

            <motion.div variants={item} className="mt-10 flex items-center gap-3 border-t border-white/[0.06] pt-5 lg:hidden">
              <Sparkles className="h-3.5 w-3.5 text-cyan/50" />
              <p className="font-mono text-[8.5px] uppercase tracking-[0.18em] text-silver/30">
                An ecosystem in development — not a released product
              </p>
            </motion.div>
          </motion.div>

          {/* 3D centerpiece */}
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.4, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative -mx-4 h-[420px] sm:-mx-2 sm:h-[520px] lg:mx-0 lg:h-[660px]"
          >
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[62%] w-[62%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric/[0.07] blur-[100px]" aria-hidden="true" />

            <div className="absolute inset-0">
              <SceneErrorBoundary fallback={<CoreFallback />}>
                <Suspense fallback={<CoreFallback />}>
                  <HeroCanvas />
                </Suspense>
              </SceneErrorBoundary>
            </div>

            {/* HUD overlays */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute inset-x-3 top-3 flex items-start justify-between md:inset-x-6">
                <div>
                  <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-silver/35">AKSHI / CORE—01</p>
                  <p className="mt-1.5 max-w-[130px] font-mono text-[7.5px] uppercase leading-relaxed tracking-[0.14em] text-silver/20">
                    Illustrative visualization
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="status-dot text-electric" />
                  <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-silver/30">Synthetic</span>
                </div>
              </div>

              <span className="absolute left-3 top-1/2 hidden h-12 w-px bg-gradient-to-b from-transparent via-white/15 to-transparent md:block" aria-hidden="true" />
              <span className="absolute right-3 top-1/3 hidden h-12 w-px bg-gradient-to-b from-transparent via-electric/30 to-transparent md:block" aria-hidden="true" />

              <div className="absolute inset-x-3 bottom-3 flex items-end justify-between border-t border-white/[0.06] pt-3 md:inset-x-6">
                <p className="font-mono text-[7.5px] uppercase leading-relaxed tracking-[0.14em] text-silver/25">
                  Rendered locally in your browser
                  <br />
                  Not live model output
                </p>
                <p className="hidden font-mono text-[7.5px] uppercase tracking-[0.16em] text-cyan/40 sm:block">
                  Think · Learn · Adapt
                </p>
              </div>

              {/* corner ticks */}
              <span className="absolute left-1 top-1 h-3 w-3 border-l border-t border-white/15" aria-hidden="true" />
              <span className="absolute right-1 top-1 h-3 w-3 border-r border-t border-white/15" aria-hidden="true" />
              <span className="absolute bottom-1 left-1 h-3 w-3 border-b border-l border-white/15" aria-hidden="true" />
              <span className="absolute bottom-1 right-1 h-3 w-3 border-b border-r border-white/15" aria-hidden="true" />
            </div>
          </motion.div>
        </div>

        <div className="mt-4 hidden items-center justify-between border-t border-white/[0.05] pt-5 lg:flex">
          <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-silver/25">
            Building in public · 2026
          </p>
          <div className="flex items-center gap-3">
            <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-silver/25">Scroll to explore</span>
            <span className="relative h-8 w-px overflow-hidden bg-white/10">
              <span className="absolute inset-x-0 top-0 h-3 animate-[scanLine_2.8s_ease-in-out_infinite] bg-cyan/70" />
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
