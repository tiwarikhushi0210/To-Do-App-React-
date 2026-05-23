import styles from "./TodoItems.module.css";
import TodoItem  from "./TodoItem";
function TodoItems({todoItems, deleteTodoItem}){
  if(todoItems.length===0){
    return <h3 className={styles.message}>!! Enjoy Your Day !!</h3>
  }
  return <>
    {todoItems.map((item,index) =>
       <TodoItem name={item.name}
                 date={item.date} 
                 key={index}
                 deleteTodoItem={deleteTodoItem}
                 index={index}></TodoItem>)}
    
  </>
}
export default TodoItems;