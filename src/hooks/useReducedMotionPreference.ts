import { useEffect, useState } from 'react'

/**
 * A reliable reduced-motion preference hook for canvas work.
 * Framer Motion's hook is used for UI animations; this one is intentionally
 * framework-free so it can be used inside the Three.js tree.
 */
export function useReducedMotionPreference(): boolean {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReduced(query.matches)

    const onChange = (event: MediaQueryListEvent) => setReduced(event.matches)
    query.addEventListener('change', onChange)
    return () => query.removeEventListener('change', onChange)
  }, [])

  return reduced
}
