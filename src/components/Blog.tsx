'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight, BookOpen, TrendingUp, User, Tag } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { formatDateShort } from '@/lib/utils'
import { blogPosts, blogCategories } from '@/constants'

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = React.useState("All")

  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory)

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
    <section id="blog" className="py-20 bg-muted/30">
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
              <span className="text-gradient">Blog & Articles</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Sharing knowledge through technical articles, tutorials, and insights from my development journey
            </p>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3">
              {blogCategories.map((category) => (
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

          {/* Featured Post */}
          <motion.div variants={itemVariants} className="mb-16">
            <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-full">
                  <img
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                      FEATURED
                    </span>
                  </div>
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {formatDateShort(blogPosts[0].publishedAt)}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {blogPosts[0].readTime}
                    </div>
                    <div className="flex items-center gap-1">
                      <TrendingUp className="w-4 h-4" />
                      {blogPosts[0].views} views
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 hover:text-primary transition-colors cursor-pointer">
                    {blogPosts[0].title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {blogPosts[0].excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {blogPosts[0].tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <Button className="group">
                      Read More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </motion.div>

          {/* Blog Posts Grid */}
          <motion.div 
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          >
            {filteredPosts.slice(1).map((post) => (
              <motion.div
                key={post.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
              >
                <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-black/70 text-white text-xs font-medium px-2 py-1 rounded">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {formatDateShort(post.publishedAt)}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {post.readTime}
                      </div>
                    </div>

                    <h3 className="text-lg font-bold group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-1">
                      {post.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                      {post.tags.length > 2 && (
                        <span className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs">
                          +{post.tags.length - 2}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <span>{post.views} views</span>
                        <span>{post.likes} likes</span>
                      </div>
                      <Button size="sm" variant="ghost" className="group/btn">
                        Read
                        <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats & CTA */}
          <motion.div variants={itemVariants}>
            <Card className="bg-gradient-to-r from-primary/10 to-purple-500/10 border-primary/20">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                  <div className="text-center">
                    <BookOpen className="w-8 h-8 text-primary mx-auto mb-3" />
                    <div className="text-3xl font-bold text-primary mb-2">25+</div>
                    <div className="text-sm text-muted-foreground">Articles Published</div>
                  </div>
                  <div className="text-center">
                    <TrendingUp className="w-8 h-8 text-primary mx-auto mb-3" />
                    <div className="text-3xl font-bold text-primary mb-2">50K+</div>
                    <div className="text-sm text-muted-foreground">Total Views</div>
                  </div>
                  <div className="text-center">
                    <User className="w-8 h-8 text-primary mx-auto mb-3" />
                    <div className="text-3xl font-bold text-primary mb-2">2K+</div>
                    <div className="text-sm text-muted-foreground">Regular Readers</div>
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
                  <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                    Subscribe to get notified about new articles, tutorials, and insights on web development, 
                    career growth, and technology trends.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="flex-1 px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                    <Button className="group">
                      Subscribe
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
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