import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import AboutPage from './components/AboutPage';
import LoginPage from './components/LoginPage';
import MenuPage from './components/MenuPage';
import OrderPage from './components/OrderPage';
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import BookingsPage from './components/BookingsPage';
import HomePage from './components/HomePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />
  },
  {
    path: '/about',
    element: <AboutPage />
  },
  {
    path: '/order',
    element: <OrderPage />
  },
  {
    path: '/login',
    element: <LoginPage />
  },
  {
    path: '/menu',
    element: <MenuPage />
  },
  {
    path: '/bookings',
    element: <BookingsPage />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
