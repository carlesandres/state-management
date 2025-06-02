# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## Architecture

This is a Next.js application demonstrating Zustand state management integration with a product details page.

### State Management Pattern
- **Zustand store** (`lib/store.ts`) - Defines the main application state interface and actions
- **Store Provider** (`lib/store-provider.tsx`) - React context wrapper that initializes the Zustand store with preloaded state
- **Custom hook** (`lib/store.ts:useStore`) - Type-safe selector hook for accessing store state

### Data Fetching Pattern
- **TanStack Query** integration via `useProductInfo` hook (`lib/hooks/use-product-info.ts`)
- **API routes** handle product data (`app/api/product.ts`)
- **Utility functions** for data fetching (`lib/utils/fetch-product-info.ts`)

### Component Architecture
The main page (`app/page.tsx`) uses a tile-based layout with product information split into:
- **Product Imagery Tile** - Handles product images display and interaction
- **Sizes Tile** - Manages size selection and display
- **Colour Info Tile** - Handles color information and selection

Each tile component follows a pattern of:
1. Using `useProductInfo` hook for data fetching
2. Individual state management systems in `lib/*-system/` directories
3. Tile wrapper components in `lib/*-tile.tsx` files

### Path Aliases
- `@/*` maps to root directory (configured in `tsconfig.json`)

### Key Dependencies
- Zustand for state management
- TanStack Query for server state
- Tailwind CSS with additional plugins for styling
- Lucide React for icons