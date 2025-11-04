import React from 'react'
import RightCard from './RightCard'

const RightContact = (props) => {
  return (
    <div id="right" className='h-full w-2/3 rounded-4xl p-6 flex flex-nowrap gap-8 overflow-x-auto'  >
      {props.users.map((el,idx)=>{
        return <RightCard key={idx} id={idx} img={el.img} tag={el.tag} intro={el.intro}/>
      })}
    </div>
  )
}

export default RightContact