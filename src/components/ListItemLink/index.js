import React from 'react';
import Route from 'react-router-dom/Route';
import Link from 'react-router-dom/Link';

const ListItemLink = ({ to, children, onClick }) => (
  <Route
    path={to}
    children={({ match }) => (
      <li role="presentation" className={match ? 'active' : ''}>
        <Link to={to} onClick={onClick}>{children}</Link>
      </li>
    )}
  />
);

ListItemLink.propTypes = {
  to: React.PropTypes.string.isRequired,
  children: React.PropTypes.node.isRequired,
  onClick: React.PropTypes.func,
};

ListItemLink.defaultProps = {
  onClick: undefined
};

export default ListItemLink;
