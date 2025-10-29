import React from 'react'
import Card from './Components/Card'
import Navbar from './Components/Navbar'

const App = () => {
    
  // const cards= Array(10).fill(0)

  return (
    <>
    <Navbar/>
    {/* <div className='card'> 
    <h1>Keshav this side</h1>
    <p>im Learning react </p>
    </div> */}
    {Card()}
    <Card/>
    {/* {cards.map((_,index)=>(
      
      
      <Card key={index} />
    )) } */}
  </>
  )
}

export default App