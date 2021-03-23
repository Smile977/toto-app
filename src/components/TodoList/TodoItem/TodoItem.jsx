import React from 'react';
import classnames from 'classnames/bind';

import styles from './TodoItem.scss';

const cx = classnames.bind(styles);

export const TodoItem = ({ todo, removeTodo, checkboxHandler }) => {
  
  return (
    <div className={cx('todo')}>
      <div className={cx('todo-container')}>
        <input 
              type="checkbox"
              className={cx('todo-container__checkbox')} 
              checked={todo.complited}
              onChange={checkboxHandler.bind(null, todo.id)}
            />
        <div className={cx('todo-container__info')}>
          <p 
            className={cx('todo-container__info-text', 
              `${todo.complited ? 'complited' : ''}`)}            
          >{ todo.title }</p>
        </div>
        <button 
          className={cx('todo-container__remove')}
          onClick={removeTodo.bind(null, todo.id)}
        >
          &times;
        </button>
      </div>
    </div>
  )
}
