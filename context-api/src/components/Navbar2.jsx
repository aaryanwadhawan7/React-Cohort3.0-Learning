import React from "react";
import { Link } from "react-router-dom";

const Navbar2 = () => {
  return (
    <div className="nav-two">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/services">Services</Link>
    </div>
  );
};

export default Navbar2;
