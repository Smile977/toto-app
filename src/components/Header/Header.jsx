import React from 'react';
import classnames from 'classnames/bind';

import { Search } from '../Search';

import styles from './Header.scss';

const cx = classnames.bind(styles);

export const Header = () => {

  return (
    <header className={cx('header')}>
      <div className={cx('header-container')}>
        <h3 className={cx('header-container__title')}>Todo List</h3>
        <Search />      
      </div>      
    </header>
  )
}