import React, { useEffect, useState } from "react";

function DetailSection1() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://192.168.16.39:4000" + window.location.pathname)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <div className="page-banner">
        <div className="page-banner-img">
          <figure>
            <img src="/assets/images/courses-banner.jpg" alt="course-banner" />
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
                <h4>Courses</h4>
              </div>
              <div className="page-banner-links">
                <a href="/home">Home</a>
                <span>
                  <i className="fa-solid fa-chevron-right"></i>
                </span>
                <a href="/courses">Courses</a>
                <span>
                  <i className="fa-solid fa-chevron-right"></i>
                </span>
                <a href={() => false}>{data.heading}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailSection1;
