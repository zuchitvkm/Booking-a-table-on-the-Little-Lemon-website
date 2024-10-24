import React from 'react';
import './hero.css'; // Assuming you'll style the component
import heroImage from '../../assets/images/restauranfood.jpg'
import Button from '../button/Button'

const Hero = (props) => {
  return (
    <section className={"hero " + "hero-" + props.info.size}>
      <div className="hero-content">
        <h1 className="hero-title">{props.info.title}</h1>
        <h2 className="hero-subtitle">{props.info.subtitle}</h2>
        <p className="hero-description">
        {props.info.description}
        </p>

        {props.info.buttonText ? <Button text={props.info.buttonText} link="/reservation" /> : '' }
      </div>
      {props.info.imageItem && 
      <div className="hero-image">
        <img src={props.info.imageItem} alt="Hero" />
      </div>}
    </section>
  );
};

export default Hero;
