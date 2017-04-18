import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { increment } from 'actions/counterActions';

@connect(
  state => ({ count: state.counter.count }),
  dispatch => ({ increment: () => dispatch(increment()) })
)
export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { counter: props.count };
  }

  componentDidMount() {
    this.interval = setInterval(this.tick.bind(this), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  tick() {
    this.props.increment();
  }

  render() {
    return <h1>Counter: {this.props.count}</h1>;
  }
}

Counter.propTypes = {
  count: PropTypes.number,
  increment: PropTypes.func
};
