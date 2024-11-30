import React from 'react';
import FoodItem from './FoodItem';

const Menu = () => {
  const foodItems = [
    { id: 1, name: 'Burger', price: 5.99 },
    { id: 2, name: 'Pizza', price: 8.99 },
    { id: 3, name: 'Pasta', price: 6.99 },
    { id: 4, name: 'Salad', price: 4.99 },
  ];

  return (
    <div className="menu">
      <h2>Menu</h2>
      <div className="food-items">
        {foodItems.map((item) => (
          <FoodItem key={item.id} name={item.name} price={item.price} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
