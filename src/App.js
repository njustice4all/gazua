import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Layout from './screens/Layout';
import { SideMenu, Home, Hello, World } from './components';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Layout>
            <SideMenu />
            <div className="contents-container">
              <Route exact path="/" component={Home} />
              <Route exact path="/hello" component={Hello} />
              <Route exact path="/world" component={World} />
            </div>
          </Layout>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
