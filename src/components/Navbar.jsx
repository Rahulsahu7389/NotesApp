// import React from 'react'
// import { NavLink } from 'react-router-dom'


// const Navbar = () => {
//   return (
//     <div>
//       <div>
//         <NavLink to="/">Home</NavLink>
//       </div>
//       <div>
//         <NavLink to="/pastes">Pastes</NavLink>
//       </div>
//     </div>
//   )
// }

// export default Navbar

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="nav-logo">NotesApp</div>

      {/* Hamburger Menu Icon */}
      <div className="hamburger" onClick={toggleMenu}>
        <div className={isOpen ? "bar bar1 active" : "bar bar1"}></div>
        <div className={isOpen ? "bar bar2 active" : "bar bar2"}></div>
        <div className={isOpen ? "bar bar3 active" : "bar bar3"}></div>
      </div>

      {/* Links */}
      <div className={isOpen ? "nav-links open" : "nav-links"}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          onClick={() => setIsOpen(false)}
        >
          Home
        </NavLink>
        <NavLink
          to="/pastes"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          onClick={() => setIsOpen(false)}
        >
          Notes
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
