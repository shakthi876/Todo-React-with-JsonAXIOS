import React from 'react'
import F from './Footercss.module.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    <div className={F.container}>
   
    <center>&copy;<span>Shakthi.com <span>  <Link to='/about'>About</Link>  </span> </span></center> 
    
    </div>
    </>
  )
}

export default Footer