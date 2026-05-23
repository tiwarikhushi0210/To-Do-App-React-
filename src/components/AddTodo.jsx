
import { useState } from "react";

function AddTodo({addTodoItem}){

  const[todoName, settodoName]=useState("");
  const[todoDate, settodoDate]=useState("");

  const handleAddTodoItem=()=>{
    if(todoName===""||todoDate===""){
      alert('Please fill all fields');
      return;
    }

  const newTodoItem={
    name:todoName,
    date:todoDate,
  }
  addTodoItem(newTodoItem);
  settodoName("");
  settodoDate("");
  };  

  return (
    <div className="container ">
      <div className="row kt-row">

         <div className="col-4">
           <input type='text'
                  placeholder='Enter todo here'
                  value={todoName}
                  onChange={(event)=>settodoName(event.target.value)} >
            </input>
          </div>

         <div className="col-4">
           <input type='date'
                  value={todoDate}
                  onChange={(event)=>settodoDate(event.target.value)}>
            </input>
          </div>

         <div className="col-2"><button type="button" className="btn btn-success kt-button" onClick={handleAddTodoItem}>Add</button></div>
      </div>
    </div>  
  )
}
export default AddTodo;