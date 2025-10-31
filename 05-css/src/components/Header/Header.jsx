 import React from 'react'
 import styles from "./Header.module.css";
 
 const Header = () => {
   return (
     <div className={styles.Header}>
        <h2>Header</h2>
        <button className='button'>Login</button>
     </div>
   )
 }
 
 export default Header