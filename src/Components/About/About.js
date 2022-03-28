import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../Header/Header'

const About = () => {
  const mystyle = {
    color: "black",
    fontWeight: "bold",
    fontSize:"17px"
  };
  const mystyle2= {
    color: "black",
    padding:'10px',
    margin:"20px",
    fontSize:"17px"
  };
  return (
    <>
    <Header />
    <center><Link to='/'>Go Back</Link> </center>
    <center style={mystyle2}>
    To Do is a task management app to help you stay organized and manage your day-to-day.
    It is developed in React Js and used Json as fake backend.
     </center>
    <center ><span style={{color: "red"}}>Developed By:</span> <span style={mystyle} > Shakthi Naarayann R  </span></center>
    </>
  )
}

export default About