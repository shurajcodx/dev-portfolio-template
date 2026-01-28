# Developer Portfolio Template

A modern, customizable developer portfolio template built with React, TypeScript, and Vite. Features a VS Code-inspired design with dark/light theme support and easy configuration.

![Portfolio Preview](public/preview.png)

## ✨ Features

### Pages
- **Home**: Animated introduction with code-style contact display and profile card
- **About**: Professional bio, skills showcase, experience and education timeline
- **Projects**: Filterable project gallery with featured projects section
- **Contact**: Functional contact form with validation and social links

### Components
- **Theme Toggle**: Switch between dark and light modes with localStorage persistence
- **Responsive Design**: Mobile-first design that works on all screen sizes
- **Lazy Loading**: Optimized performance with code-splitting
- **Animations**: Smooth transitions and micro-interactions
- **TypeScript**: Full type safety throughout the codebase

### Configuration
- **Centralized Config**: All personal data in easy-to-edit config files
- **Type-Safe**: TypeScript interfaces for all data structures
- **Modular**: Reusable components for easy customization

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ or Bun
- pnpm, npm, or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/shurajcodx/dev-portfolio-template.git
cd dev-portfolio-template

# Install dependencies
pnpm install

# Start development server
pnpm run dev
```

Visit `http://localhost:5173` to see your portfolio!

## 📝 Customization

All customization is done through configuration files in `src/config/`. No need to edit components!

### 1. Personal Information

Edit `src/config/personal.ts`:
- Name, title, bio
- Contact information
- Social media links
- Profile photo and resume

### 2. Skills

Edit `src/config/skills.ts`:
- Add your skills by category
- Set proficiency levels (1-100)

### 3. Projects

Edit `src/config/projects.ts`:
- Add your projects with descriptions
- Include tech stacks and categories
- Add live demo and GitHub links
- Mark featured projects

### 4. Experience & Education

Edit `src/config/experience.ts`:
- Add work experience
- Add education history
- Include dates, locations, and descriptions

For detailed customization instructions, see [CUSTOMIZATION.md](CUSTOMIZATION.md).

## 🎨 Theming

Customize colors in `src/assets/css/variables.css` and `src/assets/css/theme.css`:
- Background colors
- Text colors
- Accent colors
- Highlight colors

## 📦 Build

```bash
# Build for production
pnpm run build

# Preview production build
pnpm run preview
```

## 🚀 Deployment

### GitHub Pages

1. Update `homepage` in `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/repository-name/"
   ```

2. Deploy:
   ```bash
   pnpm run deploy
   ```

### Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/shurajcodx/dev-portfolio-template)

### Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/shurajcodx/dev-portfolio-template)

## 📁 Project Structure

```
src/
├── assets/          # Images, CSS, and static files
├── components/      # Reusable React components
├── config/          # Configuration files (customize here!)
├── layout/          # Layout components
├── pages/           # Page components
├── routes/          # Route configuration
└── types/           # TypeScript type definitions
```

## 🛠️ Tech Stack

- **React 19** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **React Router** - Routing
- **CSS3** - Styling with custom properties
- **FontAwesome** - Icons

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 👤 Author

**Shuraj Shampang**
- GitHub: [@shurajcodx](https://github.com/shurajcodx)
- LinkedIn: [Shuraj Shampang](https://www.linkedin.com/in/shuraj-shampang-9ab60b2b5/)

## ⭐ Show Your Support

Give a ⭐️ if this project helped you!v-portfolio-template
   ```  
2. Install dependencies with pnpm:
   ```sh
   pnpm install
   ```  
   ```sh
   pnpm run dev
   ```  

## Deployment 🚀
You can deploy this portfolio on Vercel, Netlify, or any static hosting provider.

## Contributing 🤝
Feel free to fork, improve, and create pull requests! Contributions are welcome.

## License 📜
This project is open-source and available under the [MIT License](LICENSE).

