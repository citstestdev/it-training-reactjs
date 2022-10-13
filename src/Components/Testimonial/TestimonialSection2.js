import React, { useEffect, useState } from "react";
// import { NavItem } from "react-bootstrap";
import backendurl from "../../constant";

function TestimonialSection2() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(backendurl + "gettestmonial")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  var flag;
  var i = 1;

  return (
    <>
      <section className="testimonials-cards-wr">
        <div className="center-wrapper">
          <div className="testimonials-cards-content align-center">
            <div className="testimonials-all-cards clearfix">
              {/* ========   start ======= */}
              {data.map((post, index) => (
                <div
                  className="testimonials-card left wow fadeIn"
                  data-wow-duration="2s"
                  data-wow-delay="0.15s"
                  key={post._id}
                >
                  <p style={{ display: "none" }}>{i == 1 && (flag = index)}</p>
                  {flag == 0 && (
                    <figure className="testimonial-yellow-bg testimonial-quote-img">
                      <img
                        src="assets/images/testimonial-card-yellow-quote.svg"
                        alt="testimonial-card-yellow-quote"
                      />
                    </figure>
                  )}
                  {flag == 1 && (
                    <figure className="testimonial-green-bg testimonial-quote-img">
                      <img
                        src="assets/images/testimonial-card-green-quote.svg"
                        alt="testimonial-card-green-quote"
                      />
                    </figure>
                  )}
                  {flag == 2 && (
                    <figure className="testimonial-violet-bg testimonial-quote-img">
                      <img
                        src="assets/images/testimonial-card-violet-quote.svg"
                        alt="testimonial-card-violet-quote"
                      />
                    </figure>
                  )}
                  {flag == 0 && (
                    <div className="card-hover card-hover-yellow">
                      <div className="testimonials-yellow-name">
                        <h6>{post.name}</h6>
                      </div>
                      <div className="testimonials-card-deatils">
                        <div className="testimonials-card-front">
                          <div className="testimonials-course-name page-mini-heading">
                            <a
                              href="#"
                              className="testimonial-yellow-bg testimonial-yellow-color"
                            >
                              {post.designation}
                            </a>
                          </div>
                          <div className="testimonials-student-image">
                            <figure>
                              <img
                                src={
                                  post.imagemiddile
                                    ? backendurl +
                                      "uploadimg/400x250/" +
                                      post.imagemiddile
                                    : "images/user.png"
                                }
                                data-large={
                                  post.imagemiddile
                                    ? backendurl +
                                      "uploadimg/400x250/" +
                                      post.imagemiddile
                                    : "images/user.png"
                                }
                                alt="testimonials-card-img-1"
                              />
                            </figure>
                          </div>
                        </div>
                        <div className="testimonials-card-back">
                          <div className="student-reviews">
                            <p>{post.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {flag == 1 && (
                    <div className="card-hover card-hover-green">
                      <div className="testimonials-green-name">
                        <h6>{post.name}</h6>
                      </div>
                      <div className="testimonials-card-deatils">
                        <div className="testimonials-card-front">
                          <div className="testimonials-course-name page-mini-heading">
                            <a
                              href="#"
                              className="testimonial-green-bg testimonial-green-color"
                            >
                              {post.designation}
                            </a>
                          </div>
                          <div className="testimonials-student-image">
                            <figure>
                              <img
                                src={
                                  backendurl +
                                  "uploadimg/400x250/" +
                                  post.imagemiddile
                                }
                                alt="testimonials-card-img-1"
                              />
                            </figure>
                          </div>
                        </div>
                        <div className="testimonials-card-back">
                          <div className="student-reviews">
                            <p>{post.description}</p>
                            {/* <p>{post.designation}</p> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {flag == 2 && (
                    <div className="card-hover card-hover-violet">
                      <div className="testimonials-violet-name">
                        <h6>{post.name}</h6>
                      </div>
                      <div className="testimonials-card-deatils">
                        <div className="testimonials-card-front">
                          <div className="testimonials-course-name page-mini-heading">
                            <a
                              href="#"
                              className="testimonial-violet-bg testimonial-violet-color"
                            >
                              {post.designation}
                            </a>
                          </div>
                          <div className="testimonials-student-image">
                            <figure>
                              <img
                                src={
                                  backendurl +
                                  "uploadimg/400x250/" +
                                  post.imagemiddile
                                }
                                alt="testimonials-card-img-1"
                              />
                            </figure>
                          </div>
                        </div>
                        <div className="testimonials-card-back">
                          <div className="student-reviews">
                            <p>{post.description}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <p style={{ display: "none" }}>{2 == flag && (i = 2)}</p>
                  <p style={{ display: "none" }}>
                    {2 == flag ? (flag = 0) : flag++}
                  </p>
                </div>
              ))}
              {/* ======== End ========== */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TestimonialSection2;
