import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar bg-dark'>
      <ul>
        <li>
          <NavLink exact to='/' activeClassName={Navbar.active}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink exact to='/bookings' activeClassName={Navbar.active}>
            Booking
          </NavLink>
        </li>
        <li>
          <NavLink exact to='/tourList' activeClassName={Navbar.active}>
            Tours
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
