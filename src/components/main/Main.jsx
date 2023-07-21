import React from 'react';
import Filter from '../filter/Filter';

import './Main.scss';
import CardSceleton from '../cardSceleton/CardSceleton';
import Card from '../card/Card';

function Main() {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch('https://64ad14e7b470006a5ec550a2.mockapi.io/items')
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <Filter />
      <div className="main">
        <div className="container">
          <h3 className="main__title">Усі піци</h3>
          <ul className="main__list">
            {isLoading
              ? [...new Array(4)].map((_, index) => <CardSceleton key={index} />)
              : items.map((obj) => (
                  <Card
                    key={obj.id}
                    title={obj.title}
                    price={obj.price}
                    image={obj.imageUrl}
                    sizes={obj.sizes}
                    dough={obj.types}
                  />
                ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Main;
