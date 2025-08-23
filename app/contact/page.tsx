'use client'

import { motion } from 'framer-motion'
import { ContactForm } from '@/components/contact-form'
import { SocialLinks } from '@/components/social-links'
import { socialLinks } from '@/lib/data'
import { Mail, MapPin, Clock } from 'lucide-react'

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            Get In Touch
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? I&apos;d love to hear about it. Let&apos;s work together 
            to bring your ideas to life.
          </p>
        </motion.div>
        
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Contact Form - Takes up 2 columns on large screens */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2"
          >
            <div className="rounded-lg border bg-card p-8">
              <h2 className="mb-6 text-2xl font-semibold">Send a Message</h2>
              <ContactForm />
            </div>
          </motion.div>
          
          {/* Contact Info & Social Links - Takes up 1 column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            {/* Quick Contact Info */}
            <div className="rounded-lg border bg-card p-6">
              <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">Email</p>
                    <a 
                      href="mailto:joseph.waugh312@gmail.com" 
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      joseph.waugh312@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">Location</p>
                    <p className="text-sm text-muted-foreground">
                      San Francisco, CA
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">Response Time</p>
                    <p className="text-sm text-muted-foreground">
                      Within 24-48 hours
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="rounded-lg border bg-card p-6">
              <SocialLinks 
                links={socialLinks} 
                showResume={true}
                showAvailability={true}
              />
            </div>

            {/* FAQ or Additional Info */}
            <div className="rounded-lg border bg-secondary/50 p-6">
              <h3 className="font-semibold mb-3">Before You Reach Out</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Check out my projects to see my work style</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>Include project timeline and budget if possible</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>The more details, the better I can help</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Office Hours / Availability Calendar (Optional Enhancement) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12 rounded-lg bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 p-8"
        >
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">
              Let&apos;s Schedule a Call
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Prefer to chat? I&apos;m available for video calls to discuss your project 
              in detail. Book a 30-minute consultation to explore how we can work together.
            </p>
            <button
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:scale-105 hover:shadow-lg"
              onClick={() => window.open('https://calendly.com/yourusername', '_blank')}
            >
              Schedule a Meeting
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}