import React from 'react'

const App = () => {
const submitHandler = (e) => {
e.preventDefault()
    console.log('form submitted')

}

  return (
    <div>
      <form action="" onSubmit={submitHandler}>
        <input type="text" placeholder='enter your name'/>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default App