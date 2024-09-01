
import './App.css'
import Card from './components/card'

function App() {
  let myArr = [1,2,4];
  let myObj = {username:"Shreyash", age: 24}
  return (
    <>
      <h1 className='bg-gray-700 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>

      < Card channel='chaiaurcode' someObj={myObj} someArr={myArr}/>
      < Card channel='Shreyash' someObj={myObj} someArr={myArr}/>
      < Card btnText="click me"/>
      < Card  btnText="visit me"/>
    </>
  )
}

export default App
