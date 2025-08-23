'use client'

import { useEffect, useState } from 'react'

export function GrainOverlay() {
  const [opacity, setOpacity] = useState(0.03)

  useEffect(() => {
    // Adjust opacity based on theme
    const handleThemeChange = () => {
      const isDark = document.documentElement.classList.contains('dark')
      setOpacity(isDark ? 0.03 : 0.02)
    }

    handleThemeChange()
    
    // Watch for theme changes
    const observer = new MutationObserver(handleThemeChange)
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden"
      aria-hidden="true"
    >
      <svg className="absolute h-full w-full">
        <filter id="grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.8"
            numOctaves="1"
            result="turbulence"
          />
          <feColorMatrix
            in="turbulence"
            type="saturate"
            values="0"
          />
        </filter>
        <rect
          width="100%"
          height="100%"
          filter="url(#grain)"
          opacity={opacity}
        />
      </svg>
    </div>
  )
}