import React from 'react';
const Todo = ({text, todo, todos, setTodos}) => {
    //Events
    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    };
    const completeHandler = () => {
        setTodos(todos.map(item => {
            if(item.id === todo.id){
               return{
                   ...item, 
                   completed: !item.completed,
               };
            }
            return item;
        })
        );
        console.log(todos);

    };
    return(
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed" : undefined}`}>{text}</li>
            <button onClick={completeHandler} className="complete-btn">
                Complete<i className="fas fa-check"></i>
            </button>
            <button onClick={deleteHandler} className="trash-btn">
               D<i className="fas fa-trash"></i>
            </button>
        </div>
    );
}
export default Todo;