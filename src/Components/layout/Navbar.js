import React from 'react'
import {Link, NavLink } from 'react-router-dom'
const Navbar = () => {
    return (
        
<nav classNmae="yellow">
    <div className="nav-wrapper">
      <Link to="/" className="brand-logo">NoteBook</Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><NavLink to="/favorites">favorites</NavLink></li>
      </ul>
    </div>
  </nav>
    
    )
}

export default Navbar

