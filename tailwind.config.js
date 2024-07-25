/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js}"
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      primary: '#003777',
      bg_primary: "#F2FEFE",
      darkBlue: '#161c2d',
      brown: '#333333',
      borderColor: '#e6e6e6',
      footerBorder: 'rgba(255, 255, 255, 0.15)',
      white: '#FFFFFF',
      transparent: 'transparent',
      green: '#03d59f',
      blue: '#2166a9'
    },
    fontFamily: {
      sans: ['Nunito', 'sans-serif'],
    },
    keyframes: {
      fadeIn: {
        '0%': { opacity: 0 },
        '100%': { opacity: 1 }
      },
      fadeOut: {
        '0%': { opacity: 1 },
        '100%': { opacity: 0 }
      },
      fadeInDown: {
        '0%': {
          opacity: 0,
          transform: 'translate3d(0, -100%, 0)'
        },
        '100%': {
          opacity: 1,
          transform: 'translate3d(0, 0, 0)'
        }
      },
      fadeInRight: {
        '0%': {
          opacity: 0,
          transform: 'translate3d(75px, 0, 0)'
        },
        '100%': {
          opacity: 1,
          transform: 'translate3d(0, 0, 0)'
        }
      },
      fadeInUp: {
        '0%': {
          opacity: 0,
          transform: 'translate3d(0, 50px, 0)'
        },
        '100%': {
          opacity: 1,
          transform: 'translate3d(0, 0, 0)'
        }
      },
      fadeInBottomLeft: {
        '0%': { opacity: 0, transform: 'translate3d(-100px, 100px, 0)'},
        '100%': { opacity: 1, transform: 'translate3d(0, 0, 0)' }
      },
      fadeInBottomRight: {
        '0%': { opacity: 0, transform: 'translate3d(100px, 100px, 0)'},
        '100%': { opacity: 1, transform: 'translate3d(0, 0, 0)' }
      },
      slideIn: {
        '0%': { opacity: 0, transform: 'translateY(15%)' },
        '100%': { opacity: 1, transform: 'translateY(0)' }
      },
      slideOut: {
        '0%': { transform: 'translateY(0)' },
        '100%': { transform: 'translateY(-10%)' }
      },
      slideInLeft: {
        '0%': { transform: 'translate3d(-100%, 0, 0)', visibility: "visible" },
        '100%': { transform: 'translate3d(0, 0, 0)' }
      },
      slideInRight: {
        '0%': { opacity: 0, transform: 'translate3d(75px, 0, 0)', visibility: "visible" },
        '100%': { opacity: 1, transform: 'translate3d(0, 0, 0)' }
      },
      maskFromToTop: {
        '0%': { opacity: 1, clipPath: 'inset(0 0 100% 0)' },
        '100%': { opacity: 1, clipPath: 'inset(0 0 0 0)' }
      },
      yearCounter: {
        '0%': { "--num": 0 },
        '100%': { "--num": 20 }
      }
    },
    animation: {
      mmfadeIn: 'fadeIn 0.5s ease-out',
      mmfadeOut: 'fadeOut 0.5s ease-out',
      mmfadeInDown: 'fadeInDown 0.5s ease-out',
      mmFadeInRight: 'fadeInRight 0.5s ease-out',
      mmFadeInUp: 'fadeInUp 0.5s ease-out',
      mmFadeInBottomRight: 'fadeInBottomRight 0.5s ease-out',
      mmFadeInBottomLeft: 'fadeInBottomLeft 0.5s ease-out',
      mmslideIn: 'slideIn 0.5s ease-out',
      mmslideOut: 'slideOut 0.5s ease-out',
      mmslideInLeft: 'slideInLeft 0.5s ease-out',
      mmslideInRight: 'slideInRight 0.5s ease-out',
      mmMaskFromToTop: 'maskFromToTop 1s ease-out',
      mmYearCounter: 'yearCounter 1s ease-out'
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    boxShadow: {
      'card-hover': '16px 23px 52px 0px rgba(0,0,0,.12)',
      'post-hover': '16px 23px 32px rgba(0,0,0,.22)',
      'button-hover': '0px 8px 20px 0px rgba(3,213,159,.36)',
      'hover-v1': '10px 18px 39px 0 rgba(0,0,0,.1)',
      'contact-hover': '10px 13px 40px 0px rgba(216,216,216,.46)'
    },
    extend: {
      backgroundImage: {
        'button-pattern': "linear-gradient(to right, #03d59f, #00c1c2)",
        'path157': "url(/assets/images/bg.svg)",
        'service-banner': "url(/assets/images/service-banner.png)"
      },
    },
  },
  plugins: []
}

