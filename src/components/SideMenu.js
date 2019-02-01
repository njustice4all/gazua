import React, { Component } from 'react';

import { Link } from 'react-router-dom';

export default class SideMenu extends Component {
  render() {
    return (
      <div className="side-menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/hello">Hello</Link>
          </li>
          <li>
            <Link to="/world">World</Link>
          </li>
        </ul>
      </div>
    );
  }
}
