import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Counter from 'components/Counter';
import About from 'components/About';
import NotFound from 'components/NotFound';

const Routes = () =>
  <Switch>
    <Route path="/" exact component={Counter} />
    <Route path="/about" exact component={About} />
    <Route component={NotFound} />
  </Switch>;

export default Routes;
