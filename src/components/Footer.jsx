import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12">
              <div className="card" >
                <div className="card-body">
                  <h5 className="card-title">  <img src="https://i.postimg.cc/wxWtcqr6/logo3d.png" alt="" /> Find Work</h5>
                  <p className="card-text">
                  Best Microjob & Freelance Site To Make Money Online
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="card-body">
                  <h5 className="card-title">Follow us</h5>
                 <a href="https://github.com/sachinmaurya96" className="btn btn-outline-success"><i class="fa-brands fa-github"></i></a>
                 <a href="https://codepen.io/Yash-Flipkart" className="btn btn-outline-secondary mx-2"> <i class="fa-brands fa-codepen"></i></a>
                 <a href="https://www.linkedin.com/in/sachin-maurya-826111267/" className="btn btn-outline-info"> <i class="fa-brands fa-linkedin-in"></i></a>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="card-body">
                  <h5 className="card-title">Service</h5>
                 <ul>
                    <li><NavLink to="/login"><a href="#">Find job</a></NavLink></li>
                    <li><NavLink to="/login"><a href="#">Post job</a></NavLink></li>
                    <li><a href="#">Download app</a></li>
                    <li><a href="#">FAQs</a></li>
                 </ul>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="card-body">
                  <h5 className="card-title">Support</h5>
                 <ul>
                    <li><NavLink to="/contact"><a href="#">Contact us</a></NavLink></li>
                 </ul>
                </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="copyright">
          <ul>
            <li>
             <NavLink to="/about"> <a href="#">About us</a></NavLink>
            </li>
            <li>
              <a href="#">Privacy policy</a>
            </li>
            <li>
              <a href="#">Terms & conditions</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Footer;
