import React from 'react';
import TodoList from './TodoList';

function App() {
  return (
    <>
      <TodoList />
      <input type='text' />
      <button>Add Todo</button>
      <button>Clear Completed Todos</button>
      <div>O left </div>
    </>
  )
}

export default App;