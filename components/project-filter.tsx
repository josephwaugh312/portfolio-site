'use client'

import { motion } from 'framer-motion'
import { useState, useMemo } from 'react'
import { X } from 'lucide-react'

interface ProjectFilterProps {
  categories: string[]
  technologies: string[]
  activeTechnologies: string[] // Technologies that appear in currently visible projects
  onFilterChange: (filters: { 
    categories: string[]
    technologies: string[] 
  }) => void
}

export function ProjectFilter({ 
  categories, 
  technologies, 
  activeTechnologies,
  onFilterChange 
}: ProjectFilterProps) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([])

  const handleCategoryToggle = (category: string) => {
    const newCategories = selectedCategories.includes(category)
      ? selectedCategories.filter(c => c !== category)
      : [...selectedCategories, category]
    
    setSelectedCategories(newCategories)
    onFilterChange({ 
      categories: newCategories, 
      technologies: selectedTechnologies 
    })
  }

  const handleTechnologyToggle = (technology: string) => {
    const newTechnologies = selectedTechnologies.includes(technology)
      ? selectedTechnologies.filter(t => t !== technology)
      : [...selectedTechnologies, technology]
    
    setSelectedTechnologies(newTechnologies)
    onFilterChange({ 
      categories: selectedCategories, 
      technologies: newTechnologies 
    })
  }

  const clearFilters = () => {
    setSelectedCategories([])
    setSelectedTechnologies([])
    onFilterChange({ categories: [], technologies: [] })
  }

  const hasActiveFilters = selectedCategories.length > 0 || selectedTechnologies.length > 0

  // Only show technologies that are actually used
  const visibleTechnologies = useMemo(() => {
    return technologies.filter(tech => activeTechnologies.includes(tech))
  }, [technologies, activeTechnologies])

  return (
    <div className="space-y-4">
      {/* Active Filters Summary */}
      {hasActiveFilters && (
        <div className="flex items-center justify-between">
          <p className="text-xs text-muted-foreground">
            {selectedCategories.length > 0 && (
              <span>{selectedCategories.length} categor{selectedCategories.length === 1 ? 'y' : 'ies'}</span>
            )}
            {selectedCategories.length > 0 && selectedTechnologies.length > 0 && ' • '}
            {selectedTechnologies.length > 0 && (
              <span>{selectedTechnologies.length} technolog{selectedTechnologies.length === 1 ? 'y' : 'ies'}</span>
            )}
          </p>
          <button
            onClick={clearFilters}
            className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="h-3 w-3" />
            Clear all
          </button>
        </div>
      )}

      {/* Category Filter (OR logic) */}
      <div>
        <h3 className="text-sm font-medium mb-3">
          Categories 
          <span className="ml-2 text-xs text-muted-foreground font-normal">
            (select any)
          </span>
        </h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleCategoryToggle(category)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all capitalize ${
                selectedCategories.includes(category)
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary hover:bg-secondary/80'
              }`}
            >
              {category === 'pwa' ? 'PWA' : category}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Technology Filter (AND logic) */}
      <div>
        <h3 className="text-sm font-medium mb-3">
          Technologies 
          <span className="ml-2 text-xs text-muted-foreground font-normal">
            (must include all)
          </span>
        </h3>
        <div className="flex flex-wrap gap-2">
          {visibleTechnologies.map((tech) => (
            <motion.button
              key={tech}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleTechnologyToggle(tech)}
              className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                selectedTechnologies.includes(tech)
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary hover:bg-secondary/80'
              }`}
            >
              {tech}
            </motion.button>
          ))}
        </div>
        {visibleTechnologies.length === 0 && (
          <p className="text-xs text-muted-foreground italic">
            No technologies available for current selection
          </p>
        )}
      </div>
    </div>
  )
}