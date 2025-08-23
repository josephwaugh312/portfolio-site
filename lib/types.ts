export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  featured?: boolean
  categories: ('frontend' | 'backend' | 'fullstack' | 'pwa' | 'security')[]
}

export interface Skill {
  name: string
  level: number // 1-100
  category: 'frontend' | 'backend' | 'tools' | 'other'
}

export interface TimelineItem {
  year: string
  title: string
  company?: string
  description: string
  type: 'work' | 'education' | 'milestone'
}

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export interface SocialLink {
  name: string
  url: string
  icon: string
}