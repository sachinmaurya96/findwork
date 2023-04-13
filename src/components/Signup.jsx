import React from "react";
import { NavLink } from "react-router-dom";

function Signup() {
  return (
    <>
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-10 col-sm-12 form_container">
              <form className="mx-auto">
              <div className="mb-3">
                  <label for="name" className="form-label">
                   Full Name
                  </label>
                  <input
                    type="name"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    autoComplete="off"
                    placeholder="Enter your namme"
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label mt-3">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    autoComplete="off"
                    placeholder="Example@gmail.com"
                  />
                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">
                    Create Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    autoComplete="off"
                    placeholder="password...."
                  />
                </div>

                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">
                    Conferm Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    autoComplete="off"
                    placeholder="password...."
                  />
                </div>

                <button type="submit" className="btn btn-primary">
                  Sign up
                </button>
              </form>
              <div className=" mt-3 btn-center">
                <NavLink to="/login">
                  <a href="#" className="btn btn-outline-primary">
                    Login with existing account
                  </a>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
