import React from 'react'

const Navbar = (props) => {
    function Changetheme(){
        props.setTheme('Dark')
    }
  return (
    <div>
        
        <button onClick={Changetheme}>Change Theme</button>
    </div>
  )
}

export default Navbar