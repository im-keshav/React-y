import React from 'react'
import Navbar from './Navbar'
import Page1Contact from './Page1Contact'

const Section1 = (props) => {
  return (
    <div className='h-screen w-full bg-gray-100'>
         <Navbar />
         <Page1Contact users={props.users}/>
    </div>
  )
}

export default Section1