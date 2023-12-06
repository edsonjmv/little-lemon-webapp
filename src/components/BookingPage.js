import React, { useState } from 'react';
import Layout from './Layout';
import BookingForm from './BookingForm';

export default function BookingPage() {
  const [form, setForm] = useState({
    date: '',
    time: '20:00',
    guests: '1',
    occasion: 'birthday'
  });

  function handleFieldChange(e) {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(form);
  }

  return (
    <Layout>
      <main>
        <BookingForm
          form={form}
          onFieldChange={handleFieldChange}
          onSubmit={handleSubmit}
        />
      </main>
    </Layout>
  );
}
