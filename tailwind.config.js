
/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors:{
        "pewter-blue": "#8BA7B8",
        "russian-blue": "#9AAEBB",
        "sea-kelp": "#364954",
        "skipper-gray": "#536672"
      
      },
      fontFamily: {
        poppins: ["Poppins"],
      },
      screens: {
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }
  
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
            rotate: {
        '20': '20deg',
        '35': '35deg',
      },

      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
        typing: 'typing 3.5s steps(40, end) infinite',
        "infinite-scroll": 'infinite-scroll 25s linear infinite',
        gradient: "gradient 5s linear normal",
        "slide-out-and-back-right" : "slide-out-and-back-right 5s linear 5s normal",
        orbit: 'orbit 6s var(--orbit-delay) infinite ease-in-out'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        typing:{
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        "infinite-scroll": {
          from: { transform: ' translateX(0)' },
          to: { transform: ' translateX(-100%)' },
        },
        "gradient":{
          to :{
            "--angle": "360deg"
          }
        },
        "slide-out-and-back-right": {
            from: {
              left: "-30%"
            },
            to: {
              left: "100%"
            }
        },
        "orbit":{
          '0%': {left: "-10%", top: "70%)", "z-index" : 30 },
          "49%":{ "z-index" : 30},
          "50%": {left: "102%", "z-index": 10, top: '30%' },
          "99%": {"z-index": 10},
          "100%": {left: "-10%", top: "70%"}
        }
      }


    },
  },
  plugins: [],
}

