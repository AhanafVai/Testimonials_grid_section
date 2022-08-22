module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      fontFamily: {
        barlow: "'Barlow Semi Condensed',serif"
      },
      backgroundImage: {
        danielPattern: "url('images/bg-pattern-quotation.svg')"
      },
      colors: {
        moderateViolet: 'hsl(263, 55%, 52%)',
        veryDarkGrayishBlue: 'hsl(217, 19%, 35%)',
        veryDarkBlackishBlue: 'hsl(219, 29%, 14%)',
        White: ' hsl(0, 0%, 100%)',
        lightGray: 'hsl(0, 0%, 81%)',
        lightGrayishBlue: 'hsl(210, 46%, 95%)'
      }
    }
  },
  plugins: []
}
