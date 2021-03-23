import React, { useContext } from 'react';
import classnames from 'classnames/bind';

import TodoContext from '../../context/context';

import styles from './Search.scss';

const cx = classnames.bind(styles);

export const Search = () => {
  const {text, setText, addTodo} = useContext(TodoContext)

  const changeInputHandler = (event) => {
    setText(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text.trim()) {
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