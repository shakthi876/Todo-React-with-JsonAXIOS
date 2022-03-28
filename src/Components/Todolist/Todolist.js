import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Todoform from "../Todoform/Todoform";
import t from "./Todolistcss.module.css";
const Todolist = () => {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState('')
  const [day, setDay] = useState('')  
  const [flag,setFlag] =useState(false)
  const [editId,setEditId] = useState(0)



  // Fetch Tasks

const getTasks = () => {
    axios
      .get("http://localhost:5000/tasks")
      .then((resp) => setTasks(resp.data));
  };

  const handleDelete = (e) => {
      axios.delete(`http://localhost:5000/tasks/${e.id}`,e)
      .then((resp)=>{
          const newTodos = tasks.filter( (event)=> event.id !== e.id)
          setTasks(newTodos)
      })
      .catch(err => console.log('error is ',err))
      setText('')
      setDay('')
  };

  const handleEdit= (e) =>{

        console.log('takss',tasks)
        setEditId(e.id)
        setText(e.text)
        setDay(e.day)
        setFlag(true)
  } 


  useEffect(() => {
    getTasks();
  }, []);
console.log('taaks',tasks)
  return (
    <>
      <Todoform tasks={tasks} setTasks={setTasks} text={text} setText={setText} day={day} setDay={setDay} flag={flag} setFlag={setFlag} editId={editId} setEditId={setEditId} getTasks={getTasks} />
      <div className={t.center}>
         {tasks.length ===0 && <h4>No tasks to display please enter tasks!!!</h4>}
        <ol>
          {tasks &&
            tasks.map((e) => {
              return (
                <li key={e.id}>
                  {e.text} [ {e.day} ] <button onClick={()=> handleEdit(e)}>Edit</button>
                  <button onClick={() => handleDelete(e)}>Delete</button>
                </li>
              );
            })}
        </ol>
      </div>
    </>
  );
};

export default Todolist;
