import { BarChart3, Clock3, FileText, GitBranch, NotebookPen } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { StatusPill } from '@/components/ui/StatusPill'

/* -------------------------------------------------------------------------- */
/* Abstract editorial artwork — diagrams, never fake results                  */
/* -------------------------------------------------------------------------- */

function ArchitectureArt() {
  return (
    <div className="relative h-full overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_76%_20%,rgba(40,123,255,0.16),transparent_60%)]" />
      <div className="absolute inset-0 bg-page-grid opacity-30" />
      <svg viewBox="0 0 620 260" className="absolute inset-0 h-full w-full" fill="none">
        <defs>
          <linearGradient id="research-path" x1="70" y1="140" x2="550" y2="140" gradientUnits="userSpaceOnUse">
            <stop stopColor="#C8D1DF" stopOpacity="0.18" />
            <stop offset="0.5" stopColor="#287BFF" stopOpacity="0.55" />
            <stop offset="1" stopColor="#51D8FF" stopOpacity="0.4" />
          </linearGradient>
          <radialGradient id="research-node" cx="0.5" cy="0.5" r="0.5">
            <stop stopColor="#51D8FF" stopOpacity="0.34" />
            <stop offset="1" stopColor="#287BFF" stopOpacity="0" />
          </radialGradient>
        </defs>

        <g stroke="#C8D1DF" strokeOpacity="0.06">
          <path d="M0 65h620M0 130h620M0 195h620" />
          <path d="M155 0v260M310 0v260M465 0v260" />
        </g>

        <path d="M70 136H550" stroke="url(#research-path)" strokeWidth="1.2" strokeDasharray="3 6" className="animate-dash" />
        <path d="M70 136H550" stroke="#C8D1DF" strokeOpacity="0.04" />

        {[
          { x: 70, label: 'INPUT', sub: 'Local documents' },
          { x: 230, label: 'RETRIEVE', sub: 'Relevant context' },
          { x: 390, label: 'INFER', sub: 'Language model' },
          { x: 550, label: 'REMEMBER', sub: 'Inspectable memory' },
        ].map((node, index) => (
          <g key={node.label}>
            <circle cx={node.x} cy="136" r="34" fill="url(#research-node)" />
            <circle cx={node.x} cy="136" r="17" fill="#07101B" stroke="#C8D1DF" strokeOpacity="0.2" />
            <circle cx={node.x} cy="136" r={index === 2 ? 3 : 2} fill={index === 2 ? '#51D8FF' : '#C8D1DF'} fillOpacity={index === 2 ? 1 : 0.45} />
            <text x={node.x} y="184" fill="#C8D1DF" fillOpacity="0.55" fontFamily="Consolas, monospace" fontSize="8.5" textAnchor="middle" letterSpacing="1.6">
              {node.label}
            </text>
            <text x={node.x} y="199" fill="#C8D1DF" fillOpacity="0.2" fontFamily="Consolas, monospace" fontSize="6.5" textAnchor="middle" letterSpacing="0.6">
              {node.sub}
            </text>
          </g>
        ))}

        <g stroke="#C8D1DF" strokeOpacity="0.1">
          <path d="M55 104V88h30" />
          <path d="M565 168v18h-30" />
        </g>
        <text x="41" y="76" fill="#C8D1DF" fillOpacity="0.22" fontFamily="Consolas, monospace" fontSize="6.5" letterSpacing="1">FIG. A—01</text>
        <text x="505" y="82" fill="#C8D1DF" fillOpacity="0.16" fontFamily="Consolas, monospace" fontSize="6.5" letterSpacing="1">CONCEPTUAL</text>
        <text x="536" y="240" fill="#51D8FF" fillOpacity="0.24" fontFamily="Consolas, monospace" fontSize="30" letterSpacing="1">01</text>
        <path d="M70 226h470" stroke="#C8D1DF" strokeOpacity="0.05" />
      </svg>
    </div>
  )
}

function MemoryArt() {
  return (
    <div className="relative h-full overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_55%,rgba(81,216,255,0.11),transparent_62%)]" />
      <svg viewBox="0 0 400 140" className="absolute inset-0 h-full w-full" fill="none">
        <g stroke="#C8D1DF" strokeOpacity="0.1">
          <ellipse cx="200" cy="72" rx="118" ry="38" transform="rotate(-10 200 72)" strokeDasharray="1 6" />
          <ellipse cx="200" cy="72" rx="80" ry="52" transform="rotate(22 200 72)" />
          <circle cx="200" cy="72" r="20" />
        </g>
        <circle cx="200" cy="72" r="26" fill="#287BFF" fillOpacity="0.08" />
        <circle cx="200" cy="72" r="5" fill="#51D8FF" />
        <circle cx="313" cy="51" r="2" fill="#51D8FF" fillOpacity="0.7" />
        <circle cx="92" cy="99" r="1.6" fill="#C8D1DF" fillOpacity="0.4" />
        <path d="M34 37h34M332 108h34" stroke="#C8D1DF" strokeOpacity="0.1" strokeDasharray="1 4" />
        <text x="34" y="30" fill="#C8D1DF" fillOpacity="0.2" fontFamily="Consolas, monospace" fontSize="6" letterSpacing="1.4">SESSION</text>
        <text x="332" y="122" fill="#C8D1DF" fillOpacity="0.2" fontFamily="Consolas, monospace" fontSize="6" letterSpacing="1.4">PERSISTENT</text>
      </svg>
    </div>
  )
}

