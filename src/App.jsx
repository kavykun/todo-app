import React from 'react';

import Header from './layout/Header';

import './App.css';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <Header title="Todo App" />
      <TodoList />
    </div>
  );
}

export default App;
