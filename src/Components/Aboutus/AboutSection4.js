import React, { useEffect, useState } from "react";
import backendurl from "../../constant";
import Section5 from "../../Components/Home/Section5";

function AboutSection4() {
  const [second, setSecond] = useState([]);
  const [thired, setThired] = useState([]);
  const [testimonial, setTestimonial] = useState([]);

  useEffect(() => {
    fetch(backendurl + "getaboutsecond")
      .then((response) => response.json())
      .then((json) => setSecond(json));
  }, []);

  useEffect(() => {
    fetch(backendurl + "getaboutthired")
      .then((response) => response.json())
      .then((json) => setThired(json));
  }, []);

  useEffect(() => {
    fetch(backendurl + "gettestmonial")
      .then((response) => response.json())
      .then((data) => setTestimonial(data));
  }, []);

  return (
    <>
      <section className="about-us-sections">
        <div className="center-wrapper">
          <div className="about-us-common-section clearfix">
            <div
              className="common-img-blk wow fadeInRight"
              data-wow-duration="2s"
              data-wow-delay="0.5s"
            >
              <div className="about-our-journey-img align-center page-mini-heading we-gurantee-main">
                <figure>
                  <img
                    src={
                      backendurl + "uploadimg/400x250/" + second.imagemiddile
                    }
                    alt="about-journey"
                    style={{ width: "100%" }}
                  />
                  <figcaption>
                    <div
                      dangerouslySetInnerHTML={{ __html: second.placement }}
                    />
                  </figcaption>
                </figure>
                <div className="our-alumni-blk align-center">
                  <div className="our-alumni-heading">
                    <h6>Our Alumni work in MNC’s </h6>
                  </div>
                  <div className="our-alumni-content">
                    <div className="our-alumni-slider">
                      {/* Start testimonials loop   */}
                      {testimonial.map((post, index) => (
                        <div
                          className="our-alumni-slider-content"
                          key={post._id}
                        >
                          <figure>
                            <img
                              src={
                                backendurl +
                                "uploadimg/400x250/" +
                                post.imagemiddile
                              }
                              alt="about-journey-slider-img-1"
                              width="100px"
                              height="100px"
                              style={{ borderRadius: "50%" }}
                            />
                          </figure>
                          <div className="our-alumni-slider-heading page-mini-heading">
                            <h4>
                              {post.name}
                              <span>{post.company}</span>
                            </h4>
                          </div>
                        </div>
                      ))}
                      {/* End testimonials loop   */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="common-content-blk our-journey-content wow fadeInLeft"
              data-wow-duration="2s"
              data-wow-delay="0.5s"
            >
              <div className="about-our-journey">
                <div className="about-journey-heading">
                  <h3>{second.heading}</h3>
                </div>
              </div>

              <p dangerouslySetInnerHTML={{ __html: second.description }}></p>
            </div>
          </div>
          <div className="about-us-common-section clearfix">
            <div
              className="common-img-blk our-philosophy-blk wow fadeInLeft"
              data-wow-duration="2s"
              data-wow-delay="0.5s"
            >
              <div className="our-philosophy-img">
                <figure>
                  <img
                    src="assets/images/our-philosophy-img.jpg"
                    alt="our-philosophy-img"
                  />
                  <div
                    className="student-placed-play-btn our-philosophy-play-btn"
                    data-target="youtube"
                    data-v-id="https://www.youtube.com/embed/QpydQu2F0PI"
                  >
                    <div className="student-placed-play-btn-in">
                      <i className="fa-solid fa-play"></i>
                    </div>
                    <div className="video-circle circle-1"></div>
                    <div className="video-circle circle-2"></div>
                    <div className="video-circle circle-3"></div>
                  </div>
                </figure>
              </div>
            </div>
            <div
              className="common-content-blk wow fadeInRight"
              data-wow-duration="2s"
              data-wow-delay="0.5s"
            >
              <div className="our-philosophy-content">
                <div className="our-philosophy-heading">
                  <h3>{thired.heading}</h3>
                </div>
                <p dangerouslySetInnerHTML={{ __html: thired.description }}></p>
              </div>
            </div>
            <div className="popup-bg-wr"></div>
            <div className="popup-content">
              <div className="close-btn">
                <a href={() => false}>X</a>
              </div>
              <div className="popup-video">
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/2nmElY0B9QY"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
                <video
                  className="video-block"
                  controls="true"
                  autoplay="true"
                  muted
                  src=""
                  type="video/mp4"
                ></video>
              </div>
            </div>
          </div>
          <Section5 />
        </div>
      </section>
    </>
  );
}

export default AboutSection4;
