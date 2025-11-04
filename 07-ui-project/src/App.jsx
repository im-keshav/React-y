import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {
  const users=[
    {
      img:"https://images.unsplash.com/photo-1761872936220-1531e97a158a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1364",
      intro:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates laudantium, tempore non reiciendis amet quo?",
      tag:"Satisfied"
    },
    {
      img:"https://images.unsplash.com/photo-1521898284481-a5ec348cb555?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=987",
      intro:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates laudantium, tempore non reiciendis amet quo?",
      tag:"UnserServed"
    },
    {
      img:"https://plus.unsplash.com/premium_photo-1666299430146-582b02f73aea?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=987",
      intro:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates laudantium, tempore non reiciendis amet quo?",
      tag:"UnderBanked"
    },

]
  return (
    <div >
      <Section1 users={users}/>
      <Section2/>
    </div>
  )
}

export default App

