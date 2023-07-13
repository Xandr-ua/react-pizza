import React from 'react';
import './Main.scss';
import Card from '../card/Card';
import items from '../../assets/pizzas.json';

console.log(items);

function Main() {
  return (
    <div className="main">
      <div className="container">
        <h3 className="main__title">Усі піци</h3>
        <ul className="main__list">
          {items.map((obj) => (
            <Card
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
  );
}

export default Main;
