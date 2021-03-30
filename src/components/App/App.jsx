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

  return (
    <>
      <TodoContext.Provider value={{text, setText, todos, setTodos}}>
        <Header />
        <TodoList />
      </TodoContext.Provider> 
    </>
  );
}
