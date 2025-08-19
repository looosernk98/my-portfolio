'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  ExternalLink, 
  Zap,
  Star
} from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { socialPlatforms, communityAchievements } from '@/constants'

export default function SocialStats() {
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
    <section className="py-20">
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
              <span className="text-gradient">Social Presence & Stats</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              My activity across various platforms and contributions to the developer community
            </p>
          </motion.div>

          {/* Social Platforms Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-16"
          >
                               {socialPlatforms.map((social, index) => (
              <motion.div
                key={social.platform}
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div 
                          className="p-2 rounded-lg"
                          style={{ backgroundColor: `${social.color}20` }}
                        >
                          <social.icon 
                            className="w-6 h-6" 
                            style={{ color: social.color }}
                          />
                        </div>
                        <div>
                          <CardTitle className="text-lg">{social.platform}</CardTitle>
                          <p className="text-sm text-muted-foreground">{social.handle}</p>
                        </div>
                      </div>
                      <Button 
                        size="sm" 
                        variant="outline"
                        className="group"
                        asChild
                      >
                        <a href={social.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 transition-transform group-hover:scale-110" />
                        </a>
                      </Button>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      {Object.entries(social.stats).map(([key, value]) => (
                        <div key={key} className="text-center p-3 bg-muted/50 rounded-lg">
                          <div className="text-lg font-bold" style={{ color: social.color }}>
                            {value}
                          </div>
                          <div className="text-xs text-muted-foreground capitalize">
                            {key}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Highlights */}
                    <div>
                      <h4 className="font-semibold text-sm mb-3">Highlights:</h4>
                      <ul className="space-y-2">
                        {social.highlights.map((highlight, idx) => (
                          <li key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                            <Star className="w-3 h-3 text-yellow-500 mt-0.5 flex-shrink-0" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Achievements */}
          <motion.div variants={itemVariants} className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12">
              Community Achievements
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                                 {communityAchievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <Card className="p-6 h-full">
                    <CardContent className="space-y-4">
                      <div 
                        className="w-16 h-16 mx-auto rounded-full flex items-center justify-center"
                        style={{ backgroundColor: `${achievement.color}20` }}
                      >
                        <achievement.icon 
                          className="w-8 h-8" 
                          style={{ color: achievement.color }}
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-lg mb-2">{achievement.title}</h4>
                        <p className="text-sm text-muted-foreground mb-3">
                          {achievement.description}
                        </p>
                        <div 
                          className="text-xl font-bold"
                          style={{ color: achievement.color }}
                        >
                          {achievement.metric}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center">
            <Card className="bg-gradient-to-r from-primary/10 to-purple-500/10 border-primary/20">
              <CardContent className="p-8">
                <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Let's Connect!</h3>
                <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                  Follow me on these platforms for regular updates, coding tips, and tech insights. 
                  Let's build something amazing together!
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                                           {socialPlatforms.map((social) => (
                    <Button
                      key={social.platform}
                      variant="outline"
                      size="sm"
                      className="group"
                      asChild
                    >
                      <a href={social.url} target="_blank" rel="noopener noreferrer">
                        <social.icon className="w-4 h-4 mr-2 transition-transform group-hover:scale-110" />
                        {social.platform}
                      </a>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 