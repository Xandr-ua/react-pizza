import React from 'react';

import './Filter.scss';

function Filter({ categoryId, onClickCategory, sortType, onClickSort }) {
  const categorias = ['Всі', "М'ясні", 'Вегетаріанські', 'Гриль', 'Гострі', 'Закриті'];

  const [openSort, setOpenSort] = React.useState(false);
  const sortList = [
    { name: 'популярності', sortName: 'rating' },
    { name: 'по ціні', sortName: 'price' },
    { name: 'по алфавіту', sortName: 'title' },
  ];

  const addActiveClassSelect = (index) => {
    onClickSort(index);
    setOpenSort(false);
  };

  return (
    <div className="filter">
      <div className="container">
        <div className="filter__wrap">
          <ul className="filter__list">
            {categorias.map((value, index) => (
              <li
                key={index}
                onClick={() => onClickCategory(index)}
                className={`filter__item ${categoryId === index ? 'filter__item-active' : ''}`}>
                {value}
              </li>
            ))}
          </ul>
          <div className="filter__sort">
            <p className="filter__sort-text">
              Сортувати по:{' '}
              <span className="filter__sort-by" onClick={() => setOpenSort(!openSort)}>
                {sortType.name}
              </span>
            </p>
            {openSort && (
              <ul className="filter__sort-list">
                {sortList.map((obj, index) => (
                  <li
                    key={index}
                    onClick={() => addActiveClassSelect(obj)}
                    className={`filter__sort-item  ${
                      sortType.sortName === obj.sortName ? 'filter__sort-item-active' : ''
                    }`}>
                    {obj.name}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filter;
