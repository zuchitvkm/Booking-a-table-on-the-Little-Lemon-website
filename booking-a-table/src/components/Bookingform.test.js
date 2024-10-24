import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import BookingForm from './BookingForm';

describe('BookingForm Component', () => {
  it('renders the form correctly', () => {
    render(<BookingForm />);
    expect(screen.getByLabelText(/First Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Last Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Phone Number/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Reservation Date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Reservation Time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Amount of People/i)).toBeInTheDocument();
    expect(screen.getByText(/I accept the terms and conditions/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
  });

  it('shows validation errors when submitting empty form', async () => {
    render(<BookingForm />);

    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    await waitFor(() => {
      expect(screen.getByText(/First name is required/i)).toBeInTheDocument();
      expect(screen.getByText(/Last name is required/i)).toBeInTheDocument();
      expect(screen.getByText(/Email is required/i)).toBeInTheDocument();
      expect(screen.getByText(/Phone number is required/i)).toBeInTheDocument();
      expect(screen.getByText(/Date is required/i)).toBeInTheDocument();
      expect(screen.getByText(/Time is required/i)).toBeInTheDocument();
      expect(screen.getByText(/At least 1 person/i)).toBeInTheDocument();
      expect(screen.getByText(/Accepting terms is required/i)).toBeInTheDocument();
    });
  });

  it('submits form when inputs are valid', async () => {
    render(<BookingForm />);

    fireEvent.input(screen.getByLabelText(/First Name/i), { target: { value: 'John' } });
    fireEvent.input(screen.getByLabelText(/Last Name/i), { target: { value: 'Cena' } });
    fireEvent.input(screen.getByLabelText(/Email/i), { target: { value: 'john.Cena@gmail.com' } });
    fireEvent.input(screen.getByLabelText(/Phone Number/i), { target: { value: '11234567890' } });

    fireEvent.mouseDown(screen.getByLabelText(/Reservation Date/i));
    fireEvent.click(screen.getByText(new RegExp(`${new Date().getDate()}`, 'i'))); // Select today's date

    fireEvent.mouseDown(screen.getByLabelText(/Reservation Time/i));
    fireEvent.click(screen.getByText(/00:00/i)); // Select time

    fireEvent.input(screen.getByLabelText(/Amount of People/i), { target: { value: '3' } });
    fireEvent.click(screen.getByText(/I accept the terms and conditions/i));

    fireEvent.click(screen.getByRole('button', { name: /submit/i }));

    await waitFor(() => {
      expect(screen.queryByText(/First name is required/i)).not.toBeInTheDocument();
      expect(screen.queryByText(/Last name is required/i)).not.toBeInTheDocument();
      expect(screen.queryByText(/Email is required/i)).not.toBeInTheDocument();
      expect(screen.queryByText(/Phone number is required/i)).not.toBeInTheDocument();
      expect(screen.queryByText(/Date is required/i)).not.toBeInTheDocument();
      expect(screen.queryByText(/Time is required/i)).not.toBeInTheDocument();
      expect(screen.queryByText(/At least 1 person/i)).not.toBeInTheDocument();
      expect(screen.queryByText(/Accepting terms is required/i)).not.toBeInTheDocument();
    });
  });
});
