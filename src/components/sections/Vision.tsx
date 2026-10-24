import { ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { Reveal } from '@/components/ui/Reveal'
import { SpotlightCard } from '@/components/ui/SpotlightCard'

type PrincipleKind = 'local' | 'memory' | 'documents' | 'adaptation'

function PrincipleGlyph({ kind }: { kind: PrincipleKind }) {
  const common = {
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.1,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  }

  return (
    <svg viewBox="0 0 40 40" className="h-9 w-9 text-cyan/75 transition-colors duration-500 group-hover:text-cyan" aria-hidden="true">
      <defs>
        <linearGradient id={`glyph-${kind}`} x1="0" y1="0" x2="40" y2="40" gradientUnits="userSpaceOnUse">
          <stop stopColor="#F5F7FB" stopOpacity="0.8" />
          <stop offset="1" stopColor="#51D8FF" stopOpacity="0.35" />
        </linearGradient>
      </defs>
      <g {...common}>
        {kind === 'local' && (
          <>
            <rect x="11" y="11" width="18" height="18" rx="3.5" stroke="url(#glyph-local)" />
            <circle cx="20" cy="20" r="4" />
            <circle cx="20" cy="20" r="1.4" fill="#51D8FF" stroke="none" />
            <path d="M16 11V7.5M20 11V7.5M24 11V7.5M16 32.5V29M20 32.5V29M24 32.5V29M11 16H7.5M11 20H7.5M11 24H7.5M32.5 16H29M32.5 20H29M32.5 24H29" opacity=".55" />
            <circle cx="20" cy="20" r="13" strokeDasharray="1 5" opacity=".3" />
          </>
        )}
        {kind === 'memory' && (
          <>
            <ellipse cx="20" cy="12" rx="11" ry="4" stroke="url(#glyph-memory)" />
            <path d="M9 12v8c0 2.2 4.9 4 11 4s11-1.8 11-4v-8" />
            <path d="M9 20v8c0 2.2 4.9 4 11 4s11-1.8 11-4v-8" opacity=".55" />
            <circle cx="27" cy="26" r="1.4" fill="#51D8FF" stroke="none" />
            <path d="M15 16h4M15 24h7" opacity=".4" />
          </>
        )}
        {kind === 'documents' && (
          <>
            <path d="M13 8h10l5 5v13H13z" stroke="url(#glyph-documents)" />
            <path d="M23 8v5h5" opacity=".65" />
            <path d="M10 12v18h13" opacity=".45" />
            <circle cx="25.5" cy="26.5" r="5" />
            <path d="m29.2 30.2 3.3 3.3" />
            <path d="M16 18h7M16 22h5" opacity=".45" />
          </>
        )}
        {kind === 'adaptation' && (
          <>
            <path d="M10 13h20M10 20h20M10 27h20" opacity=".45" />
            <circle cx="15" cy="13" r="2.2" fill="#05070B" stroke="url(#glyph-adaptation)" />
            <circle cx="26" cy="20" r="2.2" fill="#05070B" />
            <circle cx="18" cy="27" r="2.2" fill="#05070B" />
            <circle cx="26" cy="20" r="1" fill="#51D8FF" stroke="none" />
            <path d="M33 9c3 3 3 8 0 11" opacity=".5" />
            <path d="m33 9-2 .4M33 9l.7 2" opacity=".5" />
          </>
        )}
      </g>
    </svg>
  )
}

const principles: {
  number: string
  kind: PrincipleKind
  title: string
  description: string
  note: string
}[] = [
  {
    number: '01',
    kind: 'local',
    title: 'Local-first intelligence',
    description:
      'Inference and memory are designed around the device you already use, so useful intelligence does not depend on a permanent connection to the cloud.',
    note: 'Runs close to you',
  },
  {
    number: '02',
    kind: 'memory',
    title: 'Context and memory',
    description:
      'AKSHI is being designed to hold continuity across conversations — with persistent memory that is inspectable and under your control.',
    note: 'Continuity over time',
  },
  {
    number: '03',
    kind: 'documents',
    title: 'Knowledge through documents',
    description:
      'Bring your own material. The system is intended to ingest, index, and retrieve from local documents to ground answers in your world.',
    note: 'Grounded in your sources',
  },
  {
    number: '04',
    kind: 'adaptation',
    title: 'Controlled adaptation',
    description:
      'Learning should be intentional. Adaptation is explored through bounded experiments, evaluation, and versioned change — never silent drift.',
    note: 'Change with intent',
  },
]

export function Vision() {
  return (
    <section id="vision" aria-labelledby="vision-heading" className="relative section-pad">
      <div className="pointer-events-none absolute inset-y-0 left-[8%] hidden w-px bg-gradient-to-b from-transparent via-white/[0.05] to-transparent lg:block" aria-hidden="true" />

      <div className="container-page relative">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:gap-20">
          <Reveal>
            <SectionHeading
              index="01"
              eyebrow="The Vision"
              title={
                <span id="vision-heading">
                  More Than a Model.
                  <br />
                  <span className="metal-text">An Entire Ecosystem.</span>
                </span>
              }
            />
          </Reveal>

          <Reveal delay={0.12}>
            <div className="border-l border-white/[0.09] pl-6 md:pl-8 lg:pb-2">
              <p className="text-[15px] leading-[1.8] text-silver/58">
                AKSHI is conceived as a connected system — not a single model behind a chat box. Each layer is
                designed to reinforce the others: intelligence that runs close to you, remembers what matters,
                learns from your documents, and adapts under deliberate control.
              </p>
              <a
                href="#technology"
                className="group mt-6 inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.18em] text-cyan/70 transition-colors hover:text-cyan"
              >
                Examine the architecture
                <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.08} className="mt-14 md:mt-20">
          <div className="relative overflow-hidden rounded-2xl border border-white/[0.08] bg-gradient-to-br from-[#0B1220] via-[#070B13] to-[#05080E] px-6 py-9 md:px-10 md:py-12">
            <div className="pointer-events-none absolute right-0 top-0 h-48 w-48 rounded-full bg-electric/[0.07] blur-[70px]" aria-hidden="true" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/2 bg-page-grid opacity-30 mask-radial" aria-hidden="true" />

            <div className="relative grid gap-8 md:grid-cols-[1.25fr_0.75fr] md:items-center">
              <p className="max-w-2xl font-display text-[clamp(1.5rem,3vw,2.15rem)] leading-[1.25] tracking-[-0.025em] text-mist">
                A model answers. An ecosystem{' '}
                <span className="text-cyan/90">remembers</span>, understands, and evolves.
              </p>
              <div className="flex items-start gap-4 md:justify-end">
                <span className="mt-1 h-px w-10 bg-electric/50 md:w-16" aria-hidden="true" />
                <p className="max-w-[240px] text-xs leading-relaxed text-silver/40">
                  Six planned layers. One coherent intelligence. Designed to be understood, not just used.
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((principle, index) => (
            <Reveal key={principle.number} delay={0.06 * index}>
              <SpotlightCard className="group relative flex h-full min-h-[290px] flex-col rounded-2xl border border-white/[0.08] bg-[#070A11]/80 p-6 transition-all duration-500 hover:border-cyan/20 hover:bg-[#08101C] md:p-7">
                <div className="flex items-start justify-between">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-xl border border-white/[0.09] bg-white/[0.025] shadow-inset-hairline transition-all duration-500 group-hover:border-cyan/25 group-hover:bg-cyan/[0.05]">
                    <PrincipleGlyph kind={principle.kind} />
                  </div>
                  <span className="font-mono text-[9px] tracking-[0.2em] text-silver/22">{principle.number}</span>
                </div>

                <h3 className="mt-8 font-display text-[19px] font-medium leading-snug tracking-[-0.02em] text-mist">
                  {principle.title}
                </h3>
                <p className="mt-3 text-[12.5px] leading-[1.7] text-silver/48">{principle.description}</p>

                <div className="mt-auto flex items-center gap-2 pt-6">
                  <span className="h-1 w-1 rounded-full bg-cyan/40" aria-hidden="true" />
                  <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-silver/25">{principle.note}</span>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <p className="mt-8 max-w-3xl font-mono text-[8.5px] uppercase leading-relaxed tracking-[0.15em] text-silver/25">
            Design principles · Intentions guiding development. Subject to research, testing, and change.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
