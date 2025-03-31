import React from 'react'

export const Todo = ({todo, key, deleteTodo, editTodo, markDone }) =>{
    return (
        <div className='Todo'>
            <p onClick={()=>markDone(todo.id)} className={`${todo.completed ? 'completed':''}`}> {todo.task} </p>
            <div>
                <button className='edit-delete-button' onClick={()=>editTodo(todo.id)}>Edit</button>
                <button className='edit-delete-button' onClick={()=>deleteTodo(todo.id)}>Delete</button>
            </div>

        </div>
        
    )
}