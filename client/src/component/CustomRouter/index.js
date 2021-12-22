import * as React from "react";
import { Route } from 'react-router-dom';
import ProductCharacters from '../ProductCharacters'

export default [
  <Route exact path="/products/characters/:id" component={ProductCharacters} />,
];