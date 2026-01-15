# Copilot Instructions - BMZ Inmobiliaria v2

## Project Overview

**BMZ Propiedades** is a real estate property management web application built with React 19 + TypeScript, Vite, and TailwindCSS. It provides public property browsing and an admin dashboard for CRUD operations on property listings.

- **Tech Stack**: Vite, React 19, TypeScript, TailwindCSS, Zustand, React Hook Form, Axios, EmailJS
- **Architecture**: Client-side SPA with Zustand state management connecting to external REST API
- **Backend**: Separate Node/Express API deployed at `https://backend-bmz.vercel.app/api`

---

## Architecture & Data Flow

### State Management (Zustand)
- **authStore** (`src/store/authStore.ts`): Minimal auth state with `isAuthenticated` boolean
  - Login/logout methods: no persistent storage or token validation (consider adding)
  - Used by `PrivateRoutes` component to protect `/admin` and `/admin/propiedadesCargadas` routes
- **propertyStore** (`src/store/propertyStore.ts`): Property CRUD operations
  - `propiedades`: array of Property objects from API
  - `searchResults`: filtered results from search queries
  - Methods: `fetchProperties()`, `deleteProperty()`, `updateProperty()`, `searchProperty()`
  - Uses SweetAlert2 for deletion confirmations

### API Integration
- **PropertyServices** (`src/services/PropertyServices.ts`): Axios-based API client
  - Base URL: `https://backend-bmz.vercel.app/api`
  - Endpoints: `GET /property`, `POST /property`, `PUT /property/:id`, `DELETE /property/:id`, `POST /property/search`
  - Multipart form-data for image uploads with `FormData`
  - Error handling via console logging (consider structured error handling)

### Routing Structure (`App.tsx`)
- `/` - Home page
- `/login` - Login page (redirects to `/admin` on success)
- `/propiedades` - Property listing
- `/property/:id` - Property details with carousel
- `/admin` - Admin dashboard (CRUD interface, protected route)
- `/admin/propiedadesCargadas` - Table of uploaded properties
- `/contacto` - Contact form with EmailJS
- `/nosotros` - About page
- `/propiedadesEncontradas` - Search results page

---

## Key Patterns & Conventions

### Component Organization
- **Screens** (`src/screens/`): Full-page components (Home, Admin, LoginPage, etc.)
- **Components** (`src/components/`): Reusable UI components
  - Admin subfolder: FormAdmin, EditProperty, TableAdmin for CRUD operations
  - Contact subfolder: ContactForm, ContactoInfo, RedesSociales
  - Custom subfolder: CustomButtom (DaisyUI button wrapper)
- **PrivateRoutes** (`components/PrivateRoutes/PrivateRoutes.tsx`): Route protection using `useAuthStore`

### Form Handling
- **React Hook Form** + **Yup** validation (see `components/Admin/formSchema.ts`)
- **EmailJS** integration for contact forms (no backend required)
- Separate type definitions in `src/types/FormDataTypes.ts` and `FormLoginTypes.ts`

### Type Safety
- Core types: `Property`, `SearchParams`, `FormData*` in `src/types/`
- Use `Property` for all property data; extend with custom types for specific components
- Property has fields: `_id`, `bedroom`, `bathroom`, `description`, `images[]`, `location`, `map`, `typeProperty`, `typeTransaction`

### Styling
- **TailwindCSS** + **DaisyUI** for UI components
- Global styles in `src/index.css` (Slick Carousel CSS loaded dynamically via CDN in `main.tsx`)
- No CSS modules; utility-first approach throughout

### Image Handling
- Images stored as URLs in Property `images[]` array
- Cloudinary integration utilities in `src/utils/cloudinary.ts`:
  - `getOptimizedCloudinaryUrl(url, width?, height?)` - Returns auto-optimized URL (WebP/AVIF when supported)
  - `getCloudinaryImageVariants(url, width, height)` - Returns AVIF/WebP/original variants for `<picture>` elements
