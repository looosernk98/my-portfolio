'use client'

import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Download, Code, Palette, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import * as d3 from 'd3'

export default function Hero() {
  const svgRef = useRef<SVGSVGElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!svgRef.current || !containerRef.current) return

    const svg = d3.select(svgRef.current)
    const container = containerRef.current
    const containerRect = container.getBoundingClientRect()
    
    const width = containerRect.width
    const height = containerRect.height
    
    svg.attr('width', width).attr('height', height)
    svg.selectAll('*').remove()

    // Create modern geometric background
    const defs = svg.append('defs')
    
    // Create beautiful gradients
    const gradients = [
      { id: 'grad1', colors: ['#667eea', '#764ba2'], opacity: [0.4, 0.2] },
      { id: 'grad2', colors: ['#f093fb', '#f5576c'], opacity: [0.3, 0.1] },
      { id: 'grad3', colors: ['#4facfe', '#00f2fe'], opacity: [0.5, 0.2] },
      { id: 'grad4', colors: ['#43e97b', '#38f9d7'], opacity: [0.3, 0.1] },
      { id: 'grad5', colors: ['#fa709a', '#fee140'], opacity: [0.4, 0.2] },
      { id: 'grad6', colors: ['#a8edea', '#fed6e3'], opacity: [0.3, 0.1] }
    ]

    gradients.forEach(grad => {
      const gradient = defs.append('linearGradient')
        .attr('id', grad.id)
        .attr('x1', '0%').attr('y1', '0%')
        .attr('x2', '100%').attr('y2', '100%')
      
      gradient.append('stop')
        .attr('offset', '0%')
        .attr('stop-color', grad.colors[0])
        .attr('stop-opacity', grad.opacity[0])
      
      gradient.append('stop')
        .attr('offset', '100%')
        .attr('stop-color', grad.colors[1])
        .attr('stop-opacity', grad.opacity[1])
    })

    // Create animated geometric shapes
    interface Shape {
      type: 'circle' | 'polygon'
      x?: number
      y?: number
      r?: number
      fill?: string
      speedX?: number
      speedY?: number
      pulseSpeed?: number
      pulsePhase?: number
      points?: number[][]
      centerX?: number
      centerY?: number
      rotation?: number
      rotationSpeed?: number
    }
    
    const shapes: Shape[] = []
    
    // Add floating orbs
    for (let i = 0; i < 12; i++) {
      shapes.push({
        type: 'circle',
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 80 + 30,
        fill: `url(#grad${Math.floor(Math.random() * 6) + 1})`,
        speedX: (Math.random() - 0.5) * 0.8,
        speedY: (Math.random() - 0.5) * 0.8,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        pulsePhase: Math.random() * Math.PI * 2
      })
    }

    // Add floating polygons
    for (let i = 0; i < 8; i++) {
      const sides = Math.floor(Math.random() * 4) + 3
      const centerX = Math.random() * width
      const centerY = Math.random() * height
      const radius = Math.random() * 60 + 20
      
      const points = []
      for (let j = 0; j < sides; j++) {
        const angle = (j / sides) * Math.PI * 2
        const x = centerX + Math.cos(angle) * radius
        const y = centerY + Math.sin(angle) * radius
        points.push([x, y])
      }
      
      shapes.push({
        type: 'polygon',
        points: points,
        centerX: centerX,
        centerY: centerY,
        fill: `url(#grad${Math.floor(Math.random() * 6) + 1})`,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        rotation: 0,
        rotationSpeed: (Math.random() - 0.5) * 1
      })
    }

    // Create flowing paths
    const paths = []
    for (let i = 0; i < 6; i++) {
      const path = d3.path()
      const startX = Math.random() * width
      const startY = Math.random() * height
      
      path.moveTo(startX, startY)
      for (let j = 0; j < 4; j++) {
        const controlX1 = startX + (Math.random() - 0.5) * 200
        const controlY1 = startY + (Math.random() - 0.5) * 200
        const controlX2 = startX + (Math.random() - 0.5) * 200
        const controlY2 = startY + (Math.random() - 0.5) * 200
        const endX = startX + (Math.random() - 0.5) * 300
        const endY = startY + (Math.random() - 0.5) * 300
        
        path.bezierCurveTo(controlX1, controlY1, controlX2, controlY2, endX, endY)
      }
      
      paths.push({
        path: path.toString(),
        strokeGrad: `url(#grad${Math.floor(Math.random() * 6) + 1})`,
        animationOffset: Math.random() * Math.PI * 2
      })
    }

    // Create shape elements
    const shapeElements = svg.selectAll('.shape')
      .data(shapes)
      .enter()
      .append('g')
      .attr('class', 'shape')

    shapeElements.each(function(d: Shape) {
      const element = d3.select(this)
      
      if (d.type === 'circle' && d.x && d.y && d.r && d.fill) {
        element.append('circle')
          .attr('cx', d.x)
          .attr('cy', d.y)
          .attr('r', d.r)
          .attr('fill', d.fill)
          .style('filter', 'blur(1px)')
      } else if (d.type === 'polygon' && d.points && d.fill) {
        element.append('polygon')
          .attr('points', d.points.map(p => p.join(',')).join(' '))
          .attr('fill', d.fill)
          .style('filter', 'blur(0.5px)')
      }
    })

    // Create flowing paths
    svg.selectAll('.flow-path')
      .data(paths)
      .enter()
      .append('path')
      .attr('class', 'flow-path')
      .attr('d', d => d.path)
      .attr('stroke', d => d.strokeGrad)
      .attr('stroke-width', 2)
      .attr('fill', 'none')
      .attr('opacity', 0.4)
      .style('filter', 'blur(1px)')

    let time = 0

    // Animation loop
    const animate = () => {
      time += 0.01

      shapes.forEach((shape, i) => {
        if (shape.type === 'circle' && shape.x !== undefined && shape.y !== undefined && 
            shape.r !== undefined && shape.speedX !== undefined && shape.speedY !== undefined &&
            shape.pulseSpeed !== undefined && shape.pulsePhase !== undefined) {
          
          // Smooth floating motion
          shape.x += shape.speedX
          shape.y += shape.speedY
          
          // Pulsing effect
          const pulse = Math.sin(time * shape.pulseSpeed + shape.pulsePhase)
          const newRadius = shape.r + pulse * 10
          
          // Bounce off edges smoothly
          if (shape.x < -shape.r || shape.x > width + shape.r) {
            shape.speedX *= -0.8
          }
          if (shape.y < -shape.r || shape.y > height + shape.r) {
            shape.speedY *= -0.8
          }
          
          // Update visual
          shapeElements.filter((d, index) => index === i && d.type === 'circle')
            .select('circle')
            .attr('cx', shape.x)
            .attr('cy', shape.y)
            .attr('r', newRadius)
            
        } else if (shape.type === 'polygon' && shape.centerX !== undefined && 
                   shape.centerY !== undefined && shape.rotation !== undefined &&
                   shape.speedX !== undefined && shape.speedY !== undefined &&
                   shape.rotationSpeed !== undefined) {
          
          // Move and rotate
          shape.centerX += shape.speedX
          shape.centerY += shape.speedY
          shape.rotation += shape.rotationSpeed
          
          // Bounce off edges
          if (shape.centerX < 0 || shape.centerX > width) {
            shape.speedX *= -0.8
          }
          if (shape.centerY < 0 || shape.centerY > height) {
            shape.speedY *= -0.8
          }
          
          // Update visual
          shapeElements.filter((d, index) => index === i && d.type === 'polygon')
            .attr('transform', `translate(${shape.centerX}, ${shape.centerY}) rotate(${shape.rotation})`)
        }
      })

      requestAnimationFrame(animate)
    }

    animate()

    // Resize handler
    const handleResize = () => {
      const newRect = container.getBoundingClientRect()
      svg.attr('width', newRect.width).attr('height', newRect.height)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Visualization */}
      <div 
        ref={containerRef}
        className="absolute inset-0 z-0"
      >
        <svg
          ref={svgRef}
          className="w-full h-full"
          style={{ background: 'transparent' }}
        />
      </div>

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/5 to-pink-500/10 z-0" />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="inline-block mb-6"
          >
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-primary to-purple-600 flex items-center justify-center">
              <Code className="w-10 h-10 text-white" />
            </div>
          </motion.div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-gradient">Full Stack</span>
            <br />
            <span className="text-foreground">Developer</span>
          </h1>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto"
        >
          Crafting digital experiences with modern technologies. 
          Specialized in web development, mentorship, and technical guidance.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 bg-card border border-border rounded-lg px-4 py-2"
          >
            <Zap className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">5+ Years Experience</span>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 bg-card border border-border rounded-lg px-4 py-2"
          >
            <Palette className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">50+ Projects Completed</span>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 bg-card border border-border rounded-lg px-4 py-2"
          >
            <Code className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">Full Stack Expert</span>
          </motion.div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button size="lg" className="group">
            View My Work
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          
          <Button size="lg" variant="outline" className="group">
            <Download className="mr-2 h-4 w-4 transition-transform group-hover:scale-110" />
            Download CV
          </Button>
        </motion.div>

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-16 h-16 bg-primary/20 rounded-full blur-xl"
        />
        
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-20 right-10 w-24 h-24 bg-purple-500/20 rounded-full blur-xl"
        />
        
        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute top-40 right-20 w-12 h-12 bg-pink-500/20 rounded-full blur-xl"
        />
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-primary rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-primary rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
} 