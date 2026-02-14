# NodePress CMS

A modern, self-hosted CMS built with Next.js 14, inspired by WordPress but powered by modern web technologies.

## Overview

NodePress is a headless CMS with a full-featured admin dashboard, built to learn production-grade full-stack development patterns. It combines the ease of WordPress with the power of modern JavaScript frameworks.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Database:** PostgreSQL 16
- **ORM:** Prisma 6
- **Authentication:** NextAuth.js v4
- **Styling:** Tailwind CSS 3
- **Containerization:** Docker + Docker Compose
- **Password Hashing:** bcrypt

## Features

### Currently Implemented ✅

- Docker development environment (PostgreSQL + Redis)
- Prisma ORM with User model
- Role-based permissions (Admin, Editor, Viewer)
- Database migrations with UUID primary keys
- Seed script with default admin user
- Secure password hashing with bcrypt

### Planned 🚧

- Post and Page content types
- Media library with image uploads
- WYSIWYG editor (TipTap)
- NextAuth authentication system
- Admin dashboard with CRUD operations
- Theme system for public-facing site
- API routes for content management

## Prerequisites

- Node.js 18.17+ (LTS recommended)
- Docker Desktop
- Git

## Getting Started

### 1. Clone the repository

```bash
git clone git@github.com:cgarza1992/nodepress.git
cd nodepress
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the database

```bash
docker compose up -d
```

This starts:
- PostgreSQL on `localhost:5432`
- Redis on `localhost:6379`

### 4. Set up environment variables

Copy `.env.local.example` to `.env.local` (if it doesn't exist yet, create `.env.local` with):

```env
DATABASE_URL="postgresql://nodepress:nodepress123@localhost:5432/nodepress"
NEXTAUTH_SECRET="your-secret-key-here"
NEXTAUTH_URL="http://localhost:3000"
```

### 5. Run database migrations

```bash
npx prisma generate
npx prisma migrate dev
```

### 6. Seed the database

```bash
npx prisma db seed
```

This creates a default admin user:
- **Email:** `admin@nodepress.local`
- **Password:** `changeme123`

### 7. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Development Commands

```bash
# Start Next.js dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Database commands
npx prisma studio          # Open database GUI at localhost:5555
npx prisma migrate dev     # Create and run migrations
npx prisma db seed         # Seed database with default data
npx prisma generate        # Regenerate Prisma Client

# Docker commands
docker compose up -d       # Start database services
docker compose down        # Stop database services
docker compose logs -f     # View logs
```

## Project Structure

```
nodepress/
├── prisma/
│   ├── schema.prisma      # Database schema
│   ├── migrations/        # Database migrations
│   └── seed.ts            # Database seeding script
├── src/
│   ├── app/               # Next.js App Router (routes)
│   ├── components/        # React components
│   └── lib/               # Utilities and helpers
├── docker-compose.yml     # Docker services configuration
└── prisma.config.ts       # Prisma configuration
```

## Database Schema

### User Model

- `id` - UUID primary key
- `email` - Unique email address
- `password` - bcrypt hashed password
- `name` - Optional display name
- `role` - ADMIN | EDITOR | VIEWER
- `createdAt` - Timestamp
- `updatedAt` - Auto-updated timestamp

## Contributing

This is a personal learning project, but suggestions and feedback are welcome!

## License

MIT

## Acknowledgments

Built as a learning project to develop production-grade full-stack engineering skills, with inspiration from WordPress, Ghost, and modern headless CMS platforms.