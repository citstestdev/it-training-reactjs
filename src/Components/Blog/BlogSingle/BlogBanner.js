import React, { useEffect, useState } from "react";

function BlogBanner() {
  const [single, setSingle] = useState([]);
  useEffect(() => {
    fetch("http://192.168.16.39:4000" + window.location.pathname)
      .then((resl) => resl.json())
      .then((single) => setSingle(single));
  }, []);

  return (
    <>
      <div className="page-banner">
        <div className="page-banner-img">
          <figure>
            <img
              src="/assets/images/courses-banner.jpg"
              alt="course-banner-image"
            />
          </figure>
        </div>
        <div className="page-banner-con">
          <div className="center-wrapper">
            <div className="page-banner-content">
              <div
                className="page-banner-heading wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.5s"
              >
                <h4>BLOG</h4>
              </div>
              <div className="page-banner-links">
                <a href="index.html">Home</a>
                <span>
                  <i className="fa-solid fa-chevron-right"></i>
                </span>
                <a href="javascript:;">blog</a>
                <span>
                  <i className="fa-solid fa-chevron-right"></i>
                </span>
                <a href="javascript:;">{single.heading}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogBanner;
