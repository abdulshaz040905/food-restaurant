import React from 'react';

const FoodItem = ({ name, price }) => {
  return (
    <div className="food-item">
      <h3>{name}</h3>
      <p>Price: ${price.toFixed(2)}</p>
    </div>
  );
};

export default FoodItem;
