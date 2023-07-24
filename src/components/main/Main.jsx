import React from 'react';
import Filter from '../filter/Filter';

import './Main.scss';
import CardSceleton from '../cardSceleton/CardSceleton';
import Card from '../card/Card';

function Main({ searchValue }) {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [categoryId, setCategoryId] = React.useState(0);
  const [sortType, setSortType] = React.useState({
    name: 'популярності',
    sortName: 'rating',
  });

  React.useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://64ad14e7b470006a5ec550a2.mockapi.io/items?page=1&limet=4&${
        categoryId > 0 ? `category=${categoryId}` : ''
      }&sortBy=${sortType.sortName}&order=desc`,
    )
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
  }, [categoryId, sortType, searchValue]);

  const pizzas = items
    .filter((obj) => {
      if (obj.title.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
      }
      return false;
    })
    .map((obj) => (
      <Card
        key={obj.id}
        title={obj.title}
        price={obj.price}
        image={obj.imageUrl}
        sizes={obj.sizes}
        dough={obj.types}
      />
    ));

  const sceletons = [...new Array(4)].map((_, index) => <CardSceleton key={index} />);

  return (
    <>
      <Filter
        categoryId={categoryId}
        onClickCategory={(index) => setCategoryId(index)}
        sortType={sortType}
        onClickSort={(index) => setSortType(index)}
      />
      <div className="main">
        <div className="container">
          <h3 className="main__title">Усі піци</h3>
          <ul className="main__list">{isLoading ? sceletons : pizzas}</ul>
        </div>
      </div>
    </>
  );
}

export default Main;
