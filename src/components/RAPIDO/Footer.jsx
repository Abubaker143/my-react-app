import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer style={{ backgroundColor: "#f9f9f9", padding: "60px 90px 20px 90px", borderTop: "1px solid #eee", fontFamily: "sans-serif" }}>
      
      
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", marginBottom: "40px" }}>
        
        
        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        
          <div style={{ backgroundColor: "#fbc02d", color: "#000", padding: "10px 25px", borderRadius: "25px", fontWeight: "bold", fontSize: "1.2rem", width: "fit-content", textAlign: "center", marginBottom: "10px" }}>
            rapido
          </div>
          <Link to="/" style={{ textDecoration: "none", color: "#000", fontSize: "0.95rem" }}>Home</Link>
          <Link to="/about" style={{ textDecoration: "none", color: "#000", fontSize: "0.95rem" }}>About Us</Link>
          <Link to="/careers" style={{ textDecoration: "none", color: "#000", fontSize: "0.95rem" }}>Careers</Link>
          <Link to="/safety" style={{ textDecoration: "none", color: "#000", fontSize: "0.95rem" }}>Safety</Link>
          <Link to="/blog" style={{ textDecoration: "none", color: "#000", fontSize: "0.95rem" }}>Blog</Link>
          <Link to="/press" style={{ textDecoration: "none", color: "#000", fontSize: "0.95rem" }}>Press</Link>
          <Link to="/privacy" style={{ textDecoration: "none", color: "#000", fontSize: "0.95rem" }}>Privacy Policy</Link>
        </div>

       
        <div style={{ display: "flex", flexDirection: "column", gap: "15px", paddingTop: "65px" }}>
          <a href="#" style={{ textDecoration: "none", color: "#000", fontSize: "0.95rem" }}>Customer Terms - Bike Taxi</a>
          <a href="#" style={{ textDecoration: "none", color: "#000", fontSize: "0.95rem" }}>Customer Terms - Cabs and Auto</a>
          <a href="#" style={{ textDecoration: "none", color: "#777", fontSize: "0.95rem" }}>Corporate Affairs</a>
          <a href="#" style={{ textDecoration: "none", color: "#000", fontSize: "0.95rem" }}>Captain Terms - Bike Taxi</a>
          <a href="#" style={{ textDecoration: "none", color: "#000", fontSize: "0.95rem" }}>Captain Terms - Cabs and Auto</a>
        </div>

        
        <div style={{ display: "flex", gap: "20px", fontSize: "1.5rem", alignSelf: "flex-end" }}>
          
          <a href="https://instagram.com" target="_blank" rel="noreferrer" style={{ color: "#000", textDecoration: "none" }}>
            <i className="fab fa-instagram"></i> 
          </a>INST
        
          <a href="https://youtube.com" target="_blank" rel="noreferrer" style={{ color: "#000", textDecoration: "none" }}>
            <i className="fab fa-youtube"></i> 
          </a>YT
          
          <a href="https://x.com" target="_blank" rel="noreferrer" style={{ color: "#000", textDecoration: "none", fontWeight: "bold" }}>
            X
          </a>
        </div>

      </div>

     
      <hr style={{ border: "none", borderTop: "1px solid #ddd", marginBottom: "20px" }} />

      
      <div style={{ color: "#777", fontSize: "0.85rem" }}>
        © 2026 Rapido Transportation. All rights reserved.
      </div>

    </footer>
  );
}

export default Footer;