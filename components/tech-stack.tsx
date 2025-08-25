'use client'

import { motion, AnimatePresence } from 'framer-motion'

interface TechStackProps {
  technologies: string[] | { [category: string]: string[] } | null | undefined
  className?: string
}

type TechStackGroup = {
  [category: string]: string[]
}

// Configuration for tech icons and colors
function getTechConfig(tech: string) {
  const configs: Record<string, { emoji: string; color: string }> = {
    'HTML/CSS': {
      emoji: '🌐',
      color: 'from-orange-500/20 to-red-500/10 border-orange-500/30 hover:border-orange-500/50'
    },
    'React': {
      emoji: '⚛️',
      color: 'from-cyan-500/20 to-cyan-600/10 border-cyan-500/30 hover:border-cyan-500/50'
    },
    'Redux Toolkit': {
      emoji: '🔄',
      color: 'from-purple-500/20 to-purple-600/10 border-purple-500/30 hover:border-purple-500/50'
    },
    'Next.js': {
      emoji: '▲',
      color: 'from-gray-500/20 to-gray-600/10 border-gray-500/30 hover:border-gray-500/50'
    },
    'TypeScript': {
      emoji: '🔷',
      color: 'from-blue-500/20 to-blue-600/10 border-blue-500/30 hover:border-blue-500/50'
    },
    'JavaScript (ES6+)': {
      emoji: '🟨',
      color: 'from-yellow-500/20 to-yellow-600/10 border-yellow-500/30 hover:border-yellow-500/50'
    },
    'Tailwind CSS': {
      emoji: '🎨',
      color: 'from-teal-500/20 to-teal-600/10 border-teal-500/30 hover:border-teal-500/50'
    },
    'Framer Motion': {
      emoji: '🎭',
      color: 'from-pink-500/20 to-pink-600/10 border-pink-500/30 hover:border-pink-500/50'
    },
    'Material UI (MUI)': {
      emoji: '💎',
      color: 'from-indigo-500/20 to-indigo-600/10 border-indigo-500/30 hover:border-indigo-500/50'
    },
    'Node.js': {
      emoji: '🟢',
      color: 'from-green-500/20 to-green-600/10 border-green-500/30 hover:border-green-500/50'
    },
    'Express.js': {
      emoji: '🚂',
      color: 'from-gray-500/20 to-gray-600/10 border-gray-500/30 hover:border-gray-500/50'
    },
    'PostgreSQL': {
      emoji: '🐘',
      color: 'from-blue-600/20 to-blue-700/10 border-blue-600/30 hover:border-blue-600/50'
    },
    'Docker': {
      emoji: '🐳',
      color: 'from-sky-500/20 to-sky-600/10 border-sky-500/30 hover:border-sky-500/50'
    },
    'Vercel': {
      emoji: '▲',
      color: 'from-gray-500/20 to-gray-600/10 border-gray-500/30 hover:border-gray-500/50'
    },
    'Render': {
      emoji: '🚀',
      color: 'from-emerald-500/20 to-emerald-600/10 border-emerald-500/30 hover:border-emerald-500/50'
    },
    'Railway': {
      emoji: '🚄',
      color: 'from-violet-500/20 to-violet-600/10 border-violet-500/30 hover:border-violet-500/50'
    },
    'Python': {
      emoji: '🐍',
      color: 'from-blue-500/20 to-yellow-500/10 border-blue-500/30 hover:border-blue-500/50'
    },
    'FastAPI': {
      emoji: '⚡',
      color: 'from-teal-500/20 to-teal-600/10 border-teal-500/30 hover:border-teal-500/50'
    },
    'Express': {
      emoji: '🚂',
      color: 'from-gray-500/20 to-gray-600/10 border-gray-500/30 hover:border-gray-500/50'
    },
    'Git': {
      emoji: '📦',
      color: 'from-orange-500/20 to-orange-600/10 border-orange-500/30 hover:border-orange-500/50'
    }
  }
  
  return configs[tech] || {
    emoji: '💻',
    color: 'from-primary/10 to-primary/5 border-primary/20 hover:border-primary/40'
  }
}

export function TechStack({ technologies, className = '' }: TechStackProps) {

  // Handle null/undefined
  if (!technologies) {
    return null
  }

  // Helper function to safely check if data is a flat array
  const isFlatArray = (data: any): data is string[] => {
    return Array.isArray(data) && data.every(item => typeof item === 'string')
  }

  // Helper function to check for grouped structure
  const isGroupedStructure = (data: any): data is TechStackGroup => {
    if (!data || typeof data !== 'object' || Array.isArray(data)) {
      return false
    }
    
    const keys = Object.keys(data)
    if (keys.length === 0) {
      return false
    }
    
    // Check if all values are arrays of strings
    for (const key of keys) {
      const value = data[key]
      if (!Array.isArray(value)) {
        return false
      }
      for (const item of value) {
        if (typeof item !== 'string') {
          return false
        }
      }
    }
    
    return true
  }

  // Helper function to render a single tech badge
  const renderTechBadge = (tech: string, index: number) => {
    const config = getTechConfig(tech)
    
    return (
      <motion.div
        key={`${tech}-${index}`}
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ 
          delay: index * 0.05, 
          type: 'spring',
          stiffness: 100,
          damping: 10
        }}
        whileHover={{ 
          scale: 1.1,
          rotate: [0, -5, 5, -5, 0],
          transition: { duration: 0.3 }
        }}
        className="group relative"
      >
        <div className={`flex items-center gap-2 rounded-full bg-gradient-to-r ${config.color} px-4 py-2 backdrop-blur-sm transition-all duration-300`}>
          <span className="text-lg" role="img" aria-label={`${tech} icon`}>
            {config.emoji}
          </span>
          <span className="text-sm font-medium">{tech}</span>
        </div>
        
        {/* Tooltip on hover */}
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
          <div className="bg-popover text-popover-foreground text-xs rounded px-2 py-1 whitespace-nowrap shadow-lg">
            {tech}
          </div>
        </div>
      </motion.div>
    )
  }

  // Determine data structure and render accordingly
  if (isFlatArray(technologies)) {
    // Render flat array of technologies
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key="tech-stack-flat"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className={`flex flex-wrap gap-3 ${className}`}
        >
          {Array.isArray(technologies) ? technologies.map((tech, index) => renderTechBadge(tech, index)) : null}
        </motion.div>
      </AnimatePresence>
    )
  } else if (isGroupedStructure(technologies)) {
    // Render grouped structure with categories
    let globalIndex = 0
    
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key="tech-stack-grouped"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className={`flex flex-wrap justify-center gap-8 ${className}`}
        >
          {Object.entries(technologies).map(([category, techs], categoryIndex) => {
            // Safety check: ensure techs is an array
            if (!Array.isArray(techs)) {
              return null
            }
            
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  delay: categoryIndex * 0.1,
                  duration: 0.5,
                  ease: 'easeOut'
                }}
                className="space-y-2"
              >
                <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground/70">
                  {category}
                </h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {techs.map((tech) => {
                    const currentIndex = globalIndex++
                    return renderTechBadge(tech, currentIndex)
                  })}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </AnimatePresence>
    )
  } else {
    // Fallback for unrecognized structure
    return null
  }
}