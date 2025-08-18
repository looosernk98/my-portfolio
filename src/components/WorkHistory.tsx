'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Building, Calendar, MapPin, TrendingUp, Users, Code, Lightbulb } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { formatDate } from '@/lib/utils'

const workExperience = [
  {
    id: 1,
    company: "TechCorp Solutions",
    position: "Senior Full Stack Developer",
    location: "San Francisco, CA",
    startDate: "2022-03-01",
    endDate: null, // Current job
    logo: "https://via.placeholder.com/60x60/3B82F6/ffffff?text=TC",
    description: "Leading development of enterprise-scale applications and mentoring junior developers in modern web technologies.",
    achievements: [
      "Led a team of 8 developers to deliver a $2M e-commerce platform",
      "Improved application performance by 40% through optimization",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Mentored 5 junior developers, with 3 receiving promotions"
    ],
    technologies: ["React", "Node.js", "TypeScript", "AWS", "Docker", "PostgreSQL"],
    type: "Full-time",
    highlights: {
      teamSize: 8,
      projectValue: "$2M",
      performance: "40% improvement"
    }
  },
  {
    id: 2,
    company: "StartupXYZ",
    position: "Full Stack Developer",
    location: "Remote",
    startDate: "2020-06-01",
    endDate: "2022-02-28",
    logo: "https://via.placeholder.com/60x60/10B981/ffffff?text=SX",
    description: "Developed MVP and scaled the platform from 0 to 100k+ users. Built the entire tech stack from ground up.",
    achievements: [
      "Built MVP that attracted 100k+ users in first year",
      "Designed and implemented scalable microservices architecture",
      "Reduced server costs by 45% through efficient resource management",
      "Integrated payment systems processing $500k+ monthly"
    ],
    technologies: ["Vue.js", "Express.js", "MongoDB", "Redis", "Stripe", "AWS"],
    type: "Full-time",
    highlights: {
      userGrowth: "100k+ users",
      costReduction: "45%",
      revenue: "$500k/month"
    }
  },
  {
    id: 3,
    company: "DigitalAgency Pro",
    position: "Frontend Developer",
    location: "Austin, TX",
    startDate: "2019-01-15",
    endDate: "2020-05-30",
    logo: "https://via.placeholder.com/60x60/8B5CF6/ffffff?text=DA",
    description: "Specialized in creating responsive web applications and collaborating with design teams to deliver pixel-perfect interfaces.",
    achievements: [
      "Delivered 25+ responsive websites for diverse clients",
      "Improved website loading speed by 50% on average",
      "Collaborated with UI/UX team to increase conversion rates by 30%",
      "Established component library used across 15+ projects"
    ],
    technologies: ["React", "SCSS", "JavaScript", "Webpack", "Figma", "Adobe XD"],
    type: "Full-time",
    highlights: {
      projects: "25+ websites",
      speedImprovement: "50%",
      conversionBoost: "30%"
    }
  },
  {
    id: 4,
    company: "FreelanceWork",
    position: "Web Developer",
    location: "Various",
    startDate: "2018-06-01",
    endDate: "2018-12-31",
    logo: "https://via.placeholder.com/60x60/F59E0B/ffffff?text=FL",
    description: "Freelance web development projects for small businesses and startups, focusing on modern web technologies.",
    achievements: [
      "Completed 15+ projects with 100% client satisfaction",
      "Specialized in e-commerce and business websites",
      "Established long-term partnerships with 8 clients",
      "Generated $75k revenue in 6 months"
    ],
    technologies: ["WordPress", "PHP", "JavaScript", "MySQL", "Bootstrap"],
    type: "Freelance",
    highlights: {
      projects: "15+ projects",
      satisfaction: "100%",
      revenue: "$75k"
    }
  }
]

export default function WorkHistory() {
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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6 }
    }
  }

  const timelineVariants = {
    hidden: { height: 0 },
    visible: {
      height: "100%",
      transition: { duration: 1, ease: "easeInOut" }
    }
  }

  return (
    <section id="work-history" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">Work Experience</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              My professional journey and the impact I've made
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-border">
              <motion.div
                variants={timelineVariants}
                className="w-full bg-gradient-to-b from-primary to-purple-600"
              />
            </div>

            {/* Experience Items */}
            <div className="space-y-12">
              {workExperience.map((job, index) => (
                <motion.div
                  key={job.id}
                  variants={itemVariants}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10">
                    <div className="absolute inset-0 bg-primary rounded-full animate-ping opacity-20" />
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}>
                    <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
                      <CardHeader className="pb-4">
                        <div className="flex items-start gap-4">
                          <img
                            src={job.logo}
                            alt={`${job.company} logo`}
                            className="w-12 h-12 rounded-lg object-cover"
                          />
                          <div className="flex-1">
                            <CardTitle className="text-lg mb-1">{job.position}</CardTitle>
                            <div className="flex items-center gap-2 text-primary font-medium mb-2">
                              <Building className="w-4 h-4" />
                              {job.company}
                            </div>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {formatDate(job.startDate)} - {job.endDate ? formatDate(job.endDate) : 'Present'}
                              </div>
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {job.location}
                              </div>
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                job.type === 'Full-time' 
                                  ? 'bg-green-100 text-green-800' 
                                  : 'bg-blue-100 text-blue-800'
                              }`}>
                                {job.type}
                              </span>
                            </div>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="space-y-6">
                        <p className="text-muted-foreground leading-relaxed">
                          {job.description}
                        </p>

                        {/* Highlights */}
                        <div className="grid grid-cols-3 gap-4 p-4 bg-muted/50 rounded-lg">
                          {Object.entries(job.highlights).map(([key, value]) => (
                            <div key={key} className="text-center">
                              <div className="text-lg font-bold text-primary">{value}</div>
                              <div className="text-xs text-muted-foreground capitalize">
                                {key.replace(/([A-Z])/g, ' $1').trim()}
                              </div>
                            </div>
                          ))}
                        </div>

                        {/* Key Achievements */}
                        <div>
                          <h4 className="font-semibold text-sm mb-3 flex items-center gap-2">
                            <TrendingUp className="w-4 h-4 text-primary" />
                            Key Achievements
                          </h4>
                          <ul className="space-y-2">
                            {job.achievements.map((achievement, idx) => (
                              <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                                <Lightbulb className="w-3 h-3 text-primary mt-1 flex-shrink-0" />
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h4 className="font-semibold text-sm mb-3 flex items-center gap-2">
                            <Code className="w-4 h-4 text-primary" />
                            Technologies Used
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {job.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Summary Stats */}
          <motion.div variants={itemVariants} className="mt-16">
            <Card className="bg-gradient-to-r from-primary/10 to-purple-500/10 border-primary/20">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">5+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">50+</div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">15+</div>
                    <div className="text-sm text-muted-foreground">Team Members Mentored</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary mb-2">100%</div>
                    <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 