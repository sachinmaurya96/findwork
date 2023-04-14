import React from "react";
import { NavLink } from "react-router-dom";

function Refrel() {
  return (
    <>
      <div className="reffer">
        <div className="container">
        <div className="card">
              <div className="card-body">
                <h2 className="card-title">YOU CAN EARN MORE BY REFERRAL</h2>
                <p className="card-text">
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quam in, ullam laudantium vero deleniti dicta, natus quod consequatur vel praesentium libero inventore consectetur debitis laboriosam veritatis error iure id at ea eius ipsam. Quod quo consequuntur quaerat natus quia.
                </p>
                <NavLink to="/login"><a href="#" className="btn btn-outline-light">
                  Start Now
                </a></NavLink>
              </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default Refrel;
