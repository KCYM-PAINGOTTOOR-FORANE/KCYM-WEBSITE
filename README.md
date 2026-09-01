# Nextjs Website Template

> 🍽️ Enterprise-grade Next.js boilerplate. Production-ready with SEO optimization, responsive design, and modular architecture.

---

## 📋 Table of Contents

- [Quick Start](#-quick-start)
- [Overview](#-overview)
- [Features](#-features)
- [Project Structure](#-project-structure)
- [Tech Stack](#-tech-stack)
- [SEO & Metadata](#-seo--metadata)
- [Available Commands](#-available-commands)
- [Configuration](#configuration)
- [Architecture](#architecture)
- [Development](#development)
- [Performance](#performance)
- [Deployment](#deployment)
- [Contributing](#contributing)

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18.17+
- **bun** 1.0+ ([Install](https://bun.sh))

### Setup

```bash
# Clone repository
git clone <repository-url>
cd next-boilerplate

# Install dependencies
bun install

# Configure environment
cp .env.example .env.local

# Start development server
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📖 Overview

This is a production-ready Next.js template designed specifically for the restaurant and hospitality industry. Built with modern best practices, it provides:

- 🏗️ **Scalable Architecture** - Feature-first organization with clear separation of concerns
- 🔒 **Type Safe** - Full TypeScript with strict mode enabled
- 📱 **Responsive** - Mobile-first design optimized for all devices
- ⚡ **High Performance** - Optimized builds with Turbopack and intelligent caching
- 🎨 **Customizable UI** - Pre-built components with Tailwind CSS + Radix UI
- 🌙 **Dark Mode** - Built-in theme switching support
- 🔍 **SEO Ready** - Structured metadata, sitemap, robots.txt generation
- 🔗 **API Ready** - Axios + React Query for seamless data fetching
- 📝 **Form Management** - React Hook Form + Zod validation
- 🎭 **Animations** - Framer Motion for smooth UX
- 📢 **Notifications** - Toast system with Sonner
- 🛡️ **Quality Assurance** - Biome linting, Husky git hooks, commit validation

---

## ✨ Features

### Core Features

| Feature                | Description                                 |
| ---------------------- | ------------------------------------------- |
| 🖥️ **Next.js 16**      | App Router with Server Components           |
| ⚛️ **React 19**        | Latest React with concurrent features       |
| 📘 **TypeScript 5**    | Strict type checking and inference          |
| 🎨 **Tailwind CSS 4**  | Utility-first styling with JIT compilation  |
| 🔄 **React Query v5**  | Server state management with caching        |
| 📋 **React Hook Form** | Efficient form state management             |
| ✅ **Zod Validation**  | Runtime schema validation with TS inference |

### UI & UX

- 🧩 **Radix UI** - Accessible, unstyled UI primitives
- 🎨 **Custom Components** - Pre-built, production-ready components
- 🎭 **Framer Motion** - Smooth animations and transitions
- 📦 **Lucide React** - 400+ beautiful icons
- 🎯 **Class Variance Authority** - Component variant management

### Developer Experience

- ⚙️ **Biome 2.3** - Ultra-fast linting and formatting
- 🪝 **Husky** - Git hooks for quality checks
- 📝 **Commitlint** - Enforce conventional commits
- 🔍 **Type Checking** - TypeScript strict mode
- 🚀 **Turbopack** - Next-gen bundler for instant builds

### SEO & Metadata

- 📑 **Auto-generated Sitemap** - XML sitemap generation
- 🤖 **Robots.txt** - Search engine crawling control
- 🏷️ **Meta Tags** - OpenGraph, Twitter Card support
- 📱 **PWA Ready** - Web app manifest configuration
- 🔗 **Structured Data** - Schema.org support

---

## 📁 Project Structure

```
next-boilerplate/
│
├── src/
│   ├── app/                          # 📄 Next.js App Router
│   │   ├── api/                      # 🔌 API Routes
│   │   │   └── health/route.ts      # Health check endpoint
│   │   ├── (routes)/                 # Route groups (optional)
│   │   ├── layout.tsx                # Root layout wrapper
│   │   ├── page.tsx                  # Home page
│   │   ├── error.tsx                 # Error boundary
│   │   ├── not-found.tsx             # 404 page
│   │   ├── loading.tsx               # Loading state
│   │   ├── manifest.ts               # PWA manifest
│   │   ├── robots.ts                 # robots.txt generator
│   │   ├── sitemap.ts                # Sitemap generator
│   │   └── globals.css               # Global styles
│   │
│   ├── components/                   # 🧩 Reusable Components
│   │   ├── layouts/
│   │   │   ├── header.tsx           # Navigation header
│   │   │   └── footer.tsx           # Footer section
│   │   ├── providers/
│   │   │   ├── query-provider.tsx   # React Query setup
│   │   │   └── theme-provider.tsx   # Theme context
│   │   ├── shared/
│   │   │   ├── error-fallback.tsx   # Error UI
│   │   │   └── loading-spinner.tsx  # Loading indicator
│   │   └── ui/
│   │       ├── button.tsx           # Button component
│   │       ├── card.tsx             # Card component
│   │       ├── input.tsx            # Input field
│   │       ├── label.tsx            # Form label
│   │       └── sonner.tsx           # Toast provider
│   │
│   ├── config/                       # ⚙️ Configuration
│   │   ├── site.ts                  # Site-wide config
│   │   └── api.ts                   # API endpoints
│   │
│   ├── features/                     # 🎯 Feature Modules
│   │   └── example/
│   │       ├── hooks/
│   │       │   └── use-example-query.ts
│   │       ├── schemas/
│   │       │   └── example.schema.ts
│   │       └── services/
│   │           └── example.service.ts
│   │
│   ├── hooks/                        # 🪝 Custom Hooks
│   │   ├── use-local-storage.ts
│   │   └── use-media-query.ts
│   │
│   ├── lib/                          # 🛠️ Utilities & Helpers
│   │   ├── env.ts                   # Environment validation
│   │   ├── fetcher.ts               # HTTP client wrapper
│   │   ├── metadata.ts              # SEO helpers
│   │   ├── query-client.ts          # React Query config
│   │   ├── utils.ts                 # General utilities
│   │   └── validations.ts           # Common schemas
│   │
│   └── types/                        # 📘 Type Definitions
│       ├── api.types.ts
│       └── index.ts
│
├── public/                           # 🖼️ Static Assets
│   ├── og-image.png
│   ├── favicon.ico
│   └── ...
│
├── Configuration Files
│   ├── biome.json                   # Linter & formatter config
│   ├── next.config.ts               # Next.js configuration
│   ├── tsconfig.json                # TypeScript config
│   ├── postcss.config.mjs            # PostCSS config
│   ├── tailwind.config.ts            # Tailwind config
│   ├── components.json              # Component library
│   └── package.json                 # Dependencies
│
└── Git Configuration
    ├── .gitignore
    ├── commitlint.config.js         # Commit rules
    └── .husky/                      # Git hooks
```

### Directory Legend

| Directory     | Purpose                                        |
| ------------- | ---------------------------------------------- |
| `app/`        | Next.js routing, pages, API routes, SEO config |
| `components/` | Reusable UI components organized by category   |
| `config/`     | Application-wide settings and constants        |
| `features/`   | Domain-specific business logic modules         |
| `hooks/`      | Custom React hooks for reusable logic          |
| `lib/`        | Utility functions, helpers, and services       |
| `types/`      | Shared TypeScript type definitions             |
| `public/`     | Static assets (images, fonts, manifests)       |

---

## 🔧 Tech Stack

### Runtime & Framework

- **Next.js 16** - React meta-framework with App Router
- **React 19** - UI library with Server Components
- **TypeScript 5** - Static type system

### Styling & UI

- **Tailwind CSS 4** - Utility-first CSS framework
- **PostCSS 4** - CSS transformation
- **Radix UI** - Accessible component primitives
- **Class Variance Authority** - Type-safe component variants
- **Framer Motion** - Animation library

### State & Data Management

- **TanStack React Query v5** - Server state synchronization
- **Axios** - HTTP client
- **React Hook Form** - Form state management
- **Zod** - Runtime schema validation

### UI Components & Icons

- **Lucide React** - Modern icon library
- **React Icons** - Additional icons
- **Sonner** - Toast notifications

### Development Tools

- **Biome 2.3** - Linting and formatting
- **Husky** - Git hooks framework
- **lint-staged** - Pre-commit linting
- **Commitlint** - Commit message validation
- **Turbopack** - Fast bundler

### Package Manager

- **bun** - Fast all-in-one JavaScript runtime & package manager

---

## 🔍 SEO & Metadata

### Structured Metadata

The template includes comprehensive SEO configuration in [src/lib/metadata.ts](src/lib/metadata.ts):

```typescript
// Automatic metadata generation for all pages
export const generateMetadata = (page) => ({
  title: `${page.title} | Foodo`,
  description: page.description,
  openGraph: {
    title: page.title,
    description: page.description,
    images: [page.image],
    url: page.url,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: page.title,
    description: page.description,
    images: [page.image],
  },
});
```

### SEO Files Generated

| File          | Purpose                      |
| ------------- | ---------------------------- |
| `sitemap.ts`  | Auto-generates `sitemap.xml` |
| `robots.ts`   | Generates `robots.txt`       |
| `manifest.ts` | PWA web manifest             |
| `metadata.ts` | Page-level SEO helpers       |

### Best Practices Implemented

- ✅ Semantic HTML with proper heading hierarchy
- ✅ OpenGraph & Twitter Card metadata
- ✅ Mobile-responsive metadata
- ✅ Canonical URLs to prevent duplication
- ✅ Structured data (Schema.org)
- ✅ Image alt text enforcement
- ✅ Performance Core Web Vitals optimization

---

## 📦 Available Commands

### Development

```bash
# Start development server with hot reload
bun run dev

# Run with specific port
bun run dev --port 3001
```

### Building & Deployment

```bash
# Create production build
bun run build

# Start production server
bun run start

# Build and start
bun run build && bun run start
```

### Code Quality

```bash
# Run Biome linter
bun run lint

# Fix linting issues automatically
bun run lint:fix

# Format code with Biome
bun run format

# Run all checks
bun run validate
```

### Type Checking

```bash
# Check TypeScript types
bun run typecheck

# Alias
bun run typecheck
```

### Maintenance

```bash
# Clean build artifacts
bun run clean

# Install git hooks
bun run prepare

# Install dependencies
bun install
```

### Command Reference

| Command          | Action                         |
| ---------------- | ------------------------------ |
| `bun run dev`       | Development server (Turbopack) |
| `bun run build`     | Production build               |
| `bun run start`     | Run production build           |
| `bun run lint`      | Check code quality             |
| `bun run lint:fix`  | Auto-fix issues                |
| `bun run format`    | Format code                    |
| `bun run typecheck` | TypeScript check               |
| `bun run validate`  | All checks (type + lint)       |
| `bun run clean`     | Remove build artifacts         |
| `bun install`   | Install dependencies           |

---

## ⚙️ Configuration

### Environment Variables

Create `.env.local` in project root:

```env
# Application
NEXT_PUBLIC_APP_URL=http://localhost:3000
NODE_ENV=development

# API Configuration
NEXT_PUBLIC_API_BASE_URL=https://api.example.com
API_SECRET_KEY=your_secret_key_here

# Optional: Analytics
NEXT_PUBLIC_ANALYTICS_ID=your_analytics_id

# Optional: Feature Flags
NEXT_PUBLIC_ENABLE_BETA_FEATURES=false
NEXT_PUBLIC_MAINTENANCE_MODE=false
```

### Configuration Files

| File                 | Purpose                     |
| -------------------- | --------------------------- |
| `next.config.ts`     | Next.js settings            |
| `tsconfig.json`      | TypeScript compiler options |
| `tailwind.config.ts` | Tailwind CSS customization  |
| `postcss.config.mjs` | CSS processing              |
| `biome.json`         | Linting & formatting rules  |
| `components.json`    | Component library settings  |

### Key Settings

**TypeScript Paths** (in `tsconfig.json`):

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

**Tailwind Configuration** (in `tailwind.config.ts`):

- Custom color schemes
- Extended spacing scale
- Responsive breakpoints
- Animation presets

---

## 🏗️ Architecture

### Design Patterns

**Feature-First Organization**

```
src/features/menu/
├── hooks/              # Feature-specific hooks
├── schemas/            # Validation schemas
├── services/           # API services
├── components/         # Feature components (optional)
└── types/             # Feature types
```

**Atomic Component Design**

- Atoms: Base components (Button, Input)
- Molecules: Simple combinations (InputGroup)
- Organisms: Complex features (MenuSection)
- Templates: Page layouts
- Pages: Route pages

### State Management Strategy

| Type             | Solution        | Use Case             |
| ---------------- | --------------- | -------------------- |
| Server State     | React Query     | API data, caching    |
| Client State     | React Hooks     | Form state, UI state |
| Theme State      | next-themes     | Dark/light mode      |
| Persistent State | useLocalStorage | User preferences     |

### API Integration Pattern

```typescript
// 1. Define schema (src/features/example/schemas/)
export const exampleSchema = z.object({...})

// 2. Create service (src/features/example/services/)
export const exampleService = {
  fetch: () => api.get('/example'),
}

// 3. Create hook (src/features/example/hooks/)
export const useExample = () => {
  return useQuery({
    queryKey: ['example'],
    queryFn: exampleService.fetch,
  })
}

// 4. Use in component
export function ExampleComponent() {
  const { data } = useExample()
  return <div>{data?.title}</div>
}
```

### Form Handling Pattern

```typescript
// 1. Define schema with Zod
const formSchema = z.object({
  email: z.string().email(),
  message: z.string().min(10),
});

// 2. Use with React Hook Form
const { register, handleSubmit } = useForm({
  resolver: zodResolver(formSchema),
});

// 3. Submit with mutation
const mutation = useMutation({
  mutationFn: (data) => api.post("/submit", data),
});
```

---

## 👨‍💻 Development

### Code Style

**Naming Conventions**

```
Components:          PascalCase     (UserProfile.tsx)
Hooks:              camelCase      (useMediaQuery.ts)
Utilities:          camelCase      (formatDate.ts)
Constants:          UPPER_SNAKE    (API_BASE_URL)
Types/Interfaces:   PascalCase     (UserData)
```

**Component Best Practices**

1. ✅ Use functional components
2. ✅ Keep components focused (single responsibility)
3. ✅ Extract logic to custom hooks
4. ✅ Add TypeScript types to props
5. ✅ Document with JSDoc comments
6. ✅ Use React.memo for expensive renders
7. ✅ Lazy load route-based components

**TypeScript Usage**

```typescript
// Strict mode enabled
interface Props {
  title: string;
  onClick: (id: string) => void;
}

export const MyComponent: React.FC<Props> = ({ title, onClick }) => {
  return <button onClick={() => onClick("id")}>{title}</button>;
};
```

### Quality Checks

**Before Committing**

```bash
# Run full validation
bun run validate

# Fix auto-fixable issues
bun run lint:fix
bun run format

# Type check
bun run typecheck
```

**Git Hooks (Husky)**

- Pre-commit: Runs linting on changed files
- Commit-msg: Validates conventional commit format

**Commit Message Format**

```
feat: add new feature
fix: fix a bug
docs: update documentation
style: format code
refactor: refactor code structure
perf: improve performance
test: add tests
chore: update dependencies
```

---

## ⚡ Performance

### Built-In Optimizations

- 🖼️ **Image Optimization** - Next.js Image with WebP/AVIF
- 📦 **Code Splitting** - Automatic route-based splitting
- 🗜️ **Asset Compression** - Gzip compression
- 🎯 **CSS Optimization** - Tailwind tree-shaking
- ⚙️ **Turbopack** - Instant development rebuilds
- 💾 **Query Caching** - React Query intelligent caching
- 🔄 **Incremental Static Regeneration** - ISR support

### Best Practices

```typescript
// 1. Lazy load heavy components
const HeavyComponent = lazy(() => import('./Heavy'))

// 2. Memoize expensive renders
const MemoizedList = memo(MyList)

// 3. Use React Query caching
useQuery({
  queryKey: ['data'],
  queryFn: fetchData,
  staleTime: 5 * 60 * 1000, // 5 minutes
})

// 4. Optimize images
<Image
  src={url}
  alt="Description"
  width={400}
  height={300}
  priority={isAboveFold}
/>

// 5. Split forms into sections
// Use Suspense for slow data
```

### Monitoring

- Core Web Vitals (LCP, FID, CLS)
- Build time analysis
- Bundle size tracking
- Runtime performance

---

### Standard Server

```bash
# 1. Build
bun run build

# 2. Set environment
export NEXT_PUBLIC_APP_URL=https://yourdomain.com
export NODE_ENV=production

# 3. Start
bun run start
```

### Environment for Production

```env
NODE_ENV=production
NEXT_PUBLIC_APP_URL=https://yourdomain.com
NEXT_PUBLIC_API_BASE_URL=https://api.yourdomain.com
ENABLE_SECURE_HEADERS=true
```

---

## 🤝 Contributing

### Workflow

1. Fork repository
2. Create feature branch: `git checkout -b feat/amazing-feature`
3. Make changes following code style
4. Run `bun run validate`
5. Commit: `git commit -m "feat: add amazing feature"`
6. Push: `git push origin feat/amazing-feature`
7. Create Pull Request

### Before Submitting

```bash
# Validate everything
bun run validate

# Fix issues
bun run lint:fix
bun run format

# Type check
bun run typecheck

# Build test
bun run build
```

### Commit Convention

Follow [Conventional Commits](https://www.conventionalcommits.org/):

```
type(scope): subject

feat(menu): add digital menu feature
fix(api): resolve timeout issue
docs: update installation guide
style: format code
refactor(hooks): extract logic
perf: optimize images
test(form): add validation tests
chore(deps): update dependencies
```

---

## 🆘 Support

### Reporting Issues

When reporting issues:

1. Describe the problem clearly
2. Include steps to reproduce
3. Provide error messages/logs
4. Specify Node.js/bun version
5. Share minimal code example

---
