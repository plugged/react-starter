import React, { PropTypes, Component } from 'react';

export default class Layout extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        {this.props.children}
      </div>
    );
  }
}
