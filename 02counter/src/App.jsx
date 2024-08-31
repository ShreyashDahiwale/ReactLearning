import { useState } from 'react'
import './App.css'

function App() {
  let [counter, setCounter] = useState(5)
  // setCounter is a method that is responsible for manipulating the counter 
  // let counter = 5;

  const addValue = () => {
    // console.log("Value Added", Math.random());
    if (counter < 20) {
      counter = counter + 1;
      setCounter(counter)
      console.log(counter);
    }    
    else{
      console.log(`Counter cannot go beyond 20`);
    }
  }

  const removeValue = () =>{
    if (counter > 0) {
      setCounter(counter - 1);
      console.log(counter);
    }
    else{
      console.log(`Counter cannot be less than 0`);
      
    }
  }

  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter Value: {counter}</h2>

      <button
      onClick={addValue}>Add Value</button>
      <br />
      <button
      onClick={removeValue}>Decrease Value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App
