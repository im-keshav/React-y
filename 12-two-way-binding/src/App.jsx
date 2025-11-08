import React, { useState } from 'react'

const App = () => {
  const [name,setName]=useState("")

  const handleSubmit=(e)=>{
    e.preventDefault()
    console.log("form submitted by ",name);

    setName("")
    
  }

  return (
    <div>
      <form action="" onSubmit={(e)=>{handleSubmit(e)}}>
        <input 
        type="text"  
        value={name} 
        placeholder='heelo' 
        onChange={(e)=>{
          setName(e.target.value)
        }}/>
        <button >Click</button>
        <p>this is my {name}</p>
      </form>
    </div>
  )
}

export default App