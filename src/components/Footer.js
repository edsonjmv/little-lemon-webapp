import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer>
      <div>
        <img src="/images/chefs.jpg" className="img-fluid" />
      </div>
      <ul>
        <li>
          <b>Navigation</b>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link to="/reservations">Reservations</Link>
        </li>
        <li>
          <Link to="/order">Order online</Link>
        </li>
        <li>
          <Link to="/login">Log in</Link>
        </li>
      </ul>
      <ul>
        <li>
          <b>Contact</b>
        </li>
        <li>
          <a>Address</a>
        </li>
        <li>
          <a>Phone number</a>
        </li>
        <li>
          <a>Email</a>
        </li>
      </ul>
      <ul>
        <li>
          <b>Social media</b>
        </li>
        <li>
          <a>Facebook</a>
        </li>
        <li>
          <a>Twitter</a>
        </li>
        <li>
          <a>Instagram</a>
        </li>
      </ul>
    </footer>
  );
}
