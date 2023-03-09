import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div id="navbar" className="row">
      <NavLink to="/campuses" className="active">All Campuses</NavLink>
      <NavLink to="/students" className="active">All Students</NavLink>
    </div>
  );
};

export default Navbar;