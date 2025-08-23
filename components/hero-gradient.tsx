'use client'

import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'

function HeroGradient() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number | null>(null)
  const mouseRef = useRef({ x: 0.5, y: 0.5 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Set canvas size
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = 500
    }
    handleResize()
    window.addEventListener('resize', handleResize)

    // Mouse tracking
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight
      }
    }
    window.addEventListener('mousemove', handleMouseMove)

    // Animation variables
    let time = 0
    const colors = [
      { r: 99, g: 102, b: 241 },  // Primary color (indigo)
      { r: 236, g: 72, b: 153 },  // Pink accent
      { r: 59, g: 130, b: 246 },  // Blue
      { r: 139, g: 92, b: 246 },  // Purple
    ]

    // Animation loop
    const animate = () => {
      time += 0.001

      // Create gradient
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      
      // Dynamic gradient stops based on mouse position
      const mouseInfluence = 0.2
      const offset1 = Math.sin(time) * 0.1 + mouseRef.current.x * mouseInfluence
      const offset2 = Math.cos(time * 0.8) * 0.1 + mouseRef.current.y * mouseInfluence
      
      gradient.addColorStop(0, `rgba(${colors[0]!.r}, ${colors[0]!.g}, ${colors[0]!.b}, 0.4)`)
      gradient.addColorStop(0.25 + offset1, `rgba(${colors[1]!.r}, ${colors[1]!.g}, ${colors[1]!.b}, 0.3)`)
      gradient.addColorStop(0.5 + offset2, `rgba(${colors[2]!.r}, ${colors[2]!.g}, ${colors[2]!.b}, 0.3)`)
      gradient.addColorStop(0.75 - offset1, `rgba(${colors[3]!.r}, ${colors[3]!.g}, ${colors[3]!.b}, 0.3)`)
      gradient.addColorStop(1, `rgba(${colors[0]!.r}, ${colors[0]!.g}, ${colors[0]!.b}, 0.2)`)

      // Clear and fill
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Add animated circles
      for (let i = 0; i < 5; i++) {
        const x = (Math.sin(time + i * 2) + 1) * 0.5 * canvas.width
        const y = (Math.cos(time * 0.7 + i * 3) + 1) * 0.5 * canvas.height
        const radius = 100 + Math.sin(time * 2 + i) * 50
        
        const circleGradient = ctx.createRadialGradient(x, y, 0, x, y, radius)
        const colorIndex = i % colors.length
        const color = colors[colorIndex]!
        circleGradient.addColorStop(0, `rgba(${color.r}, ${color.g}, ${color.b}, 0.2)`)
        circleGradient.addColorStop(1, `rgba(${color.r}, ${color.g}, ${color.b}, 0)`)
        
        ctx.fillStyle = circleGradient
        ctx.fillRect(x - radius, y - radius, radius * 2, radius * 2)
      }

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <div className="relative h-[500px] w-full overflow-hidden rounded-lg">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ filter: 'blur(40px)' }}
      />
      
      {/* Floating elements */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative">
          {/* Tech icons as floating elements */}
          <motion.div
            className="absolute -top-20 -left-20 w-16 h-16 bg-blue-500/20 rounded-lg backdrop-blur-sm border border-blue-500/30 flex items-center justify-center"
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <span className="text-2xl">⚛️</span>
          </motion.div>

          <motion.div
            className="absolute -top-10 right-20 w-14 h-14 bg-cyan-500/20 rounded-lg backdrop-blur-sm border border-cyan-500/30 flex items-center justify-center"
            animate={{
              y: [0, 15, 0],
              rotate: [0, -10, 0],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          >
            <span className="text-xl">📦</span>
          </motion.div>

          <motion.div
            className="absolute bottom-10 -left-16 w-12 h-12 bg-purple-500/20 rounded-lg backdrop-blur-sm border border-purple-500/30 flex items-center justify-center"
            animate={{
              y: [0, -15, 0],
              rotate: [0, 15, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          >
            <span className="text-lg">🎨</span>
          </motion.div>

          <motion.div
            className="absolute bottom-20 right-10 w-16 h-16 bg-pink-500/20 rounded-lg backdrop-blur-sm border border-pink-500/30 flex items-center justify-center"
            animate={{
              y: [0, 20, 0],
              rotate: [0, -15, 0],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5
            }}
          >
            <span className="text-2xl">💻</span>
          </motion.div>

          {/* Central geometric shape */}
          <motion.div
            className="w-32 h-32 relative"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-purple-600/30 rounded-lg transform rotate-45 backdrop-blur-sm border border-primary/20" />
            <div className="absolute inset-4 bg-gradient-to-tl from-blue-600/20 to-cyan-600/20 rounded-lg transform rotate-12 backdrop-blur-sm border border-blue-500/20" />
            <div className="absolute inset-8 bg-gradient-to-br from-pink-600/20 to-purple-600/20 rounded-lg transform -rotate-12 backdrop-blur-sm border border-pink-500/20" />
          </motion.div>
        </div>
      </div>

      {/* Grid overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(99, 102, 241, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(99, 102, 241, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
    </div>
  )
}

// Export both as named and default for maximum compatibility
export { HeroGradient }
export default HeroGradient