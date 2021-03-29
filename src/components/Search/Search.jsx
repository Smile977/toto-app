import React, { useContext, useEffect } from 'react';
import classnames from 'classnames/bind';

import TodoContext from '../../context/context';

import styles from './Search.scss';

const cx = classnames.bind(styles);

export const Search = () => {
  const {text, setText, addTodo} = useContext(TodoContext)

  const changeInputHandler = (event) => {
    setText(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (text.trim()) {
      
      const data = {title: text};
      try {
        const response = await fetch('/todos/add', {
          method: 'POST',
          // mode: 'cors', 
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/json"
          }
        });
        const json = await response.json();
        console.log('Успех:', JSON.stringify(json));
      } catch (error) {
        console.error('Ошибка:', error);
      }  
      addTodo(text.trim());
      setText('');
    }
  }

  return (
    <div className={cx('search')}>
      <div className={cx('search-container')}>
        <form 
          onSubmit={handleSubmit} 
          className={cx('search-container__form')}
        >
          <input
            className={cx('search-container__form-input')}
            type="text"
            value={text} 
            onChange={changeInputHandler}
          />
        </form>
      </div>
    </div>
  )
}