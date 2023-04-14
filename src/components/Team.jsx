import React from "react";
import { NavLink } from "react-router-dom";

function Team() {
  return (
    <>
      <div className="team">
        <div className="container">
          <div className="row">
            <h1 className="text-center">My Team</h1>
            <div className="team_card">
              <div className="content">
                <h2 className="mt-3">Meat My Team</h2>
                <p className="mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Suscipit vero accusantium rem, sint neque, ullam quam eos a
                  aut quod, magni exercitationem ratione odit perferendis.
                  Officiis, sit facere nemo voluptatum ullam nesciunt ut sequi,
                  unde ipsum numquam voluptate eaque nulla eum quisquam non.
                  Dicta, accusantium eveniet soluta ut amet consequuntur?
                </p>
                <NavLink to="/contact">
                  <button className="btn btn-outline-info mt-3">
                    Contact us
                  </button>
                </NavLink>
              </div>
              <div className="img">
                <img
                  src="https://i.postimg.cc/7YL975Dk/Benefits-of-a-modern-IT-Ecosystem-01-removebg-preview.png"
                  alt="team"
                />
              </div>
            </div>
          </div>
          <div className="team_member">
            <div className="cards">
             <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-12">
              <div class="card">
               <div className="img">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7-u0Aye6IXpMxyjPNiejmwtDlUhNb5WTWt8s-lRm3gjrRt1BVOmZJrOvLpSMPWHSsSHM&usqp=CAU" class="card-img-top" alt="memberr" />
                </div>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
                <div class="card-body social">
                  <a href="#" className="btn btn-outline-primary"><i class="fa-brands fa-facebook "></i></a>
                  <a href="#" className="btn btn-outline-info"><i class="fa-brands fa-linkedin "></i></a>
                  <a href="#" className=" btn btn-outline-success"><i class="fa-brands fa-whatsapp"></i></a>
                </div>
              </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
              <div class="card">
               <div className="img">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMorZp7k3mj5HVD74Iufnp0gwpJgKJOnzybVV5rngUPr6wvA5P1RHoxiuLoz98SB9-qx0&usqp=CAU" class="card-img-top" alt="memberr" />
                </div>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
                <div class="card-body social">
                  <a href="#" className="btn btn-outline-primary"><i class="fa-brands fa-facebook "></i></a>
                  <a href="#" className="btn btn-outline-info"><i class="fa-brands fa-linkedin "></i></a>
                  <a href="#" className=" btn btn-outline-success"><i class="fa-brands fa-whatsapp"></i></a>
                </div>
              </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
              <div class="card">
               <div className="img">
                <img src="https://assets.junipersquare.com/images/careers/_768xAUTO_crop_center-center_97_none/292505/Alejandra.webp?v=1659667836" class="card-img-top" alt="memberr" />
                </div>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
                <div class="card-body social">
                  <a href="#" className="btn btn-outline-primary"><i class="fa-brands fa-facebook "></i></a>
                  <a href="#" className="btn btn-outline-info"><i class="fa-brands fa-linkedin "></i></a>
                  <a href="#" className=" btn btn-outline-success"><i class="fa-brands fa-whatsapp"></i></a>
                </div>
              </div>
              </div>
              <div className="col-lg-3 col-md-6 col-sm-12">
              <div class="card">
               <div className="img">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlbzhRxbSx_xpgK0KQGdl_cgiJUPlaV04jE6L2BZHA2FnpAhI6IuygBoG5EQNFPpESDws&usqp=CAU" class="card-img-top" alt="memberr" />
                </div>
                <div class="card-body">
                  <h5 class="card-title">Card title</h5>
                  <p class="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p>
                </div>
                <div class="card-body social">
                  <a href="#" className="btn btn-outline-primary"><i class="fa-brands fa-facebook "></i></a>
                  <a href="#" className="btn btn-outline-info"><i class="fa-brands fa-linkedin "></i></a>
                  <a href="#" className=" btn btn-outline-success"><i class="fa-brands fa-whatsapp"></i></a>
                </div>
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

export default Team;
