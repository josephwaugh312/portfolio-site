'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ScrollReveal } from './scroll-reveal'

interface Skill {
  name: string
  level: number
  category: string
  icon?: string
}

interface AnimatedSkillsProps {
  skills: Skill[]
  className?: string
}

export function AnimatedSkills({ skills, className = '' }: AnimatedSkillsProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const categories = Array.from(new Set(skills.map(skill => skill.category)))

  return (
    <div ref={ref} className={className}>
      {categories.map((category, categoryIndex) => (
        <ScrollReveal
          key={category}
          delay={categoryIndex * 0.1}
          className="mb-8"
        >
          <h3 className="mb-4 text-lg font-semibold text-foreground">
            {category}
          </h3>
          <div className="space-y-4">
            {skills
              .filter(skill => skill.category === category)
              .map((skill, index) => (
                <div key={skill.name} className="group">
                  <div className="mb-2 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {skill.icon && (
                        <span className="text-2xl" aria-hidden="true">
                          {skill.icon}
                        </span>
                      )}
                      <span className="font-medium text-sm">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {skill.level}%
                    </span>
                  </div>
                  
                  <div className="relative h-2 w-full overflow-hidden rounded-full bg-secondary">
                    <motion.div
                      className="absolute left-0 top-0 h-full bg-gradient-to-r from-primary to-primary/80"
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                      transition={{
                        duration: 1,
                        delay: categoryIndex * 0.1 + index * 0.05,
                        ease: [0.25, 0.1, 0.25, 1],
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer" />
                    </motion.div>
                  </div>
                </div>
              ))}
          </div>
        </ScrollReveal>
      ))}
    </div>
  )
}