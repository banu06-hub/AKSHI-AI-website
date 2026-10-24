import type { ComponentType } from 'react'
import { ArrowUpRight, Info } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { SpotlightCard } from '@/components/ui/SpotlightCard'
import { StatusPill } from '@/components/ui/StatusPill'
import {
  AdaptationVisual,
  DocumentsVisual,
  LanguageVisual,
  MemoryVisual,
  MultimodalVisual,
  OfflineVisual,
} from './capabilityVisuals'

type VisualKey = 'language' | 'memory' | 'documents' | 'offline' | 'adaptation' | 'multimodal'

const visuals: Record<VisualKey, ComponentType> = {
  language: LanguageVisual,
  memory: MemoryVisual,
  documents: DocumentsVisual,
  offline: OfflineVisual,
  adaptation: AdaptationVisual,
  multimodal: MultimodalVisual,
}

const capabilities: {
  index: string
  title: string
  category: string
  description: string
  features: string[]
  status: 'In Development' | 'Planned'
  tone: 'development' | 'planned'
  visual: VisualKey
}[] = [
  {
    index: '01',
    title: 'Language understanding & generation',
    category: 'Core intelligence',
    description:
      'A language model intended to reason over conversation, summarise, explain, and compose — with clarity and grounded reasoning as first-class goals.',
    features: ['Context-aware responses', 'Grounded synthesis'],
    status: 'In Development',
    tone: 'development',
    visual: 'language',
  },
  {
    index: '02',
    title: 'Local conversation memory',
    category: 'Continuity',
    description:
      'A persistent but inspectable memory layer, designed to carry what matters across sessions while keeping the final say with you.',
    features: ['Session context', 'User-controlled recall'],
    status: 'Planned',
    tone: 'planned',
    visual: 'memory',
  },
  {
    index: '03',
    title: 'Document ingestion & retrieval',
    category: 'Knowledge',
    description:
      'Bring PDFs, notes, and text into a private library. The intended system indexes locally, retrieves relevant passages, and points back to sources.',
    features: ['Local indexing', 'Source citations'],
    status: 'Planned',
    tone: 'planned',
    visual: 'documents',
  },
  {
    index: '04',
    title: 'Offline-first inference',
    category: 'Runtime',
    description:
      'An architecture being explored around on-device runtimes and graceful degradation, so core intelligence can function without a permanent network connection.',
    features: ['On-device runtime', 'Network optional'],
    status: 'In Development',
    tone: 'development',
    visual: 'offline',
  },
  {
    index: '05',
    title: 'Controlled model adaptation',
    category: 'Learning',
    description:
      'Bounded fine-tuning experiments with evaluation gates and versioned model changes — adaptation that remains observable, reversible, and deliberate.',
    features: ['Evaluation gates', 'Versioned models'],
    status: 'Planned',
    tone: 'planned',
    visual: 'adaptation',
  },
  {
    index: '06',
    title: 'Future image & voice capabilities',
    category: 'Research horizon',
    description:
      'A longer-term exploration of image understanding, audio, and voice. These capabilities remain research intentions until the language and memory foundations mature.',
    features: ['Vision research', 'Voice interaction'],
    status: 'Planned',
    tone: 'planned',
    visual: 'multimodal',
  },
]

export function Capabilities() {
  return (
    <section id="capabilities" aria-labelledby="capabilities-heading" className="relative section-pad">
      <div className="pointer-events-none absolute left-0 top-1/3 h-[500px] w-[500px] rounded-full bg-electric/[0.035] blur-[130px]" aria-hidden="true" />

      <div className="container-page relative">
        <div className="flex flex-col gap-9 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <SectionHeading
              index="03"
              eyebrow="Capabilities"
              title={
                <span id="capabilities-heading">
                  Intelligence That Works
                  <br />
                  <span className="metal-text">Close to You.</span>
                </span>
              }
              description="Six capability areas form the intended surface of AKSHI — a completely offline AI ecosystem. Each sits at a different stage of exploration — labelled honestly, never overstated."
            />
          </Reveal>

          <Reveal delay={0.12}>
            <div className="flex flex-wrap items-center gap-5 rounded-xl border border-white/[0.07] bg-white/[0.02] px-4 py-3">
              <span className="mono-label">Status key</span>
              <span className="inline-flex items-center gap-2 text-[9px] text-cyan/80">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan" /> In development
              </span>
              <span className="inline-flex items-center gap-2 text-[9px] text-silver/50">
                <span className="h-1.5 w-1.5 rounded-full bg-silver/45" /> Planned
              </span>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {capabilities.map((capability, index) => {
            const Visual = visuals[capability.visual]
            return (
              <Reveal key={capability.index} delay={0.05 * index}>
                <SpotlightCard className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#070A11]/90 transition-all duration-500 hover:border-white/[0.16] hover:shadow-[0_30px_100px_-50px_rgba(40,123,255,0.5)]">
                  <div className="relative h-[178px] shrink-0 overflow-hidden border-b border-white/[0.07]">
                    <Visual />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[#070A11] to-transparent" />
                  </div>

                  <div className="relative z-10 flex flex-1 flex-col p-6">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-electric/55">{capability.category}</span>
                      <span className="font-mono text-[8px] tracking-[0.16em] text-silver/20">{capability.index} / 06</span>
                    </div>

                    <h3 className="mt-4 font-display text-[18px] font-medium leading-[1.3] tracking-[-0.02em] text-mist">
                      {capability.title}
                    </h3>
                    <p className="mt-3 text-[12.5px] leading-[1.75] text-silver/45">{capability.description}</p>

                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {capability.features.map((feature) => (
                        <span
                          key={feature}
                          className="rounded-md border border-white/[0.07] bg-white/[0.02] px-2 py-1 text-[9.5px] text-silver/38"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className="mt-auto flex items-center justify-between gap-3 border-t border-white/[0.06] pt-5">
                      <StatusPill tone={capability.tone} pulse={capability.tone === 'development'}>
                        {capability.status}
                      </StatusPill>
                      <span className="h-1 w-1 rounded-full bg-white/10 transition-colors duration-500 group-hover:bg-cyan/50" aria-hidden="true" />
                    </div>
                  </div>
                </SpotlightCard>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-6 flex flex-col gap-5 rounded-2xl border border-white/[0.07] bg-white/[0.018] px-5 py-5 md:flex-row md:items-center md:justify-between md:px-6">
            <div className="flex items-start gap-3">
              <Info className="mt-0.5 h-4 w-4 shrink-0 text-silver/30" aria-hidden="true" />
              <p className="max-w-2xl text-[11.5px] leading-relaxed text-silver/38">
                Capability status reflects the current build phase. Nothing here should be read as a shipped feature,
                a performance benchmark, or an independent security guarantee. Statuses are updated only when a
                milestone is verified.
              </p>
            </div>
            <a
              href="#roadmap"
              className="group inline-flex shrink-0 items-center gap-2 font-mono text-[8.5px] uppercase tracking-[0.16em] text-cyan/60 transition-colors hover:text-cyan"
            >
              View the roadmap
              <ArrowUpRight className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
