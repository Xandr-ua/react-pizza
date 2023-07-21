import React from 'react';
import { Link } from 'react-router-dom';

import './NotFoundBlock.scss';

function NotFoundBlock() {
  return (
    <div className="not-found">
      <div className="container">
        <div className="not-found__wrap">
          <h1 className="not-found__title">Корзина пуста 😕</h1>
          <p className="not-found__subtitle">Скоріш за все, ви не замовляли ще піцу.</p>
          <p className="not-found__subtitle">
            Для того, щоб замовити піцу, перейди на головну сторінку.
          </p>
          <img className="not-found__img" src="img/icons/not-found.svg" alt="#" />
          <Link className="not-found__link" to="/">
            Повернутися назад
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFoundBlock;
