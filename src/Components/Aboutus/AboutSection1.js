import React, { useEffect, useState } from "react";
import backendurl from "../../constant";

function AboutSection1() {
  const [data, setData] = useState([]);

  const title = window.location.href.substring(
    window.location.href.lastIndexOf("/") + 1
  );

  useEffect(() => {
    fetch(backendurl + "getaboutus")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
  return (
    <>
      <div className="page-banner">
        <div className="page-banner-img">
          <figure>
            {data.featured !== "" ? (
              <img
                src={backendurl + "uploads/" + data.featured}
                alt="course-banner"
              />
            ) : (
              <img src="assets/images/courses-banner.jpg" alt="course-banner" />
            )}
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

export default AboutSection1;
