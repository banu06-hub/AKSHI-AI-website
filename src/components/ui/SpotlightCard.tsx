import type { PointerEvent, ReactNode } from 'react'

type SpotlightCardProps = {
  children: ReactNode
  className?: string
}

/**
 * Adds a cursor-following ambient highlight without React re-renders.
 * The visual is purely decorative; contrast is maintained without it.
 */
export function SpotlightCard({ children, className = '' }: SpotlightCardProps) {
  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect()
    event.currentTarget.style.setProperty('--spot-x', `${event.clientX - rect.left}px`)
    event.currentTarget.style.setProperty('--spot-y', `${event.clientY - rect.top}px`)
  }

  return (
    <div onPointerMove={handlePointerMove} className={`spotlight-card ${className}`}>
      {children}
    </div>
  )
}
