import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const AmazonLayout = () => (
  <div>
    <header>
      <h2>Amazon Mini App</h2>
      <nav>
        <Link to="/amazon">Home</Link> | <Link to="/amazon/products">Products</Link> | <Link to="/amazon/deals">Deals</Link>
      </nav>
    </header>
    <main>
      <Outlet />
    </main>
  </div>
);

export default AmazonLayout;
