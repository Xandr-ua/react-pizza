import React from 'react';

import './Filter.scss';

function Filter() {
  const [itemIndex, setItemActive] = React.useState(0);

  const categorias = ['Всі', "М'ясні", 'Вегетаріанські', 'Гриль', 'Гострі', 'Закриті'];

  const addActiveClass = (index) => {
    setItemActive(index);
  };

  const [openSort, setOpenSort] = React.useState(false);
  const [select, setSelect] = React.useState(0);
  const sortList = ['популярності', 'по ціні', 'по алфавіту'];
  const sortName = sortList[select];

  const addActiveClassSelect = (index) => {
    setSelect(index);
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
                onClick={() => addActiveClass(index)}
                className={`filter__item ${itemIndex === index ? 'filter__item-active' : ''}`}>
                {value}
              </li>
            ))}
          </ul>
          <div className="filter__sort">
            <p className="filter__sort-text">
              Сортувати по:{' '}
              <span className="filter__sort-by" onClick={() => setOpenSort(!openSort)}>
                {sortName}
              </span>
            </p>
            {openSort && (
              <ul className="filter__sort-list">
                {sortList.map((value, index) => (
                  <li
                    key={index}
                    onClick={() => addActiveClassSelect(index)}
                    className={`filter__sort-item  ${
                      select === index ? 'filter__sort-item-active' : ''
                    }`}>
                    {value}
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
