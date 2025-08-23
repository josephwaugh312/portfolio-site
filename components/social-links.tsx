'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Github, Linkedin, Twitter, Mail, Download, Calendar } from 'lucide-react'
import { SocialLink } from '@/lib/types'

interface SocialLinksProps {
  links: SocialLink[]
  showResume?: boolean
  showAvailability?: boolean
}

export function SocialLinks({ links, showResume = false, showAvailability = false }: SocialLinksProps) {
  const getIcon = (iconName: string) => {
    switch (iconName.toLowerCase()) {
      case 'github':
        return Github
      case 'linkedin':
        return Linkedin
      case 'twitter':
        return Twitter
      case 'mail':
        return Mail
      default:
        return Mail
    }
  }

  return (
    <div className="space-y-6">
      {/* Social Links */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Connect With Me</h3>
        <div className="flex flex-wrap gap-3">
          {links.map((link, index) => {
            const Icon = getIcon(link.icon)
            return (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={link.url}
                  target={link.url.startsWith('http') ? '_blank' : undefined}
                  rel={link.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center justify-center h-12 w-12 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
                  aria-label={link.name}
                >
                  <Icon className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Resume Download */}
      {showResume && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Link
            href="/Joseph Waugh Professional Resume.pdf"
            download
            className="inline-flex items-center gap-2 rounded-lg bg-primary/10 hover:bg-primary/20 border border-primary/20 px-6 py-3 text-sm font-medium transition-all hover:scale-105"
          >
            <Download className="h-4 w-4" />
            Download Resume
          </Link>
        </motion.div>
      )}

      {/* Availability Status */}
      {showAvailability && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="rounded-lg bg-green-500/10 border border-green-500/20 p-4"
        >
          <div className="flex items-center gap-3">
            <div className="relative">
              <Calendar className="h-5 w-5 text-green-600 dark:text-green-400" />
              <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-green-500 animate-pulse" />
            </div>
            <div>
              <p className="text-sm font-medium text-green-600 dark:text-green-400">
                Currently Available
              </p>
              <p className="text-xs text-muted-foreground">
                Open to new opportunities and collaborations
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  )
}