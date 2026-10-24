import type { ReactNode } from 'react'

type SectionHeadingProps = {
  index?: string
  eyebrow: string
  title: ReactNode
  description?: ReactNode
  align?: 'left' | 'center'
  className?: string
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  align = 'left',
  className = '',
}: SectionHeadingProps) {
  const centered = align === 'center'

  return (
    <div className={`${centered ? 'mx-auto text-center' : ''} ${className}`}>
      <div className={`flex items-center gap-3 ${centered ? 'justify-center' : ''}`}>
        {index && <span className="font-mono text-[10px] tracking-[0.2em] text-electric/80">{index}</span>}
        <span className="h-px w-8 bg-gradient-to-r from-electric/60 to-transparent" aria-hidden="true" />
        <span className="mono-label">{eyebrow}</span>
      </div>

      <h2 className="mt-6 max-w-4xl font-display text-[clamp(2.15rem,4.6vw,3.8rem)] font-medium leading-[1.02] tracking-[-0.04em] text-mist">
        {title}
      </h2>

      {description && (
        <div
          className={`mt-6 max-w-2xl text-[15px] leading-relaxed text-silver/60 md:text-base ${
            centered ? 'mx-auto' : ''
          }`}
        >
          {description}
        </div>
      )}
    </div>
  )
}
