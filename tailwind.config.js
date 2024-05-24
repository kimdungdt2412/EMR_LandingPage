/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    colors: {
      primary: '#003777',
      bg_primary: "#F2FEFE",
      darkBlue: '#161c2d',
      brown: '#333333',
      borderColor: '#e6e6e6',
      footerBorder: 'rgba(255, 255, 255, 0.15)'
    },
    fontFamily: {
      sans: ['Nunito', 'sans-serif'],
    },
    keyframes: {
      mmfadeIn: {
        '0%': { opacity: 0 },
        '100%': { opacity: 1 }
      },
      mmfadeOut: {
        '0%': { opacity: 1 },
        '100%': { opacity: 0 }
      },
      mmfadeInDown: {
        '0%': {
          opacity: 0,
          transform: 'translate3d(0, -100%, 0)'
        },
        '100%': {
          opacity: 1,
          transform: 'translate3d(0, 0, 0)'
        }
      },
      mmFadeInRight: {
        '0%': {
          opacity: 0,
          transform: 'translate3d(75px, 0, 0)'
        },
        '100%': {
          opacity: 1,
          transform: 'translate3d(0, 0, 0)'
        }
      },
      mmFadeInUp: {
        '0%': {
          opacity: 0,
          transform: 'translate3d(0, 50px, 0)'
        },
        '100%': {
          opacity: 1,
          transform: 'translate3d(0, 0, 0)'
        }
      },
      mmslideIn: {
        '0%': { opacity: 0, transform: 'translateY(15%)' },
        '100%': { opacity: 1, transform: 'translateY(0)' }
      },
      mmslideOut: {
        '0%': { transform: 'translateY(0)' },
        '100%': { transform: 'translateY(-10%)' }
      },
      mmslideInLeft: {
        '0%': { transform: 'translate3d(-100%, 0, 0)', visibility: "visible" },
        '100%': { transform: 'translate3d(0, 0, 0)' }
      },
      mmslideInRight: {
        '0%': { opacity: 0, transform: 'translate3d(75px, 0, 0)', visibility: "visible" },
        '100%': { opacity: 1, transform: 'translate3d(0, 0, 0)' }
      },
      maskFromToTop: {
        '0%': { opacity: 1, clipPath: 'inset(0 0 100% 0)' },
        '100%': { opacity: 1, clipPath: 'inset(0 0 0 0)' }
      }
    },
    animation: {
      mmfadeIn: 'mmfadeIn 0.3s ease-out',
      mmfadeOut: 'mmfadeOut 0.3s ease-out',
      mmfadeInDown: 'mmfadeInDown 0.3s ease-out',
      mmFadeInRight: 'mmFadeInRight 0.3s ease-out',
      mmFadeInUp: 'mmFadeInUp 0.3s ease-out',
      mmslideIn: 'mmslideIn 0.3s ease-out',
      mmslideOut: 'mmslideOut 0.3s ease-out',
      mmslideInLeft: 'mmslideInLeft 0.5s ease-out',
      mmslideInRight: 'mmslideInRight 0.5s ease-out',
      maskFromToTop: 'maskFromToTop 1s ease-out'
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
      'post-hover': '16px 23px 52px rgba(0,0,0,.22)'
    },
    extend: {
      backgroundImage: {
        'button-pattern': "linear-gradient(to right, #03d59f, #00c1c2)",
        'path157': "url(/assets/images/bg.svg)"
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}

