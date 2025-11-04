import React from 'react'
import LeftContact from './LeftContact'
import RightContact from './RightContact'

const Page1Contact = (props) => {
  return (
    <div className='pb-16 pt-6 px-18 h-[90vh] flex gap-10 items-center'>
    <LeftContact/>
    <RightContact users={props.users}/>
    </div>
  )
}

export default Page1Contact