import React, {useState} from "react";

export const EditTodoForm = ({editTask, todo })=>{

    const [value, setValue] = useState(todo.task)

    const handleSubmit = e =>{
        e.preventDefault();
        editTask(value,todo.id);
        setValue('')
    } 

    return(
        <form onSubmit={handleSubmit}> 
            <input type='text' placeholder="Update Task"
            value={value} 
            className="todo-input"
            onChange={(e)=>setValue(e.target.value)}
            />
            <button type = 'submit'
            className="todo-btn"
            > Update </button>
        </form>
    )
}