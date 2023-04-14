import React from "react";

function Contact() {
  return (
    <>
      <div className="contact">
        <div className="container">
          <h1 className="text-center mt-4">Contact us</h1>
          <div className="row">
            <div className="col-lg-7 col-md-10 col-sm-12 mx-auto">
              <div className="contact_card">
                <div className="social_icon">
                  <a href="#" className="btn btn-outline-primary"><i class="fa-brands fa-facebook "></i>Facebook</a>
                  <a href="#" className="btn btn-outline-info"><i class="fa-brands fa-linkedin "></i>Linkdin</a>
                  <a href="#" className=" btn btn-outline-success"><i class="fa-brands fa-whatsapp"></i>Whatsapp</a>
                </div>
                <div className="contact_form">
                  <form action="">
                  <div className="mb-3">
                      <label
                        for="name"
                        className="form-label"
                      >
                          Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="name"
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        for="exampleFormControlInput1"
                        className="form-label"
                      >
                        Email address
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="name@example.com"
                      />
                    </div>
                    <div className="mb-3">
                      <label
                        for="exampleFormControlTextarea1"
                        className="form-label"
                      >
                        Subject
                      </label>
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="3"
                      ></textarea>
                    </div>
                    <div className="mb-3">
                      <input type="submit" className="btn btn-primary" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
