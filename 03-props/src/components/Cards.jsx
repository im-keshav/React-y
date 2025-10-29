import React from 'react'

const Cards = (props) => {
  return (
      <div className='child'>
        <img src="https://images.unsplash.com/photo-1760199129864-df2332e3f3e7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEzMnxDRHd1d1hKQWJFd3x8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=80 0" alt="" />
        <h1>{props.user}</h1> 
        <p>{props.desc}</p>
        <button>View Profile</button>
      </div>
      
     
  
  )
}

export default Cards