import { Github, Linkedin, Twitter, Mail } from 'lucide-react'

export const footerSocialLinks = [
  { icon: Github, href: 'https://github.com/johndoe', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/johndoe', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://twitter.com/johndoe_dev', label: 'Twitter' },
  { icon: Mail, href: 'mailto:john.doe@example.com', label: 'Email' }
]

export const footerLinks = {
  'Quick Links': [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' }
  ],
  'Services': [
    { name: 'Web Development', href: '#services' },
    { name: 'Mentorship', href: '#services' },
    { name: 'DSA Coaching', href: '#services' },
    { name: 'Consultation', href: '#services' }
  ],
  'Resources': [
    { name: 'Blog', href: '#blog' },
    { name: 'Resume', href: '#' },
    { name: 'Portfolio', href: '#projects' },
    { name: 'Skills', href: '#skills' }
  ]
}

export const footerInfo = {
  brandName: 'Portfolio',
  description: 'Full-stack developer passionate about creating exceptional digital experiences and helping others grow in their tech careers.',
  authorName: 'John Doe',
  statusText: 'Available for new projects'
}
