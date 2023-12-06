import React from 'react';
import { Menu } from 'react-feather';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav>
      <img src="/logo.svg" />
      <ul>
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
          <Link to="/booking">Reservations</Link>
        </li>
        <li>
          <Link to="/order">Order online</Link>
        </li>
        <li>
          <Link to="/login">Log in</Link>
        </li>
      </ul>
      <Menu className="only-mobile" />
    </nav>
  );
}
