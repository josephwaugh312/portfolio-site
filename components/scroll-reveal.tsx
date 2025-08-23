'use client'

import { ReactNode } from 'react'
import { motion, Variants } from 'framer-motion'
import { fadeInUp, fadeInScale, slideInFromLeft, slideInFromRight } from '@/lib/animations'

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  animation?: 'fadeUp' | 'fadeScale' | 'slideLeft' | 'slideRight' | 'custom'
  customAnimation?: Variants
  delay?: number
  duration?: number
  once?: boolean
  amount?: number
}

export function ScrollReveal({
  children,
  className = '',
  animation = 'fadeUp',
  customAnimation,
  delay = 0,
  duration,
  once = true,
  amount = 0.3,
}: ScrollRevealProps) {
  const animations: Record<string, Variants> = {
    fadeUp: fadeInUp,
    fadeScale: fadeInScale,
    slideLeft: slideInFromLeft,
    slideRight: slideInFromRight,
    custom: customAnimation || fadeInUp,
  }

  const selectedAnimation = animations[animation]
  
  // Override duration if provided
  if (duration && selectedAnimation?.animate && typeof selectedAnimation.animate === 'object' && 'transition' in selectedAnimation.animate) {
    (selectedAnimation.animate as any).transition.duration = duration
  }
  
  // Add delay if provided
  if (delay && selectedAnimation?.animate && typeof selectedAnimation.animate === 'object' && 'transition' in selectedAnimation.animate) {
    (selectedAnimation.animate as any).transition.delay = delay
  }

  return (
    <motion.div
      className={className}
      initial="initial"
      whileInView="animate"
      viewport={{ once, amount }}
      variants={selectedAnimation || fadeInUp}
    >
      {children}
    </motion.div>
  )
}