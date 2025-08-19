import { 
  Calendar, Award, Trophy, BookOpen, GitBranch, User, MapPin, Code, Star, 
  Zap, Target, Globe, Rocket, Users, Heart, Coffee
} from 'lucide-react'
import { getYearsOfExperience } from '@/lib/utils'

export const personalInfo = {
  name: "John Doe",
  role: "Full Stack Developer & Tech Innovator",
  location: "San Francisco, CA",
  email: "john.doe@example.com",
  phone: "+1 (555) 123-4567",
  birthDate: "1995-06-15",
  experience: getYearsOfExperience("2019-01-01"),
  description: `Passionate full-stack developer with ${getYearsOfExperience("2019-01-01")}+ years of experience in creating scalable web applications. 
    I specialize in modern JavaScript frameworks, cloud technologies, and have a strong background in both frontend and backend development. 
    I'm also passionate about mentoring junior developers and sharing knowledge through technical writing and speaking.`
}

export const stats = [
  { label: "Years Experience", value: getYearsOfExperience("2019-01-01"), suffix: "+", icon: Calendar, color: "from-blue-500 to-cyan-500" },
  { label: "Projects Completed", value: 150, suffix: "+", icon: Code, color: "from-purple-500 to-pink-500" },
  { label: "Happy Clients", value: 85, suffix: "+", icon: Users, color: "from-green-500 to-emerald-500" },
  { label: "GitHub Stars", value: 420, suffix: "+", icon: Star, color: "from-orange-500 to-red-500" }
]

export const achievements = [
  {
    icon: Award,
    title: "AWS Certified Developer",
    description: "Professional level certification in AWS cloud services",
    year: "2023",
    color: "from-orange-400 to-orange-600"
  },
  {
    icon: Trophy,
    title: "Tech Lead",
    description: "Leading a team of 8 developers at current company",
    year: "2022",
    color: "from-yellow-400 to-yellow-600"
  },
  {
    icon: GitBranch,
    title: "Open Source Contributor",
    description: "Contributed to 15+ open source projects",
    year: "2021",
    color: "from-green-400 to-green-600"
  },
  {
    icon: BookOpen,
    title: "Technical Writer",
    description: "Published 25+ technical articles and tutorials",
    year: "2021",
    color: "from-blue-400 to-blue-600"
  }
]

export const coreSkills = [
  { name: "Frontend Development", level: 95, icon: Globe },
  { name: "Backend Development", level: 90, icon: Zap },
  { name: "Cloud Architecture", level: 85, icon: Rocket },
  { name: "Team Leadership", level: 88, icon: Target }
]

export const interests = [
  { name: "Web Development", icon: Code, color: "bg-blue-500/10 text-blue-500 border-blue-500/20" },
  { name: "Cloud Computing", icon: Rocket, color: "bg-purple-500/10 text-purple-500 border-purple-500/20" },
  { name: "AI/ML", icon: Zap, color: "bg-green-500/10 text-green-500 border-green-500/20" },
  { name: "Mentoring", icon: Users, color: "bg-orange-500/10 text-orange-500 border-orange-500/20" },
  { name: "Technical Writing", icon: BookOpen, color: "bg-pink-500/10 text-pink-500 border-pink-500/20" },
  { name: "Open Source", icon: GitBranch, color: "bg-cyan-500/10 text-cyan-500 border-cyan-500/20" }
]
