import React, { Component } from 'react';
import { Button } from 'reactstrap';
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
              <h3>Discover the beats of <br />the world.</h3>
              <h5>Musimap is an interactive tool that allows you to explore the different, distinct sounds of over 800 cities.</h5>
              <Button id="sign-up">Sign Up</Button>{' '}
              <Button id="sign-in"  outline color="secondary">Log In</Button>{' '}
            </div>
          </div>
        </div>
      </div>
    );
  }
};
