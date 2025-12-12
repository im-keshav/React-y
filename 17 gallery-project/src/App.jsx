import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import Cards from './Components/Cards'


const App = () => {

  const [userData, setUserData] = useState([])

  const [index, setIndex] = useState(1)

  const getData = async ()=>{
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=12`)
    setUserData(response.data)
    
    
  }

 useEffect(function(){
  getData()
 },[index])
  

  let printuserdata= <h3 className='text-gray-300 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -tanslate-y-1/2 font-semibold' >Loading...</h3>
  if(userData.length>0){
    printuserdata = userData.map(function(elem,id){

      return <div key={id}>
         <Cards elem={elem}/>

        </div>
      
    })
  }

  return (
    <div className='bg-black overflow-auto h-screen text-white p-4' >
    {/* <button 
    onClick={getData}
    className='bg-green-600 active:scale-95 text-white px-5 py-2 rounded mb-3'>
    Get data
    </button> */}

    <div className='flex flex-wrap gap-4 h-[80%] p-2'>
    {printuserdata}
    </div> 

    <div className='flex justify-center items-center gap-6 p-4 absolute bottom-0 left-1/2 -translate-x-1/2 '>
      <button
       className='bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2  font-semibold'
       onClick={()=>{
        if(index>1){
          setIndex(index-1)
          setUserData([])
          
        }
       }}

      >
      Prev
      </button>
      <h1>Page {index}</h1>
      <button 
      className='bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2 font-semibold '
      onClick={()=>{
        setIndex(index+1)
        setUserData([])
        
      }}

      >
      Next
      </button>
    </div>

      
      
      </div>
  )
}

export default App