import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useSpring } from 'framer-motion'
import { ArrowUpRight, CircleDashed, Milestone } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { StatusPill } from '@/components/ui/StatusPill'

type StageStatus = 'In Progress' | 'Planned'

type Stage = {
  index: string
  title: string
  description: string
  items: string[]
  status: StageStatus
}

const stages: Stage[] = [
  {
    index: '01',
    title: 'Foundation',
    description:
      'Establish the project structure, development environment, and technical architecture that every later stage depends on.',
    items: ['Project structure', 'Development environment', 'Technical architecture'],
    status: 'In Progress',
  },
  {
    index: '02',
    title: 'Core Intelligence',
    description:
      'Explore tokenisation, early model experiments, the inference pipeline, and the evaluation approach that keeps quality visible.',
    items: ['Tokenizer exploration', 'Model experiments', 'Inference pipeline', 'Evaluation'],
    status: 'Planned',
  },
  {
    index: '03',
    title: 'Memory & Knowledge',
    description:
      'Introduce local storage, document processing, retrieval, and the contextual responses that make continuity useful.',
    items: ['Local storage', 'Document processing', 'Retrieval', 'Contextual responses'],
    status: 'Planned',
  },
  {
    index: '04',
    title: 'Adaptive Learning',
    description:
      'Build a controlled loop for adaptation: bounded experiments, fine-tuning, rigorous evaluation, and versioned models.',
    items: ['Controlled experiments', 'Fine-tuning', 'Evaluation', 'Model versioning'],
    status: 'Planned',
  },
  {
    index: '05',
    title: 'Multimodal Expansion',
    description:
      'Research image, audio, and voice capabilities — only after the language, memory, and retrieval foundations are stable.',
    items: ['Image research', 'Audio research', 'Voice interaction'],
    status: 'Planned',
  },
  {
    index: '06',
    title: 'Product Launch',
    description:
      'Bring the layers together into a coherent application, then test, optimise, and prepare a responsible public release.',
    items: ['Application integration', 'Testing', 'Performance', 'Release preparation'],
    status: 'Planned',
  },
]

