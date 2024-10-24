import React from 'react'
import Hero from '../components/heroBanner/Hero'
import Highlights from '../components/highlights/Highlights'
import { Button } from 'antd';
import heroImage from '../assets/images/restauranfood.jpg'

export default function HomePage() {

    const heroInfo = {
        title:"Little Lemon",
        subtitle: "Chicago",
        description: "We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.",
        buttonText: "Reserve Table",
        imageItem:heroImage

    }
  return (
    <>
        <Hero info={heroInfo}/>
        
        <Highlights/>
    </>
  )
}
