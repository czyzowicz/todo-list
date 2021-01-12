import React from 'react';
import Todo from './Todo';

export default function TodoList( {todos}) {
    return (
        todos.map(object => {
            return <Todo key={object} todo={object}/>
        })
    )
}