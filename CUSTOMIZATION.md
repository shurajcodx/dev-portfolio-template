# Customization Guide

This guide will help you customize the portfolio template with your own information.

## Quick Start

All customization is done through configuration files in the `src/config` directory. You don't need to edit individual components!

## 📝 Personal Information

**File**: [src/config/personal.ts](src/config/personal.ts)

Update your basic information:

```typescript
export const personalInfo: PersonalInfo = {
  name: 'Your Name',
  title: 'Your Job Title',
  bio: `Your bio here...`,
  location: 'Your Location',
  email: 'your.email@example.com',
  phone: '+1 234 567 8900',
  avatar: ProfileImage,  // Replace with your image
  resumeUrl: CV,         // Replace with your CV
};
```

### Adding Your Profile Picture

1. Place your image in `src/assets/images/`
2. Import it at the top of `personal.ts`:
   ```typescript
   import ProfileImage from '../assets/images/your-photo.jpg';
   ```

### Adding Your Resume/CV

1. Place your PDF in `src/assets/`
2. Import it at the top of `personal.ts`:
   ```typescript
   import CV from '../assets/your_cv.pdf';
   ```

### Social Links

Update your social media profiles in the same file:

```typescript
export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/yourusername',
    icon: 'faGithub',
    username: '@yourusername',
  },
  // Add more social links...
];
```

## 💼 Skills

**File**: [src/config/skills.ts](src/config/skills.ts)

Add or modify your skills by category:

```typescript
export const skills: SkillGroup[] = [
  {
    category: 'Frontend',
    skills: [
      { name: 'React', level: 90, category: 'Frontend' },
      { name: 'TypeScript', level: 85, category: 'Frontend' },
      // Add more skills...
    ],
  },
  // Add more categories...
];
```

**Skill Levels**: Use a number from 1-100 to represent your proficiency.

## 🚀 Projects

**File**: [src/config/projects.ts](src/config/projects.ts)

Add your projects:

```typescript
export const projects: Project[] = [
  {
    id: '1',
    title: 'Project Name',
    description: 'Short description',
    longDescription: 'Detailed description (optional)',
    image: '/path-to-image.jpg',
    techStack: ['React', 'Node.js', 'MongoDB'],
    liveUrl: 'https://project-demo.com',      // Optional
    githubUrl: 'https://github.com/you/repo', // Optional
    category: 'Web Application',
    featured: true,  // Shows in featured section
  },
  // Add more projects...
];
```

### Project Categories

Available categories:
- `'Web Application'`
- `'Mobile App'`
- `'API/Backend'`
- `'Tool/Library'`
- `'Other'`

### Project Images

1. Add images to `public/` directory
2. Reference them with `/image-name.jpg` in the config

## 💼 Experience & Education

**File**: [src/config/experience.ts](src/config/experience.ts)

### Work Experience

```typescript
export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Company Name',
    position: 'Your Position',
    location: 'City, Country',
    startDate: '2022-01',  // Format: YYYY-MM
    endDate: 'Present',    // Or YYYY-MM
    description: [
      'Achievement or responsibility 1',
      'Achievement or responsibility 2',
    ],
    technologies: ['React', 'Node.js'],  // Optional
  },
];
```

### Education

```typescript
export const education: Education[] = [
  {
    id: '1',
    institution: 'University Name',
    degree: 'Bachelor of Science',
    field: 'Computer Science',
    location: 'City, Country',
    startDate: '2015',
    endDate: '2019',
    description: 'Optional description',
    gpa: '3.8/4.0',  // Optional
  },
];
```

## 🎨 Customizing Colors & Theme

**File**: [src/assets/css/variables.css](src/assets/css/variables.css)

Modify the color scheme by editing CSS variables:

```css
:root {
  --bg-color: #011627;
  --text-color: #ffffff;
  --highlight-color: #4d5bce;
  --accent-color: #43d9ad;
  /* ... more variables */
}
```

For light theme colors, edit `[data-theme='light']` section in [theme.css](src/assets/css/theme.css).

## 🔍 SEO Configuration

**File**: [index.html](index.html)

Update meta tags for better SEO:

1. Update the `<title>` tag
2. Update `meta name="description"`
3. Update Open Graph tags (`og:title`, `og:description`, `og:image`)
4. Update Twitter Card tags
5. Update `canonical` URL

Also update SEO config in [src/config/personal.ts](src/config/personal.ts):

```typescript
export const seoConfig: SEOConfig = {
  title: 'Your Name - Your Title',
  description: 'Your portfolio description',
  keywords: ['keyword1', 'keyword2'],
  author: 'Your Name',
  siteUrl: 'https://yoursite.com',
  image: '/og-image.jpg',
  twitterHandle: '@yourhandle',
};
```

## 🚀 Deployment

### GitHub Pages

1. Update `homepage` in [package.json](package.json):
   ```json
   "homepage": "https://yourusername.github.io/repository-name/"
   ```

2. Deploy:
   ```bash
   pnpm run deploy
   ```

### Vercel

1. Push your code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Netlify

1. Push your code to GitHub
2. Connect repository in Netlify
3. Build command: `pnpm run build`
4. Publish directory: `dist`

## 📱 Testing Your Changes

After making changes:

1. **Development**: `pnpm run dev`
2. **Build**: `pnpm run build`
3. **Preview**: `pnpm run preview`

## 🎯 Common Customizations

### Change Font

Edit [src/assets/css/main.css](src/assets/css/main.css):

```css
body {
  font-family: "Your Font", monospace;
}
```

Add Google Fonts in [index.html](index.html):

```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font&display=swap" rel="stylesheet">
```

### Remove ID Card

In [src/pages/hello/index.tsx](src/pages/hello/index.tsx), remove:

```typescript
<IDCard />
```

### Add More Pages

1. Create new page in `src/pages/your-page/index.tsx`
2. Add route in [src/routes/index.tsx](src/routes/index.tsx)
3. Add navigation link in [src/components/Navbar.tsx](src/components/Navbar.tsx)

## 💡 Tips

- **Keep it updated**: Regularly update your projects and experience
- **Optimize images**: Compress images before adding them
- **Test responsiveness**: Check on mobile, tablet, and desktop
- **Proofread**: Check for typos in your content
- **Backup**: Keep your customizations in version control

## 🆘 Troubleshooting

### Build Errors

```bash
# Clear cache and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install
```

### Type Errors

Make sure all imports in config files match the TypeScript interfaces in [src/types/index.ts](src/types/index.ts).

### Styling Issues

Check browser console for CSS errors and ensure all CSS files are imported in [src/main.tsx](src/main.tsx).

---

**Need help?** Check the [README.md](README.md) or open an issue on GitHub.
