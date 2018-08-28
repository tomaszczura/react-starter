/* eslint-disable react/prop-types */
import React from 'react';
import { Route } from 'react-router';
import App from './app';

// eslint-disable-next-line no-unused-vars,arrow-body-style
export const getRoutes = ({ dispatch, getState }) => {
  return (
    <Route component={App} path='/'/>
  );
};
