'use client'

import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { AlertTriangle, RefreshCw, Home, Bug } from 'lucide-react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application error:', error)
  }, [error])

  const isDevelopment = process.env.NODE_ENV === 'development'

  return (
    <div className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden px-4 py-16">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <motion.div
            className="h-[500px] w-[500px] rounded-full bg-gradient-to-r from-destructive/20 via-destructive/10 to-transparent blur-3xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </div>

      <div className="relative z-10 max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Error icon with animation */}
          <motion.div 
            className="mb-8 inline-flex rounded-full bg-destructive/10 p-6"
            animate={{
              rotate: [0, -5, 5, -5, 0],
            }}
            transition={{
              duration: 0.5,
              repeat: 3,
              ease: "easeInOut"
            }}
          >
            <AlertTriangle className="h-16 w-16 text-destructive" aria-hidden="true" />
          </motion.div>
          
          {/* Error code if available */}
          {error.digest && (
            <motion.div
              className="mb-4 inline-flex items-center gap-2 rounded-lg bg-muted px-3 py-1 text-xs font-mono text-muted-foreground"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Bug className="h-3 w-3" />
              Error ID: {error.digest}
            </motion.div>
          )}
          
          <motion.h1 
            className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <span className="bg-gradient-to-r from-destructive to-destructive/70 bg-clip-text text-transparent">
              Something went wrong!
            </span>
          </motion.h1>
          
          <motion.p 
            className="mb-8 max-w-md text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {isDevelopment && error.message 
              ? error.message 
              : 'An unexpected error occurred while processing your request. Our team has been notified.'}
          </motion.p>

          {/* Error stack in development */}
          {isDevelopment && error.stack && (
            <motion.details
              className="mb-8 text-left"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <summary className="cursor-pointer text-sm text-muted-foreground hover:text-foreground">
                Show error details
              </summary>
              <pre className="mt-4 max-h-64 overflow-auto rounded-lg bg-muted p-4 text-xs">
                <code>{error.stack}</code>
              </pre>
            </motion.details>
          )}
          
          {/* Action buttons */}
          <motion.div 
            className="flex flex-col gap-4 sm:flex-row sm:justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <button
              onClick={reset}
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              <RefreshCw className="h-4 w-4 transition-transform group-hover:rotate-180" />
              Try again
            </button>
            
            <Link
              href="/"
              className="group inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-6 py-3 text-sm font-semibold transition-all hover:scale-105 hover:border-primary/50 hover:shadow-lg"
            >
              <Home className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Go to Home
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}