import React from 'react';

export default function Footer() {
  return (
    <footer class="container text-center">
      <div class="row align-items-start">
        <div className="col">
          <img src="/images/chefs.jpg" className="img-fluid" />
        </div>
        <ul className="col list-unstyled">
          <li className="fw-bold">Navigation</li>
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
        <ul className="col list-unstyled">
          <li className="fw-bold">Contact</li>
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
        <ul className="col list-unstyled">
          <li className="fw-bold">Social media</li>
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
      </div>
    </footer>
  );
}
