# Gagandeep's Portfolio Website

## Overview
This is a modern, responsive portfolio website built with Next.js, showcasing my professional experience, projects, and technical skills. The website features smooth animations, interactive elements, and a clean, professional design.

## Features

- **Responsive Design**: Fully responsive on all devices
- **Dark/Light Mode**: Supports theme switching
- **Animated Sections**: Smooth transitions using Framer Motion
- **Video Background**: Dynamic hero section with video background
- **Interactive UI**: Modern user interface with hover effects and transitions
- **Contact Form**: Direct message capability
- **Downloadable Resume**: One-click resume download
- **Section Navigation**: Smooth scrolling to different sections

## Technologies Used

### Core Technologies
- **Next.js**: React framework for production
- **React**: UI library
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library

### Additional Libraries & Tools
- **Cloudinary**: For video handling
- **React Email**: For contact form functionality
- **Lucide React**: For icons
- **Next.js App Router**: For page routing

## Project Structure

```
src/
├── app/                # Next.js app directory
│   ├── favicon.ico    
│   ├── layout.jsx     # Main layout component
│   └── page.jsx       # Main page component
└── common/            # Shared components and utilities
    ├── components/    # React components
    │   ├── sections/  # Main page sections
    │   ├── shared/    # Shared components
    │   └── ui/        # UI components
    ├── lib/           # Utilities and data
    ├── stores/        # State management
    ├── styles/        # Global styles
    ├── theme/         # Theme configuration
    └── utils/         # Utility functions
```

## Getting Started

### Prerequisites
- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/my-portfolio.git
   cd my-portfolio
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Setup environment variables
   Create a `.env` file in the root directory and add your environment variables.

4. Run the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
# or
yarn build
```

## Project Sections

### Hero
Introduces me with an animated text effect and video background. Provides quick links to contact form, resume download, and social profiles.

### About
Details about my background, professional journey, and personal interests.

### Projects
Showcases my key projects:
- **ExploreEase**: AI-powered travel itinerary planner
- **Scribe Bot**: AI content creation assistant
- **CodeSage**: VS Code extension using DeepSeek
- **People Comics**: AI-generated comic creator

### Experience
Highlights my professional journey at Dotdash Meredith and previous roles.

### Skills
Visual representation of my technical skills across front-end, back-end, and cloud technologies.

### Contact
Allow visitors to reach out directly through a contact form.

## Customization

### Adding New Projects
Add new projects by updating the `projectsData` array in `src/common/lib/data.js`.

### Updating Skills
Modify the `skillsData` array in `src/common/lib/data.js` to update your skills.

### Changing Experience
Update your work experience by editing the `experiencesData` array in `src/common/lib/data.js`.

## License
[MIT](LICENSE)

---

© 2025 Gagandeep. All Rights Reserved.