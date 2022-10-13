import React from "react";

function BlogSection1() {
  const title = window.location.href.substring(
    window.location.href.lastIndexOf("/") + 1
  );

  return (
    <>
      <div className="page-banner">
        <div className="page-banner-img">
          <figure>
            <img
              src="assets/images/courses-banner.jpg"
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
                <h4>{title.replace("-", " ").toUpperCase()}</h4>
              </div>
              <div className="page-banner-links">
                <a href="index.html">Home</a>
                <span>
                  <i className="fa-solid fa-chevron-right"></i>
                </span>
                <a href="javascript:;">{title}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogSection1;
