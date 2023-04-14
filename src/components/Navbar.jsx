import React from "react";
import { NavLink } from "react-router-dom";



function Navbar() {
  return (
    <>
     <nav className="navbar navbar-expand-lg navbar-dark">
  <div className="container-fluid">
   <NavLink className="navbar-brand" to="/findwork"> <img src="https://i.postimg.cc/wxWtcqr6/logo3d.png" alt="brand" /> Find Work</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link " to="/findwork">Home</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to="/contact">Contact</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to="/team">My Team</NavLink>
        </li>
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="https://www.smdevloper.com">Blog</a>
        </li>
      </ul>
      <div className="d-flex">
      <NavLink to="/login"><button className="btn btn-outline-light mx-2">Login</button></NavLink>
               <NavLink to="/signup"> <button className="btn btn-primary mx-2">Signnup</button></NavLink>
      </div>
    </div>
  </div>
</nav>
    </>
  );
}

export default Navbar;