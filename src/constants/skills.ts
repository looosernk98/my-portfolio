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

export const skills = [
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

export const skillCategories = ['All', 'Frontend', 'Backend', 'Database', 'Cloud', 'Mobile', 'Design', 'Tools']
