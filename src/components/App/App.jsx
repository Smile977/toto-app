import React, { useEffect, useState } from 'react';

import TodoContext from '../../context/context';

import { Header } from '../Header';
import { TodoList } from '../TodoList';

export const App = () => {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('/todos')
    .then(res => res.json())
    .then(todos => setTodos(todos))
  }, [])

  const addTodo = (value) => {
    const newId = todos.length ? todos[todos.length - 1].id : 0;    
    setTodos([...todos, {id: newId + 1, title: value, complited: false}]);    
  }

  return (
    <>
      <TodoContext.Provider value={{text, setText, addTodo, todos, setTodos}}>
        <Header />
        <TodoList />
      </TodoContext.Provider> 
    </>
  );
}
