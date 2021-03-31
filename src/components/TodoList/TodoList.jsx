import React, { useContext } from 'react';
import classnames from 'classnames/bind';

import TodoContext from '../../context/context';

import { TodoItem } from './TodoItem';

import styles from './TodoList.scss';

const cx = classnames.bind(styles);

export const TodoList = () => {
  const {todos, setTodos} = useContext(TodoContext);

  const removeTodoHandler = async (id) => {
    try {
      const response = await fetch(`/todos/${id}`, {
        method: 'DELETE'       
      })
      const json = await response.json();
      setTodos(json)
    } catch (error) {
      console.error('Ошибка:', error);
    }  
  }

  const checkboxHandler = async (id) => {
    try {
      const response = await fetch(`/todos/${id}`, {
        method: 'PUT'
      })
      const json = await response.json();
      setTodos(json)
    } catch (error) {
      console.error('Ошибка:', error);
    }
  }

  return (
    <div className={cx('todos')}>
      { todos.length
        ? (
        <>
        <h3>Todos:</h3>
        {todos.map((todo, index) => (
            <TodoItem 
              key={index}
              todo={todo}
              removeTodo={removeTodoHandler}
              checkboxHandler={checkboxHandler}
            />
          ))}
          </>
        )
        : (
            <h3 className={cx('todos-title')}>
              There are haven't todos yet
            </h3>
          )     
      }
    </div>
  )
}
