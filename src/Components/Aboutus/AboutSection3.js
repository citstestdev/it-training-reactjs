import React, { useEffect, useState } from "react";
import backendurl from "../../constant";

function AboutSection3() {
  const [logo, setLogo] = useState([]);

  useEffect(() => {
    fetch(backendurl + "getpatnerimage/6")
      .then((resg) => resg.json())
      .then((logo) => setLogo(logo));
  }, []);
  return (
    <>
      <section className="about-our-partners-wr align-center">
        <div className="center-wrapper">
          <div className="about-our-partners-content">
            <div
              className="about-our-partners-heading wow bounceInDown"
              data-wow-duration="2s"
              data-wow-delay="0.5s"
            >
              <h3>Our Partners are Giants</h3>
            </div>
            <div
              className="about-our-partners-logos wow fadeIn"
              data-wow-duration="2s"
              data-wow-delay="0.5s"
            >
              <div className="about-our-partners-slider">
                {/* start partner image */}
                {logo.map((plogo, index) => (
                  <div
                    className="about-our-partners-slider-content"
                    key={plogo._id}
                  >
                    <div className="our-partners-logos">
                      <figure>
                        <img
                          src={
                            plogo.imagename
                              ? backendurl + "uploads/" + plogo.imagename
                              : "images/user.png"
                          }
                          data-large={
                            plogo.imagename
                              ? backendurl + "uploads/" + plogo.imagename
                              : "images/user.png"
                          }
                          alt="Our_Partner_4"
                        />
                      </figure>
                    </div>
                  </div>
                ))}
                {/* end partner image */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutSection3;
