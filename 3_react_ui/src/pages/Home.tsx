import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>Welcome to the Multi-Website App</h1>
    <Link to="/amazon">Go to Amazon Mini App</Link><br />
    <Link to="/flipkart">Go to Flipkart Mini App</Link>
  </div>
);

export default Home;
