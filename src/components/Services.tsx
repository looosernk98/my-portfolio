'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  Code, 
  GraduationCap, 
  BrainCircuit, 
  MessageCircle, 
  Phone, 
  Rocket,
  Clock,
  Users,
  CheckCircle,
  ArrowRight,
  Star
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

const services = [
  {
    id: 'web-development',
    title: 'Web Development',
    subtitle: 'Full-Stack Solutions',
    icon: Code,
    color: '#3B82F6',
    price: 'Starting at $2,000',
    duration: '2-8 weeks',
    description: 'Complete web application development from concept to deployment, including modern frontend and robust backend solutions.',
    features: [
      'Custom web application development',
      'Responsive design implementation',
      'Database design & optimization',
      'API development & integration',
      'Performance optimization',
      'Deployment & hosting setup'
    ],
    technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'AWS', 'Docker'],
    popular: true
  },
  {
    id: 'career-guidance',
    title: 'Career Guidance',
    subtitle: 'Navigate Your Tech Journey',
    icon: GraduationCap,
    color: '#10B981',
    price: '$100/session',
    duration: '1-2 hours',
    description: 'Personalized career guidance to help you navigate the tech industry, from skill development to job search strategies.',
    features: [
      'Career path planning',
      'Resume & portfolio review',
      'Interview preparation',
      'Skill gap analysis',
      'Industry insights',
      'Job search strategies'
    ],
    technologies: ['Industry Knowledge', 'Market Analysis', 'Personal Branding'],
    popular: false
  },
  {
    id: 'dsa-coaching',
    title: 'DSA Coaching',
    subtitle: 'Data Structures & Algorithms',
    icon: BrainCircuit,
    color: '#8B5CF6',
    price: '$80/session',
    duration: '1.5 hours',
    description: 'Comprehensive coaching on data structures and algorithms to help you excel in technical interviews and competitive programming.',
    features: [
      'Fundamental concepts coverage',
      'Problem-solving techniques',
      'Code optimization strategies',
      'Mock interview sessions',
      'LeetCode practice guidance',
      'Complexity analysis'
    ],
    technologies: ['Python', 'Java', 'C++', 'LeetCode', 'HackerRank'],
    popular: true
  },
  {
    id: 'mentorship',
    title: 'Mentorship Program',
    subtitle: 'Long-term Growth Partnership',
    icon: Users,
    color: '#F59E0B',
    price: '$300/month',
    duration: 'Ongoing',
    description: 'Comprehensive mentorship program for junior developers looking for continuous guidance and support in their career growth.',
    features: [
      'Weekly 1-on-1 sessions',
      'Project code reviews',
      'Career development planning',
      'Technical skill development',
      'Industry best practices',
      'Network building support'
    ],
    technologies: ['All Technologies', 'Best Practices', 'Career Development'],
    popular: true
  },
  {
    id: 'consultation',
    title: '1:1 Consultation',
    subtitle: 'Expert Technical Advice',
    icon: MessageCircle,
    color: '#EC4899',
    price: '$120/hour',
    duration: '1 hour',
    description: 'One-on-one consultation sessions for technical challenges, architecture decisions, and strategic technology planning.',
    features: [
      'Technical problem solving',
      'Architecture review',
      'Technology stack selection',
      'Performance optimization',
      'Security best practices',
      'Scalability planning'
    ],
    technologies: ['System Design', 'Architecture', 'Performance', 'Security'],
    popular: false
  },
  {
    id: 'call-sessions',
    title: 'Video Call Sessions',
    subtitle: 'Interactive Learning',
    icon: Phone,
    color: '#06B6D4',
    price: '$60/session',
    duration: '45 minutes',
    description: 'Interactive video call sessions for quick problem solving, code reviews, and technical discussions.',
    features: [
      'Screen sharing support',
      'Real-time code review',
      'Quick problem solving',
      'Technical Q&A',
      'Flexible scheduling',
      'Session recordings'
    ],
    technologies: ['Live Coding', 'Code Review', 'Problem Solving'],
    popular: false
  }
]

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Frontend Developer",
    company: "Google",
    image: "https://via.placeholder.com/60x60/3B82F6/ffffff?text=SC",
    content: "The mentorship program completely transformed my career. Went from junior to senior developer in 18 months!",
    rating: 5,
    service: "Mentorship Program"
  },
  {
    name: "Mike Johnson",
    role: "Full-Stack Developer",
    company: "Microsoft",
    image: "https://via.placeholder.com/60x60/10B981/ffffff?text=MJ",
    content: "DSA coaching helped me crack FAANG interviews. The structured approach and practice sessions were invaluable.",
    rating: 5,
    service: "DSA Coaching"
  },
  {
    name: "Emily Rodriguez",
    role: "Startup Founder",
    company: "TechStart",
    image: "https://via.placeholder.com/60x60/F59E0B/ffffff?text=ER",
    content: "Outstanding web development service. Delivered a scalable platform that handles 10k+ daily users flawlessly.",
    rating: 5,
    service: "Web Development"
  }
]

