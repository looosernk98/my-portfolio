'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiVuedotjs, SiTailwindcss,
  SiNodedotjs, SiExpress, SiPython, SiDjango, SiMongodb, SiPostgresql, SiRedis,
  SiAmazon, SiDocker, SiKubernetes, SiTerraform, SiNginx, SiGit, SiGithub,
  SiFigma, SiAdobexd, SiAdobephotoshop, SiSketch, SiFlutter, SiAndroid, SiApple,
  SiHtml5, SiCss3, SiSass, SiFramer, SiD3Dotjs, SiGraphql, SiFirebase,
  SiVercel, SiNetlify, SiLinux, SiUbuntu, SiWebpack,
  SiVite, SiBabel, SiEslint, SiPrettier, SiJest, SiCypress, SiStorybook
} from 'react-icons/si'
import { FaReact } from 'react-icons/fa'
import { VscCode } from 'react-icons/vsc'

const skills = [
  // Frontend
  { name: 'React', icon: SiReact, color: '#61DAFB', category: 'Frontend' },
  { name: 'Next.js', icon: SiNextdotjs, color: '#000000', category: 'Frontend' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', category: 'Frontend' },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', category: 'Frontend' },
  { name: 'Vue.js', icon: SiVuedotjs, color: '#4FC08D', category: 'Frontend' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4', category: 'Frontend' },
  { name: 'HTML5', icon: SiHtml5, color: '#E34F26', category: 'Frontend' },
  { name: 'CSS3', icon: SiCss3, color: '#1572B6', category: 'Frontend' },
  { name: 'Sass', icon: SiSass, color: '#CC6699', category: 'Frontend' },
  { name: 'Framer Motion', icon: SiFramer, color: '#0055FF', category: 'Frontend' },
  { name: 'D3.js', icon: SiD3Dotjs, color: '#F68E56', category: 'Frontend' },

  // Backend
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933', category: 'Backend' },
  { name: 'Express.js', icon: SiExpress, color: '#000000', category: 'Backend' },
  { name: 'Python', icon: SiPython, color: '#3776AB', category: 'Backend' },
  { name: 'Django', icon: SiDjango, color: '#092E20', category: 'Backend' },
  { name: 'GraphQL', icon: SiGraphql, color: '#E10098', category: 'Backend' },

  // Database
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248', category: 'Database' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791', category: 'Database' },
  { name: 'Redis', icon: SiRedis, color: '#DC382D', category: 'Database' },
  { name: 'Firebase', icon: SiFirebase, color: '#FFCA28', category: 'Database' },

  // Cloud & DevOps
  { name: 'AWS', icon: SiAmazon, color: '#FF9900', category: 'Cloud' },
  { name: 'Docker', icon: SiDocker, color: '#2496ED', category: 'Cloud' },
  { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5', category: 'Cloud' },
  { name: 'Terraform', icon: SiTerraform, color: '#7B42BC', category: 'Cloud' },
  { name: 'Nginx', icon: SiNginx, color: '#009639', category: 'Cloud' },
  { name: 'Vercel', icon: SiVercel, color: '#000000', category: 'Cloud' },
  { name: 'Netlify', icon: SiNetlify, color: '#00C7B7', category: 'Cloud' },

  // Mobile
  { name: 'React Native', icon: FaReact, color: '#61DAFB', category: 'Mobile' },
  { name: 'Flutter', icon: SiFlutter, color: '#02569B', category: 'Mobile' },
  { name: 'Android', icon: SiAndroid, color: '#3DDC84', category: 'Mobile' },
  { name: 'iOS', icon: SiApple, color: '#000000', category: 'Mobile' },

  // Design
  { name: 'Figma', icon: SiFigma, color: '#F24E1E', category: 'Design' },
  { name: 'Adobe XD', icon: SiAdobexd, color: '#FF61F6', category: 'Design' },
  { name: 'Photoshop', icon: SiAdobephotoshop, color: '#31A8FF', category: 'Design' },
  { name: 'Sketch', icon: SiSketch, color: '#F7B500', category: 'Design' },

  // Tools
  { name: 'Git', icon: SiGit, color: '#F05032', category: 'Tools' },
  { name: 'GitHub', icon: SiGithub, color: '#181717', category: 'Tools' },
  { name: 'VS Code', icon: VscCode, color: '#007ACC', category: 'Tools' },
  { name: 'Webpack', icon: SiWebpack, color: '#8DD6F9', category: 'Tools' },
  { name: 'Vite', icon: SiVite, color: '#646CFF', category: 'Tools' },
  { name: 'ESLint', icon: SiEslint, color: '#4B32C3', category: 'Tools' },
  { name: 'Prettier', icon: SiPrettier, color: '#F7B93E', category: 'Tools' },
  { name: 'Jest', icon: SiJest, color: '#C21325', category: 'Tools' },
  { name: 'Cypress', icon: SiCypress, color: '#17202C', category: 'Tools' },
  { name: 'Storybook', icon: SiStorybook, color: '#FF4785', category: 'Tools' },
  { name: 'Linux', icon: SiLinux, color: '#FCC624', category: 'Tools' },
  { name: 'Ubuntu', icon: SiUbuntu, color: '#E95420', category: 'Tools' }
]

const categories = ['All', 'Frontend', 'Backend', 'Database', 'Cloud', 'Mobile', 'Design', 'Tools']

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
          {categories.map((category) => (
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