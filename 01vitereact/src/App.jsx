import Chai from "./chai"

// function App() {

//   return (
//     <h1>Chai Aur React with Vite</h1>
//   )
// }


// function App() {
//   // <></> is called as Fragment in React
//   return (
//     <>  
//       <Chai/>
//     </>
//   )
// }

function App() {
  const username = "Hello Variable!!!"
  // username is known as Evaluated Expression
  // the reason is, think like, you cannot evaluate an expression in an Object
  return (
    <div>  
      <Chai/>
      <h2>Chai aur React {username}</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
    </div>
  )
}
export default App
