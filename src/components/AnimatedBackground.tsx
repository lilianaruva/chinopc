/**
 * AnimatedBackground.tsx
 *
 * Dynamic animated background simulating a gamer room atmosphere
 * with neon light lines and subtle motion effects.
 *
 * Features:
 * - Floating neon lines (cyan & magenta) with varying speeds
 * - Subtle pulsing/breathing glow effects
 * - Layered parallax-like movement for depth
 * - GPU-accelerated CSS animations (transform, opacity)
 * - Seamless infinite loops with ease-in-out timing
 * - Static fallback for prefers-reduced-motion
 * - Fully responsive (works on mobile & desktop)
 *
 * Performance considerations:
 * - Uses only transform and opacity (GPU-accelerated properties)
 * - Animations use will-change for optimization
 * - SVG elements are lightweight and scalable
 * - No JavaScript animation loops (pure CSS)
 * - Respects prefers-reduced-motion media query
 */

import './AnimatedBackground.css'

export function AnimatedBackground() {
  return (
    <div className="animated-bg" aria-hidden="true">
      {/* Static gradient base layer */}
      <div className="animated-bg__gradient" />

      {/* Ambient glow spots - creates depth and atmosphere */}
      <div className="animated-bg__glow animated-bg__glow--cyan" />
      <div className="animated-bg__glow animated-bg__glow--magenta" />
      <div className="animated-bg__glow animated-bg__glow--cyan-2" />

      {/* Neon line layers - different speeds for parallax effect */}
      {/* Layer 1: Slow moving lines (background) */}
      <svg className="animated-bg__lines animated-bg__lines--slow" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
        <defs>
          {/* Cyan gradient for lines */}
          <linearGradient id="cyan-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--brand-cyan)" stopOpacity="0" />
            <stop offset="50%" stopColor="var(--brand-cyan)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="var(--brand-cyan)" stopOpacity="0" />
          </linearGradient>
          {/* Magenta gradient for lines */}
          <linearGradient id="magenta-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--accent-magenta)" stopOpacity="0" />
            <stop offset="50%" stopColor="var(--accent-magenta)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="var(--accent-magenta)" stopOpacity="0" />
          </linearGradient>
          {/* Vertical gradients */}
          <linearGradient id="cyan-gradient-v" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="var(--brand-cyan)" stopOpacity="0" />
            <stop offset="50%" stopColor="var(--brand-cyan)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="var(--brand-cyan)" stopOpacity="0" />
          </linearGradient>
          {/* Glow filter for neon effect */}
          <filter id="glow-cyan" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="glow-magenta" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Horizontal neon lines - slow layer */}
        <line
          className="neon-line neon-line--h1"
          x1="-200" y1="200" x2="400" y2="200"
          stroke="url(#cyan-gradient)"
          strokeWidth="2"
          filter="url(#glow-cyan)"
        />
        <line
          className="neon-line neon-line--h2"
          x1="-300" y1="600" x2="300" y2="600"
          stroke="url(#magenta-gradient)"
          strokeWidth="1.5"
          filter="url(#glow-magenta)"
        />
        <line
          className="neon-line neon-line--h3"
          x1="-150" y1="900" x2="350" y2="900"
          stroke="url(#cyan-gradient)"
          strokeWidth="1"
          filter="url(#glow-cyan)"
        />
      </svg>

      {/* Layer 2: Medium speed lines (midground) */}
      <svg className="animated-bg__lines animated-bg__lines--medium" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
        <line
          className="neon-line neon-line--h4"
          x1="-250" y1="350" x2="350" y2="350"
          stroke="url(#cyan-gradient)"
          strokeWidth="2.5"
          filter="url(#glow-cyan)"
        />
        <line
          className="neon-line neon-line--h5"
          x1="-200" y1="750" x2="400" y2="750"
          stroke="url(#magenta-gradient)"
          strokeWidth="2"
          filter="url(#glow-magenta)"
        />
        {/* Diagonal accent lines */}
        <line
          className="neon-line neon-line--d1"
          x1="-100" y1="0" x2="200" y2="400"
          stroke="url(#cyan-gradient)"
          strokeWidth="1.5"
          filter="url(#glow-cyan)"
        />
      </svg>

      {/* Layer 3: Fast moving lines (foreground) - more prominent */}
      <svg className="animated-bg__lines animated-bg__lines--fast" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
        <line
          className="neon-line neon-line--h6"
          x1="-300" y1="450" x2="300" y2="450"
          stroke="url(#cyan-gradient)"
          strokeWidth="3"
          filter="url(#glow-cyan)"
        />
        <line
          className="neon-line neon-line--h7"
          x1="-200" y1="150" x2="400" y2="150"
          stroke="url(#magenta-gradient)"
          strokeWidth="2"
          filter="url(#glow-magenta)"
        />
      </svg>

      {/* Vertical accent lines - adds depth */}
      <svg className="animated-bg__lines animated-bg__lines--vertical" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
        <line
          className="neon-line neon-line--v1"
          x1="300" y1="-100" x2="300" y2="400"
          stroke="url(#cyan-gradient-v)"
          strokeWidth="1.5"
          filter="url(#glow-cyan)"
        />
        <line
          className="neon-line neon-line--v2"
          x1="1600" y1="-150" x2="1600" y2="350"
          stroke="url(#cyan-gradient-v)"
          strokeWidth="1"
          filter="url(#glow-cyan)"
        />
      </svg>

      {/* Floating particles/dots for extra ambiance */}
      <div className="animated-bg__particles">
        <span className="particle particle--1" />
        <span className="particle particle--2" />
        <span className="particle particle--3" />
        <span className="particle particle--4" />
        <span className="particle particle--5" />
        <span className="particle particle--6" />
      </div>

      {/* Grid overlay - subtle tech pattern */}
      <div className="animated-bg__grid" />
    </div>
  )
}

export default AnimatedBackground
