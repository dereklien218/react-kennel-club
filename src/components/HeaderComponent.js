import React, { Component } from "react";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
} from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
    };

    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  render() {
    return (
      <Navbar light fixed="top" expand="md">
        <div className="container flex-md-column">
          <NavbarBrand className="d-md-none" href="/home">
            The Kennel Club
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNav} />
          <Collapse isOpen={this.state.isNavOpen} navbar id="kennelNavbar">
            <Nav justified navbar className="align-items-center">
              <NavItem>
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/classes" href="#classes">
                  Classes
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/news-events">
                  News
                </NavLink>
              </NavItem>
              <NavbarBrand className="d-none d-md-flex" href="/home">
                The Kennel Club
              </NavbarBrand>
              <NavItem>
                <NavLink className="nav-link" to="/gallery">
                  Gallery
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/contactus">
                  Contact
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link" to="/calendar">
                  Calendar
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    );
  }
}

export default Header;
