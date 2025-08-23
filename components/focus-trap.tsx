'use client'

import { ReactNode, useEffect, useRef } from 'react'

interface FocusTrapProps {
  children: ReactNode
  active?: boolean
  className?: string
  restoreFocus?: boolean
}

export function FocusTrap({
  children,
  active = true,
  className = '',
  restoreFocus = true,
}: FocusTrapProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const previouslyFocusedElement = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!active || !containerRef.current) return

    // Store the currently focused element
    if (restoreFocus) {
      previouslyFocusedElement.current = document.activeElement as HTMLElement
    }

    const container = containerRef.current
    const focusableElements = container.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])'
    )

    const firstFocusable = focusableElements[0]
    const lastFocusable = focusableElements[focusableElements.length - 1]

    // Focus the first focusable element
    if (firstFocusable) {
      firstFocusable.focus()
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return

      // If Shift + Tab
      if (e.shiftKey) {
        if (document.activeElement === firstFocusable) {
          e.preventDefault()
          lastFocusable?.focus()
        }
      } else {
        // If Tab
        if (document.activeElement === lastFocusable) {
          e.preventDefault()
          firstFocusable?.focus()
        }
      }
    }

    // Prevent focus from leaving the trap
    const handleFocusOut = (e: FocusEvent) => {
      if (!container.contains(e.relatedTarget as Node)) {
        e.preventDefault()
        firstFocusable?.focus()
      }
    }

    container.addEventListener('keydown', handleKeyDown)
    container.addEventListener('focusout', handleFocusOut)

    return () => {
      container.removeEventListener('keydown', handleKeyDown)
      container.removeEventListener('focusout', handleFocusOut)

      // Restore focus to the previously focused element
      if (restoreFocus && previouslyFocusedElement.current) {
        previouslyFocusedElement.current.focus()
      }
    }
  }, [active, restoreFocus])

  return (
    <div ref={containerRef} className={className}>
      {children}
    </div>
  )
}