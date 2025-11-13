import React from 'react'

const App = () => {

  // localStorage.clear()
// sessionStorage.clear()
// localStorage.setItem('user','keshav')
// const user = localStorage.getItem('user')
//  console.log(user);
//  localStorage.removeItem('user')

const user ={
  username:'keshav',
  age:12,
  city:'sirsa'
}
// console.log(user);

localStorage.setItem('user',JSON.stringify(user))

const users =JSON.parse((localStorage.getItem('user')))

console.log(users);


  
  return (
    <div>App</div>
  )
}

export default App