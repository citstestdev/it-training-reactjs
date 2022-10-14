import React, { useEffect, useState } from "react";
// import axios from "axios";
import backendurl from "../../constant";

function Section3() {
  const [data, setData] = useState([]);
  const [review, setReview] = useState([]);
  const [logo, setLogo] = useState([]);

  useEffect(() => {
    fetch(backendurl + "gotrecently")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  useEffect(() => {
    fetch(backendurl + "getreview")
      .then((res) => res.json())
      .then((review) => setReview(review));
  }, []);

  useEffect(() => {
    fetch(backendurl + "getpatnerimage/6")
      .then((resg) => resg.json())
      .then((logo) => setLogo(logo));
  }, []);

  return (
    <>
      <section className="student-placed-wr">
        <div className="center-wrapper">
          <div className="student-placed-content clearfix">
            <div className="student-placed-left-blk left">
              <div className="student-placed-left-blk-inner">
                <div
                  className="student-placed-heading wow bounceInDown"
                  data-wow-duration="2s"
                  data-wow-delay="0.5s"
                >
                  <h3>{data.heading}</h3>
                </div>
                <div className="student-placed-para">
                  <p dangerouslySetInnerHTML={{ __html: data.description }}></p>
                </div>
                <div className="our-partners-blk">
                  <div className="our-partners-heading">
                    <h4>{data.logoheading}</h4>
                  </div>
                  <div className="our-partners-logos clearfix">
                    {logo.map((plogo, index) => (
                      <figure
                        className="left wow fadeIn"
                        data-wow-duration="2s"
                        data-wow-delay="0.25s"
                        key={plogo._id}
                      >
                        <img
                          src={backendurl + "uploadimg/" + plogo.imagename}
                          alt="Our_Partner_1"
                        />
                      </figure>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="student-placed-video-blk right align-center">
              <div className="student-placed-slider">
                {/* =================== Start ======================= */}
                {review.map((post, index) => (
                  <div className="student-placed-slider-content" key={post._id}>
                    <div className="slider-content-top">
                      <figure className="align-center">
                        <img
                          src="assets/images/student-placed-video-bg.jpg"
                          alt="student-placed-video-bg"
                        />
                        <figcaption></figcaption>
                      </figure>
                      <div
                        className="student-placed-play-btn"
                        data-target="youtube"
                        data-v-id={post.videourl}
                      >
                        <div className="student-placed-play-btn-in">
                          <i className="fa-solid fa-play"></i>
                        </div>
                        <div className="video-circle circle-1"></div>
                        <div className="video-circle circle-2"></div>
                        <div className="video-circle circle-3"></div>
                      </div>
                    </div>
                    <div className="student-placed-video-blk-detail">
                      <p
                        dangerouslySetInnerHTML={{ __html: post.description }}
                      ></p>
                      <div className="video-blk-name-heading page-mini-heading">
                        <h6>{post.name}</h6>
                        <h4>{post.designation}</h4>
                      </div>
                    </div>
                  </div>
                ))}
                {/* =================== end ======================= */}
              </div>
            </div>

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
        </div>
      </section>
    </>
  );
}

export default Section3;
