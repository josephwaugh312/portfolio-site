'use client'

import { useEffect, useState } from 'react'

interface PerformanceMetrics {
  fps: number
  memory: number | null
  loadTime: number
}

export function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    fps: 60,
    memory: null,
    loadTime: 0,
  })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Only show in development
    if (process.env.NODE_ENV !== 'development') return

    let frameCount = 0
    let lastTime = performance.now()
    let animationId: number

    const measureFPS = () => {
      frameCount++
      const currentTime = performance.now()

      if (currentTime >= lastTime + 1000) {
        const fps = Math.round((frameCount * 1000) / (currentTime - lastTime))
        
        // performance.memory is non-standard Chrome API
        const performanceWithMemory = performance as Performance & { memory?: { usedJSHeapSize: number } }
        const memory = performanceWithMemory.memory
          ? Math.round(performanceWithMemory.memory.usedJSHeapSize / 1048576)
          : null

        setMetrics({
          fps,
          memory,
          loadTime: Math.round(performance.now()),
        })

        frameCount = 0
        lastTime = currentTime
      }

      animationId = requestAnimationFrame(measureFPS)
    }

    animationId = requestAnimationFrame(measureFPS)

    // Toggle visibility with keyboard shortcut (Ctrl/Cmd + Shift + P)
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'P') {
        setIsVisible((prev) => !prev)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  if (process.env.NODE_ENV !== 'development' || !isVisible) return null

  const getFPSColor = (fps: number) => {
    if (fps >= 50) return 'text-green-500'
    if (fps >= 30) return 'text-yellow-500'
    return 'text-red-500'
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 rounded-lg bg-black/80 p-3 font-mono text-xs text-white backdrop-blur">
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <span className="text-gray-400">FPS:</span>
          <span className={getFPSColor(metrics.fps)}>{metrics.fps}</span>
        </div>
        {metrics.memory !== null && (
          <div className="flex items-center gap-2">
            <span className="text-gray-400">Memory:</span>
            <span>{metrics.memory} MB</span>
          </div>
        )}
        <div className="flex items-center gap-2">
          <span className="text-gray-400">Load:</span>
          <span>{(metrics.loadTime / 1000).toFixed(2)}s</span>
        </div>
      </div>
      <div className="mt-2 border-t border-gray-600 pt-2 text-[10px] text-gray-500">
        Press Ctrl+Shift+P to toggle
      </div>
    </div>
  )
}