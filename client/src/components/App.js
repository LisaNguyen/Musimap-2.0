import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions/index';
import Header from './Header';
import Dashboard from './Dashboard';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route exact={true} path="/" component={Header} />
            <Route path="/dashboard" component={Dashboard} />
          </div>
        </BrowserRouter>
      </div>
    );
  };
};

export default connect(null, actions)(App);
