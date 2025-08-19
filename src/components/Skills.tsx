'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { skills, skillCategories } from '@/constants'

export default function Skills() {
  const [selectedCategory, setSelectedCategory] = React.useState('All')

  const filteredSkills = selectedCategory === 'All' 
    ? skills 
    : skills.filter(skill => skill.category === selectedCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.2,
        staggerChildren: 0.01
      }
    }
  }

  const itemVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 500,
        damping: 25,
        duration: 0.3
      }
    }
  }

  return (
    <section id="skills" className="py-20 pt-32 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            <span className="text-gradient bg-gradient-to-r from-primary via-purple-500 to-cyan-500 bg-clip-text text-transparent">
              Skills & Technologies
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div 
          className="flex flex-wrap justify-center gap-2 mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.1, ease: "easeOut" }}
        >
          {skillCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground shadow-lg'
                  : 'bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={selectedCategory}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-center gap-3"
        >
          {filteredSkills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -2,
                transition: { duration: 0.15, ease: "easeOut" }
              }}
              className="flex items-center gap-2 px-4 py-2 bg-background/80 backdrop-blur-sm border border-border rounded-full shadow-sm hover:shadow-md transition-all duration-200 group cursor-pointer"
            >
              <skill.icon 
                className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" 
                style={{ color: skill.color }}
              />
              <span className="text-sm font-medium text-foreground">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Count */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.2, ease: "easeOut" }}
          className="text-center mt-8"
        >
          <p className="text-sm text-muted-foreground">
            Showing {filteredSkills.length} {selectedCategory === 'All' ? 'total' : selectedCategory.toLowerCase()} skills
          </p>
        </motion.div>
      </div>
    </section>
  )
}