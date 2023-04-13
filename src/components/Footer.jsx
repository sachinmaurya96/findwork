import React from "react";

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
                  <i class="fa-brands fa-facebook btn btn-outline-light"></i>
                  <i class="fa-brands fa-square-twitter btn  btn-outline-light mx-3"></i>
                  <i class="fa-brands fa-linkedin-in btn  btn-outline-light"></i>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="card-body">
                  <h5 className="card-title">Service</h5>
                 <ul>
                    <li><a href="#">Find job</a></li>
                    <li><a href="#">Post job</a></li>
                    <li><a href="#">Download app</a></li>
                    <li><a href="#">FAQs</a></li>
                 </ul>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="card-body">
                  <h5 className="card-title">Support</h5>
                 <ul>
                    <li><a href="#">Contact us</a></li>
                 </ul>
                </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="copyright">
          <ul>
            <li>
              <a href="#">About us</a>
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
