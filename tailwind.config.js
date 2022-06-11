module.exports = {
   content: ['./src/**/*.{js,jsx,ts,tsx}'],
   darkMode: 'class',
   theme: {
      extend: {
         fontFamily: {
            primary: ['Epilogue', 'sans-serif'],
         },
         colors: {
            main: { light: '#FCFCFD', dark: '#13131A' },
            letter: {
               1: '#171725',
               2: '#4B5264',
               3: '#808191',
               4: '#B2B3BD',
            },
            icon: '#A2A2A8',
            'input-b': '#F1F1F3',
            primary: {
               main: '#1DC071',
               '20%': '#4ACD8D',
               'extra-2': '#F1FBF7',
            },
            secondary: {
               light: {
                  main: '#6F49FD',
                  '20%': '#8C6DFD',
                  '40%': '#A992FE',
                  '80%': '#EEEAFD',
               },
               dark: { main: '#1C1C24', stroke: '#3A3A43', '80%': '#352A65' },
            },
            dark: {},
         },
         backgroundImage: {
            play: 'linear-gradient(180deg, rgba(141, 141, 141, 0.1) -37.93%, rgba(46, 46, 46, 0.4) 100%)',
         },
         boxShadow: {
            light: '10px 10px 20px rgba(218, 213, 213, 0.15)',
            dark: '10px 10px 20px rgba(2, 2, 2, 0.25)',
            card: '0px 2px 4px rgba(184, 184, 184, 0.03), 0px 6px 12px rgba(184, 184, 184, 0.02), 0px 12px 20px rgba(184, 184, 184, 0.03)',
         },
         animation: {
            'lds-ripple': 'lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite',
            'lds-ripple-delay':
               'lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) -0.5s infinite',
         },
         keyframes: {
            'lds-ripple': {
               '0%': {
                  top: '36px',
                  left: '36px',
                  width: 0,
                  height: 0,
                  opacity: 0,
               },
               '4.9%': {
                  top: '36px',
                  left: '36px',
                  width: 0,
                  height: 0,
                  opacity: 0,
               },
               '5%': {
                  top: '36px',
                  left: '36px',
                  width: 0,
                  height: 0,
                  opacity: 1,
               },
               '100%': {
                  top: '0px',
                  left: '0px',
                  width: '72px',
                  height: '72px',
                  opacity: 0,
               },
            },
         },
      },
   },
   plugins: [],
};