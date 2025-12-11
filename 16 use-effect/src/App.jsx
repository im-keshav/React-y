import React, { useState } from 'react'
import { useEffect } from 'react';

const App = () => {
  let [count , setCount]= useState(0);  
  let [count2 , setCount2]= useState(100);  

  // function random()
  // {
  //   let a= Math.random();
  //   console.log(a);
  // }
 useEffect(()=>{
    console.log("hello im running");
    
 },[count])
 
  return (
    <div>App
      <h1>
      {count}
      </h1>
      <h1>
      {count2}
      </h1>
      <button 
      onMouseEnter={()=>{
      setCount(count + 1);
      }}
      onMouseLeave={()=>{
        setCount2(count2+10)
      }}
      >click me </button>
    </div>
  )
}

export default App