export function Roadmap() {
  const timelineRef = useRef<HTMLDivElement>(null)
  const reduce = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 70%', 'end 55%'],
  })
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 28, restDelta: 0.001 })

  return (
    <section id="roadmap" aria-labelledby="roadmap-heading" className="relative section-pad">
      <div className="pointer-events-none absolute right-0 top-1/4 h-[540px] w-[540px] rounded-full bg-electric/[0.03] blur-[130px]" aria-hidden="true" />

      <div className="container-page relative">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal>
            <SectionHeading
              index="06"
              eyebrow="Development Roadmap"
              title={
                <span id="roadmap-heading">
                  Built Step by Step.
                  <br />
                  <span className="metal-text">Nothing Rushed.</span>
                </span>
              }
              description="A long-term build, sequenced deliberately. Each stage is a foundation for the next — and is marked complete only when the work behind it has been verified."
            />
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex items-center gap-3 border-l border-white/[0.08] pl-5">
              <Milestone className="h-4 w-4 text-electric/60" aria-hidden="true" />
              <p className="max-w-[210px] font-mono text-[8px] uppercase leading-[1.8] tracking-[0.14em] text-silver/25">
                06 planned stages
                <br />
                01 currently active
                <br />
                00 marked complete
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-[0.35fr_0.65fr] lg:gap-16">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <div className="glass-panel relative overflow-hidden rounded-2xl p-6">
                <div className="pointer-events-none absolute -right-10 -top-14 h-40 w-40 rounded-full bg-electric/[0.09] blur-[50px]" aria-hidden="true" />

                <div className="flex items-center justify-between">
                  <span className="mono-label">Current focus</span>
                  <span className="flex items-center gap-2">
                    <span className="status-dot text-cyan" />
                    <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-cyan/60">Active</span>
                  </span>
                </div>

                <div className="mt-6 flex items-baseline gap-4">
                  <span className="font-mono text-[11px] tracking-[0.18em] text-electric/60">STAGE 01</span>
                  <span className="h-px flex-1 bg-white/[0.08]" aria-hidden="true" />
                </div>
                <h3 className="mt-3 font-display text-3xl font-medium tracking-[-0.03em] text-mist">Foundation</h3>
                <p className="mt-3 text-[11.5px] leading-relaxed text-silver/38">
                  Establishing the structures, decisions, and architecture that the rest of AKSHI will be built
                  upon.
                </p>

                <div className="mt-6 space-y-2">
                  {stages.map((stage) => (
                    <div
                      key={stage.index}
                      className={`flex items-center gap-3 rounded-lg border px-3 py-2 ${
                        stage.status === 'In Progress'
                          ? 'border-cyan/15 bg-cyan/[0.04]'
                          : 'border-transparent bg-transparent'
                      }`}
                    >
                      <span
                        className={`font-mono text-[8px] tracking-[0.12em] ${
                          stage.status === 'In Progress' ? 'text-cyan/70' : 'text-silver/20'
                        }`}
                      >
                        {stage.index}
                      </span>
                      <span className={`flex-1 text-[10.5px] ${stage.status === 'In Progress' ? 'text-silver/70' : 'text-silver/28'}`}>
                        {stage.title}
                      </span>
                      <span
                        className={`h-1 w-1 rounded-full ${
                          stage.status === 'In Progress' ? 'bg-cyan' : 'bg-white/10'
                        }`}
                        aria-hidden="true"
                      />
                    </div>
                  ))}
                </div>

                <div className="mt-6 border-t border-white/[0.07] pt-5">
                  <a
                    href="#research"
                    className="group inline-flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.16em] text-cyan/55 transition-colors hover:text-cyan"
                  >
                    Follow the build
                    <ArrowUpRight className="h-3 w-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-5 flex items-start gap-2.5 px-1">
                <CircleDashed className="mt-0.5 h-3.5 w-3.5 shrink-0 text-silver/20" aria-hidden="true" />
                <p className="text-[10px] leading-relaxed text-silver/25">
                  Statuses are not aspirational. A stage moves forward only when its work can be shown and
                  evaluated.
                </p>
              </div>
            </Reveal>
          </aside>

          <div ref={timelineRef} className="relative">
            <div className="absolute bottom-10 left-[13px] top-10 w-px bg-white/[0.07]" aria-hidden="true" />
            {!reduce && (
              <motion.div
                className="absolute bottom-10 left-[13px] top-10 w-px origin-top bg-gradient-to-b from-cyan/70 via-electric/40 to-transparent"
                style={{ scaleY: progress }}
                aria-hidden="true"
              />
            )}

            {stages.map((stage, index) => {
              const inProgress = stage.status === 'In Progress'
              return (
                <Reveal key={stage.index} delay={0.04 * index}>
                  <div className="relative pb-4 pl-12 sm:pl-16">
                    <span
                      className={`absolute left-0 top-6 z-10 flex h-7 w-7 items-center justify-center rounded-full border font-mono text-[7px] tracking-[0.08em] ${
                        inProgress
                          ? 'border-cyan/50 bg-[#07111B] text-cyan shadow-[0_0_24px_-4px_rgba(81,216,255,0.55)]'
                          : 'border-white/[0.11] bg-[#06090F] text-silver/30'
                      }`}
                      aria-hidden="true"
                    >
                      {stage.index}
                    </span>

                    <div
                      className={`group relative overflow-hidden rounded-2xl border p-5 transition-colors duration-500 md:p-6 ${
                        inProgress
                          ? 'border-cyan/18 bg-gradient-to-br from-cyan/[0.045] to-transparent'
                          : 'border-white/[0.07] bg-white/[0.012] hover:border-white/[0.13]'
                      }`}
                    >
                      {inProgress && (
                        <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan/[0.06] blur-[50px]" aria-hidden="true" />
                      )}

                      <div className="relative flex items-start justify-between gap-4">
                        <div>
                          <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-silver/22">
                            Stage {stage.index} / 06
                          </span>
                          <h3 className="mt-2 font-display text-[22px] font-medium tracking-[-0.025em] text-mist md:text-2xl">
                            {stage.title}
                          </h3>
                        </div>
                        <StatusPill tone={inProgress ? 'development' : 'planned'} pulse={inProgress}>
                          {stage.status}
                        </StatusPill>
                      </div>

                      <p className="relative mt-3 max-w-xl text-[11.5px] leading-[1.75] text-silver/40 md:text-xs">
                        {stage.description}
                      </p>

                      <div className="relative mt-4 flex flex-wrap gap-1.5">
                        {stage.items.map((item) => (
                          <span
                            key={item}
                            className="rounded-md border border-white/[0.06] bg-white/[0.018] px-2 py-1 text-[9px] text-silver/32"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
