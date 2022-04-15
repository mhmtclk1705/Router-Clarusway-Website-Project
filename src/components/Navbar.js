import React from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className="cwd-header">
      <div className="cwd-header-cwd">
        <h1>
          <span style={{color: "#cc469a"}}>Clarusway</span> Web Design
        </h1>
      </div>
      <div className="cwd-header-pages">
        <ul>
          <li>
            {/* <NavLink to="/" style={{color: "#cc469a"}}> */}
            <NavLink to="/" style={{color: location.pathname === "/" ? "#cc469a" : "white"}}>
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" style={{color: location.pathname === "/about" ? "#cc469a" : "white"}}>ABOUT</NavLink>
          </li>
          <li>
            <NavLink to="/services" style={{color: location.pathname === "/services" ? "#cc469a" : "white"}}>SERVICES</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
