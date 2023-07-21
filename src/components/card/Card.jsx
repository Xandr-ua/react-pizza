import React from 'react';

import './Card.scss';

function Card({ title, price, image, sizes, dough }) {
  const [sizeItem, setSizeActive] = React.useState(0);

  const sizeAddActive = (index) => {
    setSizeActive(index);
  };

  const [doughItem, setDoughActive] = React.useState(0);
  const typeName = ['тонке', 'традиційне'];

  return (
    <li className="main__item">
      <img className="main__img" src={image} alt="pizza" />
      <div className="main__contant">
        <h4 className="main__contant-name">{title}</h4>
        <div className="main__contant-filter">
          <ul className="main__contant-filter-dough">
            {dough.map((dough) => (
              <li
                key={dough}
                onClick={() => setDoughActive(dough)}
                className={`main__contant-filter-dough-item ${
                  doughItem === dough ? 'main__contant-filter-dough-item-active' : ''
                }`}>
                {typeName[dough]}
              </li>
            ))}
          </ul>
          <ul className="main__contant-filter-size">
            {sizes.map((size, index) => (
              <li
                key={size}
                onClick={() => sizeAddActive(index)}
                className={`main__contant-filter-size-item ${
                  sizeItem === index ? 'main__contant-filter-size-item-active' : ''
                }`}>
                {size} см.
              </li>
            ))}
          </ul>
        </div>
        <div className="main__contant-inner">
          <p className="main__contant-price">від {price} ₴</p>
          <button className="main__contant-btn">
            <span className="main__contant-plus"></span>
            Додати
            <span className="main__contant-amount">0</span>
          </button>
        </div>
      </div>
    </li>
  );
}

export default Card;
