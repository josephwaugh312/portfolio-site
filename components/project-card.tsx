'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ExternalLink, Github, Star } from 'lucide-react'
import { Project } from '@/lib/types'

interface ProjectCardProps {
  project: Project
  index: number
}

// Define signature glow colors for each project
interface GlowConfig {
  primary: string
  secondary?: string // For gradient effects
}

const getProjectGlowConfig = (projectId: string): GlowConfig => {
  const glowConfigs: Record<string, GlowConfig> = {
    'lockr-password-manager': { primary: '#00b4ff' }, // Fluorescent blue
    'vibeflo-pomodoro': { primary: '#00d4ff' }, // Bright cyan
    'shiftsync-scheduler': { primary: '#ff8c42', secondary: '#b366f1' }, // Orange to purple gradient
  }
  
  // Return the specific config or a default subtle glow
  return glowConfigs[projectId] || { primary: '#6366f1' }
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const [imageError, setImageError] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const glowConfig = getProjectGlowConfig(project.id)

  // Convert hex to RGB for better opacity control
  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : { r: 99, g: 102, b: 241 }
  }

  const primaryRgb = hexToRgb(glowConfig.primary)
  const primaryRgbString = `${primaryRgb.r}, ${primaryRgb.g}, ${primaryRgb.b}`
  
  // Handle gradient glow for projects with secondary color
  const hasGradient = !!glowConfig.secondary
  const secondaryRgb = hasGradient ? hexToRgb(glowConfig.secondary!) : primaryRgb
  const secondaryRgbString = `${secondaryRgb.r}, ${secondaryRgb.g}, ${secondaryRgb.b}`

  // Create the fluorescent glow style with CSS custom properties
  const createGlowShadow = (intensity: number) => {
    if (hasGradient) {
      // Create a blended gradient effect for dual-color glow
      return `
        0 0 ${25 * intensity}px rgba(${primaryRgbString}, ${0.25 * intensity}),
        0 0 ${50 * intensity}px rgba(${primaryRgbString}, ${0.15 * intensity}),
        0 0 ${75 * intensity}px rgba(${secondaryRgbString}, ${0.1 * intensity}),
        0 0 ${100 * intensity}px rgba(${secondaryRgbString}, ${0.05 * intensity}),
        inset 0 0 ${20 * intensity}px rgba(${primaryRgbString}, ${0.08 * intensity}),
        0 10px 25px -5px rgba(0, 0, 0, ${0.2 * intensity}),
        0 8px 10px -5px rgba(0, 0, 0, ${0.1 * intensity})
      `
    } else {
      // Single color glow
      return `
        0 0 ${25 * intensity}px rgba(${primaryRgbString}, ${0.25 * intensity}),
        0 0 ${50 * intensity}px rgba(${primaryRgbString}, ${0.15 * intensity}),
        0 0 ${75 * intensity}px rgba(${primaryRgbString}, ${0.1 * intensity}),
        0 0 ${100 * intensity}px rgba(${primaryRgbString}, ${0.05 * intensity}),
        inset 0 0 ${20 * intensity}px rgba(${primaryRgbString}, ${0.08 * intensity}),
        0 10px 25px -5px rgba(0, 0, 0, ${0.2 * intensity}),
        0 8px 10px -5px rgba(0, 0, 0, ${0.1 * intensity})
      `
    }
  }

  const cardStyle = {
    '--glow-primary': glowConfig.primary,
    '--glow-secondary': glowConfig.secondary || glowConfig.primary,
    '--glow-rgb-primary': primaryRgbString,
    '--glow-rgb-secondary': secondaryRgbString,
    // Base subtle glow (always present) vs active hover glow
    boxShadow: isHovered ? createGlowShadow(1) : createGlowShadow(0.2),
    borderColor: isHovered 
      ? hasGradient 
        ? `rgba(${primaryRgbString}, 0.4)` 
        : `rgba(${primaryRgbString}, 0.4)`
      : undefined,
    transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
  } as React.CSSProperties

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        delay: index * 0.1,
        type: 'spring',
        stiffness: 100,
        damping: 10
      }}
      whileHover={{ y: -5 }}
      className="group relative overflow-hidden rounded-xl border bg-card shadow-sm transition-all duration-500 hover:shadow-xl focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2"
      style={cardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      role="article"
      aria-label={`Project: ${project.title}`}
      suppressHydrationWarning
    >
      {/* Featured Badge */}
      {project.featured && (
        <div className="absolute top-4 right-4 z-10">
          <div className="flex items-center gap-1 rounded-full bg-primary/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-primary-foreground">
            <Star className="h-3 w-3" />
            Featured
          </div>
        </div>
      )}

      {/* Image Placeholder */}
      <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5">
        {project.image && !imageError ? (
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            suppressHydrationWarning
            fill
            className="object-cover transition-opacity duration-300"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            onError={() => setImageError(true)}
            priority={project.featured}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
            <div className="text-6xl opacity-20">
              {project.categories.includes('security') ? '🔐' :
               project.categories.includes('backend') ? '⚙️' : 
               project.categories.includes('fullstack') ? '🚀' : 
               project.categories.includes('pwa') ? '📱' : '🎨'}
            </div>
          </div>
        )}
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
          <div className="flex gap-3">
            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 rounded-full bg-background/90 backdrop-blur-sm px-3 py-1.5 text-xs font-medium transition-all hover:bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                onClick={(e) => e.stopPropagation()}
                aria-label={`Visit app: ${project.title}`}
                suppressHydrationWarning
              >
                <ExternalLink className="h-3 w-3" />
                Visit App
              </Link>
            )}
            {project.githubUrl && (
              <Link
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 rounded-full bg-background/90 backdrop-blur-sm px-3 py-1.5 text-xs font-medium transition-all hover:bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                onClick={(e) => e.stopPropagation()}
                aria-label={`View source code for ${project.title}`}
                suppressHydrationWarning
              >
                <Github className="h-3 w-3" />
                Code
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors" id={`project-${project.id}`} suppressHydrationWarning>
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {project.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs font-medium"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="inline-flex items-center rounded-md bg-secondary/50 px-2 py-1 text-xs text-muted-foreground">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
      </div>

      {/* Category indicator with matching glow */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-1 transform scale-x-0 group-hover:scale-x-100 transition-all duration-500 origin-left"
        style={{
          background: hasGradient 
            ? `linear-gradient(to right, ${glowConfig.primary}, ${glowConfig.secondary})`
            : `linear-gradient(to right, ${glowConfig.primary}, ${glowConfig.primary}dd)`,
          boxShadow: isHovered 
            ? `0 0 10px rgba(${primaryRgbString}, 0.5), 0 0 20px rgba(${primaryRgbString}, 0.3)`
            : 'none',
        }}
      />
    </motion.div>
  )
}