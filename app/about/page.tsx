'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { SkillsDisplay } from '@/components/skills-display'
import { Timeline } from '@/components/timeline'
import { ScrollReveal } from '@/components/scroll-reveal'
import { ParallaxSection } from '@/components/parallax-section'
import { MagneticButton } from '@/components/magnetic-button'
import { AnimatedCounter } from '@/components/animated-counter'
import { timeline } from '@/lib/data'
import { User, Briefcase, Heart, Coffee, Code, Lightbulb, Target, Zap } from 'lucide-react'
import Link from 'next/link'

const achievements = [
  { icon: Code, value: 3, label: 'Deployed Projects', suffix: '' },
  { icon: Zap, value: 1, label: 'Year of Experience', suffix: '' },
  { icon: Target, value: 2, label: 'Technical Certifications', suffix: '' },
  { icon: Lightbulb, value: 15, label: 'Core Technologies', suffix: '+' },
]


export default function AboutPage() {
  return (
    <>
      {/* Hero Section with Parallax */}
      <ParallaxSection className="relative py-32 sm:py-40" offset={50}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ 
                duration: 0.6,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              className="flex-1 text-center lg:text-left"
            >
              <h1 className="text-5xl font-bold tracking-tight sm:text-6xl mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
                About Me
              </h1>
              <p className="text-xl text-muted-foreground">
                From business strategy to building digital solutions
              </p>
            </motion.div>
            
            {/* Professional Headshot */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.7,
                delay: 0.2,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              className="relative"
            >
              {/* Decorative background blur */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-blue-600/20 blur-2xl" />
              
              {/* Image container with hover effects */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="relative"
              >
                <div className="relative h-[250px] w-[250px] sm:h-[300px] sm:w-[300px] lg:h-[350px] lg:w-[350px] rounded-full overflow-hidden ring-4 ring-primary/20 shadow-2xl">
                  <Image
                    src="/images/projects/PortfolioPhoto.JPG"
                    alt="Joseph Waugh - Full Stack Developer"
                    fill
                    priority
                    className="object-cover object-top"
                    style={{ objectPosition: '50% 2%' }}
                    sizes="(max-width: 640px) 250px, (max-width: 1024px) 300px, 350px"
                  />
                </div>
                
                {/* Subtle floating animation */}
                <motion.div
                  className="absolute inset-0 rounded-full ring-2 ring-primary/30"
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-blue-600/10 blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        </div>
      </ParallaxSection>

      <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">

          {/* Bio Section with Parallax */}
          <ScrollReveal animation="fadeUp">
            <motion.div
              className="prose prose-lg max-w-none dark:prose-invert mb-16"
              whileHover={{ scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="rounded-lg border bg-card/50 backdrop-blur p-8 mb-8 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-6">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                  >
                    <User className="h-6 w-6 text-primary" />
                  </motion.div>
                  <h2 className="text-2xl font-semibold m-0">My Story</h2>
                </div>
            
                <p className="text-base leading-relaxed">
                  After several successful years in business and sales, I discovered my true passion for 
                  software engineering. What began as curiosity about how digital products work quickly 
                  grew into late-night coding sessions and building side projects.
                </p>
                
                <p className="text-base leading-relaxed">
                  My business background gives me a unique perspective as a developer. I don&apos;t just 
                  write code — I understand business requirements, user needs, and market dynamics. This 
                  allows me to create solutions that are technically strong and aligned with real-world 
                  objectives.
                </p>
                
                <p className="text-base leading-relaxed">
                  Today, I specialize in full-stack web development, building performant and scalable 
                  applications with modern technologies like React, Next.js, TypeScript, and Node.js. 
                  I&apos;m passionate about clean code, intuitive user experiences, and continuous learning 
                  in the fast-evolving tech landscape.
                </p>
              </div>

              {/* What Drives Me */}
              <div className="grid gap-6 sm:grid-cols-2 mb-8">
                <ScrollReveal animation="slideLeft">
                  <motion.div
                    className="rounded-lg border bg-card/50 backdrop-blur p-6 h-full hover:shadow-lg transition-all hover:-translate-y-1"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <Briefcase className="h-5 w-5 text-primary" />
                      <h3 className="font-semibold m-0">Professional Focus</h3>
                    </div>
                    <ul className="text-sm space-y-2 m-0">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">▸</span>
                        Designing user-centric applications with intuitive interfaces and smooth experiences
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">▸</span>
                        Writing clean, maintainable code that follows modern best practices
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">▸</span>
                        Solving complex technical challenges with scalable, full-stack solutions
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">▸</span>
                        Continuously learning and adapting to new technologies and industry trends
                      </li>
                    </ul>
                  </motion.div>
                </ScrollReveal>

                <ScrollReveal animation="slideRight">
                  <motion.div
                    className="rounded-lg border bg-card/50 backdrop-blur p-6 h-full hover:shadow-lg transition-all hover:-translate-y-1"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <Heart className="h-5 w-5 text-primary" />
                      <h3 className="font-semibold m-0">Personal Interests</h3>
                    </div>
                    <ul className="text-sm space-y-2 m-0">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">▸</span>
                        Exploring open source projects and learning from the developer community
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">▸</span>
                        Attending tech meetups to connect and share ideas
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">▸</span>
                        Surfing and hiking for adventure and balance
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">▸</span>
                        Coffee brewing experiments — always chasing the perfect cup
                      </li>
                    </ul>
                  </motion.div>
                </ScrollReveal>
              </div>
            </motion.div>
          </ScrollReveal>

          {/* Achievement Stats */}
          <ParallaxSection className="py-16 mb-16" offset={20}>
            <ScrollReveal>
              <div className="rounded-lg bg-gradient-to-r from-primary/10 to-blue-600/10 p-8">
                <h2 className="text-2xl font-semibold mb-8 text-center">Achievements</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {achievements.map((achievement) => {
                    const Icon = achievement.icon
                    return (
                      <div key={`${achievement.label}-${achievement.value}`} className="text-center">
                        <Icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                        <div className="text-2xl font-bold">
                          <AnimatedCounter
                            key={`counter-${achievement.value}`}
                            value={achievement.value}
                            suffix={achievement.suffix}
                            duration={2500}
                          />
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">
                          {achievement.label}
                        </p>
                      </div>
                    )
                  })}
                </div>
              </div>
            </ScrollReveal>
          </ParallaxSection>

          {/* Skills Section */}
          <ScrollReveal className="mb-16">
            <h2 className="text-2xl font-semibold mb-8 flex items-center gap-3">
              <Coffee className="h-6 w-6 text-primary animate-pulse" />
              Technical Skills
            </h2>
            <SkillsDisplay />
          </ScrollReveal>

          {/* Journey Timeline */}
          <ScrollReveal animation="fadeUp" className="mb-16">
            <h2 className="text-2xl font-semibold mb-8">My Journey</h2>
            <Timeline items={timeline} />
          </ScrollReveal>

          {/* Call to Action */}
          <ScrollReveal animation="fadeScale">
            <motion.div
              className="text-center p-8 rounded-lg bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-blue-600/5 animate-gradient" />
              <div className="relative z-10">
                <h2 className="text-2xl font-semibold mb-4">
                  Let&apos;s Work Together
                </h2>
                <p className="text-muted-foreground mb-6">
                  I&apos;m always excited to connect with fellow developers and potential collaborators
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <MagneticButton
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-input bg-background px-6 py-3 text-sm font-semibold transition-all hover:bg-accent"
                  >
                    <Link href="/projects">
                      View My Work
                    </Link>
                  </MagneticButton>
                  <MagneticButton
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-lg"
                  >
                    <Link href="/contact">
                      Get In Touch
                    </Link>
                  </MagneticButton>
                </div>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </>
  )
}