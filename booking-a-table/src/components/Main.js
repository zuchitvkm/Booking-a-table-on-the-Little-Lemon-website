import React, { useReducer } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import BookingPage from './BookingPage';
import BookingForm from './BookingForm';

function Main() {
  return (
    <main>
      <h1>Welcome to Little Lemon</h1>
      <p>Enjoy our delicious food!</p>
      <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/booking" element={<BookingPage />} />
      {/* Add routes for other components */}
    </Routes>
    </main>
  );
}




const initializeTimes = () => {
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
};

const updateTimes = (state, action) => {
  // For now, this function just returns the same times, regardless of the date.
  switch (action.type) {
    case 'UPDATE_TIMES':
      // You can add logic here to update times based on the selected date
      return state;
    default:
      return state;
  }
};

const Main2 = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  return (
    <div>
      <h1>Booking Page</h1>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </div>
  );
};





export default Main;
