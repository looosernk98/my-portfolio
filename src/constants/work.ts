import { 
  Users, TrendingUp, Trophy, Target, Clock, Briefcase, Globe, 
  Rocket, Code, GitBranch, Heart 
} from 'lucide-react'

export const workExperience = [
  {
    id: 1,
    company: "TechCorp Solutions",
    position: "Senior Full Stack Developer",
    level: "Senior",
    location: "San Francisco, CA",
    startDate: "March 2022",
    endDate: "Present",
    duration: "2+ years",
    logo: "https://via.placeholder.com/80x80/3B82F6/ffffff?text=TC",
    description: "Leading development of enterprise-scale applications and mentoring junior developers in modern web technologies. Spearheading digital transformation initiatives and architecting scalable solutions.",
    achievements: [
      "Led a team of 8 developers to deliver a $2M e-commerce platform",
      "Improved application performance by 40% through optimization",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Mentored 5 junior developers, with 3 receiving promotions",
      "Architected microservices handling 1M+ daily requests"
    ],
    technologies: ["React", "Node.js", "TypeScript", "AWS", "Docker", "PostgreSQL", "Kubernetes", "GraphQL"],
    type: "Full-time",
    companyType: "Tech Corporation",
    teamSize: "8+ developers",
    highlights: {
      impact: "High",
      leadership: "Yes",
      innovation: "Yes"
    },
    metrics: [
      { label: "Team Size", value: "8", icon: Users, color: "from-blue-500 to-cyan-500" },
      { label: "Project Value", value: "$2M", icon: Trophy, color: "from-green-500 to-emerald-500" },
      { label: "Performance", value: "+40%", icon: TrendingUp, color: "from-purple-500 to-pink-500" },
      { label: "Deployment", value: "-60%", icon: Rocket, color: "from-orange-500 to-red-500" }
    ],
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    company: "StartupXYZ",
    position: "Full Stack Developer",
    level: "Mid-Senior",
    location: "Remote",
    startDate: "June 2020",
    endDate: "February 2022",
    duration: "1.8 years",
    logo: "https://via.placeholder.com/80x80/10B981/ffffff?text=SX",
    description: "Developed MVP and scaled the platform from 0 to 100k+ users. Built the entire tech stack from ground up and established development best practices.",
    achievements: [
      "Built MVP that attracted 100k+ users in first year",
      "Designed and implemented scalable microservices architecture",
      "Reduced server costs by 45% through efficient resource management",
      "Integrated payment systems processing $500k+ monthly",
      "Established monitoring and alerting systems with 99.9% uptime"
    ],
    technologies: ["Vue.js", "Express.js", "MongoDB", "Redis", "Stripe", "AWS", "Socket.io", "Elasticsearch"],
    type: "Full-time",
    companyType: "Early-stage Startup",
    teamSize: "3-5 developers",
    highlights: {
      impact: "High",
      growth: "Rapid",
      innovation: "Yes"
    },
    metrics: [
      { label: "User Growth", value: "100K+", icon: Users, color: "from-green-500 to-emerald-500" },
      { label: "Cost Reduction", value: "-45%", icon: TrendingUp, color: "from-purple-500 to-pink-500" },
      { label: "Revenue", value: "$500K/mo", icon: Trophy, color: "from-yellow-500 to-orange-500" },
      { label: "Uptime", value: "99.9%", icon: Target, color: "from-blue-500 to-cyan-500" }
    ],
    color: "from-green-500 to-emerald-500"
  },
  {
    id: 3,
    company: "DigitalAgency Pro",
    position: "Frontend Developer",
    level: "Mid-level",
    location: "Austin, TX",
    startDate: "January 2019",
    endDate: "May 2020",
    duration: "1.3 years",
    logo: "https://via.placeholder.com/80x80/8B5CF6/ffffff?text=DA",
    description: "Specialized in creating responsive web applications and collaborating with design teams to deliver pixel-perfect interfaces for diverse client portfolio.",
    achievements: [
      "Delivered 25+ responsive websites for diverse clients",
      "Improved website loading speed by 50% on average",
      "Collaborated with UI/UX team to increase conversion rates by 30%",
      "Established component library used across 15+ projects",
      "Achieved 98% client satisfaction rate with timely delivery"
    ],
    technologies: ["React", "SCSS", "JavaScript", "Webpack", "Figma", "Adobe XD", "Jest", "Cypress"],
    type: "Full-time",
    companyType: "Digital Agency",
    teamSize: "4-6 developers",
    highlights: {
      impact: "Medium",
      creativity: "High",
      clientFocus: "Yes"
    },
    metrics: [
      { label: "Projects", value: "25+", icon: Briefcase, color: "from-purple-500 to-pink-500" },
      { label: "Speed Boost", value: "+50%", icon: Rocket, color: "from-yellow-500 to-orange-500" },
      { label: "Conversion", value: "+30%", icon: TrendingUp, color: "from-green-500 to-emerald-500" },
      { label: "Satisfaction", value: "98%", icon: Heart, color: "from-red-500 to-pink-500" }
    ],
    color: "from-purple-500 to-pink-500"
  }
]

