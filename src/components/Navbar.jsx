import React from "react";


function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand fs-2" href="#">
                <img src="./images/logo3d.png" alt="" />Find Work
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="nav justify-content-end collapse navbar-collapse" id="navbarScroll">
           <div className="d-flex ">
                <button className="btn btn-outline-light mx-2">Login</button>
                <button className="btn btn-primary mx-2">Signnup</button>
           </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
