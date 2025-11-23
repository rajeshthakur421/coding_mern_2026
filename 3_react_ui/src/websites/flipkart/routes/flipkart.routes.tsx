import React from 'react';
import { Route } from 'react-router-dom';
import FlipkartLayout from '../layout/FlipkartLayout';
import { FlipkartHome } from '../pages/Home';
import Offers from '../pages/Offers';
import Mobiles from '../pages/Mobiles';

const FlipkartRoutes = [
  <Route path="/flipkart" element={<FlipkartLayout />} key="flipkart">
  <Route index element={<FlipkartHome />} />
    <Route path="offers" element={<Offers />} />
    <Route path="mobiles" element={<Mobiles />} />
  </Route>
];

export default FlipkartRoutes;
