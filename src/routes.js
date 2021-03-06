import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import Layout from './components/layout';
import Add from './components/add';

export default (
  <Route path='/' component={Layout}>
    <IndexRoute component={Add} />
    <Redirect from='*' to='/' />
  </Route>
);
