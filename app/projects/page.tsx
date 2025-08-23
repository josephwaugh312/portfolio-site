'use client'

import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { ProjectCard } from '@/components/project-card'
import { ProjectFilter } from '@/components/project-filter'
import { projects } from '@/lib/data'
import { Sparkles } from 'lucide-react'

export default function ProjectsPage() {
  const [filters, setFilters] = useState<{
    categories: string[]
    technologies: string[]
  }>({ categories: [], technologies: [] })

  // Extract unique categories from all projects
  const categories = useMemo(() => {
    const cats = new Set<string>()
    projects.forEach(p => p.categories.forEach(c => cats.add(c)))
    return Array.from(cats).sort()
  }, [])

  // Extract all unique technologies from all projects
  const allTechnologies = useMemo(() => {
    const techs = new Set<string>()
    projects.forEach(p => p.technologies.forEach(t => techs.add(t)))
    // Return only the technologies that are actually used in the projects
    const actualTechs = [
      'React',
      'TypeScript',
      'JavaScript',
      'Next.js',
      'Node.js',
      'Express',
      'PostgreSQL',
      'JWT',
      'Docker',
      'Tailwind CSS',
      'Material UI',
      'Redux Toolkit',
      'React Router',
      'Framer Motion',
      'Vercel',
      'Render',
      'Railway'
    ]
    return actualTechs.filter(tech => techs.has(tech))
  }, [])

  // Filter projects based on selected filters
  const filteredProjects = useMemo(() => {
    let filtered = [...projects]

    // Category filter (OR logic - show projects that match ANY selected category)
    if (filters.categories.length > 0) {
      filtered = filtered.filter(p => 
        p.categories.some(cat => filters.categories.includes(cat))
      )
    }

    // Technology filter (AND logic - show projects that have ALL selected technologies)
    if (filters.technologies.length > 0) {
      filtered = filtered.filter(p => 
        filters.technologies.every(tech => p.technologies.includes(tech))
      )
    }

    // Stable sort by featured first, then by id (not title to avoid locale issues)
    return filtered.sort((a, b) => {
      if (a.featured === b.featured) {
        // Use id for stable secondary sort
        return a.id.localeCompare(b.id)
      }
      return a.featured ? -1 : 1
    })
  }, [filters])

  // Get technologies that appear in currently visible projects
  const activeTechnologies = useMemo(() => {
    const techs = new Set<string>()
    filteredProjects.forEach(p => p.technologies.forEach(t => techs.add(t)))
    return Array.from(techs)
  }, [filteredProjects])

  const handleFilterChange = (newFilters: typeof filters) => {
    setFilters(newFilters)
  }

  return (
    <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            Featured Projects
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real-world applications showcasing full-stack development, secure architectures, and modern web technologies
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-8 p-6 rounded-lg border bg-card"
        >
          <div className="flex items-center gap-2 mb-4">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Filter Projects</span>
            <span className="ml-auto text-xs text-muted-foreground">
              Showing {filteredProjects.length} of {projects.length} projects
            </span>
          </div>
          <ProjectFilter
            categories={categories}
            technologies={allTechnologies}
            activeTechnologies={activeTechnologies}
            onFilterChange={handleFilterChange}
          />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>

        {/* No results message */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-muted-foreground mb-4">
              No projects found matching your filters.
            </p>
            <button
              onClick={() => setFilters({ categories: [], technologies: [] })}
              className="text-sm text-primary hover:underline"
            >
              Clear all filters
            </button>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center p-8 rounded-lg bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20"
        >
          <h2 className="text-2xl font-semibold mb-4">
            Interested in working together?
          </h2>
          <p className="text-muted-foreground mb-6">
            I&apos;m always open to discussing new projects and opportunities
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:scale-105 hover:shadow-lg"
          >
            Let&apos;s Connect
          </a>
        </motion.div>
      </div>
    </div>
  )
}