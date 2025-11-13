import React from 'react'
import axios from 'axios'
import { useState } from 'react'

const App = () => {

  // async function getdata(){
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   console.log(response);
  // }

  // const getData = async()=>{
  //   const response = await fetch('https://jsonplaceholder.typicode.com/users')

  //   const data = await response.json()
  //   console.log(data);
    
    
  // }


  // const getData = async () =>{
  //  const {data} = await axios.get('https://jsonplaceholder.typicode.com/users')
  //   console.log(data);
  // }

  const [data, setData] = useState([])
const getData = async () =>{
  const response = await axios.get('https://picsum.photos/v2/list')
  
  setData(response.data)
  
}


  return (
    <div>
      <button onClick={getData}>click Me</button>
      <div>
        {data.map(function(elm,idx){
          return <div>
            <h3>
              hello, {elm.author} {idx}
            </h3>
          </div>
        })}

      </div>
    </div>
  )
}

export default App