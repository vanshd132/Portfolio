# Portfolio Website

## Overview

This is a personal portfolio website for Vansh Dawra, a Full Stack Developer specializing in MERN stack, AI/ML integration, and scalable web applications. The application showcases his professional experience, projects, skills, and achievements through a modern, responsive single-page application.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
The frontend is built as a React single-page application using:
- **React 18** with TypeScript for type safety and modern component patterns
- **Vite** as the build tool for fast development and optimized production builds
- **Wouter** for client-side routing instead of React Router
- **Tailwind CSS** with custom CSS variables for consistent theming and responsive design
- **shadcn/ui** component library built on Radix UI primitives for accessible, customizable components

### Component Structure
The application follows a modular component architecture:
- **Section-based components** (HeroSection, AboutSection, ExperienceSection, etc.) for different portfolio sections
- **UI components** in `/components/ui/` providing reusable, accessible interface elements
- **Data-driven content** with portfolio information centralized in `/data/portfolio-data.ts`
- **Custom hooks** for shared functionality like mobile detection and toast notifications

### Backend Architecture
The backend uses a hybrid architecture:
- **Express.js** server with TypeScript for API handling and static file serving
- **Development/Production duality** - Vite dev server in development, static serving in production
- **In-memory storage** implementation with interface-based design for easy database integration
- **Middleware-based request handling** with logging and error handling

### Data Storage Solutions
Currently implements:
- **In-memory storage** (`MemStorage` class) for development and demonstration
- **PostgreSQL-ready schema** defined with Drizzle ORM for future database integration
- **Drizzle Kit** configuration for database migrations and schema management
- **Neon Database** serverless PostgreSQL integration prepared but not actively used

### Styling and UI Framework
- **Tailwind CSS** with custom configuration for consistent design system
- **CSS custom properties** for theme colors and design tokens
- **Responsive design** with mobile-first approach
- **Custom animations** and hover effects for enhanced user experience
- **Glass morphism effects** and modern visual styling

### Build and Development
- **ESM modules** throughout the application for modern JavaScript standards
- **TypeScript** with strict configuration for type safety
- **Vite plugin ecosystem** including React plugin and development error overlay
- **Path aliases** for clean imports (`@/`, `@shared/`)
- **Development/production build separation** with different optimization strategies

## External Dependencies

### UI and Styling
- **@radix-ui/* packages** - Accessible, unstyled UI primitives for complex components
- **Tailwind CSS** - Utility-first CSS framework for rapid styling
- **class-variance-authority** - Type-safe component variants
- **Lucide React** - Modern icon library for consistent iconography

### State Management and Data Fetching
- **@tanstack/react-query** - Server state management and caching
- **React Hook Form** with **@hookform/resolvers** - Form handling and validation

### Database and Schema
- **Drizzle ORM** - Type-safe database ORM with PostgreSQL dialect
- **@neondatabase/serverless** - Serverless PostgreSQL database connection
- **drizzle-zod** - Schema validation integration

### Development Tools
- **Vite** - Build tool and development server
- **TypeScript** - Static type checking
- **ESBuild** - Fast JavaScript bundler for production builds
- **PostCSS** with **Autoprefixer** - CSS processing and vendor prefixing

### Production Considerations
The application is structured for deployment with:
- Static asset serving from `/dist/public/`
- Environment-based configuration for database connections
- Session storage prepared with **connect-pg-simple**
- Replit-specific development integrations for cloud development