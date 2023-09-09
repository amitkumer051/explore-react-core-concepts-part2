import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter';
import Players from './Players';
import User from './Users';
import Friends from './Friends';

function App() {
  function handleClick(){
    alert('Button Clicked');
  }

  const addToFive=(num)=>{
    alert(num+5);
  }


  return (
    <>
      <h3>React core concept 2</h3>
      <Friends></Friends>
      <User></User>

      <Players></Players>

      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>

      <button onClick={()=> {alert("Button clicked is clicked")}}>Button Clicked</button>

      <button onClick={()=>{addToFive(3)}}>Button Params</button>
    </>
  )
}

export default App
