import React, { useEffect, useState } from "react";

function DetailSection4() {
  return (
    <>
      <div
        className="course-related-journals wow fadeIn"
        data-wow-duration="2s"
        data-wow-delay="0.5s"
      >
        <div className="course-related-haeding">
          <h6>Course Related journals</h6>
        </div>
        <div className="course-related-all-blocks">
          <div className="course-related-blk">
            <figure>
              <a href="#">
                <img
                  src="/assets/images/course-related-img-1.jpg"
                  alt="course-related-img-1"
                />
              </a>
            </figure>
            <div className="course-related-text">
              <h4>
                <a href="#">Into the world of Web Development</a>
              </h4>
            </div>
          </div>
          <div className="course-related-blk">
            <figure>
              <a href="#">
                <img
                  src="/assets/images/course-related-img-2.jpg"
                  alt="course-related-img-2"
                />
              </a>
            </figure>
            <div className="course-related-text">
              <h4>
                <a href="#">Designing the Digital Media & Visuals</a>
              </h4>
            </div>
          </div>
          <div className="course-related-blk">
            <figure>
              <a href="#">
                <img
                  src="/assets/images/course-related-img-3.jpg"
                  alt="course-related-img-3"
                />
              </a>
            </figure>
            <div className="course-related-text">
              <h4>
                <a href="#">Basic of Web Development HTML and CSS</a>
              </h4>
            </div>
          </div>
          <div className="course-related-blk">
            <figure>
              <a href="#">
                <img
                  src="/assets/images/course-related-img-4.jpg"
                  alt="course-related-img-4"
                />
              </a>
            </figure>
            <div className="course-related-text">
              <h4>
                <a href="#">Intro of Google Ad Sense and WordPress</a>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailSection4;
