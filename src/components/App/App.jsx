import React, { useState } from 'react';

import TodoContext from '../../context/context';

import { Header } from '../Header';
import { TodoList } from '../TodoList';

export const App = () => {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState([
    {id: 0, title: 'First todo First todo First todo First todo First todo First todo First todo First todo First todo First todo First todo First todo First todo First todo', complited: false},
    {id: 1, title: 'Second todo', complited: true},
    {id: 2, title: 'One more todo', complited: true},
    {id: 3, title: 'The next todo', complited: false},
    {id: 4, title: 'Last todo', complited: false},
  ]);

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
