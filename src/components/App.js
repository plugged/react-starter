import React, { Component } from 'react';
import Layout from '../components/Layout';
import Routes from './Routes';

export default class App extends Component {
  render() {
    return (
      <Layout>
        <Routes />
      </Layout>
    );
  }
}
