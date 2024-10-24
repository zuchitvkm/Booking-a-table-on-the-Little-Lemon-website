import React from 'react'
import BookingForm from '../components/BookingForm'
import Hero from '../components/heroBanner/Hero'


export default function BookingPage() {

  const heroInfo = {
    title:"Booking Table",
    subtitle: "100% table reserve",
    description: "",
    buttonText: "",
    size:"small",

}

  return (
    <>
      <Hero info={heroInfo}/>
      <BookingForm/>
    </>
  )
}
