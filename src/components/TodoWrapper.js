import React, {useState} from 'react';
import {TodoForm} from './TodoForm';
import {Todo} from './Todo';
import {EditTodoForm} from './EditTodoForm';
import {v4 as uuidv4} from 'uuid';


export const TodoWrapper = () => {

    const [todos, setTodos] = useState([]);

    const addTodo = todo =>{
        setTodos([...todos,{
            id: uuidv4(),
            task: todo,
            isEditing: false,
            completed: false
        }])
    }

    const deleteTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const editTodo = id => {
        setTodos(todos.map(todo => todo.id === id ? {
            ...todo, isEditing: !todo.isEditing
        }: todo))
    }

    const markDone = id =>{
        setTodos(todos.map(todo => todo.id === id ? {
            ...todo, completed: !todo.completed
        } : todo))
    }

    const editTask = (task, id) =>{
        setTodos(todos.map(todo => todo.id === id ? {
            ...todo, task, isEditing: !todo.isEditing
        } : todo))
    }

   

    return(
        <div className='TodoWrapper'>
            <h1> Get things done! </h1>
            <TodoForm addTodo={addTodo}/>
            {
                todos.map((todo,index) => todo.isEditing? (
                    <EditTodoForm editTask={editTask} todo={todo}/>
            ): (
                <Todo todo={todo} key={index} deleteTodo={deleteTodo} editTodo={editTodo} markDone={markDone} />
            )) 
            }
           
        </div>
    )
}