export default function Services() {
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
    <section id="services" className="py-20 bg-muted/30">
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
              <span className="text-gradient">My Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive solutions to accelerate your development journey and career growth
            </p>
          </motion.div>

          {/* Services Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16"
          >
            {services.map((service) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="relative group"
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 relative overflow-hidden">
                  {service.popular && (
                    <div className="absolute top-4 right-4 z-10">
                      <span className="bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded-full">
                        POPULAR
                      </span>
                    </div>
                  )}
                  
                  <CardHeader className="pb-4">
                    <div className="flex items-start gap-4">
                      <div 
                        className="p-3 rounded-lg"
                        style={{ backgroundColor: `${service.color}20` }}
                      >
                        <service.icon 
                          className="w-6 h-6" 
                          style={{ color: service.color }}
                        />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg mb-1">{service.title}</CardTitle>
                        <p className="text-sm text-muted-foreground mb-3">{service.subtitle}</p>
                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4 text-primary" />
                            <span className="font-medium">{service.duration}</span>
                          </div>
                          <div className="text-lg font-bold" style={{ color: service.color }}>
                            {service.price}
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div>
                      <h4 className="font-semibold text-sm mb-3">What's Included:</h4>
                      <ul className="space-y-2">
                        {service.features.slice(0, 4).map((feature, index) => (
                          <li key={index} className="text-xs text-muted-foreground flex items-start gap-2">
                            <CheckCircle className="w-3 h-3 text-green-600 mt-0.5 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                        {service.features.length > 4 && (
                          <li className="text-xs text-primary font-medium">
                            +{service.features.length - 4} more features
                          </li>
                        )}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-1">
                        {service.technologies.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                        {service.technologies.length > 3 && (
                          <span className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs">
                            +{service.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Button 
                      className="w-full group/btn"
                      style={{ backgroundColor: service.color }}
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Testimonials */}
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold text-center mb-12">
              What Clients Say
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                >
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full"
                        />
                        <div>
                          <h4 className="font-semibold text-sm">{testimonial.name}</h4>
                          <p className="text-xs text-muted-foreground">
                            {testimonial.role} at {testimonial.company}
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-1 mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                      
                      <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                        "{testimonial.content}"
                      </p>
                      
                      <div className="text-xs text-primary font-medium">
                        {testimonial.service}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <Card className="bg-gradient-to-r from-primary/10 to-purple-500/10 border-primary/20">
              <CardContent className="p-8">
                <Rocket className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Choose the service that best fits your needs and let's accelerate your growth together. 
                  Book a free consultation to discuss your requirements.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="group">
                    Book Free Consultation
                    <MessageCircle className="ml-2 h-4 w-4 transition-transform group-hover:scale-110" />
                  </Button>
                  <Button size="lg" variant="outline" className="group">
                    View Pricing Details
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 