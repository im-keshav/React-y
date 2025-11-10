import React, { useState } from 'react'
import 'remixicon/fonts/remixicon.css'

const App = () => {
  const [title, setTitle] = useState("")
  const[details, setDetails]=useState("")
  const [task, setTask] = useState([])

    const submitHandler = (e) => {
        e.preventDefault();
        const newTask = [...task]
        newTask.push({ title, details })
        setTask(newTask)

        setTitle("");
        setDetails("");
        
    }
    const deleteHandler = (idx) => {
      const copyTask = [...task]
      copyTask.splice(idx, 1)
      setTask(copyTask)

      
    }
  
  return (
    <div className='h-screen lg:flex bg-black text-white '>


        <form action="" onSubmit={(e)=>{
            submitHandler(e)
        }} className='flex flex-col items-start gap-4 p-10 lg:w-1/2'>
            <h1 className='text-3xl mb-2 font-bold' >Add Notes</h1>

          <input 
        type="text" 
        placeholder='enter Notes heading' 
        className='px-5 w-full py-2 border-2 font-medium rounded outline-none '
        value={title}
        onChange={(e)=>{
          setTitle(e.target.value)
          
        }}/>


       <textarea name="" id=""
        className='px-5 w-full py-2 h-32 font-medium border-2 rounded outline-none ' 
        placeholder='Enter Details'
        value={details}
        onChange={(e)=>{
          setDetails(e.target.value)
        }}></textarea>

        
        <button className='bg-white active:scale-95 w-full font-medium text-black px-5 py-2 rounded outline-none'
        >
          Add Notes
        </button>
        
        
      </form>
      
    
      <div className='lg:w-1/2 lg:border-l-2 p-10'>
       <h1 className='text-3xl font-bold'> Your Notes</h1>
       <div className="flex flex-wrap items-start justify-start gap-5 mt-6 h-[90%] overflow-auto ">
    {task.map((elm,idx)=>{
      return(
        <div key={idx} className='relative flex justify-between flex-col items-start bg-[url("https://imgs.search.brave.com/Sy8UrNAAls611Pvu8Qi3_FVBoZyXVIsAj5GPLUEsNik/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMzcv/MTUyLzY3Ny9zbWFs/bC9zdGlja3ktbm90/ZS1wYXBlci1iYWNr/Z3JvdW5kLWZyZWUt/cG5nLnBuZw")] bg-cover
         rounded-xl w-40 h-52 text-black pt-9 pb-4 px-4'>
          <div>
          <h2 className='leading-tight text-lg font-bold mb-4'>{elm.title}</h2>
          <p className='font-semibold text-gray-400 leading-tight text-xs '>{elm.details}</p>
          </div>
          <button onClick={(idx)=>{
            deleteHandler(idx)
          }} className='w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs text-white rounded-xl font-bold align-center'>Delete </button>
        </div>
      )
    })}
        </div>
      </div>
    </div>
  )
}

export default App