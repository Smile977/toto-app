import React, { useContext, useState } from 'react';
import classnames from 'classnames/bind';

import TodoContext from '../../context/context';

import { TodoItem } from './TodoItem';

import styles from './TodoList.scss';

const cx = classnames.bind(styles);

export const TodoList = () => {
  const {todos, setTodos} = useContext(TodoContext)

  const removeTodoHandler = (id) => {
    const newTodos = [...todos].filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const checkboxHandler = (id) => {
    const copyTodos = [...todos];
    const todoComplited = copyTodos.find(todo => todo.id === id);
    todoComplited.complited = !todoComplited.complited;
    setTodos([...copyTodos])
  }

  return (
    <div className={cx('todos')}>
      { todos.length
        ? todos.map((todo, index) => (
            <TodoItem 
              key={index}
              todo={todo}
              removeTodo={removeTodoHandler}
              checkboxHandler={checkboxHandler}
            />
          ))
        : (
            <h3 className={cx('todos-title')}>
              There are haven't todos yet
            </h3>
          )     
      }
    </div>
  )
}
