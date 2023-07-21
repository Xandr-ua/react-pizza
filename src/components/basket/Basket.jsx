import React from 'react';

import './Basket.scss';

function Bascet() {
  return (
    <div className="bascet">
      <div className="container">
        <div className="bascet__wrap">
          <div className="bascet__top">
            <h1 className="bascet__title">Корзина</h1>
            <button className="bascet__cleanse">Очистити корзину</button>
          </div>
          <ul className="bascet__list">
            <li className="bascet__item">
              <div className="bascet__pizza-inner">
                <img className="bascet__img" src="img/pizza/pizza-1.jpg" alt="#" />
                <div className="bascet__text-inner">
                  <h2 className="bascet__name">Ростбіф</h2>
                  <p className="bascet__about-pizza">тонке тісто, 26 см.</p>
                </div>
              </div>

              <div className="bascet__add-pizza">
                <button className="bascet__add-btn">-</button>
                <span className="bascet__add-numb">2</span>
                <button className="bascet__add-btn">+</button>
              </div>
              <p className="bascet__price">770 ₴</p>
              <button className="bascet__remove">
                <span className="bascet__line"></span>
              </button>
            </li>
          </ul>
          <div className="bascet__bottom">
            <p className="bascet__text">
              Всього піц:
              <span className="bascet__amount">3 шт</span>
            </p>
            <p className="bascet__text">
              Сумма замовлення:
              <span className="bascet__sum">900 ₴</span>
            </p>
          </div>
          <div className="bascet__btn-inner">
            <button className="bascet__btn-prev">Повернутись назад</button>
            <button className="bascet__btn-payment">Оплатити зараз</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bascet;
