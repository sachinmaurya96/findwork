import React from "react";

function Services() {
  return (
    <>
      <div className="services">
        <div className="container">
          <h2>We Provide Best</h2>
          <h1>Services</h1>
          <div className="cards">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="card" >
                <i class="fa-solid fa-building"></i>
                  <div className="card-body">
                    <h2>WORK</h2>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="card" >
                <i class="fa-solid fa-user"></i>
                  <div className="card-body">
                    <h2>JOB</h2>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-12 col-sm-12">
                <div className="card">
                <i class="fa-solid fa-money-bill-transfer"></i>
                  <div className="card-body">
                    <h2>WITHDRAW</h2>
                    <p className="card-text">
                      Some quick example text to build on the card title and
                      make up the bulk of the card's content.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
