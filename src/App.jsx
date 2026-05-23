
import AddTodo from './components/AddTodo';
import AppName from './components/AppName';
import TodoItems from './components/TodoItems';


import "./App.css";
import { useState } from 'react';

function App() {

  const[todoItems, settodoItems]=useState([]);

  const addTodoItem=(newTodoItem)=>{
    settodoItems([...todoItems,newTodoItem]);
  }
  const deleteTodoItem=(indexToDelete)=>{
    // const updatedTodoList=[...todoItems];
    // updatedTodoList.splice(indexToDelete,1);
    // settodoItems(updatedTodoList);
    const updatedTodoList=todoItems.filter((item,index)=>    /* item is the current element of array and index is the current index of array*/ index!==indexToDelete);
    settodoItems(updatedTodoList);

  }

  return (
    <center className="todo-container">
      <AppName></AppName>
      <div className="items-container">
      <AddTodo addTodoItem={addTodoItem}></AddTodo>
      <TodoItems todoItems={todoItems}
                 deleteTodoItem={deleteTodoItem}></TodoItems>
      </div>
    </center>
  )

}
export default App;

