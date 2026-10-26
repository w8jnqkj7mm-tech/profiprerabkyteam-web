/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Základná paleta
        bg: {
          dark: '#0D1215',
          panel: '#151B1F',
          light: '#DBDCE5',
          darkSection: '#2F4858',
        },
        text: {
          primary: '#EEF0F3',
          secondary: 'rgba(238, 240, 243, 0.75)',
          muted: 'rgba(238, 240, 243, 0.24)',
        },
        brand: {
          green: '#51AE4B',
          electrician: '#E51E25',
          electricianText: '#FF6B70',
          plumber: '#4562AD',
          plumberText: '#8FA6E6',
          carpentry: '#E9E3D8',
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'system-ui', 'sans-serif'],
        serif: ['Spectral', 'Georgia', 'serif'],
      },
      fontSize: {
        xs: ['12px', { lineHeight: '1.4' }],
        sm: ['14px', { lineHeight: '1.5' }],
        base: ['16px', { lineHeight: '1.6' }],
        lg: ['18px', { lineHeight: '1.6' }],
        xl: ['20px', { lineHeight: '1.5' }],
        '2xl': ['24px', { lineHeight: '1.4' }],
        '3xl': ['32px', { lineHeight: '1.2' }],
        '4xl': ['48px', { lineHeight: '1.1' }],
        '5xl': ['64px', { lineHeight: '1.02' }],
        '6xl': ['96px', { lineHeight: '1.02' }],
      },
      fontWeight: {
        400: '400',
        500: '500',
        600: '600',
        700: '700',
      },
      letterSpacing: {
        tight: '-0.025em',
        normal: '0',
        wide: '0.04em',
        wider: '0.08em',
        widest: '0.1em',
      },
      animation: {
        rise: 'rise 1.1s cubic-bezier(.2,.7,.1,1) forwards',
        fadein: 'fadein 1s ease forwards',
        kb: 'kb 22s ease-in-out infinite alternate',
        sweep: 'sweep 9s ease-in-out infinite',
        cue: 'cue 2.2s cubic-bezier(.6,0,.3,1) infinite',
        marq: 'marq 38s linear infinite',
        swap: 'swap .6s cubic-bezier(.2,.7,.1,1)',
      },
      keyframes: {
        rise: {
          to: { transform: 'translateY(0)' },
        },
        fadein: {
          to: { opacity: '1' },
        },
        kb: {
          from: { transform: 'scale(1.04) translate(0, 0)' },
          to: { transform: 'scale(1.14) translate(-2%, -1.5%)' },
        },
        sweep: {
          '0%': { transform: 'translateX(-60%) rotate(18deg)', opacity: '0' },
          '30%': { opacity: '0.55' },
          '60%': { opacity: '0' },
          '100%': { transform: 'translateX(160%) rotate(18deg)', opacity: '0' },
        },
        cue: {
          '0%': { transform: 'scaleY(0)' },
          '45%': { transform: 'scaleY(1)', transformOrigin: 'top' },
          '55%': { transform: 'scaleY(1)', transformOrigin: 'bottom' },
          '100%': { transform: 'scaleY(0)', transformOrigin: 'bottom' },
        },
        marq: {
          to: { transform: 'translateX(-50%)' },
        },
        swap: {
          from: { opacity: '0', transform: 'translateY(14px)' },
          to: { opacity: '1', transform: 'none' },
        },
      },
      transitionDuration: {
        250: '250ms',
        350: '350ms',
      },
      spacing: {
        'clamp-sm': 'clamp(20px, 5vw, 72px)',
        'clamp-py': 'clamp(72px, 10vh, 120px)',
      }
    },
  },
  plugins: [],
};
