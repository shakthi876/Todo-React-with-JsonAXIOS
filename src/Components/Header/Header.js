import React from 'react'
import H from './Headercss.module.css'
import {Link} from 'react-router-dom'
const Header = () => {
  return (
    <>
    <center>
        <div className={H.container}>
            <Link to='/'> <span className={H.headertodo}> ToDo </span> List</Link> 
             
        </div>
    </center>
    </>
  )
}

export default Header