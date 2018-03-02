import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

  export default class DashboardHeader extends Component {
    constructor(props) {
      super(props);

      this.toggle = this.toggle.bind(this);
      this.state = {
        isOpen: false
      };
    }

    toggle() {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }

    render() {
      return (
        <div>
          <Navbar color="faded" expand="md">
            <NavbarBrand href="/" className="header-brand">Musimap</NavbarBrand>
            <NavbarToggler onClick={this.toggle} className="navbar-dark" />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="nav-items ml-auto" navbar>
                <NavItem>
                  <NavLink href="/components/">Log Out</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
    }
  }
