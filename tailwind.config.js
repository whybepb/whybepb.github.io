/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'mono': ['JetBrains Mono', 'Fira Code', 'Courier New', 'monospace'],
      },
      colors: {
        'grid': '#e5e7eb',
        'technical': '#374151',
        'drafting-light': '#fafafa',
        'drafting-dark': '#1e293b',
        'blueprint': '#3b82f6',
      },
      backgroundImage: {
        'grid-pattern': `
          linear-gradient(#e5e7eb 1px, transparent 1px),
          linear-gradient(90deg, #e5e7eb 1px, transparent 1px)
        `,
        'schematic': `
          repeating-linear-gradient(
            45deg,
            transparent,
            transparent 2px,
            #e5e7eb 2px,
            #e5e7eb 4px
          )
        `,
      },
      backgroundSize: {
        'grid': '20px 20px',
      },
      animation: {
        'progress': 'progress 2s ease-out',
      },
      keyframes: {
        progress: {
          '0%': { width: '0%' },
          '100%': { width: 'var(--progress)' },
        }
      }
    },
  },
  plugins: [],
}