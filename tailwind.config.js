/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      animation: {
        rotate: 'rotate 6s linear infinite',
      },
      keyframes: {
        rotate: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      },
      colors: {
        "background": "#101217",
        "foreground": "#dfc2aa",
        "cursor": "#dfc2aa",
        "color0": "#101217",
        "color1": "#89423E",
        "color2": "#98594F",
        "color3": "#B95147",
        "color4": "#C66451",
        "color5": "#768D71",
        "color6": "#9AAD74",
        "color7": "#dfc2aa",
        "color8": "#9c8776",
        "color9": "#89423E",
        "color10": "#98594F",
        "color11": "#B95147",
        "color12": "#C66451",
        "color13": "#768D71",
        "color14": "#9AAD74",
        "color15": "#dfc2aa"
      }
    }
  },
  plugins: []
};
