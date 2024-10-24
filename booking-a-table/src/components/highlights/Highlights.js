import React from 'react';
import './highlights.css';
import highlightImageone  from "../../assets/images/greek salad.jpg"
import HighlightCard from "./HighlightCard";
import Button from '../button/Button'

const Highlights = () => {
  return (
    <section className="section-container">
      <div className="title-button-row">
        <h1>Title</h1>
        <Button text="Order Online" link="/online-order" />
      </div>

      <div className="cards-container">
      <HighlightCard
          image={highlightImageone}
          name="Pizza"
          price="$12.99"
          description="A delicious cheese pizza with fresh ingredients."
        />
        <HighlightCard
          image={highlightImageone}
          name="Burger"
          price="$8.99"
          description="Juicy grilled burger with lettuce, tomato, and cheese."
        />
        <HighlightCard
          image={highlightImageone}
          name="Pasta"
          price="$10.50"
          description="Creamy Alfredo pasta with grilled chicken and herbs."
        />
      </div>
    </section>
  );
};

export default Highlights;
