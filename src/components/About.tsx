'use client'

import React, { useState, useEffect } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import { 
  User, MapPin, Calendar, Heart, Coffee, Code, Trophy 
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { personalInfo, stats, achievements, coreSkills, interests } from '@/constants'

// Counter Component for Animated Numbers
function AnimatedCounter({ value, suffix = "", duration = 2 }: { value: number; suffix?: string; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = React.useRef(null)
  const inView = useInView(ref, { once: true })
  
  useEffect(() => {
    if (inView) {
      let start = 0
      const end = value
      const increment = end / (duration * 60)
      
      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 1000 / 60)
      
      return () => clearInterval(timer)
    }
  }, [inView, value, duration])
  
  return <span ref={ref}>{count}{suffix}</span>
}

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.4,
        staggerChildren: 0.05
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { 
        duration: 0.4,
        ease: "easeOut"
      }
    }
  }

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 dark:from-blue-900/10 dark:via-purple-900/10 dark:to-pink-900/10" />
      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <motion.h2 
              className="text-5xl md:text-6xl font-bold mb-6"
              variants={floatingVariants}
              animate="animate"
            >
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                About Me
              </span>
            </motion.h2>
            <motion.p 
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Discover the story behind the pixels and the passion driving innovation
            </motion.p>
          </motion.div>

          {/* Stats Section */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="group"
              >
                <Card className="relative overflow-hidden border-0 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm hover:shadow-2xl transition-all duration-500">
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  <CardContent className="p-6 text-center relative">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}>
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Main Content */}
            <motion.div variants={itemVariants} className="lg:col-span-3 space-y-8">
              {/* Profile Card */}
              <Card className="relative overflow-hidden border-0 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5" />
                <CardContent className="p-8 relative">
                  <div className="flex flex-col md:flex-row items-start gap-8">
                    <motion.div 
                      className="relative group"
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="w-40 h-40 rounded-3xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-2xl group-hover:shadow-blue-500/25 transition-shadow duration-500">
                        <User className="w-20 h-20 text-white" />
                      </div>
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200" />
                    </motion.div>
                    
                    <div className="flex-1 space-y-6">
                      <div>
                        <h3 className="text-3xl font-bold text-gradient mb-2">{personalInfo.name}</h3>
                        <p className="text-lg text-muted-foreground font-medium">{personalInfo.role}</p>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        <motion.div 
                          className="flex items-center gap-3 p-3 rounded-xl bg-blue-500/10 hover:bg-blue-500/20 transition-colors"
                          whileHover={{ x: 5 }}
                        >
                          <Calendar className="w-5 h-5 text-blue-500" />
                          <div>
                            <p className="font-medium text-sm">Experience</p>
                            <p className="text-muted-foreground text-sm">{personalInfo.experience}+ Years</p>
                          </div>
                        </motion.div>
                        
                        <motion.div 
                          className="flex items-center gap-3 p-3 rounded-xl bg-purple-500/10 hover:bg-purple-500/20 transition-colors"
                          whileHover={{ x: 5 }}
                        >
                          <MapPin className="w-5 h-5 text-purple-500" />
                          <div>
                            <p className="font-medium text-sm">Location</p>
                            <p className="text-muted-foreground text-sm">{personalInfo.location}</p>
                          </div>
                        </motion.div>
                      </div>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {personalInfo.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Skills Progress */}
              <Card className="border-0 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Code className="w-6 h-6 text-primary" />
                    Core Expertise
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {coreSkills.map((skill, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      className="space-y-2"
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <skill.icon className="w-5 h-5 text-primary" />
                          <span className="font-medium">{skill.name}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ delay: index * 0.1 + 0.3, duration: 1, ease: "easeOut" }}
                          className="h-full bg-gradient-to-r from-primary to-purple-600 rounded-full"
                        />
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>

              {/* Interests */}
              <Card className="border-0 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Heart className="w-6 h-6 text-pink-500" />
                    Interests & Passions
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {interests.map((interest, index) => (
                      <motion.div
                        key={index}
                        whileHover={{ scale: 1.05, rotateX: 5 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex items-center gap-2 p-3 rounded-xl border ${interest.color} hover:shadow-lg transition-all duration-300 cursor-pointer`}
                      >
                        <interest.icon className="w-4 h-4" />
                        <span className="text-sm font-medium">{interest.name}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Sidebar */}
            <motion.div variants={itemVariants} className="lg:col-span-2 space-y-6">
              {/* Achievements Timeline */}
              <Card className="border-0 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Trophy className="w-6 h-6 text-yellow-500" />
                    Key Achievements
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="relative group"
                    >
                      <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-white/50 to-white/30 dark:from-gray-800/50 dark:to-gray-800/30 hover:shadow-lg transition-all duration-300">
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${achievement.color} shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                          <achievement.icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-sm mb-1">{achievement.title}</h4>
                          <p className="text-xs text-muted-foreground mb-2">{achievement.description}</p>
                          <span className={`text-xs font-medium px-2 py-1 rounded-full bg-gradient-to-r ${achievement.color} text-white`}>
                            {achievement.year}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card className="border-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <motion.div
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Coffee className="w-12 h-12 text-primary mx-auto mb-4" />
                  </motion.div>
                  <h3 className="font-bold text-lg mb-2">Let's Connect!</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Always excited to collaborate on amazing projects
                  </p>
                  <div className="space-y-2 text-sm">
                    <p className="flex items-center justify-center gap-2">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                      Available for new opportunities
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 