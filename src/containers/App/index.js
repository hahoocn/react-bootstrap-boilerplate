import React from 'react';
import Link from 'react-router-dom/Link';
import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';
import { ListItemLink } from '../../components';
import { renderRoutes } from '../../routes';

class App extends React.Component {
  static propTypes = {
    route: React.PropTypes.object.isRequired,
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
    require('./styles.css');
    const { route } = this.props;

    return (
      <div>
        <Navbar staticTop expanded={this.state.navExpanded} onToggle={this.onNavbarToggle}>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/" onClick={this.onNavItemClick}>
                <span>HahooApp</span>
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>

          <Navbar.Collapse>
            <Nav navbar role="navigation">
              <ListItemLink to="/about" onClick={this.onNavItemClick}>
                About Us
              </ListItemLink>
            </Nav>
            <Nav navbar pullRight>
              <NavItem eventKey={1} onClick={this.onNavItemClick} target="_blank" title="View on Github" href="https://github.com/hahoocn/react-bootstrap-boilerplate">
                <i className="fa fa-github" />
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div>
          {renderRoutes(route.routes)}
        </div>
      </div>
    );
  }
}

export default App;
