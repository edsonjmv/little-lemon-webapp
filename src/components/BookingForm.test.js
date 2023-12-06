import { render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';

const mockTimes = [
  '17:00',
  '18:00',
  '19:00',
  '20:00',
  '21:00',
  '22:00',
  '23:00'
];

const mockForm = {
  date: '',
  time: '20:00',
  guests: '1',
  occasion: 'birthday'
};

test('Renders the BookingForm heading', () => {
  render(
    <BookingForm
      availableTimes={mockTimes}
      form={mockForm}
      onFieldChange={() => {}}
    />
  );
  const headingElement = screen.getByText('Book a table');
  expect(headingElement).toBeInTheDocument();
});
