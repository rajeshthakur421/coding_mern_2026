import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AmazonRoutes from '../../websites/amazon/routes/amazon.routes';
import FlipkartRoutes from '../../websites/flipkart/routes/flipkart.routes';
import Home from '../../pages/Home';

const AppRoutes = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      {AmazonRoutes}
      {FlipkartRoutes}
    </Routes>
  </Router>
);

export default AppRoutes;