export const careerStats = [
  { label: "Years Experience", value: "5+", icon: Clock, color: "from-blue-500 to-cyan-500", description: "Professional development" },
  { label: "Projects Delivered", value: "50+", icon: Briefcase, color: "from-green-500 to-emerald-500", description: "Successful launches" },
  { label: "Team Members Led", value: "15+", icon: Users, color: "from-purple-500 to-pink-500", description: "Developers mentored" },
  { label: "Technologies", value: "20+", icon: Code, color: "from-orange-500 to-red-500", description: "Tools & frameworks" },
  { label: "Users Impacted", value: "1M+", icon: Globe, color: "from-cyan-500 to-blue-500", description: "End users reached" },
  { label: "Cost Savings", value: "$2M+", icon: TrendingUp, color: "from-yellow-500 to-orange-500", description: "Business value delivered" }
]

// Simple work history structure (alternative to the detailed workExperience above)
export const simpleWorkHistory = [
  {
    id: 1,
    company: "TechCorp Solutions",
    position: "Senior Full Stack Developer",
    location: "San Francisco, CA",
    startDate: "2022-03-01",
    endDate: null, // Current job
    logo: "https://via.placeholder.com/60x60/3B82F6/ffffff?text=TC",
    description: "Leading development of enterprise-scale applications and mentoring junior developers in modern web technologies.",
    achievements: [
      "Led a team of 8 developers to deliver a $2M e-commerce platform",
      "Improved application performance by 40% through optimization",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Mentored 5 junior developers, with 3 receiving promotions"
    ],
    technologies: ["React", "Node.js", "TypeScript", "AWS", "Docker", "PostgreSQL"],
    type: "Full-time",
    highlights: {
      teamSize: 8,
      projectValue: "$2M",
      performance: "40% improvement"
    }
  },
  {
    id: 2,
    company: "StartupXYZ",
    position: "Full Stack Developer",
    location: "Remote",
    startDate: "2020-06-01",
    endDate: "2022-02-28",
    logo: "https://via.placeholder.com/60x60/10B981/ffffff?text=SX",
    description: "Developed MVP and scaled the platform from 0 to 100k+ users. Built the entire tech stack from ground up.",
    achievements: [
      "Built MVP that attracted 100k+ users in first year",
      "Designed and implemented scalable microservices architecture",
      "Reduced server costs by 45% through efficient resource management",
      "Integrated payment systems processing $500k+ monthly"
    ],
    technologies: ["Vue.js", "Express.js", "MongoDB", "Redis", "Stripe", "AWS"],
    type: "Full-time",
    highlights: {
      userGrowth: "100k+ users",
      costReduction: "45%",
      revenue: "$500k/month"
    }
  },
  {
    id: 3,
    company: "DigitalAgency Pro",
    position: "Frontend Developer",
    location: "Austin, TX",
    startDate: "2019-01-15",
    endDate: "2020-05-30",
    logo: "https://via.placeholder.com/60x60/8B5CF6/ffffff?text=DA",
    description: "Specialized in creating responsive web applications and collaborating with design teams to deliver pixel-perfect interfaces.",
    achievements: [
      "Delivered 25+ responsive websites for diverse clients",
      "Improved website loading speed by 50% on average",
      "Collaborated with UI/UX team to increase conversion rates by 30%",
      "Established component library used across 15+ projects"
    ],
    technologies: ["React", "SCSS", "JavaScript", "Webpack", "Figma", "Adobe XD"],
    type: "Full-time",
    highlights: {
      projects: "25+ websites",
      speedImprovement: "50%",
      conversionBoost: "30%"
    }
  },
  {
    id: 4,
    company: "FreelanceWork",
    position: "Web Developer",
    location: "Various",
    startDate: "2018-06-01",
    endDate: "2018-12-31",
    logo: "https://via.placeholder.com/60x60/F59E0B/ffffff?text=FL",
    description: "Freelance web development projects for small businesses and startups, focusing on modern web technologies.",
    achievements: [
      "Completed 15+ projects with 100% client satisfaction",
      "Specialized in e-commerce and business websites",
      "Established long-term partnerships with 8 clients",
      "Generated $75k revenue in 6 months"
    ],
    technologies: ["WordPress", "PHP", "JavaScript", "MySQL", "Bootstrap"],
    type: "Freelance",
    highlights: {
      projects: "15+ projects",
      satisfaction: "100%",
      revenue: "$75k"
    }
  }
]

export const workSummaryStats = [
  {
    value: "5+",
    label: "Years Experience",
    description: "Professional development"
  },
  {
    value: "50+",
    label: "Projects Completed",
    description: "Successful launches"
  },
  {
    value: "15+",
    label: "Team Members Mentored",
    description: "Developers mentored"
  },
  {
    value: "100%",
    label: "Client Satisfaction",
    description: "Happy clients"
  }
]
