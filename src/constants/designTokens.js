/**
 * Design Tokens
 * Centralized design system constants for consistent styling
 */

export const colors = {
  // Background
  background: {
    primary: '#0B0B0C',
    secondary: '#111111',
    tertiary: '#1A1A1A',
    light: '#E8E8E8'
  },
  
  // Borders
  border: {
    subtle: '#1F1F1F',
    medium: '#2A2A2A',
    hover: '#2F2F2F',
    hoverStrong: '#3A3A3A'
  },
  
  // Text
  text: {
    primary: '#F2F2F2',
    secondary: '#9A9A9A',
    tertiary: '#6F6F6F',
    muted: '#E0E0E0',
    dark: '#3A3A3A'
  },
  
  // Accent
  accent: {
    primary: '#00D9FF',
    hover: '#00C4E6'
  }
};

export const typography = {
  fontFamily: {
    serif: "'Crimson Pro', serif",
    sans: "'Inter', sans-serif"
  },
  
  fontSize: {
    xs: '0.75rem',    // 12px
    sm: '0.875rem',   // 14px
    base: '1rem',     // 16px
    lg: '1.125rem',   // 18px
    xl: '1.25rem',    // 20px
    '2xl': '1.5rem',  // 24px
    '3xl': '1.875rem', // 30px
    '4xl': '2.25rem', // 36px
    '5xl': '3rem',    // 48px
    '6xl': '3.75rem', // 60px
    '7xl': '4.5rem'   // 72px
  },
  
  fontWeight: {
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700
  },
  
  lineHeight: {
    tight: 1.1,
    normal: 1.5,
    relaxed: 1.625,
    loose: 2
  }
};

export const spacing = {
  xs: '0.5rem',   // 8px
  sm: '0.75rem',  // 12px
  md: '1rem',     // 16px
  lg: '1.5rem',   // 24px
  xl: '2rem',     // 32px
  '2xl': '3rem',  // 48px
  '3xl': '4rem'   // 64px
};

export const borderRadius = {
  sm: '0.375rem', // 6px
  md: '0.5rem',   // 8px
  lg: '0.75rem',  // 12px
  xl: '1rem',     // 16px
  '2xl': '1.5rem', // 24px
  full: '9999px'
};

export const transitions = {
  fast: '150ms',
  normal: '200ms',
  slow: '300ms',
  easing: 'cubic-bezier(0.4, 0, 0.2, 1)'
};

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px'
};

export default {
  colors,
  typography,
  spacing,
  borderRadius,
  transitions,
  breakpoints
};
