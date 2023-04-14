import React from "react";
import { NavLink } from "react-router-dom";

function About() {
  return (
    <>
      <div className="about">
        <div className="container mt-5">
          <h1 className="text-center mt-2">About Us</h1>
          <div className="about_card">
            <div className="text_content">
              <h2 className="mt-3">About Our Company</h2>
              <p className="mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
                a illo tempore quisquam obcaecati fuga reiciendis ullam id
                accusantium facilis ducimus, perferendis vel omnis, natus
                similique cum perspiciatis numquam nobis tempora. Debitis, alias
                distinctio laboriosam quae explicabo nesciunt tenetur saepe
                nihil consequatur est, velit numquam dolore sequi iure. Debitis,
                quidem.
              </p>
              <NavLink to="/contact"><button className="btn btn-outline-primary mt-3">Contact us</button></NavLink>
            </div>
            <div className="img">
              <img src="https://i.postimg.cc/2jZHVF9s/hfc-rules-removebg-preview.png" alt="about" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
