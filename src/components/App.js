import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Layout from '../components/Layout';
import Counter from '../components/Counter';
import About from '../components/About';
import NotFound from '../components/NotFound';


// If you use React Router, make this component
// render <Router> with your routes. Currently,
// only synchronous routes are hot reloaded, and
// you will see a warning from <Router> on every reload.
// You can ignore this warning. For details, see:
// https://github.com/reactjs/react-router/issues/2182

export default class App extends Component {
  render() {
    return (
      <Layout>
        <Switch>
          <Route path="/" exact component={Counter} />
          <Route path="/about" exact component={About} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    );
  }
}
