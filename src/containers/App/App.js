import React from 'react';
import { IndexLink } from 'react-router';
import { LinkContainer } from 'react-router-bootstrap';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';

class App extends React.Component {
  static propTypes = {
    children: React.PropTypes.element,
  };

  state = {
    navExpanded: false
  }

  onNavItemClick = () => {
    this.setState({ navExpanded: false });
  }

  onNavbarToggle = () => {
    this.setState({ navExpanded: !this.state.navExpanded });
  }

  render() {
    require('./App.css');

    return (
      <div>
        <Navbar staticTop expanded={this.state.navExpanded} onToggle={this.onNavbarToggle}>
          <Navbar.Header>
            <Navbar.Brand>
              <IndexLink to="/" onClick={this.onNavItemClick} activeStyle={{ color: '#33e0ff' }}>
                <span>HahooApp</span>
              </IndexLink>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>

          <Navbar.Collapse>
            <Nav navbar role="navigation">
              <LinkContainer to="/about">
                <NavItem eventKey={1} onClick={this.onNavItemClick}>About Us</NavItem>
              </LinkContainer>
            </Nav>
            <Nav navbar pullRight>
              <NavItem eventKey={1} onClick={this.onNavItemClick} target="_blank" title="View on Github" href="https://github.com/hahoocn/react-bootstrap-boilerplate">
                <i className="fa fa-github" />
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
