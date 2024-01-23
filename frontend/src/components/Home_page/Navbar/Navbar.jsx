import React from 'react';
import './navbar.css'

const Navbar = () => {
  return (
    <div className='top_container'>
      <div className="profile"></div>
      <div className="logout">
        <button>Log out</button>
      </div>
    </div>
  );
}

export default Navbar;

