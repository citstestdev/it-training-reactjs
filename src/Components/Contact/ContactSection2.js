import React, { useEffect, useState } from "react";
import backendurl from "../../constant";

function ContactSection2() {
  const [data, setData] = useState([]);
  const [contact, setContact] = useState([]);

  useEffect(() => {
    fetch(backendurl + "option-show")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  useEffect(() => {
    fetch(backendurl + "contactdata")
      .then((response) => response.json())
      .then((data) => setContact(data));
  }, []);

  return (
    <>
      <section className="connect-us-wr">
        <div className="center-wrapper">
          <div className="connect-us-content align-center">
            <div
              className="connect-us-heading wow bounceInDown"
              data-wow-duration="2s"
              data-wow-delay="0.5s"
            >
              <h3>{contact.heading}</h3>
            </div>
            <div className="connect-us-para">
              <p dangerouslySetInnerHTML={{ __html: contact.description }}></p>
            </div>
            <div className="contact-boxes clearfix">
              <div
                className="contact-box left wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.25s"
              >
                <div className="contact-box-img">
                  <figure>
                    <img
                      src="assets/images/contact-us-office-address.svg"
                      alt="contact-us-office-address"
                    />
                  </figure>
                </div>
                <div className="contact-box-heading">
                  <h6>Office Address</h6>
                </div>
                <div className="contact-box-para">
                  <p>
                    <a
                      href="https://goo.gl/maps/hdT9URgd6pKzTqGn7"
                      target="_blank"
                    >
                      {data.address}
                    </a>
                  </p>
                </div>
              </div>
              <div
                className="contact-box left wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.45s"
              >
                <div className="contact-box-img">
                  <figure>
                    <img
                      src="assets/images/contact-us-phone.svg"
                      alt="contact-us-phone.svg"
                    />
                  </figure>
                </div>
                <div className="contact-box-heading">
                  <h6>Contact Details</h6>
                </div>
                <div className="contact-box-para">
                  <p>
                    <span>
                      <a href="tel: +(91)9009142926">
                        Call us now +(91) {data.phone}
                      </a>
                    </span>
                    <br></br>
                    <span>
                      <a href="mailto: info@ittrainingindore.in">
                        {data.clientemail}
                      </a>
                    </span>
                  </p>
                </div>
              </div>
              <div
                className="contact-box office-timing-box left wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.65s"
              >
                <div className="contact-box-img">
                  <figure>
                    <img
                      src="assets/images/contact-us-timing.svg"
                      alt="contact-us-timing.svg"
                    />
                  </figure>
                </div>
                <div className="contact-box-heading">
                  <h6>Office Timing</h6>
                </div>
                <div className="contact-box-para">
                  <p>{contact.officetime}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactSection2;
