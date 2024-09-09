/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        blue: {
          30: '#55C2E6',
          40: '#3F9CBB',
          80: '#33397A',
          90: '#1C204B',
          95: '#0E1323'
        },
        violet: {
          20: '#BBC0FF',
          60: '#7078C9',
          70: '#5747EA'
        },
        purple: {
          70: '#7335D2',
          80: '#5A1CBB'
        },
        green: {
          40: '#4BCF82',
          50: '#29BA66'
        },
        gray: {
          20: '#D8D8D8'
        },
        orange: {
          30: '#F1C75B',
          40: '#E6A532',
          50: '#D96C47'
        },
        fuchsia: {
          40: '#FF5E7D',
          50: '#F04667'
        },
        salmon: {
          40: '#FF8B6E'
        }
      }
    }
  },
  plugins: []
};
