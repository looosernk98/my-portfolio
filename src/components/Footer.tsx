'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Heart, ArrowUp } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { getCurrentYear } from '@/lib/utils'
import { footerSocialLinks, footerLinks, footerInfo } from '@/constants'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-bold text-gradient mb-4">{footerInfo.brandName}</h3>
              <p className="text-muted-foreground mb-6 max-w-md">
                {footerInfo.description}
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {footerSocialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-background border border-border rounded-lg flex items-center justify-center hover:border-primary/50 transition-colors"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Footer Links */}
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="font-semibold mb-4">{category}</h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                        onClick={(e) => {
                          if (link.href.startsWith('#')) {
                            e.preventDefault()
                            const element = document.querySelector(link.href)
                            if (element) {
                              element.scrollIntoView({ behavior: 'smooth' })
                            }
                          }
                        }}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {getCurrentYear()} {footerInfo.authorName}. Made with{' '}
              <Heart className="inline w-4 h-4 text-red-500 mx-1" />
              using Next.js & TypeScript
            </p>
            
            <div className="flex items-center gap-4">
              <span className="text-muted-foreground text-sm">
                {footerInfo.statusText}
              </span>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <Button
                variant="outline"
                size="sm"
                onClick={scrollToTop}
                className="group"
              >
                <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-1" />
                Back to top
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
} 