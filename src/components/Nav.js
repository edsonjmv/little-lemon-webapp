import React from 'react';

export default function Nav() {
  return (
    <nav className="p-3 d-flex justify-content-between align-content-center">
      <img src="/logo.svg" />
      <ul className="d-flex align-items-center mb-0 list-unstyled gap-4 text-uppercase">
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>About</a>
        </li>
        <li>
          <a>Menu</a>
        </li>
        <li>
          <a>Reservations</a>
        </li>
        <li>
          <a>Order online</a>
        </li>
        <li>
          <a>Log in</a>
        </li>
      </ul>
    </nav>
  );
}