function EvaluationArt() {
  return (
    <div className="relative h-full overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_40%,rgba(40,123,255,0.1),transparent_60%)]" />
      <div className="absolute inset-0 bg-page-grid opacity-25" />
      <svg viewBox="0 0 400 140" className="absolute inset-0 h-full w-full" fill="none">
        <g fill="#C8D1DF">
          {[0, 1, 2, 3, 4].map((row) =>
            [0, 1, 2, 3, 4, 5, 6, 7].map((column) => (
              <circle
                key={`${row}-${column}`}
                cx={82 + column * 32}
                cy={40 + row * 16}
                r={column === 5 && row === 2 ? 2.2 : 1.2}
                fillOpacity={(row + column) % 5 === 0 ? 0.4 : 0.12}
                fill={column === 5 && row === 2 ? '#51D8FF' : '#C8D1DF'}
              />
            )),
          )}
        </g>
        <path d="M70 122h285" stroke="#C8D1DF" strokeOpacity="0.12" />
        <path d="M82 30v92M334 30v92" stroke="#C8D1DF" strokeOpacity="0.06" />
        <text x="82" y="22" fill="#C8D1DF" fillOpacity="0.2" fontFamily="Consolas, monospace" fontSize="6" letterSpacing="1.4">EVALUATION MATRIX / DRAFT</text>
        <text x="300" y="136" fill="#C8D1DF" fillOpacity="0.16" fontFamily="Consolas, monospace" fontSize="5.5" letterSpacing="1">NO RESULTS PUBLISHED</text>
      </svg>
    </div>
  )
}

/* -------------------------------------------------------------------------- */
/* Section                                                                    */
/* -------------------------------------------------------------------------- */

const researchNotes = [
  {
    category: 'Architecture note',
    title: 'Designing an offline-first inference pipeline',
    excerpt:
      'The constraints, trade-offs, and open questions behind running a useful language model on ordinary local hardware.',
    meta: 'Technical note',
    art: 'architecture' as const,
  },
  {
    category: 'Product research',
    title: 'Memory as a first-class interface',
    excerpt: 'Why persistent context is a design problem, not just a database feature.',
    meta: 'Design note',
    art: 'memory' as const,
  },
  {
    category: 'Evaluation',
    title: 'Evaluating small models honestly',
    excerpt: 'A framework for measuring quality without borrowing benchmarks that do not fit the use case.',
    meta: 'Methods note',
    art: 'evaluation' as const,
  },
]

const artMap = {
  architecture: ArchitectureArt,
  memory: MemoryArt,
  evaluation: EvaluationArt,
}

const documentationStreams = [
  {
    icon: FileText,
    title: 'Technical articles',
    description: 'Deep explanations of the architecture, trade-offs, and engineering constraints.',
  },
  {
    icon: GitBranch,
    title: 'Architecture decisions',
    description: 'A durable record of the choices made — and the alternatives that were considered.',
  },
  {
    icon: BarChart3,
    title: 'Evaluation reports',
    description: 'Methods and measured outcomes, published together with their limitations.',
  },
  {
    icon: NotebookPen,
    title: 'Development updates',
    description: 'Short, factual notes from each build phase. No inflated milestones.',
  },
]

