import React, { useEffect } from "react";
import T from "./Todoform.module.css";
import { useState } from "react";
import axios from "axios";
const Todoform = ({
  tasks,
  setTasks,
  text,
  setText,
  day,
  setDay,
  flag,
  setFlag,
  editId,
  setEditId,
  getTasks
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (flag === true) {
      if (!text) {
        alert("Add some value in Title to update");
        return;
      } else if (!day) {
        alert("Add some value in Deadline to update");
        return;
      }
      const data = {
        id: editId,
        text: text,
        day: day,
      };

      axios.put(`http://localhost:5000/tasks/${editId}`, data)
      .then((resp) => 
      {
        const newTodos = tasks.map((el)=>{
          if(el.id !== data.id){ return el;}
          return data
        })
        setTasks(newTodos)
      });
      
      setText("");
      setDay("");
      setFlag(false);
      return;
    }

    if (!text) {
      alert("Add some value in Title");
      return;
    } else if (!day) {
      alert("Add some value in Deadline");
      return;
    }
    const data = {
      id: tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1,
      text: text,
      day: day,
    };
    axios
      .post("http://localhost:5000/tasks", data)
      .then((resp) => setTasks([...tasks, resp.data]));
    setText("");
    setDay("");
  };
  const cancelTask = () => {
    setText("");
    setDay("");
    setFlag(false);
  };

 


  return (
    <>
      <br />
      
        <form onSubmit={handleSubmit}>
          <div className={T.center}>
            <div>
              <label htmlFor="title">Title</label> <br />
              <input
                type="text"
                id="title"
                placeholder="Enter the task"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </div>{" "}
            &emsp; &emsp;
            <div>
              <label htmlFor="Deadline">Deadline</label> <br />
              <input
                type="text"
                id="Deadline"
                placeholder="Enter the deadline date"
                value={day}
                onChange={(e) => setDay(e.target.value)}
              />
            </div>
          </div>{" "}
          <br />
          <center>
            <button type="submit">{flag ? "Update Task" : "Add Task"} </button>
           
            {flag && (
              <button type="button" onClick={cancelTask}>
                {" "}
                <span>Cancel</span>{" "}
              </button>
            )}
            
           
          </center>
        
        </form>
        <center> 
        
        </center>
        
      </>
    
  );
};

export default Todoform;
