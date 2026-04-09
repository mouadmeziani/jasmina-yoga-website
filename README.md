# Jasmina Yoga Website

A modern, multilingual landing page for a yoga instructor built with Next.js 14 and Chakra UI. Features responsive design, internationalization, and a clean component-based architecture.

## Features

- **Bilingual Support** - Full German/English translations using next-intl
- **Responsive Design** - Mobile-first approach with Chakra UI's responsive system
- **Professional Layout** - Hero section, bio, class offerings, contact form
- **Type-Safe** - Full TypeScript implementation
- **Optimized Images** - Next.js Image component with Sharp for optimal loading
- **Form Validation** - Contact form with react-hook-form validation
- **Modern Stack** - Next.js 14 App Router with React 18

## Pages

- **Home** (`/`) - Hero section, instructor bio, yoga offerings overview
- **About** (`/about`) - Detailed biography and teaching philosophy
- **Classes** (`/classes`) - Class types: Hatha Yoga, Yin Yoga, Trauma-Sensitive Yoga
- **Booking** (`/booking`) - Class reservation interface
- **Contact** (`/contact`) - Contact form for inquiries

## Tech Stack

**Framework:**
- Next.js 14 (App Router)
- React 18
- TypeScript

**UI/Styling:**
- Chakra UI (component library)
- Emotion (CSS-in-JS)
- Framer Motion (animations)
- React Icons

**Internationalization:**
- next-intl (German/English support)

**Forms:**
- react-hook-form (validation and state management)

**Code Quality:**
- ESLint + TypeScript ESLint
- Prettier (code formatting)

## Project Structure

```
app/
├── (yoga)/           # Route group for main pages
│   ├── about/
│   ├── classes/
│   ├── contact/
│   ├── booking/
│   └── page.tsx      # Homepage
├── layout.tsx        # Root layout
└── providers.tsx     # Chakra UI + i18n providers

components/
├── AboveTheFold.tsx  # Hero section
├── BioSection.tsx    # Instructor bio
├── OfferingsSection.tsx  # Class offerings grid
├── ContactForm.tsx   # Contact form with validation
├── Header/           # Navigation components
└── Footer/           # Footer components

messages/
├── en.json           # English translations
└── de.json           # German translations
```

## Setup

```bash
# Install dependencies
yarn install

# Run development server
yarn dev

# Build for production
yarn build

# Start production server
yarn start
```

Navigate to `http://localhost:3000`

## Internationalization

The site supports German (default) and English. Language switching is handled via URL prefixes:
- German: `/` or `/de`
- English: `/en`

Translation files are located in `/messages/[locale].json`

## Component Architecture

Built with reusable, composable components following React best practices:

- **AboveTheFold** - Full-screen hero with background image and CTA
- **BioSection** - Two-column layout with image and biography text
- **OfferingsSection** - Grid of yoga class offerings with icons
- **ClassCard** - Reusable card component for class descriptions
- **ContactForm** - Form with validation, accessible inputs, error handling

All components are fully typed with TypeScript and use Chakra UI's responsive props.

## Design Principles

- **Mobile-First** - Optimized for mobile with responsive breakpoints
- **Accessibility** - Semantic HTML, ARIA labels, keyboard navigation
- **Performance** - Optimized images, code splitting, lazy loading
- **Clean Code** - ESLint/Prettier enforced, consistent naming conventions

## Client Context

Developed for Jasmina, a certified yoga instructor specializing in:
- Hatha Yoga (strength and breath work)
- Yin Yoga (deep relaxation and flexibility)
- Trauma-Sensitive Yoga (specialized practice for trauma survivors)

The site emphasizes mindfulness, self-acceptance, and holistic wellness.
