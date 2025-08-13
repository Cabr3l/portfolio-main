# Code Structure Documentation

## Project Overview
This document describes the structure and organization of the portfolio application codebase.

## Directory Structure

```
src/
├── components/          # React components
├── context/            # React context providers
├── data/               # Data files and constants
├── assets/             # Images and static assets
├── App.jsx             # Main application component
├── main.jsx            # Application entry point
└── index.css           # Global styles
```

## Component Architecture

### Core Components
- **App.jsx**: Main application router and layout
- **MainPage.jsx**: Homepage component
- **Navbar.jsx**: Navigation component
- **Footer.jsx**: Footer component

### Page Components
- **Home.jsx**: Hero section and introduction
- **About.jsx**: About me section
- **Experiences.jsx**: Work experience overview
- **Projects.jsx**: Project showcase
- **Contact.jsx**: Contact information

### Detail Components
- **ExperienceDetailPage.jsx**: Detailed experience view
- **ProjectDetail.jsx**: Detailed project view
- **SchoolProjectDetail.jsx**: Academic project details

### Utility Components
- **SearchBar.jsx**: Search functionality
- **AnimatedStats.jsx**: Animated statistics
- **ScrollToTop.jsx**: Scroll to top button

## Context Providers

### ThemeContext
Manages application theme (light/dark mode)

### SearchContext
Manages search functionality and state

## Data Management

### Data Files
- **experiencesData.js**: Work experience data
- **projectsData.js**: Project information
- **schoolProjectsData.js**: Academic projects

## Styling

### CSS Framework
- **Tailwind CSS**: Utility-first CSS framework
- **Custom CSS**: Component-specific styles
- **Responsive Design**: Mobile-first approach

## Routing

### React Router
- **BrowserRouter**: Client-side routing
- **Routes**: Route definitions
- **Route**: Individual route components

## State Management

### Local State
- **useState**: Component-level state
- **useEffect**: Side effects and lifecycle

### Global State
- **Context API**: Theme and search state
- **Props**: Component communication

## Performance

### Optimization
- **Code splitting**: Route-based splitting
- **Lazy loading**: Image optimization
- **Memoization**: React.memo for expensive components

## Dependencies

### Core
- React 18+
- React Router DOM
- Vite (build tool)

### UI/UX
- Lucide React (icons)
- Tailwind CSS (styling)

### Development
- ESLint (code quality)
- PostCSS (CSS processing)
