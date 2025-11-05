import React from 'react'

const App = () => {
  // function inputChanging(el){
  //   console.log(el.target.value);
    
  // }
  function onScroll(el){
    console.log("speed itni hai",el);
    
  }

  
  return (
    <div>
      {/* <h1 onMouseEnter={mouseenter}>Hello Guys</h1> */}


      {/* <button  onClick={function(){
        console.log("btn click");
        b
      }}>change user</button>
      <button onMouseEnter={()=>{
    console.log("mouse enter");
    
  }}>Mouse enter</button> */}

    {/* <input onChange={inputChanging} type="text" placeholder='Enter some thing' /> */}

    {/* <div onMouseMove={(el)=>{
      console.log(el.movementX);
      
    }} className='box'></div> */}
<div onWheel={(el)=>{
  onScroll(el.deltaY)
}}>
      <div className="page1"></div>
      <div className="page2"></div>
      <div className="page3"></div>
</div>
    </div>
  )
}

export default App