export function Research() {
  const featured = researchNotes[0]
  const secondary = researchNotes.slice(1)
  const FeaturedArt = artMap[featured.art]

  return (
    <section id="research" aria-labelledby="research-heading" className="relative section-pad">
      <div className="pointer-events-none absolute inset-0 bg-page-grid opacity-25 mask-radial" aria-hidden="true" />

      <div className="container-page relative">
        <div className="flex flex-col gap-9 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <SectionHeading
              index="07"
              eyebrow="Research & Engineering"
              title={
                <span id="research-heading">
                  Notes From an
                  <br />
                  <span className="metal-text">Unfinished System.</span>
                </span>
              }
              description="AKSHI will document its thinking as it builds — architecture decisions, model experiments, evaluation methods, and honest development updates. Nothing is published until it is real."
            />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="w-full max-w-[280px] rounded-2xl border border-white/[0.08] bg-[#070B12]/80 p-5">
              <div className="flex items-start justify-between">
                <span className="mono-label">Research index</span>
                <Clock3 className="h-3.5 w-3.5 text-silver/20" aria-hidden="true" />
              </div>
              <div className="mt-4 flex items-end gap-3">
                <span className="font-display text-[54px] font-medium leading-none tracking-[-0.05em] text-white/[0.12]">00</span>
                <span className="mb-1.5 text-[10px] leading-tight text-silver/30">public notes<br />so far</span>
              </div>
              <p className="mt-4 text-[10px] leading-relaxed text-silver/28">
                The first note will appear when it is ready — with method, context, and limitations attached.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-[1.18fr_0.82fr]">
          <Reveal>
            <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#070A11]/85 transition-colors duration-500 hover:border-white/[0.15]">
              <div className="relative h-[260px] shrink-0 overflow-hidden border-b border-white/[0.07] sm:h-[280px]">
                <FeaturedArt />
                <div className="absolute left-5 top-5 flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-electric/60" aria-hidden="true" />
                  <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-silver/40">{featured.category}</span>
                </div>
                <div className="absolute right-5 top-5">
                  <StatusPill tone="planned">In preparation</StatusPill>
                </div>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#070A11] to-transparent" />
              </div>

              <div className="flex flex-1 flex-col p-6 md:p-7">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[8px] tracking-[0.16em] text-electric/60">NOTE / 001</span>
                  <span className="h-px flex-1 bg-white/[0.07]" aria-hidden="true" />
                  <span className="font-mono text-[7px] uppercase tracking-[0.16em] text-silver/20">Forthcoming</span>
                </div>
                <h3 className="mt-4 max-w-lg font-display text-[25px] font-medium leading-[1.18] tracking-[-0.03em] text-mist md:text-[28px]">
                  {featured.title}
                </h3>
                <p className="mt-3 max-w-lg text-[12px] leading-[1.75] text-silver/40">{featured.excerpt}</p>

                <div className="mt-6 flex items-center justify-between border-t border-white/[0.06] pt-5">
                  <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-silver/25">{featured.meta}</span>
                  <span className="flex items-center gap-1.5 font-mono text-[8px] uppercase tracking-[0.14em] text-silver/22">
                    <Clock3 className="h-3 w-3" aria-hidden="true" />
                    Not published
                  </span>
                </div>
              </div>
            </article>
          </Reveal>

          <div className="flex flex-col gap-4">
            {secondary.map((note, index) => {
              const Art = artMap[note.art]
              return (
                <Reveal key={note.title} delay={0.08 + index * 0.06}>
                  <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#070A11]/85 transition-colors duration-500 hover:border-white/[0.15] sm:flex-row lg:flex-col">
                    <div className="relative h-[150px] shrink-0 overflow-hidden border-b border-white/[0.07] sm:h-auto sm:w-[42%] sm:border-b-0 sm:border-r lg:h-[132px] lg:w-full lg:border-b lg:border-r-0">
                      <Art />
                    </div>
                    <div className="flex flex-1 flex-col p-5">
                      <div className="flex items-center justify-between gap-3">
                        <span className="font-mono text-[7.5px] uppercase tracking-[0.16em] text-electric/55">{note.category}</span>
                        <StatusPill tone="planned">Draft</StatusPill>
                      </div>
                      <h3 className="mt-3 font-display text-[17px] font-medium leading-[1.3] tracking-[-0.02em] text-mist">
                        {note.title}
                      </h3>
                      <p className="mt-2 text-[10.5px] leading-relaxed text-silver/35">{note.excerpt}</p>
                      <div className="mt-auto pt-4">
                        <span className="font-mono text-[7px] uppercase tracking-[0.14em] text-silver/20">{note.meta} · in preparation</span>
                      </div>
                    </div>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {documentationStreams.map((stream, index) => {
            const Icon = stream.icon
            return (
              <Reveal key={stream.title} delay={0.04 * index}>
                <div className="group flex h-full flex-col rounded-2xl border border-white/[0.07] bg-white/[0.012] p-5 transition-colors duration-500 hover:border-white/[0.13] hover:bg-white/[0.025]">
                  <div className="flex items-center justify-between">
                    <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.025] text-silver/45 transition-colors group-hover:text-cyan/70">
                      <Icon className="h-4 w-4" strokeWidth={1.5} aria-hidden="true" />
                    </div>
                    <span className="font-mono text-[7px] uppercase tracking-[0.14em] text-silver/20">Planned</span>
                  </div>
                  <h3 className="mt-5 text-[12.5px] font-medium text-silver/70">{stream.title}</h3>
                  <p className="mt-2 text-[10px] leading-relaxed text-silver/30">{stream.description}</p>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-6 flex flex-col gap-2 border-t border-white/[0.06] pt-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-mono text-[8px] uppercase leading-relaxed tracking-[0.14em] text-silver/22">
              No research results or benchmarks are published yet — and none are implied by this page.
            </p>
            <a
              href="#contact"
              className="font-mono text-[8px] uppercase tracking-[0.14em] text-cyan/45 transition-colors hover:text-cyan"
            >
              Collaborate with AKSHI →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
