import React, { Component, Fragment } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  NavItem,
  Container
} from 'reactstrap';
import { Link } from 'react-router-dom';

import './app-navbar.scss';

class AppNavbar extends Component {
  state = {
    isOpen: false
  };

  toggle = () => {
    // Only toggle when it is a "hamburger menu/dropdown"
    if (window.outerWidth < 576) {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }
  };

  collapseOnEnter = () => {
    document.addEventListener('mousedown', this.handleClick, false);
  };

  collapseOnExit = () => {
    document.removeEventListener('mousedown', this.handleClick, false);
  };

  handleClick = e => {
    // e.preventDefault();
    // Check if the window has grown. Happens only if window is resized
    // when hamburger menu / dropdown is still open, i.e eventListeners are still alive.
    if (window.outerWidth >= 576) {
      this.collapseOnExit(); // remove event listener
      this.setState({ isOpen: false }); // set to closed
      return;
    }
    if (this.navbar.contains(e.target)) {
      // Click is inside
      return;
    }
    // Click is outside, toggle.
    this.toggle();
  };

  render() {
    const guestLinks = (
      <Fragment>
        <NavItem>
          <NavLink style={navLinkStyle} tag={Link} to='/' onClick={this.toggle}>
            Home
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            style={navLinkStyle}
            tag={Link}
            to='/pricing'
            onClick={this.toggle}
          >
            Pricing
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            style={navLinkStyle}
            tag={Link}
            to='/contact'
            onClick={this.toggle}
          >
            Contact
          </NavLink>
        </NavItem>
      </Fragment>
    );

    return (
      <div ref={navbar => (this.navbar = navbar)}>
        <Navbar dark expand='sm' className='mb-3 fixed-top appnavbar'>
          <Container>
            <NavbarBrand href='/'>
              <h4>Cookies</h4>
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse
              isOpen={this.state.isOpen}
              navbar
              onEnter={this.collapseOnEnter}
              onExit={this.collapseOnExit}
            >
              <Nav className='ml-auto' navbar>
                {guestLinks}
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

const navLinkStyle = {
  fontWeight: 'bold'
};

export default AppNavbar;
