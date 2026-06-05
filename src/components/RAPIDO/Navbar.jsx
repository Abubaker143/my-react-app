import React from "react";
import { Link } from "react-router-dom"; 
import About from "./About";
import Safety from "./Safety";
import Careers from "./Careers";
import Blog from "./Blog";
import Press from "./Press";
import Contact from "./Contact";

function Navbar() {
  return (
    <div className="navbar" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '55px 90px', backgroundColor: '#fff', marginTop: '-10px' }}>
      <div className="logo">rapido</div>

      <div className="nav-links">
        
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/safety">Safety</Link>
        <Link to="/careers">Careers</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/press">Press</Link>
        <Link to="/contact">Contact Us</Link>
      </div>

      <button className="download">Download App</button>
    </div>
  );
}

export default Navbar;