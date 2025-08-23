'use client'

import { motion } from 'framer-motion'
import { Code2, Database, Wrench, Info } from 'lucide-react'

export type ProficiencyLevel = 'Advanced' | 'Working Proficiency' | 'Familiar'

export interface Skill {
  name: string
  level: ProficiencyLevel
}

export interface SkillCategory {
  title: string
  icon: React.ElementType
  skills: Skill[]
}

const skillCategories: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: Code2,
    skills: [
      { name: 'React', level: 'Advanced' },
      { name: 'Next.js', level: 'Working Proficiency' },
      { name: 'TypeScript / JavaScript (ES6+)', level: 'Working Proficiency' },
      { name: 'Tailwind CSS', level: 'Working Proficiency' },
      { name: 'Redux Toolkit', level: 'Familiar' },
      { name: 'Framer Motion', level: 'Familiar' },
      { name: 'Material UI', level: 'Working Proficiency' },
    ]
  },
  {
    title: 'Backend',
    icon: Database,
    skills: [
      { name: 'Node.js', level: 'Working Proficiency' },
      { name: 'Express.js', level: 'Working Proficiency' },
      { name: 'PostgreSQL', level: 'Working Proficiency' },
      { name: 'JWT Authentication', level: 'Working Proficiency' },
      { name: 'Docker', level: 'Familiar' },
    ]
  },
  {
    title: 'Tools & Platforms',
    icon: Wrench,
    skills: [
      { name: 'Git & GitHub', level: 'Working Proficiency' },
      { name: 'Vercel · Render · Railway', level: 'Working Proficiency' },
      { name: 'VS Code', level: 'Advanced' },
    ]
  }
]

const levelConfig = {
  'Advanced': {
    badge: 'bg-primary text-primary-foreground',
    glow: 'shadow-sm shadow-primary/20',
    description: 'Production-ready expertise'
  },
  'Working Proficiency': {
    badge: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20',
    glow: '',
    description: 'Solid practical experience'
  },
  'Familiar': {
    badge: 'bg-secondary text-secondary-foreground',
    glow: '',
    description: 'Basic understanding & usage'
  }
}

export function SkillsDisplay() {
  return (
    <div className="space-y-8">
      {/* Legend */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="rounded-lg border bg-card/50 backdrop-blur p-4"
      >
        <div className="flex items-center gap-2 mb-3">
          <Info className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm font-medium">Proficiency Levels</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
          {Object.entries(levelConfig).map(([level, config]) => (
            <div key={level} className="flex items-center gap-2">
              <span className={`px-2 py-0.5 rounded-md text-xs font-medium ${config.badge} ${config.glow}`}>
                {level}
              </span>
              <span className="text-muted-foreground">{config.description}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Skills Grid */}
      <div className="grid gap-6 md:grid-cols-3">
        {skillCategories.map((category, categoryIndex) => {
          const Icon = category.icon
          return (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="rounded-lg border bg-card/50 backdrop-blur p-6 hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-lg">{category.title}</h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: categoryIndex * 0.1 + index * 0.05 }}
                    className="flex items-center justify-between gap-2"
                  >
                    <span className="text-sm text-foreground/90">{skill.name}</span>
                    <span 
                      className={`px-2 py-0.5 rounded-md text-xs font-medium whitespace-nowrap ${
                        levelConfig[skill.level].badge
                      } ${levelConfig[skill.level].glow}`}
                    >
                      {skill.level === 'Working Proficiency' ? 'Working' : skill.level}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Additional Context */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-center text-sm text-muted-foreground mt-6"
      >
        Always expanding my toolkit and deepening expertise through hands-on projects
      </motion.div>
    </div>
  )
}