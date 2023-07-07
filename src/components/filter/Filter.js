import React from 'react';
import './Filter.scss';

function Filter() {
  return (
    <div className="filter">
      <div className="container">
        <div className="filter__wrap">
          <ul className="filter__list">
            <li className="filter__item filter__item-active">Всі</li>
            <li className="filter__item">М'ясні</li>
            <li className="filter__item">Вегетаріанські</li>
            <li className="filter__item">Гриль</li>
            <li className="filter__item">Гострі</li>
            <li className="filter__item">Закриті</li>
          </ul>
          <div className="filter__sort">
            <p className="filter__sort-text">
              Сортувати по: <span className="filter__sort-by">популярності</span>
            </p>
            <ul className="filter__sort-list">
              <li className="filter__sort-item filter__sort-item-active">популярності</li>
              <li className="filter__sort-item">по ціні</li>
              <li className="filter__sort-item">по алфавіту</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
