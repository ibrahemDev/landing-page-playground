/** @type {import('tailwindcss').Config} */
//'[data-mode="light"]'
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],

  darkMode: ['class', '[data-mode="dark"]'],//['media','class', '[data-mode="dark"]', ]
  theme: {
    extend: {
      //darkMode: ['class'],//,'media'
      //translate: ['dark'],
      screens: {
        "my-3xl":"1400px",
        "my-2xl":"1300px",
        "my-xl":"1200px",
        "my-lg":"992px",
        "my-md":"768px",
        "my-sm":"576px",

        /**
         *   //min-[1400px]:max-w-[1290px] 3xl
  //min-[1300px]:max-w-[1230px] 2xl
  //min-[1200px]:max-w-[1140px] xl
  //min-[992px]:max-w-[960px] lg

  //min-[768px]:max-w-[720px] md
  
  //min-[576px]:max-w-[540px] sm
         */
        
      },
    },

    
    
  },

  plugins: [
 
    require("daisyui"),
    


  ],
  
  daisyui: {
    
    themes: ["light", "dark"],//false,// false, // true: all themes | false: only light + dark | array: specific themes like this ["light", "dark", "cupcake"]
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components

    utils: true, // adds responsive and modifier utility classes
    rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
    //prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
    //themes: ["light", "dark"],
  },

}

