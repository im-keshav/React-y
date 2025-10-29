import React from 'react'
import Cards from './components/Cards'

const App = () => {

  // const card = Array(4).fill(0)
  return (
   <> 
   {/* {card.map((values,index)=>(

     <Cards key={index}/>
   ))} */}
   {/* <Cards user="aman"
          desc="python full stack developer"/>
          <Cards user="aman"
          desc="python full stack developer"/> */}


          <div className="parent">
          <Cards user="keshav" desc="mern stack developer" />
          <Cards user="keshav" desc="mern stack developer" />

          </div>
   </>
  )
}

export default App