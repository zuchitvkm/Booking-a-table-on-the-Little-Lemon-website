import React from 'react';
import { Form, Input, Button, DatePicker, TimePicker, InputNumber, Checkbox } from 'antd';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import moment from 'moment';
import './bookingForm.css';
import { useNavigate } from 'react-router-dom';

// Validation schema with YUP
const schema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  phone: yup.string().matches(/^[0-9]+$/, 'Phone number is not valid').required('Phone number is required'),
  date: yup.date().required('Date is required').nullable(),
  time: yup.string().required('Time is required'),
  people: yup.number().min(1, 'At least 1 person').max(10, 'Maximum 10 people').required('Amount of people is required'),
  terms: yup.boolean().oneOf([true], 'Accepting terms is required'),
});

const BookingForm = () => {
  const { handleSubmit, control, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log('Form Data:', data);
    // Submit API logic goes here
    // Navigate to confirmation page
    navigate('/reservation-confirmation', { state: { firstName: data.firstName } });
  };

  return (
    <Form className="booking-form" layout="vertical" onFinish={handleSubmit(onSubmit)}>
      <h2>Personal Information</h2>

      {/* First Name */}
      <Form.Item label="First Name" validateStatus={errors.firstName ? 'error' : ''} help={errors.firstName?.message}>
        <Controller
          name="firstName"
          control={control}
          defaultValue=""
          render={({ field }) => <Input {...field} />}
        />
      </Form.Item>

      {/* Last Name */}
      <Form.Item label="Last Name" validateStatus={errors.lastName ? 'error' : ''} help={errors.lastName?.message}>
        <Controller
          name="lastName"
          control={control}
          defaultValue=""
          render={({ field }) => <Input {...field} />}
        />
      </Form.Item>

      {/* Email */}
      <Form.Item label="Email" validateStatus={errors.email ? 'error' : ''} help={errors.email?.message}>
        <Controller
          name="email"
          control={control}
          defaultValue=""
          render={({ field }) => <Input {...field} />}
        />
      </Form.Item>

      {/* Phone */}
      <Form.Item label="Phone Number" validateStatus={errors.phone ? 'error' : ''} help={errors.phone?.message}>
        <Controller
          name="phone"
          control={control}
          defaultValue=""
          render={({ field }) => <Input {...field} />}
        />
      </Form.Item>

      <h2>Booking Details</h2>

      {/* Date */}
      <Form.Item label="Reservation Date" validateStatus={errors.date ? 'error' : ''} help={errors.date?.message}>
        <Controller
          name="date"
          control={control}
          defaultValue={null}
          render={({ field }) => (
            <DatePicker
              {...field}
              format="YYYY-MM-DD"
              disabledDate={(current) => current && current < moment().endOf('day')}
            />
          )}
        />
      </Form.Item>

      {/* Time */}
      <Form.Item label="Reservation Time" validateStatus={errors.time ? 'error' : ''} help={errors.time?.message}>
        <Controller
          name="time"
          control={control}
          defaultValue={null}
          render={({ field }) => (
            <TimePicker {...field} format="HH:mm" />
          )}
        />
      </Form.Item>

      {/* Amount of People */}
      <Form.Item label="Amount of People" validateStatus={errors.people ? 'error' : ''} help={errors.people?.message}>
        <Controller
          name="people"
          control={control}
          defaultValue={1}
          render={({ field }) => (
            <InputNumber {...field} min={1} max={10} />
          )}
        />
      </Form.Item>

      {/* Terms and Conditions */}
      <Form.Item validateStatus={errors.terms ? 'error' : ''} help={errors.terms?.message}>
        <Controller
          name="terms"
          control={control}
          defaultValue={false}
          render={({ field }) => (
            <Checkbox {...field}>
              I accept the terms and conditions
            </Checkbox>
          )}
        />
      </Form.Item>

      {/* Submit Button */}
      <Form.Item>
        <Button type="primary" htmlType="submit">Submit</Button>
      </Form.Item>
    </Form>
  );
};

export default BookingForm;
