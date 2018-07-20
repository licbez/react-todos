import React from 'react';
import { NavLink } from 'react-router-dom';
// import { Link } from 'react-router'
import './Header.css';

class Header extends React.PureComponent {
  render() {
    return (
    <header className="app-header">
      <hr/>
      <ul className="nav justify-content-center">
        <li className="nav-item">
          <NavLink className="nav-link" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/todos">Todos</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/done">Done</NavLink>
        </li>
      </ul>
    </header>
    );
  }
}

export default Header;
