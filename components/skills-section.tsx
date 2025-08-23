'use client'

import { motion } from 'framer-motion'
import { Skill } from '@/lib/types'

interface SkillsSectionProps {
  skills: Skill[]
}

export function SkillsSection({ skills }: SkillsSectionProps) {
  const categories = ['frontend', 'backend', 'tools'] as const
  const categoryLabels = {
    frontend: 'Frontend Development',
    backend: 'Backend Development',
    tools: 'Tools & Technologies'
  }

  const categoryIcons = {
    frontend: '🎨',
    backend: '⚙️',
    tools: '🛠️'
  }

  return (
    <div className="space-y-8">
      {categories.map((category, categoryIndex) => {
        const categorySkills = skills.filter(skill => skill.category === category)
        
        return (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: categoryIndex * 0.2 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl" role="img" aria-label={category}>
                {categoryIcons[category]}
              </span>
              <h3 className="text-xl font-semibold">{categoryLabels[category]}</h3>
            </div>
            
            <div className="grid gap-4 sm:grid-cols-2">
              {categorySkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: categoryIndex * 0.2 + index * 0.05 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-xs text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="relative h-2 w-full overflow-hidden rounded-full bg-secondary">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ 
                        delay: categoryIndex * 0.2 + index * 0.05 + 0.3,
                        duration: 0.8,
                        ease: 'easeOut'
                      }}
                      className="absolute left-0 top-0 h-full bg-gradient-to-r from-primary to-primary/70"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}