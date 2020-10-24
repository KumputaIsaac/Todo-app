import React from 'react'
import Todo from './Todo'

export default function Todolist({todos}) {
    return (
        <div>
            <div className="todo-container">
                <ul className="todo-list">
                    {todos.map(todo=>(
                        <Todo text={todo.text}/>
                    ))}
                </ul>
                
            </div>
        </div>
    )
}
