# Colégio Mara & Lú - School Website

## Overview

This is a modern school website for Colégio Mara & Lú, an educational institution in Angola. The application serves as the school's digital presence, featuring information about their educational programs, facilities, testimonials, news, and a contact inquiry system. The website is designed to attract prospective students and parents while showcasing the school's commitment to educational excellence.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript for type safety and component-based development
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS with shadcn/ui component library for consistent, accessible UI components
- **State Management**: TanStack Query (React Query) for server state management and caching
- **Forms**: React Hook Form with Zod validation for robust form handling
- **Build Tool**: Vite for fast development and optimized production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js server framework
- **Language**: TypeScript for full-stack type safety
- **API Design**: RESTful API endpoints for contact inquiries
- **Data Storage**: In-memory storage implementation with interface for future database integration
- **Session Management**: Prepared for PostgreSQL session storage with connect-pg-simple

### Database Layer
- **ORM**: Drizzle ORM configured for PostgreSQL with type-safe database operations
- **Schema Management**: Drizzle Kit for database migrations and schema management
- **Validation**: Drizzle-Zod integration for seamless validation between database and application layers

### Development Architecture
- **Monorepo Structure**: Shared schema definitions between client and server
- **Development Server**: Vite dev server with Express middleware integration
- **Hot Module Replacement**: Full HMR support for rapid development
- **Path Aliases**: Configured TypeScript path mapping for clean imports

### Key Features
- **Contact Inquiry System**: Form submission and management for prospective student inquiries
- **Responsive Design**: Mobile-first approach with Tailwind's responsive utilities
- **Component Library**: Extensive shadcn/ui component collection for consistent UI
- **Type Safety**: End-to-end TypeScript with shared schema validation
- **Modern UI/UX**: Contemporary design with smooth animations and interactive elements

## External Dependencies

### Core Framework Dependencies
- **React Ecosystem**: React 18 with React DOM for modern component architecture
- **TypeScript**: Full-stack type safety and developer experience
- **Vite**: Modern build tool with fast HMR and optimized bundling

### UI and Styling
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- **Radix UI**: Accessible primitive components (@radix-ui/react-*)
- **Lucide React**: Modern icon library with consistent styling
- **Font Awesome**: Icon library for social media and decorative icons
- **Google Fonts**: Web fonts (Inter, Architects Daughter, DM Sans, Fira Code, Geist Mono)

### Database and Backend
- **Neon Database**: Serverless PostgreSQL provider (@neondatabase/serverless)
- **Drizzle ORM**: Type-safe SQL ORM with PostgreSQL dialect
- **Express.js**: Web application framework for Node.js
- **connect-pg-simple**: PostgreSQL session store for Express sessions

### Form and Validation
- **React Hook Form**: Performant forms with easy validation
- **Zod**: TypeScript-first schema validation
- **@hookform/resolvers**: Integration between React Hook Form and Zod

### State Management and Data Fetching
- **TanStack Query**: Powerful data synchronization for React
- **Wouter**: Minimalist routing library for React

### Development Tools
- **Replit Integration**: Custom plugins for Replit development environment
- **ESBuild**: Fast JavaScript bundler for production builds
- **PostCSS**: CSS processing with Tailwind and Autoprefixer

### Utility Libraries
- **class-variance-authority**: Utility for creating consistent component variants
- **clsx**: Utility for constructing className strings conditionally
- **date-fns**: Modern JavaScript date utility library
- **nanoid**: URL-safe unique string ID generator