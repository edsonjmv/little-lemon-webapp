import React, { useReducer, useState } from 'react';
import Layout from './Layout';
import BookingForm from './BookingForm';

const times = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'];

function reducer(state, action) {
  console.log('state,', state);
  console.log('action', action);
  console.log(action.date);
  if (action.type === 'update') {
    return action.times;
  }
  throw Error('Unknown action.');
}

export default function BookingPage() {
  const [availableTimes, dispatch] = useReducer(reducer, times);

  const [form, setForm] = useState({
    date: '',
    time: '20:00',
    guests: '1',
    occasion: 'birthday'
  });

  function handleFieldChange(e) {
    const { name, value } = e.target;

    if (name === 'date') {
      updateTimes(value);
    }

    setForm((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(form);
  }

  function updateTimes(date) {
    console.log(date);
    dispatch({ type: 'update', times, date });
  }

  return (
    <Layout>
      <main>
        <BookingForm
          availableTimes={availableTimes}
          form={form}
          onFieldChange={handleFieldChange}
          onSubmit={handleSubmit}
        />
      </main>
    </Layout>
  );
}
