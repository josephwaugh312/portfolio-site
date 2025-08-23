import Link from 'next/link'
import { ArrowRight, Code2, Palette, Zap, Sparkles, Rocket } from 'lucide-react'
import { Typewriter } from '@/components/typewriter'
import { ScrollIndicator } from '@/components/scroll-indicator'
import { Hero3DWrapper } from '@/components/hero-3d-wrapper'
import { ScrollReveal } from '@/components/scroll-reveal'
import { MagneticButton } from '@/components/magnetic-button'
import { AnimatedCounter } from '@/components/animated-counter'
import { ParallaxSection } from '@/components/parallax-section'
import { StructuredData } from '@/components/structured-data'
import { GrainOverlay } from '@/components/grain-overlay'
import { TechStack } from '@/components/tech-stack'
import { techStack } from '@/lib/data'

const features = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Writing maintainable, scalable, and efficient code',
  },
  {
    icon: Palette,
    title: 'Modern Design',
    description: 'Creating beautiful and intuitive user interfaces',
  },
  {
    icon: Zap,
    title: 'Performance',
    description: 'Optimizing for speed and seamless user experience',
  },
]

const stats = [
  { label: 'Shipped Projects', value: 3, suffix: '' },
  { label: 'Year Building', value: 1, suffix: '' },
  { label: 'Core Technologies', value: 15, suffix: '+' },
  { label: 'Open Source Focus', value: 100, suffix: '%' },
]

export default function HomePage() {
  return (
    <>
      <StructuredData type="Person" />
      <StructuredData type="WebSite" />
      <GrainOverlay />
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-secondary/20 min-h-screen flex items-center">
        <div className="container mx-auto px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
          <ScrollReveal className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
              Hi, I&apos;m{' '}
              <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent animate-gradient">
                <Typewriter text="Joseph Waugh" delay={500} speed={100} />
              </span>
            </h1>
            
            <p className="mt-4 text-xl font-medium text-foreground/90 sm:text-2xl">
              <span className="inline-block animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                Full-Stack Developer
              </span>
              <span className="mx-2 text-muted-foreground">|</span>
              <span className="inline-block animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                React • Next.js • Node
              </span>
            </p>
            
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              I transform ideas into sleek, user-focused digital experiences. With a background in 
              business and an MBA, I bring a unique perspective to software engineering—combining 
              technical skill with strategic problem-solving.
            </p>

            {/* Tech Stack Showcase */}
            <div className="mt-8">
              <p className="text-sm text-muted-foreground mb-4">Technologies I work with</p>
              <TechStack technologies={techStack} className="justify-center" />
            </div>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <MagneticButton
                className="group inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary animate-pulse-slow"
              >
                <Link
                  href="/projects"
                  className="inline-flex items-center gap-2"
                >
                  View Projects
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </MagneticButton>
              <MagneticButton
                className="inline-flex items-center gap-2 rounded-lg border border-input bg-background px-6 py-3 text-sm font-semibold transition-all hover:bg-accent hover:text-accent-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2"
                >
                  Get In Touch
                  <Sparkles className="h-4 w-4" />
                </Link>
              </MagneticButton>
            </div>
          </ScrollReveal>

          {/* 3D Hero Element */}
          <ScrollReveal animation="fadeScale" delay={0.3} className="mt-16">
            <Hero3DWrapper />
          </ScrollReveal>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <ScrollIndicator />
          </div>
        </div>

        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
          <div className="absolute -top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-gradient-to-r from-primary/20 to-blue-600/20 blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-0 right-0 h-[400px] w-[400px] translate-x-1/3 translate-y-1/3 rounded-full bg-gradient-to-l from-purple-500/10 to-pink-500/10 blur-3xl animate-float" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 border-y bg-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <ScrollReveal
                key={stat.label}
                delay={index * 0.1}
                className="text-center"
              >
                <div className="text-3xl font-bold text-primary sm:text-4xl">
                  <AnimatedCounter
                    value={stat.value}
                    suffix={stat.suffix}
                    duration={2000}
                  />
                </div>
                <p className="mt-2 text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <ParallaxSection className="py-24 sm:py-32" offset={30}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              What I Focus On
            </h2>
            <p className="mt-4 text-muted-foreground">
              Building exceptional digital products with attention to detail
            </p>
          </ScrollReveal>

          <div className="mx-auto mt-16 max-w-5xl">
            <div className="grid gap-8 md:grid-cols-3">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <ScrollReveal
                    key={feature.title}
                    animation="fadeUp"
                    delay={index * 0.1}
                  >
                    <div className="group relative h-full rounded-lg border bg-card p-8 transition-all hover:shadow-lg hover:-translate-y-1 focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2">
                      <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-3 text-primary transition-transform group-hover:scale-110">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <h3 className="mb-2 text-xl font-semibold">
                        {feature.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </ScrollReveal>
                )
              })}
            </div>
          </div>
        </div>
      </ParallaxSection>

      {/* CTA Section */}
      <section className="relative border-t bg-secondary/20 py-24 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-blue-600/5" />
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal animation="fadeScale" className="mx-auto max-w-2xl text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              <Rocket className="h-3 w-3" />
              Ready to collaborate
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Let&apos;s Build Something Amazing
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              I&apos;m always interested in hearing about new projects and opportunities.
            </p>
            <div className="mt-8">
              <MagneticButton
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                strength={0.3}
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2"
                >
                  Start a Conversation
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </MagneticButton>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}