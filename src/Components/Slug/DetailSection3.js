import React, { useEffect, useState } from "react";

function DetailSection3() {
  return (
    <>
      <section className="related-courses-wr">
        <div className="center-wrapper">
          <div className="related-courses-content">
            <div
              className="related-courses-heading wow bounceInDown"
              data-wow-duration="2s"
              data-wow-delay="0.5s"
            >
              <h3>Related Courses</h3>
            </div>
            <div className="related-courses-blk clearfix">
              <div
                className="related-courses-cards left card wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.25s"
              >
                <div className="related-courses-image">
                  <figure>
                    <img
                      src="/assets/images/related-courses-img-1.jpg"
                      alt="related-courses-img-1"
                    />
                  </figure>
                </div>
                <div className="related-courses-details">
                  <div className="related-courses-card-heading">
                    <h6>Full Stack UX Designing</h6>
                  </div>
                  <div className="related-card-heading-text">
                    <div className="related-courses-info">
                      <div className="card-sub-heading page-mini-heading">
                        <h4>Regular</h4>
                      </div>
                      <div className="card-sub-heading-info page-mini-heading">
                        <h4>12 months</h4>
                      </div>
                    </div>
                    <div className="related-courses-info">
                      <div className="card-sub-heading page-mini-heading">
                        <h4>Batch</h4>
                      </div>
                      <div className="card-sub-heading-info page-mini-heading">
                        <h4>Starting from April</h4>
                      </div>
                    </div>
                    <div className="related-courses-info">
                      <div className="card-sub-heading page-mini-heading">
                        <h4>Batch size</h4>
                      </div>
                      <div className="card-sub-heading-info page-mini-heading">
                        <h4>30</h4>
                      </div>
                    </div>
                  </div>
                  <div className="it-training-card-btn related-courses-btn">
                    <h6>
                      <a href="#">Details</a>
                    </h6>
                  </div>
                </div>
              </div>
              <div
                className="related-courses-cards left card wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.45s"
              >
                <div className="related-courses-image">
                  <figure>
                    <img
                      src="/assets/images/related-courses-img-2.jpg"
                      alt="related-courses-img-1"
                    />
                  </figure>
                </div>
                <div className="related-courses-details">
                  <div className="related-courses-card-heading">
                    <h6>Graphic Designing</h6>
                  </div>
                  <div className="related-card-heading-text">
                    <div className="related-courses-info">
                      <div className="card-sub-heading page-mini-heading">
                        <h4>Regular</h4>
                      </div>
                      <div className="card-sub-heading-info page-mini-heading">
                        <h4>12 months</h4>
                      </div>
                    </div>
                    <div className="related-courses-info">
                      <div className="card-sub-heading page-mini-heading">
                        <h4>Batch</h4>
                      </div>
                      <div className="card-sub-heading-info page-mini-heading">
                        <h4>Starting from April</h4>
                      </div>
                    </div>
                    <div className="related-courses-info">
                      <div className="card-sub-heading page-mini-heading">
                        <h4>Batch size</h4>
                      </div>
                      <div className="card-sub-heading-info page-mini-heading">
                        <h4>30</h4>
                      </div>
                    </div>
                  </div>
                  <div className="it-training-card-btn related-courses-btn">
                    <h6>
                      <a href="#">Details</a>
                    </h6>
                  </div>
                </div>
              </div>
              <div
                className="related-courses-cards left card wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.65s"
              >
                <div className="related-courses-image">
                  <figure>
                    <img
                      src="/assets/images/related-courses-img-3.jpg"
                      alt="related-courses-img-3"
                    />
                  </figure>
                </div>
                <div className="related-courses-details">
                  <div className="related-courses-card-heading">
                    <h6>Visuals Hierarchy</h6>
                  </div>
                  <div className="related-card-heading-text">
                    <div className="related-courses-info">
                      <div className="card-sub-heading page-mini-heading">
                        <h4>Regular</h4>
                      </div>
                      <div className="card-sub-heading-info page-mini-heading">
                        <h4>12 months</h4>
                      </div>
                    </div>
                    <div className="related-courses-info">
                      <div className="card-sub-heading page-mini-heading">
                        <h4>Batch</h4>
                      </div>
                      <div className="card-sub-heading-info page-mini-heading">
                        <h4>Starting from April</h4>
                      </div>
                    </div>
                    <div className="related-courses-info">
                      <div className="card-sub-heading page-mini-heading">
                        <h4>Batch size</h4>
                      </div>
                      <div className="card-sub-heading-info page-mini-heading">
                        <h4>30</h4>
                      </div>
                    </div>
                  </div>
                  <div className="it-training-card-btn related-courses-btn">
                    <h6>
                      <a href="#">Details</a>
                    </h6>
                  </div>
                </div>
              </div>
              <div
                className="related-courses-cards left card wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.85s"
              >
                <div className="related-courses-image">
                  <figure>
                    <img
                      src="/assets/images/related-courses-img-4.jpg"
                      alt="related-courses-img-4"
                    />
                  </figure>
                </div>
                <div className="related-courses-details">
                  <div className="related-courses-card-heading">
                    <h6>Typography in UI</h6>
                  </div>
                  <div className="related-card-heading-text">
                    <div className="related-courses-info">
                      <div className="card-sub-heading page-mini-heading">
                        <h4>Regular</h4>
                      </div>
                      <div className="card-sub-heading-info page-mini-heading">
                        <h4>12 months</h4>
                      </div>
                    </div>
                    <div className="related-courses-info">
                      <div className="card-sub-heading page-mini-heading">
                        <h4>Batch</h4>
                      </div>
                      <div className="card-sub-heading-info page-mini-heading">
                        <h4>Starting from April</h4>
                      </div>
                    </div>
                    <div className="related-courses-info">
                      <div className="card-sub-heading page-mini-heading">
                        <h4>Batch size</h4>
                      </div>
                      <div className="card-sub-heading-info page-mini-heading">
                        <h4>30</h4>
                      </div>
                    </div>
                  </div>
                  <div className="it-training-card-btn related-courses-btn">
                    <h6>
                      <a href="#">Details</a>
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DetailSection3;
