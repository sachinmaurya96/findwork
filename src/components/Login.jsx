import React from "react";
import { NavLink } from "react-router-dom";

function Login() {
  return (
    <>
      <div className="login">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-10 col-sm-12 form_container">
              <form className="mx-auto">
                <div className="mb-3">
                  <label for="exampleInputEmail1" className="form-label">
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
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    autoComplete="off"
                    placeholder="password...."
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" for="exampleCheck1">
                    Remember me
                  </label>
                </div>
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </form>
              <h6 className="text-center mt-3 forgot">Forgot Password</h6>
              <h6 className="text-center mt-3">OR</h6>
            <h6 className="text-center mt-3">Continue with social accounts</h6>
            <div className=" social">
                <a href="#" className="btn g"><i class="fa-brands fa-google"></i>Google</a>
                <a href="#" className="btn tw"><i class="fa-brands fa-twitter"></i>Google</a>
                <a href="#" className="btn fb"><i class="fa-brands fa-facebook"></i>Google</a>
            </div>
            <div className="social mt-3 btn-center">
                <NavLink to="/signup"><a href="#" className="btn btn-outline-primary">Create new account</a></NavLink>
            </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
