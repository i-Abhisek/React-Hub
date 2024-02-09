import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let  [counter, setCounter] = useState(15)
 // let counter = 15

  const addvalue = () =>{
    console.log("clicked",Math.random());
    counter = counter + 1
    setCounter(counter )
  }
  const removeValue = () =>{
    for(let i=0; i< counter;i++)
    {
      if(counter >0){

        setCounter(counter-1)
      }
    }
    
  }

  return (
   <>
    <h1> React Hub</h1>
    <h2> Counter value :{counter}</h2>
    <button onClick={addvalue}
    >Add Value {counter}</button>
    <br />

    
    <button
    onClick={removeValue}
    > Remove Value{counter}</button>
   </>
  )
}

export default App
