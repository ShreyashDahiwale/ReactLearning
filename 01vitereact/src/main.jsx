import React from 'react'
import { createRoot } from 'react-dom/client'
// import {jsx as _jsx} from "react/jsx-runtime.js"
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Custom React !</h1>
      <h3>App Function</h3>
    </div>
  )
}

// const ReactElement = {
//   type: 'a',
//   props: {
//       href: 'https://google.com',
//       target: '_blank',
//   },
//   children: 'Click me to visit Google'
// }

const anotherElement = (
  <a href="https://google.com" target='_blank'>Visit Google</a>
)


let anotherUser = "Vite + React" 
const reactElement = React.createElement(
  'a',
  {href: 'https://facebook.com', target:'_blank'},
  'Visit Facebook from here',
  anotherUser // Evaluated Expression
)


createRoot(document.getElementById('root')).render(

  // MyApp()
  // <MyApp />
  <App />
  // ReactElement
  // anotherElement
  // reactElement

)
