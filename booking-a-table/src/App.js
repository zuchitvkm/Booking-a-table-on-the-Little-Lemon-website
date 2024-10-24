
import './App.css';
import { Routes, Route } from 'react-router-dom';
import React from 'react';
import Header from './components/header/Header';

import Footer from './components/footer/Footer';
import HomePage from "./views/HomePage";
import AboutPage from "./views/AboutPage";
import MenuPage from "./views/MenuPage";
import BookingPage from "./views/BookingPage";
import BookingConfirmationPage from "./views/BookingConfirmationPage";
import OrderOnlinePage from "./views/OnlineOrderPage";
import LoginPage from "./views/LoginPage";

function App() {
  return (
   <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage /> } />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/reservation" element={<BookingPage />} />
        <Route path="/reservation-confirmation" element={<BookingConfirmationPage />} />
        <Route path="/order-online" element={<OrderOnlinePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
