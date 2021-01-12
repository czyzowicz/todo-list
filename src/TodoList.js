import React from 'react';
import Todo from './Todo';

export default function TodoList( {todos, toggleTodo}) {
    return (
        todos.map(object => {
            return <Todo key={object.id} toggleTodo={toggleTodo} todo={object}/>
        })
    )
}