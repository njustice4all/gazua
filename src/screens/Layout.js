import React, { Component } from 'react';

import { Header, Footer } from '../components';

export default class Layout extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className="app-container">
        <Header />
        <div className="app-body">{children}</div>
        <Footer />
      </div>
    );
  }
}
