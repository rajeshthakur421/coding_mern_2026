import React from 'react';
import { Route } from 'react-router-dom';
import AmazonLayout from '../layout/AmazonLayout';
import { AmazonHome } from '../pages/Home';
import Products from '../pages/Products';
import Deals from '../pages/Deals';

const AmazonRoutes = [
  <Route path="/amazon" element={<AmazonLayout />} key="amazon">
  <Route index element={<AmazonHome />} />
    <Route path="products" element={<Products />} />
    <Route path="deals" element={<Deals />} />
  </Route>
];

export default AmazonRoutes;
