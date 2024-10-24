import React from 'react';
import './highlightCard.css';

const HighlightCard = ({ image, name, price, description }) => {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <div className="card-text">
        <div className="food-info">
          <span className="food-name">{name}</span>
          <span className="food-price">{price}</span>
        </div>
        <p className="description">{description}</p>
        <button className="order-button">Order Delivery</button>
      </div>
    </div>
  );
};

export default HighlightCard;
