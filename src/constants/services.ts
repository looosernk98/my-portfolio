import { 
  Code, 
  GraduationCap, 
  BrainCircuit, 
  MessageCircle, 
  Phone, 
  Users
} from 'lucide-react'

export const services = [
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

export const testimonials = [
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
