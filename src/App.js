import React from 'react';
import TodoForm from './Components/TodoForm.js';
import TodoList from './Components/TodoList.js';
import './App.css'

const App = () => {
  return (
    <>
    <div className="taskovar">
    <h2>Taskovar🗹</h2>
    </div>
    <div className = "todo-app">
    <TodoList/>
    </div>
    </>
  );
}

export default App;

