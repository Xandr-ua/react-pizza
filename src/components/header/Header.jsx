import React from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrap">
          <Link className="header__logo" to="/">
            <img className="header__logo-img" src="/img/icons/logo.svg" alt="logo" />
            <div className="header__logo-content">
              <h1 className="header__logo-title">REACT PIZZA</h1>
              <p className="header__logo-text">сама найсмачніша піца в всесвіті)</p>
            </div>
          </Link>
          <Link to="cart">
            <ul className="header__list">
              <li className="header__item">
                <p className="header__item-sum">520 грн</p>
              </li>
              <li className="header__item">
                <p className="header__item-num">3</p>
              </li>
            </ul>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
