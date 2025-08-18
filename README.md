# Modern Portfolio Website

A comprehensive, modern portfolio website built with Next.js, TypeScript, Tailwind CSS, Framer Motion, and D3.js. Features beautiful animations, responsive design, and all the sections needed for a professional developer portfolio.

## 🌟 Features

### ✨ Core Sections
- **Hero Section** - Interactive landing with D3.js animations and skill visualizations
- **About Me** - Personal information, achievements, and interests
- **Projects** - Showcase with filtering, screenshots, and detailed features
- **Work History** - Modern timeline UI with achievements and technologies
- **Skills** - Categorized skills with progress bars and D3.js chart
- **Services** - Professional services with pricing and testimonials
- **Social Stats** - GitHub, LeetCode, GeeksforGeeks stats with D3.js charts
- **Blog** - Article showcase with filtering and newsletter signup
- **Contact** - Contact form with validation and social links

### 🚀 Technologies Used

**Frontend:**
- Next.js 14 with App Router
- TypeScript for type safety
- Tailwind CSS for styling
- Framer Motion for animations
- D3.js for data visualizations
- ShadCN UI components
- Lucide React icons

**Backend Ready:**
- Node.js & Express setup ready
- MongoDB & MySQL integration prepared
- API routes structure

### 🎨 Design Features
- Modern, responsive design
- Smooth animations and transitions
- Interactive D3.js visualizations
- Glass morphism effects
- Custom scrollbar styling
- Gradient text effects
- Hover animations
- Mobile-first approach

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── ui/
│   │   │   ├── button.tsx
│   │   │   └── card.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── WorkHistory.tsx
│   │   ├── Skills.tsx
│   │   ├── Services.tsx
│   │   ├── SocialStats.tsx
│   │   ├── Blog.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   └── lib/
│       └── utils.ts
├── public/
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── next.config.js
```

## 🎯 Customization Guide

### 1. Personal Information
Update personal details in each component:

**About.tsx** - Personal info object:
```typescript
const personalInfo = {
  name: "Your Name",
  role: "Your Role",
  location: "Your Location",
  email: "your.email@example.com",
  // ... other details
}
```

**Header.tsx** - Social links:
```typescript
const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/yourusername', icon: Github },
  // ... other links
]
```

### 2. Projects
Update the projects array in **Projects.tsx**:
```typescript
const projects = [
  {
    title: "Your Project",
    description: "Project description",
    image: "project-image-url",
    technologies: ["React", "Node.js"],
    features: ["Feature 1", "Feature 2"],
    liveUrl: "https://your-project.com",
    githubUrl: "https://github.com/you/project"
  }
]
```

### 3. Work Experience
Update work history in **WorkHistory.tsx**:
```typescript
const workExperience = [
  {
    company: "Company Name",
    position: "Your Position",
    startDate: "2023-01-01",
    endDate: null, // null for current job
    description: "Job description",
    achievements: ["Achievement 1", "Achievement 2"],
    technologies: ["Tech 1", "Tech 2"]
  }
]
```

### 4. Skills
Customize skills in **Skills.tsx**:
```typescript
const skillCategories = [
  {
    title: 'Frontend Development',
    skills: [
      { name: 'React', level: 95, experience: '5+ years' }
    ]
  }
]
```

### 5. Services
Update services in **Services.tsx**:
```typescript
const services = [
  {
    title: "Service Name",
    price: "$100/hour",
    description: "Service description",
    features: ["Feature 1", "Feature 2"]
  }
]
```

### 6. Blog Posts
Update blog content in **Blog.tsx**:
```typescript
const blogPosts = [
  {
    title: "Blog Post Title",
    excerpt: "Post excerpt",
    category: "Category",
    publishedAt: "2024-01-01",
    image: "post-image-url"
  }
]
```

### 7. Social Stats
Update platform stats in **SocialStats.tsx**:
```typescript
const socialLinks = [
  {
    platform: 'GitHub',
    handle: '@yourusername',
    url: 'https://github.com/yourusername',
    stats: {
      followers: 'Your stats',
      repositories: 'Your stats'
    }
  }
]
```

## 🎨 Styling Customization

### Colors
Modify colors in **tailwind.config.ts**:
```typescript
colors: {
  primary: {
    DEFAULT: "hsl(var(--primary))",
    foreground: "hsl(var(--primary-foreground))",
  },
  // ... other colors
}
```

Update CSS variables in **globals.css**:
```css
:root {
  --primary: 221.2 83.2% 53.3%;
  --primary-foreground: 210 40% 98%;
  /* ... other variables */
}
```

### Fonts
Change fonts in **layout.tsx**:
```typescript
import { Inter, Your_Font } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const yourFont = Your_Font({ subsets: ['latin'] })
```

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Upload the `out` folder to Netlify

### Other Platforms
1. Build: `npm run build`
2. Upload the generated files

## 📝 SEO Optimization

The portfolio includes:
- Meta tags in `layout.tsx`
- Semantic HTML structure
- Alt tags for images
- Proper heading hierarchy
- Open Graph tags ready

Update SEO information in **layout.tsx**:
```typescript
export const metadata: Metadata = {
  title: 'Your Name | Full Stack Developer',
  description: 'Your description',
  keywords: ['your', 'keywords'],
}
```

## 🔧 Backend Integration

The portfolio is ready for backend integration:

1. **Contact Form**: Add API route in `src/app/api/contact/route.ts`
2. **Blog CMS**: Integrate with Contentful, Strapi, or Sanity
3. **Analytics**: Add Google Analytics or Plausible
4. **Database**: Connect MongoDB or PostgreSQL for dynamic content

## 📱 Responsive Design

The portfolio is fully responsive with:
- Mobile-first approach
- Tailwind CSS responsive utilities
- Flexible grid layouts
- Touch-friendly interactions
- Optimized for all screen sizes

## ⚡ Performance

Optimizations included:
- Next.js 14 with App Router
- Image optimization
- Code splitting
- Lazy loading
- Minimal bundle size
- Fast loading animations

## 🎭 Animations

Framer Motion animations include:
- Page transitions
- Scroll-triggered animations
- Hover effects
- Loading states
- Smooth scrolling navigation

## 📊 Analytics Ready

Add analytics by updating **layout.tsx**:
```typescript
// Add Google Analytics
// Add Plausible
// Add custom tracking
```

## 🐛 Troubleshooting

### Common Issues

1. **Build Errors**: Check TypeScript types and imports
2. **Animation Issues**: Verify Framer Motion version compatibility
3. **Styling Issues**: Check Tailwind class names and CSS variables
4. **D3 Errors**: Ensure D3 version compatibility with TypeScript

### Support

For questions or issues:
1. Check the documentation
2. Review component code
3. Open an issue on GitHub

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 🙏 Acknowledgments

- ShadCN UI for component library
- Framer Motion for animations
- D3.js for visualizations
- Tailwind CSS for styling
- Next.js team for the framework

---

Built with ❤️ using Next.js, TypeScript, and modern web technologies. 