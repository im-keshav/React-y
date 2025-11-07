import React, { useState } from 'react'

const App = () => {
// "useState" "is a Hook that allows you to have state variables in functional components."
// const [count,setCount]=useState(0)
// function ChangeA(){
//   setCount(count+1)
// }

  // let a = 10

  // function ChangeA(){
  //   console.log(a);
    
  //   a = 20
  //   console.log(a);
  // }

  // "example of useState to update the value of a variable Making counter app"
  
  const [count, setcount] = useState(0)
function Inc(){
  setcount(count+1)
}
function Dec(){
  setcount(count-1)
}
function Incby5(){
  setcount(count+5)
}
function Decby5(){
  setcount(count-5)
}
  return (
    // <div>
    //   <h1>Value of a : {count}</h1>
    //   <button onClick={ChangeA}>Change value</button>
    // </div>
    <div>
      <h1>{count}</h1>
      <button onClick={Inc}>Inc</button>
      <button onClick={Dec} disabled={count<=0}>Dec</button>
      <button onClick={Incby5} >Jump by 5</button>
      <button onClick={Decby5} disabled={count<=0}>down by 5</button>

    </div>
  )
}

export default App        