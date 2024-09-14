// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {
//       colors:{
//         text:'#fff',
//         tprimary:'#576cbc',
//         tsecondary:'#BF8CF4',
//         dark:'#0b2447',
//         bg:'#04152d',

//       }
//     },
//   },
//   plugins: [],
// }
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor:{
        'custom-bg':'#0F1724',
      },
      colors:{
                'white':'#fff',
                'tprimary':'#576cbc',
                'tsecondary':'linear-gradient(to right, #cd9cf2 0%, #f6f3ff 100%)',
                'dark':'#0b2447',
                'bg':'#04152d',
                
        
              },
              backgroundImage: {
                'tsecondary': 'linear-gradient(45.8deg, rgb(175, 104, 254) 9.3%, rgb(101, 223, 255) 75.1%)',
                'shome':'linear-gradient(120deg, #A16FF0, #4AB8F4)',
                'hoveref':' linear-gradient(109.6deg, rgb(177, 173, 219) 11.2%, rgb(245, 226, 226) 91.1%)'
              },

    },
  },
  plugins: [],
}
