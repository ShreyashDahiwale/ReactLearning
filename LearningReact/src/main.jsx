import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MyButton from './MyButton.jsx'
import './index.css'

function SayHello(){
  return(
    <>
      <h2>Say Hello To the Community.</h2>
    </>
  )
}
let isLoggedIn = false;
let content=null;
if(!isLoggedIn){
  content=<MyButton />
}
else{
  content=<SayHello />
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1>This is Learning Repo</h1>
    {content}
    {/* {content} */}
    {/* <SayHello />
    <MyButton /> */}
  </StrictMode>,
)
