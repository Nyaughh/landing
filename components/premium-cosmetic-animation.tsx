"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

export default function PremiumCosmeticAnimation() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: false })
  const controls = useAnimation()
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }

    if (containerRef.current) {
      setDimensions({
        width: containerRef.current.offsetWidth,
        height: containerRef.current.offsetHeight,
      })
    }

    const handleResize = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        })
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [isInView, controls])

  // Golden ratio spiral points
  const generateGoldenRatioPoints = () => {
    const points = []
    const goldenRatio = 1.618033988749895
    const centerX = dimensions.width / 2
    const centerY = dimensions.height / 2
    const maxRadius = Math.min(dimensions.width, dimensions.height) * 0.4

    let radius = 5
    let angle = 0

    for (let i = 0; i < 30; i++) {
      radius = radius * goldenRatio * 0.05
      angle = angle + (goldenRatio * Math.PI * 2) / 10

      if (radius > maxRadius) break

      points.push({
        x: centerX + radius * Math.cos(angle),
        y: centerY + radius * Math.sin(angle),
        size: Math.max(2, radius * 0.1),
        delay: i * 0.05,
      })
    }

    return points
  }

  const goldenPoints = generateGoldenRatioPoints()

  // Luxury particles
  const generateLuxuryParticles = (count: number) => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * dimensions.width,
      y: Math.random() * dimensions.height,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 8,
    }))
  }

  const luxuryParticles = generateLuxuryParticles(40)

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-full h-full overflow-hidden -z-10"
      style={{
        background:
          "linear-gradient(135deg, rgba(20,20,30,0.95) 0%, rgba(30,30,50,0.95) 50%, rgba(20,20,30,0.95) 100%)",
      }}
    >
      {/* Premium Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-500/5 via-transparent to-purple-500/5" />

      {/* Luxury Gold Accents */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={`gold-accent-${i}`}
            className="absolute rounded-full"
            style={{
              background: "linear-gradient(135deg, rgba(255,215,0,0.2) 0%, rgba(218,165,32,0.2) 100%)",
              width: Math.random() * 100 + 50,
              height: Math.random() * 100 + 50,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              filter: "blur(40px)",
            }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.2, 0],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: Math.random() * 15 + 20,
              delay: Math.random() * 15,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Golden Ratio Spiral */}
      <div className="absolute inset-0">
        {goldenPoints.map((point, i) => (
          <motion.div
            key={`golden-point-${i}`}
            className="absolute rounded-full"
            style={{
              background: "linear-gradient(135deg, rgba(255,215,0,0.7) 0%, rgba(218,165,32,0.7) 100%)",
              width: point.size,
              height: point.size,
              left: point.x,
              top: point.y,
              filter: "blur(1px)",
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 0.8, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 12,
              delay: point.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Flowing Beauty Lines */}
      <svg className="absolute inset-0 w-full h-full opacity-30">
        {Array.from({ length: 3 }).map((_, i) => {
          const startX = Math.random() * dimensions.width
          const startY = Math.random() * dimensions.height
          const endX = Math.random() * dimensions.width
          const endY = Math.random() * dimensions.height
          const controlX1 = (startX + endX) / 2 + (Math.random() * 200 - 100)
          const controlY1 = (startY + endY) / 2 + (Math.random() * 200 - 100)
          const controlX2 = (startX + endX) / 2 + (Math.random() * 200 - 100)
          const controlY2 = (startY + endY) / 2 + (Math.random() * 200 - 100)

          return (
            <motion.path
              key={`beauty-line-${i}`}
              d={`M${startX},${startY} C${controlX1},${controlY1} ${controlX2},${controlY2} ${endX},${endY}`}
              stroke="url(#goldGradient)"
              strokeWidth="1"
              fill="none"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: [0, 1, 0],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: 20 + i * 3,
                delay: i * 5,
                ease: "easeInOut",
              }}
            />
          )
        })}
        <defs>
          <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,215,0,0.8)" />
            <stop offset="100%" stopColor="rgba(218,165,32,0.8)" />
          </linearGradient>
        </defs>
      </svg>

      {/* Luxury Particles */}
      <div className="absolute inset-0">
        {luxuryParticles.map((particle) => (
          <motion.div
            key={`luxury-particle-${particle.id}`}
            className="absolute rounded-full"
            style={{
              background:
                Math.random() > 0.7
                  ? "linear-gradient(135deg, rgba(255,215,0,0.8) 0%, rgba(218,165,32,0.8) 100%)"
                  : "rgba(255,255,255,0.8)",
              width: particle.size,
              height: particle.size,
              left: particle.x,
              top: particle.y,
              filter: "blur(1px)",
            }}
            animate={{
              x: [0, Math.random() * 50 - 25],
              y: [0, Math.random() * 50 - 25],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: particle.duration,
              delay: particle.delay,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Facial Contour Lines */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[400px] opacity-20">
        <svg viewBox="0 0 300 400" className="w-full h-full">
          <motion.path
            d="M150,50 C220,50 250,150 250,200 C250,300 200,350 150,350 C100,350 50,300 50,200 C50,150 80,50 150,50 Z"
            stroke="rgba(255,255,255,0.5)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 10,
              ease: "easeInOut",
            }}
          />
          <motion.path
            d="M100,150 C120,140 180,140 200,150"
            stroke="rgba(255,255,255,0.5)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 8,
              delay: 2,
              ease: "easeInOut",
            }}
          />
          <motion.path
            d="M110,220 C130,230 170,230 190,220"
            stroke="rgba(255,255,255,0.5)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 8,
              delay: 3,
              ease: "easeInOut",
            }}
          />
          <motion.path
            d="M150,150 L150,200"
            stroke="rgba(255,255,255,0.5)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 8,
              delay: 4,
              ease: "easeInOut",
            }}
          />
          <motion.path
            d="M120,120 C130,110 170,110 180,120"
            stroke="rgba(255,255,255,0.5)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: [0, 1, 0] }}
            transition={{
              repeat: Number.POSITIVE_INFINITY,
              duration: 8,
              delay: 5,
              ease: "easeInOut",
            }}
          />
        </svg>
      </div>

      {/* Measurement Lines */}
      <div className="absolute inset-0">
        {Array.from({ length: 10 }).map((_, i) => {
          const x1 = Math.random() * dimensions.width
          const y1 = Math.random() * dimensions.height
          const length = Math.random() * 100 + 50
          const angle = Math.random() * Math.PI * 2
          const x2 = x1 + length * Math.cos(angle)
          const y2 = y1 + length * Math.sin(angle)

          return (
            <motion.div
              key={`measurement-${i}`}
              className="absolute"
              style={{
                left: x1,
                top: y1,
                width: length,
                height: 1,
                background: "rgba(255,255,255,0.3)",
                transformOrigin: "left center",
                transform: `rotate(${angle}rad)`,
              }}
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{
                scaleX: [0, 1, 0],
                opacity: [0, 0.3, 0],
              }}
              transition={{
                repeat: Number.POSITIVE_INFINITY,
                duration: Math.random() * 5 + 10,
                delay: Math.random() * 10,
                ease: "easeInOut",
              }}
            >
              <motion.div className="absolute right-0 w-1 h-4 bg-white/30" style={{ top: -2 }} />
              <motion.div className="absolute left-0 w-1 h-4 bg-white/30" style={{ top: -2 }} />
            </motion.div>
          )
        })}
      </div>

      {/* 3D Depth Effect Layers */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-black/30" />

      {/* Subtle Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)]" />
    </div>
  )
}
