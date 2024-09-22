import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component from react-router-dom

function Nav() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li> {/* Link to homepage */}
        <li><Link to="/menu">Menu</Link></li> {/* Placeholder for the menu page */}
        <li><Link to="/reserve">Reserve a Table</Link></li> {/* Link to the booking page */}
        <li><Link to="/contact">Contact</Link></li> {/* Placeholder for the contact page */}
      </ul>
    </nav>
  );
}

export default Nav;
