'use client'

import { motion } from 'framer-motion'
import { Calendar, Briefcase, GraduationCap, Star } from 'lucide-react'
import { TimelineItem } from '@/lib/types'

interface TimelineProps {
  items: TimelineItem[]
}

export function Timeline({ items }: TimelineProps) {
  const getIcon = (type: TimelineItem['type']) => {
    switch (type) {
      case 'work':
        return Briefcase
      case 'education':
        return GraduationCap
      case 'milestone':
        return Star
      default:
        return Calendar
    }
  }

  const getIconColor = (type: TimelineItem['type']) => {
    switch (type) {
      case 'work':
        return 'text-blue-500'
      case 'education':
        return 'text-green-500'
      case 'milestone':
        return 'text-primary'
      default:
        return 'text-muted-foreground'
    }
  }

  return (
    <div className="relative space-y-8">
      {/* Vertical line */}
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />

      {items.map((item, index) => {
        const Icon = getIcon(item.type)
        const iconColor = getIconColor(item.type)

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="relative flex gap-6"
          >
            {/* Icon */}
            <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center">
              <div className={`flex h-16 w-16 items-center justify-center rounded-full bg-background border-4 border-background shadow-lg ${iconColor}`}>
                <Icon className="h-6 w-6" />
              </div>
            </div>

            {/* Content */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="flex-1 rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="inline-flex items-center rounded-md bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
                  {item.year}
                </span>
                {item.company && (
                  <span className="text-sm text-muted-foreground">
                    at {item.company}
                  </span>
                )}
              </div>
              
              <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          </motion.div>
        )
      })}
    </div>
  )
}