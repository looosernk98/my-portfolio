import { 
  Github, 
  Linkedin, 
  Twitter, 
  Trophy, 
  Target, 
  Award, 
  TrendingUp 
} from 'lucide-react'

export const socialPlatforms = [
  {
    platform: 'GitHub',
    handle: '@johndoe',
    url: 'https://github.com/johndoe',
    icon: Github,
    color: '#333',
    stats: {
      followers: '2.5K',
      repositories: '127',
      stars: '3.2K',
      contributions: '1,847'
    },
    highlights: [
      'Top 5% contributor in Open Source',
      '50+ starred repositories',
      'Active in JavaScript community'
    ]
  },
  {
    platform: 'LeetCode',
    handle: 'johndoe_dev',
    url: 'https://leetcode.com/johndoe_dev',
    icon: Target,
    color: '#FFA116',
    stats: {
      problems: '850+',
      ranking: 'Top 15%',
      contests: '45',
      rating: '1,847'
    },
    highlights: [
      'Guardian rating achieved',
      'Weekly contest participant',
      'Algorithm specialist'
    ]
  },
  {
    platform: 'GeeksforGeeks',
    handle: 'johndoe123',
    url: 'https://auth.geeksforgeeks.org/user/johndoe123',
    icon: Trophy,
    color: '#2F8D46',
    stats: {
      score: '2,150',
      articles: '25',
      rank: 'Top 10%',
      streak: '120 days'
    },
    highlights: [
      'Technical content writer',
      'Active problem solver',
      'Interview preparation mentor'
    ]
  },
  {
    platform: 'LinkedIn',
    handle: '/in/johndoe',
    url: 'https://linkedin.com/in/johndoe',
    icon: Linkedin,
    color: '#0077B5',
    stats: {
      connections: '5K+',
      posts: '150+',
      followers: '3.8K',
      engagement: '8.5%'
    },
    highlights: [
      'Tech industry influencer',
      'Regular content creator',
      'Professional network builder'
    ]
  },
  {
    platform: 'Twitter',
    handle: '@johndoe_dev',
    url: 'https://twitter.com/johndoe_dev',
    icon: Twitter,
    color: '#1DA1F2',
    stats: {
      followers: '1.2K',
      tweets: '890',
      likes: '5.6K',
      retweets: '2.1K'
    },
    highlights: [
      'Tech tips and tutorials',
      'Industry insights sharing',
      'Developer community engagement'
    ]
  }
]

export const communityAchievements = [
  {
    title: 'Open Source Contributor',
    description: 'Contributed to 20+ major open source projects',
    icon: Github,
    color: '#333',
    metric: '20+ Projects'
  },
  {
    title: 'Problem Solving Expert',
    description: 'Solved 1000+ algorithmic problems across platforms',
    icon: Target,
    color: '#FFA116',
    metric: '1000+ Problems'
  },
  {
    title: 'Tech Community Leader',
    description: 'Active in developer communities and mentorship',
    icon: Award,
    color: '#2F8D46',
    metric: '50+ Mentees'
  },
  {
    title: 'Content Creator',
    description: 'Created technical content reaching 10K+ developers',
    icon: TrendingUp,
    color: '#0077B5',
    metric: '10K+ Reach'
  }
]
