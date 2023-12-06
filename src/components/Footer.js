import React from 'react';

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
