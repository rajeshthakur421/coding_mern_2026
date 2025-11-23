import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const FlipkartLayout = () => (
  <div>
    <header>
      <h2>Flipkart Mini App</h2>
      <nav>
        <Link to="/flipkart">Home</Link> | <Link to="/flipkart/offers">Offers</Link> | <Link to="/flipkart/mobiles">Mobiles</Link>
      </nav>
    </header>
    <main>
      <Outlet />
    </main>
  </div>
);

export default FlipkartLayout;
