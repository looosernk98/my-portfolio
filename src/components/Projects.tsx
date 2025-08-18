'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Star, Eye, ArrowRight } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with advanced features like real-time inventory management, payment processing, and analytics dashboard.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe", "Redis"],
    features: [
      "Real-time inventory tracking",
      "Secure payment processing",
      "Admin analytics dashboard",
      "Multi-vendor support",
      "Mobile responsive design"
    ],
    liveUrl: "https://example-ecommerce.com",
    githubUrl: "https://github.com/johndoe/ecommerce",
    stars: 156,
    views: 2400,
    category: "Full Stack"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, team collaboration features, and advanced project tracking.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Material-UI"],
    features: [
      "Real-time collaboration",
      "Drag & drop interface",
      "Team chat integration",
      "Time tracking",
      "Custom workflows"
    ],
    liveUrl: "https://taskflow-app.com",
    githubUrl: "https://github.com/johndoe/taskflow",
    stars: 89,
    views: 1200,
    category: "Frontend"
  },
  {
    id: 3,
    title: "AI Content Generator",
    description: "An AI-powered content generation platform that helps users create blogs, social media posts, and marketing copy using advanced language models.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
    technologies: ["Python", "FastAPI", "OpenAI API", "React", "PostgreSQL", "Docker"],
    features: [
      "Multiple content types",
      "AI-powered suggestions",
      "Template library",
      "Export to various formats",
      "Usage analytics"
    ],
    liveUrl: "https://ai-content-gen.com",
    githubUrl: "https://github.com/johndoe/ai-content",
    stars: 234,
    views: 3100,
    category: "AI/ML"
  },
  {
    id: 4,
    title: "Weather Analytics Dashboard",
    description: "A comprehensive weather data visualization platform with interactive charts, forecasting, and historical weather analysis.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
    technologies: ["D3.js", "Vue.js", "Python", "Flask", "Weather API", "Chart.js"],
    features: [
      "Interactive data visualization",
      "7-day weather forecast",
      "Historical data analysis",
      "Location-based alerts",
      "Export reports"
    ],
    liveUrl: "https://weather-dashboard.com",
    githubUrl: "https://github.com/johndoe/weather-dashboard",
    stars: 67,
    views: 890,
    category: "Data Visualization"
  },
  {
    id: 5,
    title: "Social Media Scheduler",
    description: "A comprehensive social media management tool for scheduling posts, analyzing engagement, and managing multiple social accounts.",
    image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=600&h=400&fit=crop",
    technologies: ["React", "Express.js", "MongoDB", "Twitter API", "Facebook API"],
    features: [
      "Multi-platform scheduling",
      "Analytics dashboard",
      "Content calendar",
      "Team collaboration",
      "Auto-posting"
    ],
    liveUrl: "https://social-scheduler.com",
    githubUrl: "https://github.com/johndoe/social-scheduler",
    stars: 123,
    views: 1800,
    category: "Full Stack"
  },
  {
    id: 6,
    title: "Crypto Portfolio Tracker",
    description: "A real-time cryptocurrency portfolio tracking application with price alerts, market analysis, and investment insights.",
    image: "https://images.unsplash.com/photo-1640340434855-6084b1f4901c?w=600&h=400&fit=crop",
    technologies: ["React Native", "Node.js", "WebSocket", "CoinGecko API", "Firebase"],
    features: [
      "Real-time price tracking",
      "Portfolio analytics",
      "Price alerts",
      "Market news integration",
      "Cross-platform mobile app"
    ],
    liveUrl: "https://crypto-tracker.com",
    githubUrl: "https://github.com/johndoe/crypto-tracker",
    stars: 178,
    views: 2600,
    category: "Mobile"
  }
]

const categories = ["All", "Full Stack", "Frontend", "AI/ML", "Data Visualization", "Mobile"]

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
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
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="text-gradient">My Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              A showcase of my work across different technologies and domains
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedCategory(category)}
                  className="transition-all duration-300"
                >
                  {category}
                </Button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid lg:grid-cols-2 gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                onHoverStart={() => setHoveredProject(project.id)}
                onHoverEnd={() => setHoveredProject(null)}
                className="group"
              >
                <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                      <Button size="sm" variant="secondary" className="group/btn">
                        <ExternalLink className="w-4 h-4 mr-2 transition-transform group-hover/btn:scale-110" />
                        Live Demo
                      </Button>
                      <Button size="sm" variant="secondary" className="group/btn">
                        <Github className="w-4 h-4 mr-2 transition-transform group-hover/btn:scale-110" />
                        Code
                      </Button>
                    </div>
                  </div>

                  <CardHeader>
                    <div className="flex justify-between items-start mb-3">
                      <CardTitle className="text-xl group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4" />
                          {project.stars}
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="w-4 h-4" />
                          {project.views}
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    {/* Technologies */}
                    <div>
                      <h4 className="font-medium text-sm mb-2">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Key Features */}
                    <div>
                      <h4 className="font-medium text-sm mb-2">Key Features</h4>
                      <ul className="space-y-1">
                        {project.features.slice(0, 3).map((feature, index) => (
                          <li key={index} className="text-xs text-muted-foreground flex items-center gap-2">
                            <ArrowRight className="w-3 h-3 text-primary flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                        {project.features.length > 3 && (
                          <li className="text-xs text-primary font-medium">
                            +{project.features.length - 3} more features
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* Project Links */}
                    <div className="flex gap-3 pt-4">
                      <Button size="sm" className="flex-1 group/btn">
                        <ExternalLink className="w-4 h-4 mr-2 transition-transform group-hover/btn:scale-110" />
                        Live Demo
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1 group/btn">
                        <Github className="w-4 h-4 mr-2 transition-transform group-hover/btn:scale-110" />
                        View Code
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* View More Button */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <Button size="lg" variant="outline" className="group">
              View All Projects on GitHub
              <Github className="ml-2 h-4 w-4 transition-transform group-hover:scale-110" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 