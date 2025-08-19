'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Building, Calendar, MapPin, ChevronDown, ChevronUp, Trophy, Star, Code, Users, Briefcase
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { workExperience, careerStats } from '@/constants'

// Expandable details component
function ExpandableDetails({ job, isExpanded, onToggle }: { job: any; isExpanded: boolean; onToggle: () => void }) {
  return (
    <AnimatePresence>
      {isExpanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="border-t mt-6 pt-6 space-y-6"
        >
          {/* Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {job.metrics.map((metric: any, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`w-12 h-12 mx-auto mb-2 rounded-xl bg-gradient-to-r ${metric.color} flex items-center justify-center shadow-lg`}>
                  <metric.icon className="w-6 h-6 text-white" />
                </div>
                <div className={`text-lg font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent`}>
                  {metric.value}
                </div>
                <div className="text-xs text-muted-foreground">{metric.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Detailed Achievements */}
          <div>
            <h4 className="font-semibold text-sm mb-4 flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-500" />
              Impact & Achievements
            </h4>
            <div className="grid gap-3">
              {job.achievements.map((achievement: string, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-3 p-3 rounded-lg bg-gradient-to-r from-white/50 to-white/30 dark:from-gray-800/50 dark:to-gray-800/30"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-primary to-purple-600 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{achievement}</span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="font-semibold text-sm mb-4 flex items-center gap-2">
              <Code className="w-4 h-4 text-primary" />
              Technology Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {job.technologies.map((tech: string, index: number) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className={`px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${job.color} text-white shadow-lg hover:shadow-xl transition-shadow`}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default function WorkHistoryFixed() {
  const [expandedJob, setExpandedJob] = useState<number | null>(null)

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
      transition: { duration: 0.4, ease: "easeOut" }
    }
  }

  const floatingVariants = {
    animate: {
      y: [-5, 5, -5],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <section id="work-history" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 dark:from-purple-900/10 dark:via-blue-900/10 dark:to-cyan-900/10" />
      <div className="absolute inset-0 opacity-40" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366F1' fill-opacity='0.05'%3E%3Cpath d='M30 30m-30 0a30 30 0 1 1 60 0a30 30 0 1 1 -60 0'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
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
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Work Experience
              </span>
            </motion.h2>
            <motion.p 
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              viewport={{ once: true }}
            >
              My professional journey and the transformative impact I've created across diverse organizations
            </motion.p>
          </motion.div>

          {/* Career Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-20">
            {careerStats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                className="group"
              >
                <Card className="relative overflow-hidden border-0 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm hover:shadow-2xl transition-all duration-500">
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  <CardContent className="p-4 text-center relative">
                    <div className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center shadow-lg`}>
                      <stat.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                      {stat.value}
                    </div>
                    <p className="text-xs text-muted-foreground font-medium">{stat.label}</p>
                    <p className="text-xs text-muted-foreground/70 mt-1">{stat.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-500 rounded-full opacity-20">
              <motion.div
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                transition={{ duration: 1, ease: "easeInOut" }}
                viewport={{ once: true }}
                className="w-full bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-500 rounded-full"
              />
            </div>

            {/* Experience Items */}
            <div className="space-y-16">
              {workExperience.map((job, index) => (
                <motion.div
                  key={job.id}
                  variants={itemVariants}
                  className={`relative flex items-start ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 rounded-full border-4 border-background z-10 shadow-lg">
                    <div className={`w-full h-full rounded-full bg-gradient-to-r ${job.color} animate-pulse`} />
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${job.color} animate-ping opacity-30`} />
                  </div>

                  {/* Date Badge */}
                  <motion.div 
                    className={`absolute top-0 ${
                      index % 2 === 0 ? 'md:right-1/2 md:mr-8' : 'md:left-1/2 md:ml-8'
                    } left-16 md:left-auto`}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${job.color} text-white text-sm font-medium shadow-lg`}>
                      {job.duration}
                    </div>
                  </motion.div>

                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ml-16 md:ml-0 mt-8 md:mt-0 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="group"
                    >
                      <Card className="relative overflow-hidden border-0 bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm hover:shadow-2xl transition-all duration-500">
                        <div className={`absolute inset-0 bg-gradient-to-br ${job.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                        <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${job.color}`} />
                        
                        <CardHeader className="pb-4 relative">
                          <div className="flex items-start gap-4">
                            <motion.div 
                              className="relative"
                              whileHover={{ rotate: 5 }}
                            >
                              <img
                                src={job.logo}
                                alt={`${job.company} logo`}
                                className="w-16 h-16 rounded-2xl object-cover shadow-lg"
                              />
                              <div className={`absolute -inset-1 bg-gradient-to-r ${job.color} rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-500`} />
                            </motion.div>
                            
                            <div className="flex-1">
                              <CardTitle className="text-xl mb-2 text-gradient">{job.position}</CardTitle>
                              <div className="flex items-center gap-2 mb-3">
                                <Building className={`w-5 h-5 text-purple-500`} />
                                <span className="font-semibold text-lg">{job.company}</span>
                                <span className={`px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${job.color} text-white`}>
                                  {job.level}
                                </span>
                              </div>
                              
                              <div className="grid md:grid-cols-2 gap-3 text-sm">
                                <motion.div 
                                  className="flex items-center gap-2 p-2 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 transition-colors"
                                  whileHover={{ x: 3 }}
                                >
                                  <Calendar className="w-4 h-4 text-blue-500" />
                                  <span className="text-muted-foreground">{job.startDate} - {job.endDate}</span>
                                </motion.div>
                                
                                <motion.div 
                                  className="flex items-center gap-2 p-2 rounded-lg bg-green-500/10 hover:bg-green-500/20 transition-colors"
                                  whileHover={{ x: 3 }}
                                >
                                  <MapPin className="w-4 h-4 text-green-500" />
                                  <span className="text-muted-foreground">{job.location}</span>
                                </motion.div>
                              </div>
                            </div>
                          </div>
                        </CardHeader>

                        <CardContent className="space-y-4 relative">
                          <p className="text-muted-foreground leading-relaxed">
                            {job.description}
                          </p>

                          {/* Company Info */}
                          <div className="flex items-center justify-between text-sm">
                            <div className="flex items-center gap-2">
                              <Users className="w-4 h-4 text-primary" />
                              <span className="text-muted-foreground">{job.teamSize}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Briefcase className="w-4 h-4 text-primary" />
                              <span className="text-muted-foreground">{job.companyType}</span>
                            </div>
                          </div>

                          {/* Expand/Collapse Button */}
                          <motion.button
                            onClick={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className={`w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r ${job.color} text-white font-medium hover:shadow-lg transition-all duration-300`}
                          >
                            {expandedJob === job.id ? (
                              <>
                                <ChevronUp className="w-4 h-4" />
                                Show Less
                              </>
                            ) : (
                              <>
                                <ChevronDown className="w-4 h-4" />
                                View Details
                              </>
                            )}
                          </motion.button>

                          {/* Expandable Details */}
                          <ExpandableDetails 
                            job={job} 
                            isExpanded={expandedJob === job.id}
                            onToggle={() => setExpandedJob(expandedJob === job.id ? null : job.id)}
                          />
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Career Journey Summary */}
          <motion.div variants={itemVariants} className="mt-20">
            <Card className="relative overflow-hidden border-0 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-cyan-500/10 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-blue-500/5 to-cyan-500/5" />
              <CardHeader className="text-center relative">
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Trophy className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                </motion.div>
                <CardTitle className="text-2xl mb-2">
                  <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    Career Impact & Growth
                  </span>
                </CardTitle>
                <p className="text-muted-foreground">
                  A journey of continuous learning, innovation, and meaningful contributions to technology
                </p>
              </CardHeader>
              <CardContent className="relative">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <motion.div whileHover={{ scale: 1.05 }} className="space-y-2">
                    <div className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
                      100%
                    </div>
                    <div className="text-sm text-muted-foreground">Project Success Rate</div>
                    <div className="text-xs text-muted-foreground/70">Consistent delivery excellence</div>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} className="space-y-2">
                    <div className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">
                      15+
                    </div>
                    <div className="text-sm text-muted-foreground">Developers Mentored</div>
                    <div className="text-xs text-muted-foreground/70">Knowledge sharing & growth</div>
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.05 }} className="space-y-2">
                    <div className="text-4xl font-bold bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
                      $5M+
                    </div>
                    <div className="text-sm text-muted-foreground">Business Value Created</div>
                    <div className="text-xs text-muted-foreground/70">Measurable impact delivered</div>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 