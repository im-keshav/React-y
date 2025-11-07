import React from 'react'
import { useState } from 'react'

const App = () => {
const[number,setNumber]=useState({username:"keshav",age:"20"})
const btnchange=()=>{
setNumber(prev=>({...prev,age:"21",username:"Keshav Mehta"}))

  // const NewNum={...number}
  // NewNum.age="21"
  // NewNum.username="Keshav Mehta"
  // setNumber(NewNum)
}

const[arr,setArr]=useState(["keshav",24])
const btnchangeArr=()=>{
    const NewArr=[...arr]
   
    NewArr[0]="Keshav"
    NewArr[1]=25
    setArr(NewArr)
}


  return (
    <div>
      {/* "usind object" */}
      <h1>{number.username},{number.age}</h1>
      <button onClick={btnchange}>click me</button>
      {/* "array" */}
      <h1>{arr}</h1>
      <button onClick={btnchangeArr}>Click me</button>
      
    </div>
  )
}

export default App