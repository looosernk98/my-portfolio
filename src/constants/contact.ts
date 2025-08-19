import { Github, Linkedin, Twitter } from 'lucide-react'

export const contactInfo = {
  email: 'john.doe@example.com',
  phone: '+1 (555) 123-4567',
  location: 'San Francisco, CA, USA',
  timezone: 'PST (UTC-8)',
  responseTime: 'Within 24 hours'
}

export const contactSocialLinks = [
  {
    platform: 'GitHub',
    url: 'https://github.com/johndoe',
    icon: Github,
    color: '#333'
  },
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/in/johndoe',
    icon: Linkedin,
    color: '#0077B5'
  },
  {
    platform: 'Twitter',
    url: 'https://twitter.com/johndoe_dev',
    icon: Twitter,
    color: '#1DA1F2'
  }
]
