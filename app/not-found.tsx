'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Home, Search, ArrowLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function NotFound() {
  const router = useRouter()
  
  return (
    <div className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden px-4">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <motion.div
            className="h-[600px] w-[600px] rounded-full bg-gradient-to-r from-primary/20 via-primary/10 to-transparent blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>
      </div>
      
      <div className="relative z-10 max-w-2xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Animated 404 text */}
          <motion.h1 
            className="relative text-[120px] font-bold leading-none sm:text-[160px] md:text-[200px]"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ 
              type: "spring",
              stiffness: 200,
              damping: 15,
              delay: 0.1 
            }}
          >
            <span className="bg-gradient-to-br from-primary via-primary/70 to-primary/50 bg-clip-text text-transparent">
              404
            </span>
            <motion.div
              className="absolute inset-0 -z-10 blur-2xl"
              animate={{
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <span className="bg-gradient-to-br from-primary via-primary/70 to-primary/50 bg-clip-text text-transparent">
                404
              </span>
            </motion.div>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h2 className="mt-8 text-2xl font-semibold sm:text-3xl">
              Oops! Page Not Found
            </h2>
            <p className="mt-4 text-muted-foreground">
              The page you&apos;re looking for seems to have wandered off into the digital void.
            </p>
          </motion.div>
          
          {/* Action buttons */}
          <motion.div
            className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Link
              href="/"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:scale-105 hover:shadow-lg hover:shadow-primary/25"
            >
              <Home className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Link>
            
            <button
              onClick={() => router.back()}
              className="group inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-6 py-3 text-sm font-semibold transition-all hover:scale-105 hover:border-primary/50 hover:shadow-lg"
            >
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Go Back
            </button>
          </motion.div>
          
          {/* Search suggestion */}
          <motion.div
            className="mt-12 flex items-center justify-center gap-2 text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <Search className="h-4 w-4" />
            <span>Try searching or explore from the navigation menu</span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}