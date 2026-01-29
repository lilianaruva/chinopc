# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React application built with TypeScript and Vite. It uses React 19.1.1 with the modern React DOM client rendering API and strict mode enabled.

## Development Commands

### Essential Commands
- `npm run dev` - Start development server with HMR (Hot Module Replacement)
- `npm run build` - Type-check with TypeScript and build for production
- `npm run lint` - Run ESLint on all files
- `npm run preview` - Preview production build locally

### TypeScript
- The project uses TypeScript 5.9.3 with strict mode enabled
- TypeScript configuration is split across multiple files:
  - `tsconfig.json` - Root configuration with project references
  - `tsconfig.app.json` - Application source code configuration (src/)
  - `tsconfig.node.json` - Node/build tooling configuration
- Type checking is part of the build process (`tsc -b`)
- Compiler options include strict linting rules: `noUnusedLocals`, `noUnusedParameters`, `noFallthroughCasesInSwitch`

## Architecture

### Entry Points
- **HTML**: `index.html` - Root HTML file in project root (Vite convention)
- **JavaScript**: `src/main.tsx` - Application entry point that mounts React to DOM
- **Root Component**: `src/App.tsx` - Main application component

### Build System
- **Vite**: Development server and build tool
  - Configuration: `vite.config.ts`
  - Uses `@vitejs/plugin-react` for React Fast Refresh via Babel
  - HMR (Hot Module Replacement) is enabled by default
- **ESLint**: Code linting
  - Configuration: `eslint.config.js` (flat config format)
  - Uses TypeScript ESLint, React Hooks, and React Refresh plugins
  - Ignores `dist/` directory

### React Structure
- Uses modern React 19 with `createRoot` API from `react-dom/client`
- Strict mode is enabled in `src/main.tsx`
- JSX transform: `react-jsx` (automatic runtime, no need to import React)
- Component pattern: Functional components with hooks

### TypeScript Settings
- **Module System**: ESNext with bundler resolution
- **JSX**: `react-jsx` (automatic runtime)
- **Target**: ES2022
- **Strict Mode**: Enabled with additional unused variable/parameter checks
- **No Emit**: TypeScript is used for type checking only; Vite handles transpilation
