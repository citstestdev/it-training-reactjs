import React, { useEffect, useState } from "react";
import backendurl from "../../constant";

function AboutSection2() {
  const [main, setMain] = useState([]);
  const [item, setItem] = useState([]);
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetch(backendurl + "getaboutus")
      .then((response) => response.json())
      .then((json) => setMain(json));
  }, []);

  useEffect(() => {
    fetch(backendurl + "getaboutusitem")
      .then((resp) => resp.json())
      .then((json) => setItem(json));
  }, []);

  useEffect(() => {
    fetch(backendurl + "allusers")
      .then((resu) => resu.json())
      .then((user) => setUser(user));
  }, []);

  return (
    <>
      <section className="about-us-wr">
        <div className="center-wrapper">
          <div className="about-us-content clearfix">
            <div className="about-us-image left">
              <figure
                className="wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.5s"
              >
                <img src="assets/images/about-us-image.jpg" alt="about-us" />
              </figure>
              <div className="ux-course-student-joined">
                <div
                  className="ux-master-course align-center wow fadeInLeft"
                  data-wow-duration="2s"
                  data-wow-delay="0.5s"
                >
                  <figure>
                    <img
                      src="assets/images/about-us-ux-course.svg"
                      alt="about-us-ux-course"
                    />
                  </figure>
                  <div className="ux-master-course-heading">
                    <h6>UX Master Course</h6>
                  </div>
                  <div className="ux-master-course-sub-heading page-mini-heading">
                    <h4>Batch starting from</h4>
                  </div>
                  <div className="ux-master-course-btn">
                    <a href={() => false}>Enroll now</a>
                  </div>
                </div>
                <div className="student-joined">
                  <div className="student-joined-inner">
                    <div className="student-joined-images">
                      {user.map((u, index) => (
                        <figure>
                          <a href={() => false}>
                            <img
                              src={
                                u.imagemiddile
                                  ? backendurl +
                                    "uploadimg/400x250/" +
                                    u.imagemiddile
                                  : "/images/user.png"
                              }
                              alt="our-blogs"
                            />
                          </a>
                        </figure>
                      ))}
                    </div>
                    <div className="student-joined-text">
                      <div className="student-joined-heading page-mini-heading">
                        <h4>
                          Over <span>{user.length}+</span> Students Joined
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="about-us-text right">
              <div className="about-us-text-inner">
                <div
                  className="about-us-heading wow bounceInDown"
                  data-wow-duration="2s"
                  data-wow-delay="0.5s"
                >
                  <h3>{main.heading}</h3>
                </div>
                <div className="about-us-para">
                  <div dangerouslySetInnerHTML={{ __html: main.description }} />
                </div>
                <div className="about-us-list">
                  <div
                    className="about-us-list-heading wow bounceInDown"
                    data-wow-duration="2s"
                    data-wow-delay="0.5s"
                  >
                    <h6>Courses we Offer</h6>
                  </div>
                  <div className="it-training-common-list">
                    <ul>
                      {item.map((post, index) => (
                        <li key={post._id}>{post.title}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="about-us-btn">
                  <a href={() => false} className="site-btn">
                    View more
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutSection2;
