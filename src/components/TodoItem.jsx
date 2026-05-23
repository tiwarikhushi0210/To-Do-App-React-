import { useState } from "react";

function TodoItem({name, date, deleteTodoItem, index}){

  
 return ( 
  <div className="container ">
    <div className="row kt-row">
         <div className="col-4">{name}</div>
         <div className="col-4">{date}</div>
         <div className="col-2"><button type="button" className="btn btn-danger kt-button" onClick={()=> deleteTodoItem(index)}>Delete</button></div>
    </div>
  </div>
 )
}
export default TodoItem;