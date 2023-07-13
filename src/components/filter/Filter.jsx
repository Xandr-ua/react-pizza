import React from 'react';
import './Filter.scss';

function Filter() {
  const [itemIndex, setItemActive] = React.useState(0);

  const categorias = ['Всі', "М'ясні", 'Вегетаріанські', 'Гриль', 'Гострі', 'Закриті'];

  const addActiveClass = (index) => {
    setItemActive(index);
  };

  return (
    <div className="filter">
      <div className="container">
        <div className="filter__wrap">
          <ul className="filter__list">
            {categorias.map((value, index) => (
              <li
                onClick={() => addActiveClass(index)}
                className={`filter__item ${itemIndex === index ? 'filter__item-active' : ''}`}>
                {value}
              </li>
            ))}
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
