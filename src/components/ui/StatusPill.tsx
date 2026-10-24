type StatusTone = 'planned' | 'development' | 'experimental' | 'proposed' | 'future' | 'neutral'

const tones: Record<StatusTone, { dot: string; text: string; border: string; bg: string }> = {
  planned: {
    dot: 'bg-silver/55',
    text: 'text-silver/65',
    border: 'border-white/[0.09]',
    bg: 'bg-white/[0.03]',
  },
  development: {
    dot: 'bg-cyan',
    text: 'text-cyan/90',
    border: 'border-cyan/20',
    bg: 'bg-cyan/[0.06]',
  },
  experimental: {
    dot: 'bg-amber-300',
    text: 'text-amber-200/85',
    border: 'border-amber-300/20',
    bg: 'bg-amber-300/[0.05]',
  },
  proposed: {
    dot: 'bg-electric',
    text: 'text-[#9CC0FF]',
    border: 'border-electric/25',
    bg: 'bg-electric/[0.07]',
  },
  future: {
    dot: 'bg-violet-300/80',
    text: 'text-violet-200/75',
    border: 'border-violet-300/20',
    bg: 'bg-violet-300/[0.04]',
  },
  neutral: {
    dot: 'bg-silver/40',
    text: 'text-silver/50',
    border: 'border-white/[0.08]',
    bg: 'bg-white/[0.02]',
  },
}

type StatusPillProps = {
  tone?: StatusTone
  children: string
  className?: string
  pulse?: boolean
}

export function StatusPill({ tone = 'planned', children, className = '', pulse = false }: StatusPillProps) {
  const t = tones[tone]

  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.18em] ${t.border} ${t.bg} ${t.text} ${className}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${t.dot} ${pulse ? 'animate-soft-pulse' : ''}`} aria-hidden="true" />
      {children}
    </span>
  )
}
