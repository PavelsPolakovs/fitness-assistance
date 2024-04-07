// https://github.com/tailwindlabs/tailwindcss/blob/master/stubs/defaultConfig.stub.js
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{ts, tsx}',
    './src/assets/img/*' // To prevent -> warn - No utility classes were detected in your source files. If this is unexpected, double-check the `content` option in your Tailwind CSS configuration.
  ],
  theme: {
    screens: {
      '2sx': '375px',
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1024px',
      xxl: '1280px'
    },
    fontFamily: {
      'os-regular': ['OpenSans-Regular', 'sans-serif'],
      'os-semi-bold': ['OpenSans-SemiBold', 'sans-serif'],
      'os-bold': ['OpenSans-Bold', 'sans-serif']
    },
    extend: {
      variables: {
        '.itn': {
          colors: {
            primary: '#414141'
          }
        },
        '.slt': {
          colors: {
            primary: '#dabf10'
          }
        }
      },
      zIndex: {
        overlay: 100000,
        widget: 100001
      },
      minWidth: {
        'full-vw': '100vw'
      },
      minHeight: {
        'full-vh': '100vh'
      },
      fontSize: {
        '2xs': ['0.625rem', '0.775rem']
      },
      colors: {
        primary: 'var(--colors-primary)' // Main application text
      },
      boxShadow: {
        1: '0 3px 6px rgb(0, 0, 0, 0.24)' // Language menu ( desktop )
      }
    }
  },
  plugins: [
    require('@mertasan/tailwindcss-variables'),
    plugin(function ({ addBase, theme }) {
      addBase({
        'div#root-container': {
          fontFamily: theme('fontFamily.os-regular'),
          fontSize: theme('fontSize.base'),
          color: theme('colors.primary'),
          backgroundColor: 'transparent'
        }
      })
    })
  ]
}
