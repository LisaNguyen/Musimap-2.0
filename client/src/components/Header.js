import React, { Component } from 'react';
import Nav from './Nav';

export default class Header extends Component {
  render() {
    return (
      <div id="background-image" className="container-fluid">
        <Nav />
        <div className="container">
          <div className="row">
            <div className="col-xs-4 mr-auto opening-line">
              <p className="secondary-line">We Are Live</p>
              <h3>One platform, multiple sounds. <br /> Discover the beats of the world.</h3>
            </div>
          </div>
        </div>
      </div>
    );
  }
};
