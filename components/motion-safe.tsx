'use client'

import { ReactNode } from 'react'
import { motion, MotionProps } from 'framer-motion'
import { useReducedMotion } from '@/hooks/use-animations'

interface MotionSafeProps extends MotionProps {
  children: ReactNode
  className?: string
  reducedMotionFallback?: MotionProps
}

export function MotionSafe({
  children,
  className,
  reducedMotionFallback = {},
  ...motionProps
}: MotionSafeProps) {
  const prefersReducedMotion = useReducedMotion()

  if (prefersReducedMotion) {
    // Apply reduced motion fallback or remove animations entirely
    const { 
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      initial, 
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      animate, 
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      exit, 
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      whileHover, 
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      whileTap, 
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      whileDrag, 
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      whileInView,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      transition,
      ...restProps 
    } = motionProps
    
    const fallbackProps = {
      ...restProps,
      ...reducedMotionFallback,
      transition: { duration: 0.01 },
    }

    return (
      <motion.div className={className} {...fallbackProps}>
        {children}
      </motion.div>
    )
  }

  return (
    <motion.div className={className} {...motionProps}>
      {children}
    </motion.div>
  )
}