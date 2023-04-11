import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function Testimonial() {
  return (
    <>
      <div className="testimonialcontainer">
        <div className="container">
        <h2>Our Happy</h2>
          <h1>Clients</h1>
          <OwlCarousel className="owl-theme" loop margin={5} nav items={2} autoplay={true} animateOut={true}>
            <div class="item">
              <div className="testimonial">
                <div className="pic">
                  <img src="https://images.pexels.com/photos/704955/pexels-photo-704955.jpeg?w=940&h=650&auto=compress&cs=tinysrgb" />
                </div>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  malesuada vulputate nisi in fermentum. Vivamus ac libero quis
                  nisi auctor pulvinar. Aenean sit amet lectus posuere, mattis
                  massa eget, ullamcorper diam. Nunc sit amet felis eget arcu
                  congue dictum.
                </p>
                <h3 className="title">Jessica</h3>
                <small className="post">- Archietect</small>
              </div>
            </div>
            <div class="item">
              <div className="testimonial">
                <div className="pic">
                  <img src="https://images.pexels.com/photos/704955/pexels-photo-704955.jpeg?w=940&h=650&auto=compress&cs=tinysrgb" />
                </div>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  malesuada vulputate nisi in fermentum. Vivamus ac libero quis
                  nisi auctor pulvinar. Aenean sit amet lectus posuere, mattis
                  massa eget, ullamcorper diam. Nunc sit amet felis eget arcu
                  congue dictum.
                </p>
                <h3 className="title">Jessica</h3>
                <small className="post">- Archietect</small>
              </div>
            </div>
            <div class="item">
              <div className="testimonial">
                <div className="pic">
                  <img src="https://images.pexels.com/photos/704955/pexels-photo-704955.jpeg?w=940&h=650&auto=compress&cs=tinysrgb" />
                </div>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  malesuada vulputate nisi in fermentum. Vivamus ac libero quis
                  nisi auctor pulvinar. Aenean sit amet lectus posuere, mattis
                  massa eget, ullamcorper diam. Nunc sit amet felis eget arcu
                  congue dictum.
                </p>
                <h3 className="title">Jessica</h3>
                <small className="post">- Archietect</small>
              </div>
            </div>
            <div class="item">
              <div className="testimonial">
                <div className="pic">
                  <img src="https://images.pexels.com/photos/704955/pexels-photo-704955.jpeg?w=940&h=650&auto=compress&cs=tinysrgb" />
                </div>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  malesuada vulputate nisi in fermentum. Vivamus ac libero quis
                  nisi auctor pulvinar. Aenean sit amet lectus posuere, mattis
                  massa eget, ullamcorper diam. Nunc sit amet felis eget arcu
                  congue dictum.
                </p>
                <h3 className="title">Jessica</h3>
                <small className="post">- Archietect</small>
              </div>
            </div>
            <div class="item">
              <div className="testimonial">
                <div className="pic">
                  <img src="https://images.pexels.com/photos/704955/pexels-photo-704955.jpeg?w=940&h=650&auto=compress&cs=tinysrgb" />
                </div>
                <p className="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  malesuada vulputate nisi in fermentum. Vivamus ac libero quis
                  nisi auctor pulvinar. Aenean sit amet lectus posuere, mattis
                  massa eget, ullamcorper diam. Nunc sit amet felis eget arcu
                  congue dictum.
                </p>
                <h3 className="title">Jessica</h3>
                <small className="post">- Archietect</small>
              </div>
            </div>
          </OwlCarousel>
          ;
        </div>
      </div>
    </>
  );
}

export default Testimonial;
