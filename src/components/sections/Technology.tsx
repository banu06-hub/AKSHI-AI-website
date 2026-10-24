import { useMemo, useState } from 'react'
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion'
import { ArrowLeft, ArrowRight, ArrowUpRight, ChevronDown, Info, MousePointer2 } from 'lucide-react'
import { architectureLayers, type ArchitectureLayer } from '@/config/architecture'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { StatusPill } from '@/components/ui/StatusPill'
import { BrandMark } from '@/components/brand/Logo'

/* -------------------------------------------------------------------------- */
/* Orbital diagram                                                            */
/* -------------------------------------------------------------------------- */

function OrbitalDiagram({
  activeId,
  onSelect,
}: {
  activeId: string
  onSelect: (id: string) => void
}) {
  const reduce = useReducedMotion()
  const rawRotateX = useMotionValue(0)
  const rawRotateY = useMotionValue(0)
  const rotateX = useSpring(rawRotateX, { stiffness: 130, damping: 22 })
  const rotateY = useSpring(rawRotateY, { stiffness: 130, damping: 22 })
  const activeLayer = architectureLayers.find((layer) => layer.id === activeId) ?? architectureLayers[0]

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (reduce) return
    const rect = event.currentTarget.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width - 0.5
    const y = (event.clientY - rect.top) / rect.height - 0.5
    rawRotateY.set(x * 9)
    rawRotateX.set(-y * 9)
  }

  const handlePointerLeave = () => {
    rawRotateX.set(0)
    rawRotateY.set(0)
  }

  return (
    <div
      className="relative mx-auto w-full max-w-[610px] [perspective:1100px]"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="relative aspect-square w-full"
      >
        {/* ambient halo */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[46%] w-[46%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric/[0.12] blur-[60px]" aria-hidden="true" />

        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="absolute inset-0 h-full w-full overflow-visible"
          aria-hidden="true"
        >
          <defs>
            <radialGradient id="node-core" cx="0.5" cy="0.5" r="0.5">
              <stop offset="0" stopColor="#51D8FF" stopOpacity="0.24" />
              <stop offset="1" stopColor="#287BFF" stopOpacity="0" />
            </radialGradient>
          </defs>

          <circle cx="50" cy="50" r="18" fill="url(#node-core)" />
          <g fill="none" stroke="#C8D1DF" strokeOpacity="0.08" vectorEffect="non-scaling-stroke">
            <circle cx="50" cy="50" r="19.5" />
            <circle cx="50" cy="50" r="31" strokeDasharray="1 6" strokeOpacity="0.1" />
            <circle cx="50" cy="50" r="43" strokeOpacity="0.045" />
          </g>

          <g stroke="#C8D1DF" strokeOpacity="0.055" vectorEffect="non-scaling-stroke">
            <line x1="7" y1="50" x2="3" y2="50" />
            <line x1="93" y1="50" x2="97" y2="50" />
            <line x1="50" y1="7" x2="50" y2="3" />
            <line x1="50" y1="93" x2="50" y2="97" />
          </g>

          {architectureLayers.map((layer) => {
            const isActive = layer.id === activeId
            return (
              <g key={layer.id}>
                <line
                  x1="50"
                  y1="50"
                  x2={layer.position.x}
                  y2={layer.position.y}
                  stroke={isActive ? '#51D8FF' : '#C8D1DF'}
                  strokeOpacity={isActive ? 0.6 : 0.11}
                  strokeWidth="1"
                  strokeDasharray={isActive ? '2 4' : undefined}
                  vectorEffect="non-scaling-stroke"
                  className={isActive ? 'animate-dash' : undefined}
                />
                <circle
                  cx={layer.position.x}
                  cy={layer.position.y}
                  r={isActive ? 0.55 : 0.32}
                  fill={isActive ? '#51D8FF' : '#C8D1DF'}
                  fillOpacity={isActive ? 1 : 0.25}
                />
              </g>
            )
          })}
        </svg>

        {/* Central core */}
        <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
          <div className="relative flex h-[132px] w-[132px] items-center justify-center rounded-full border border-white/[0.09] bg-[#070C16]/90 shadow-[0_0_80px_-15px_rgba(40,123,255,0.55)] backdrop-blur-md">
            <span className="absolute inset-[7px] rounded-full border border-dashed border-white/[0.08]" aria-hidden="true" />
            <span className="absolute inset-0 rounded-full border border-electric/15 animate-pulse-ring" aria-hidden="true" />
            <span className="absolute inset-[-16px] rounded-full border border-white/[0.04]" aria-hidden="true" />
            <div className="flex flex-col items-center gap-2">
              <BrandMark className="h-11 w-11" />
              <span className="font-mono text-[7px] uppercase tracking-[0.22em] text-silver/40">AKSHI Core</span>
            </div>
          </div>
          <div className="mt-3 text-center">
            <p className="font-mono text-[7px] uppercase tracking-[0.18em] text-cyan/45">Active layer</p>
            <p className="mt-1 font-mono text-[8.5px] uppercase tracking-[0.14em] text-white/80">{activeLayer.shortTitle}</p>
          </div>
        </div>

        {/* Layer nodes */}
        {architectureLayers.map((layer) => {
          const Icon = layer.icon
          const isActive = layer.id === activeId
          return (
            <button
              key={layer.id}
              type="button"
              onClick={() => onSelect(layer.id)}
              aria-pressed={isActive}
              aria-label={`View ${layer.title} layer`}
              className="group absolute z-20 flex w-[116px] -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-2 rounded-xl p-1 text-center outline-offset-4"
              style={{ left: `${layer.position.x}%`, top: `${layer.position.y}%` }}
            >
              <span
                className={`relative flex h-11 w-11 items-center justify-center rounded-xl border transition-all duration-500 ${
                  isActive
                    ? 'border-cyan/55 bg-cyan/[0.09] text-cyan shadow-[0_0_26px_-4px_rgba(81,216,255,0.5)]'
                    : 'border-white/[0.1] bg-[#080D17] text-silver/50 group-hover:border-white/25 group-hover:bg-[#0B1421] group-hover:text-silver'
                }`}
              >
                <Icon className="h-[17px] w-[17px]" strokeWidth={1.5} aria-hidden="true" />
                {isActive && (
                  <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full border border-[#05080E] bg-cyan" aria-hidden="true" />
                )}
              </span>
              <span
                className={`font-mono text-[8px] uppercase leading-tight tracking-[0.12em] transition-colors duration-300 ${
                  isActive ? 'text-white' : 'text-silver/38 group-hover:text-silver/75'
                }`}
              >
                {layer.shortTitle}
              </span>
            </button>
          )
        })}

        <div className="absolute left-1 top-1 flex items-center gap-2">
          <span className="h-1 w-1 rounded-full bg-electric/50" aria-hidden="true" />
          <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-silver/20">Fig. 02 / Layer map</span>
        </div>
        <div className="absolute bottom-1 right-1">
          <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-silver/20">Conceptual system</span>
        </div>
      </motion.div>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* Detail panel                                                               */
/* -------------------------------------------------------------------------- */

function LayerInspector({
  active,
  activeIndex,
  onChange,
}: {
  active: ArchitectureLayer
  activeIndex: number
  onChange: (direction: number) => void
}) {
  const Icon = active.icon

  return (
    <div className="glass-panel relative flex h-full flex-col overflow-hidden rounded-2xl">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/40 to-transparent" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-4 -top-8 select-none font-display text-[150px] font-semibold leading-none text-white/[0.022]" aria-hidden="true">
        {active.index}
      </div>

      <div className="relative flex flex-1 flex-col p-6 md:p-8">
        <div className="flex items-start justify-between gap-4">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-cyan/20 bg-cyan/[0.055] text-cyan">
            <Icon className="h-5 w-5" strokeWidth={1.5} aria-hidden="true" />
          </div>
          <StatusPill tone={active.status === 'Future research' ? 'future' : 'proposed'}>{active.status}</StatusPill>
        </div>

        <div className="mt-8 flex items-center gap-3">
          <span className="font-mono text-[9px] tracking-[0.18em] text-electric/70">LAYER {active.index}</span>
          <span className="h-px flex-1 bg-white/[0.07]" aria-hidden="true" />
          <span className="font-mono text-[8px] tracking-[0.16em] text-silver/25">{activeIndex + 1} / 07</span>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <h3 className="mt-5 font-display text-2xl font-medium leading-tight tracking-[-0.025em] text-mist md:text-[28px]">
              {active.title}
            </h3>
            <p className="mt-4 text-[13px] leading-[1.75] text-silver/52">{active.description}</p>

            <div className="mt-8">
              <p className="mono-label">Intended components</p>
              <div className="mt-3 grid grid-cols-2 gap-2">
                {active.components.map((component) => (
                  <div
                    key={component}
                    className="flex items-center gap-2 rounded-lg border border-white/[0.06] bg-white/[0.02] px-3 py-2.5"
                  >
                    <span className="h-1 w-1 shrink-0 rounded-full bg-cyan/50" aria-hidden="true" />
                    <span className="text-[10.5px] leading-tight text-silver/55">{component}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-auto flex items-center justify-between gap-4 border-t border-white/[0.07] pt-5 md:mt-8">
          <div className="flex items-center gap-2 text-silver/25">
            <Info className="h-3 w-3" aria-hidden="true" />
            <span className="font-mono text-[8px] uppercase tracking-[0.12em]">Design stage only</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => onChange(-1)}
              aria-label="Previous architecture layer"
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.09] text-silver/50 transition-colors hover:border-white/25 hover:text-white"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
            </button>
            <button
              type="button"
              onClick={() => onChange(1)}
              aria-label="Next architecture layer"
              className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.09] text-silver/50 transition-colors hover:border-white/25 hover:text-white"
            >
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* Mobile accordion                                                           */
/* -------------------------------------------------------------------------- */

function LayerAccordion({
  activeId,
  onSelect,
}: {
  activeId: string
  onSelect: (id: string) => void
}) {
  return (
    <div className="space-y-2.5 lg:hidden">
      {architectureLayers.map((layer) => {
        const Icon = layer.icon
        const isOpen = layer.id === activeId
        return (
          <div
            key={layer.id}
            className={`overflow-hidden rounded-xl border transition-colors duration-300 ${
              isOpen ? 'border-cyan/20 bg-[#08101B]' : 'border-white/[0.08] bg-[#060A11]'
            }`}
          >
            <button
              type="button"
              onClick={() => onSelect(layer.id)}
              aria-expanded={isOpen}
              className="flex w-full items-center gap-3.5 px-4 py-4 text-left"
            >
              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border ${
                  isOpen ? 'border-cyan/30 bg-cyan/[0.07] text-cyan' : 'border-white/[0.09] text-silver/45'
                }`}
              >
                <Icon className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-mono text-[8px] tracking-[0.16em] text-silver/30">LAYER {layer.index}</span>
                <span className="mt-0.5 block truncate text-[13px] font-medium text-mist">{layer.title}</span>
              </span>
              <ChevronDown
                className={`h-4 w-4 shrink-0 text-silver/35 transition-transform duration-300 ${isOpen ? 'rotate-180 text-cyan' : ''}`}
                aria-hidden="true"
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="px-4 pb-5">
                    <div className="ml-[50px] border-l border-white/[0.07] pl-4">
                      <p className="text-[12px] leading-relaxed text-silver/50">{layer.description}</p>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {layer.components.map((component) => (
                          <span
                            key={component}
                            className="rounded-md border border-white/[0.07] bg-white/[0.02] px-2 py-1 text-[9px] text-silver/45"
                          >
                            {component}
                          </span>
                        ))}
                      </div>
                      <div className="mt-4">
                        <StatusPill tone={layer.status === 'Future research' ? 'future' : 'proposed'}>
                          {layer.status}
                        </StatusPill>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* Section                                                                    */
/* -------------------------------------------------------------------------- */

export function Technology() {
  const [activeId, setActiveId] = useState('interface')
  const activeIndex = useMemo(
    () => Math.max(0, architectureLayers.findIndex((layer) => layer.id === activeId)),
    [activeId],
  )
  const active = architectureLayers[activeIndex]

  const changeLayer = (direction: number) => {
    const nextIndex = (activeIndex + direction + architectureLayers.length) % architectureLayers.length
    setActiveId(architectureLayers[nextIndex].id)
  }

  return (
    <section id="technology" aria-labelledby="technology-heading" className="relative section-pad">
      <div className="container-page">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <SectionHeading
              index="02"
              eyebrow="Technology"
              title={
                <span id="technology-heading">
                  One System.
                  <br />
                  <span className="metal-text">Seven Connected Layers.</span>
                </span>
              }
              description="A proposed architecture for an intelligence that can run locally, remember context, retrieve from documents, and improve deliberately. Every layer is connected to the same core."
            />
          </Reveal>

          <Reveal delay={0.12} className="shrink-0">
            <div className="flex flex-col gap-3 border-l border-white/[0.08] pl-5 lg:items-start">
              <StatusPill tone="proposed">Proposed architecture</StatusPill>
              <p className="max-w-[220px] font-mono text-[8px] uppercase leading-[1.7] tracking-[0.14em] text-silver/25">
                Conceptual system map
                <br />
                Not a completed implementation
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="mt-12 md:mt-16">
          <div className="relative overflow-hidden rounded-3xl border border-white/[0.09] bg-[#05080E] shadow-panel">
            <div className="pointer-events-none absolute inset-0 bg-page-grid opacity-30 mask-radial" aria-hidden="true" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" aria-hidden="true" />
            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-electric/[0.07] blur-[80px]" aria-hidden="true" />

            <div className="relative flex items-center justify-between border-b border-white/[0.07] px-5 py-4 md:px-8">
              <div className="flex items-center gap-3">
                <span className="status-dot text-electric" />
                <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-silver/40">System map / v0.1</span>
              </div>
              <div className="flex items-center gap-2 text-silver/30">
                <MousePointer2 className="h-3 w-3" aria-hidden="true" />
                <span className="hidden font-mono text-[8px] uppercase tracking-[0.16em] sm:inline">Select a layer</span>
                <span className="font-mono text-[8px] uppercase tracking-[0.16em] sm:hidden">Tap a layer</span>
              </div>
            </div>

            <div className="relative grid gap-8 p-5 md:p-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:p-10">
              <div className="hidden lg:block">
                <OrbitalDiagram activeId={activeId} onSelect={setActiveId} />
              </div>

              <div className="lg:pt-2">
                <div className="hidden lg:block">
                  <LayerInspector active={active} activeIndex={activeIndex} onChange={changeLayer} />
                </div>
                <LayerAccordion activeId={activeId} onSelect={setActiveId} />
              </div>
            </div>

            <div className="relative flex flex-col gap-3 border-t border-white/[0.07] px-5 py-4 text-silver/25 md:flex-row md:items-center md:justify-between md:px-8">
              <div className="flex items-center gap-2">
                <Info className="h-3 w-3" aria-hidden="true" />
                <p className="font-mono text-[7.5px] uppercase leading-relaxed tracking-[0.13em]">
                  Architecture is subject to change as research and evaluation progress.
                </p>
              </div>
              <a
                href="#demo"
                className="group inline-flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.16em] text-cyan/60 transition-colors hover:text-cyan"
              >
                Preview the interface
                <ArrowUpRight className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
