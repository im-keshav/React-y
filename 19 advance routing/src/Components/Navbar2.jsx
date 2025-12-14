import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {
    const navigate= useNavigate()
  return (
    <div className='py-3 px5 bg-cyan-800 '>
        <button
       className='bg-amber-500 font-medium active:scale-95 px-5 py-2 rounded m-2 cursor-pointer'
       onClick={()=>{
        navigate('/')
       }}
      >
        Return to Home Page
      </button>
      <button
       className='bg-amber-500 font-medium active:scale-95 px-5 py-2 rounded m-2 cursor-pointer'
       onClick={()=>{
        navigate(-1)
       }}
      >
        Back
      </button>
      <button
       className='bg-amber-500 font-medium active:scale-95 px-5 py-2 rounded m-2 cursor-pointer'
       onClick={()=>{
        navigate(+1)
       }}
      >
        Next
      </button>
    </div>
  )
}

export default Navbar2