- Use `OptimizedImage` component (`src/components/OptimizedImage.tsx`) for all images to leverage lazy-loading
- Carousel components: `Carousel`, `DetallePropertyCarousel`, `PropiedadesCarousel` use `react-responsive-carousel` and `react-slick`

### Performance Optimizations
- **LazyMap** component (`src/components/LazyMap.tsx`): Defers Google Maps iframe loading until visible (~121 KiB savings)
  - Used in `ContactoInfo` and `DetallePropiedad` for map embeds
  - Loads on scroll using Intersection Observer with 50px margin
- **Deferred Slick CSS** in `main.tsx`: Non-critical CSS loads after DOMContentLoaded using requestIdleCallback
- **Image lazy-loading**: All images use native `loading="lazy"` and OptimizedImage component for responsive formats
- **Cloudinary optimization**: `f_auto` format serves WebP/AVIF based on browser, `q_auto` for quality


---

## Build & Development Commands

```bash
npm run dev      # Start Vite dev server (default: http://localhost:5173)
npm run build    # Compile TypeScript + create production bundle
npm run preview  # Preview production build locally
npm run lint     # Run ESLint (config: eslint.config.js)
```

**Key Workflow**: TypeScript compiles with `tsc -b` before Vite bundle, so run `npm run build` to catch type errors early.

---

## Performance Optimization Status (Jan 2026)

**Lighthouse Improvements Implemented**:
- ✅ Lazy-load Google Maps: **~121 KiB savings** (maps.googleapis.com JS)
- ✅ Defer Slick Carousel CSS: **~20 ms FCP improvement**
- ✅ Image optimization: Cloudinary `f_auto,q_auto` format serving WebP/AVIF
- ✅ Optimized logos: OptimizedImage wrapper with WebP support (~80 KiB potential savings)
- ✅ Native image lazy-loading: `loading="lazy"` on all images

**Remaining Opportunities**:
- Reduce unused JavaScript from Google Maps (~45-72 KiB per script)
- Further compress hero images (casas.webp, terreno.webp)
- Add Service Worker for offline support and caching strategy
- Implement code-splitting for admin routes



## Critical Integration Points

1. **Backend API Connection**: Hardcoded base URL in PropertyServices—update for local development
2. **EmailJS Setup**: Configure keys in contact form components (currently no visible config in codebase)
3. **Authentication**: authStore lacks token persistence; login state resets on page reload
4. **Image Uploads**: FormData multipart posts to `/property` endpoint; ensure backend expects this format

---

## Common Tasks & Patterns

### Adding a New Property Field
1. Extend `Property` type in `src/types/PropertyTypes.ts`
2. Update form schema in `components/Admin/formSchema.ts`
3. Update `TableAdmin` and `EditProperty` components to display/edit field
4. Backend must return new field in API responses

### Modifying Admin Forms
- Edit form schema first (`formSchema.ts`), then update `FormAdmin` and `EditProperty` components
- Use React Hook Form's `register()` and `Controller` for custom inputs

### Creating New Routes
- Add route to `App.tsx`
- Protect with `<PrivateRoutes>` if admin-only
- Create corresponding screen component in `src/screens/`

---

## Common Pitfalls & Conventions

- ❌ Don't hardcode API URLs outside PropertyServices
- ❌ authStore has no token/session storage—add JWT handling for production
- ❌ Don't use `<img>` directly—use `OptimizedImage` component for proper lazy-loading and responsive formats
- ❌ Don't load Google Maps eagerly—use `LazyMap` component for deferred loading
- ✅ Use Zustand actions for all state mutations (avoid direct component state for global data)
- ✅ Import types from `src/types/` not inline interfaces
- ✅ Use DaisyUI classes for consistent styling; avoid custom Tailwind-only components
- ✅ Always wrap Cloudinary URLs with `getOptimizedCloudinaryUrl()` before passing to `OptimizedImage`

---

## Project Deployment

- **Frontend**: Deployed to Vercel (config: `vercel.json`)
- **Backend**: Separate Vercel deployment at `https://backend-bmz.vercel.app/`
- **Environment Variables**: None currently exposed (consider adding for API_BASE_URL)
