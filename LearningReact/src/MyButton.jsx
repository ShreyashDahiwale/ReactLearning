import { useState } from 'react';
import './myButton.css'

function MyButton()  {
  let [count, setCount] = useState(0);
  let name='Random Click';
  let products = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
  ];
  const listItems = products.map(x => 
    <li key={x.id}>
      {x.title}
    </li>
  );
  function handleClick () {
    // alert('You Clicked Me!');
    setCount(count + 1)
  }
  return (
    <>
      <ul>{listItems}</ul>
      <button className="cmbutton" onClick={handleClick}>Clicked Me {count} times for   {name}</button>
    </>
  )
}


export default MyButton