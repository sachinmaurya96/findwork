import React from 'react'
import { NavLink } from 'react-router-dom'

function Installapp() {
  return (
    <>
       <div className="installapp">
        <div className="container">
        <div className="card">
              <div className="card-body">
                <h2 className="card-title">Download & Install Appy Now</h2>
                <p className="card-text">
                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quam in, ullam laudantium vero deleniti dicta, natus quod consequatur vel praesentium libero inventore consectetur debitis laboriosam veritatis error iure id at ea eius ipsam. Quod quo consequuntur quaerat natus quia.
                </p>
              <NavLink to="/login">  <a href="#" className="btn btn-outline-light">
                    Download Now
                </a></NavLink>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Installapp
