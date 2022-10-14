import React, { useEffect, useState } from "react";
import backendurl from "../../constant";

function Section6() {
  const [data, setData] = useState([]);
  const [achieve, setAchieve] = useState([]);

  useEffect(() => {
    fetch(backendurl + "getachievement")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  useEffect(() => {
    fetch(backendurl + "getachievement/4")
      .then((res) => res.json())
      .then((achieve) => setAchieve(achieve));
  }, []);

  return (
    <>
      <section className="our-achievement-wr">
        <div className="center-wrapper">
          <div className="our-achievement-content clearfix">
            <div className="our-achievement-detail left">
              <div className="our-achievement-detail-inner">
                <figure>
                  <img
                    src="assets/images/our-achievements.svg"
                    alt="our-achievements"
                  />
                </figure>
                <div className="our-achievement-text">
                  <div className="our-achievement-heading page-bold-heading wow">
                    <h4>{data.heading}</h4>
                  </div>
                  <div className="our-achievement-para">
                    <p
                      dangerouslySetInnerHTML={{ __html: data.description }}
                    ></p>
                  </div>
                </div>
              </div>
            </div>
            <div className="our-achievement-counters right">
              <div className="our-achievement-counters-inner">
                <div className="our-achievement-counter-blk clearfix align-center">
                  {/* ============== Start ==================== */}
                  {achieve.map((post, index) => (
                    <div
                      className="counter-blk left wow fadeIn"
                      data-wow-duration="2s"
                      data-wow-delay="0.35s"
                      key={post._id}
                    >
                      <div className="counter-con">
                        <h4
                          className="counter-value"
                          data-count={post.numofdata}
                        >
                          <span></span>
                        </h4>
                        <span>{post.range}</span>
                      </div>
                      <p>{post.title}</p>
                    </div>
                  ))}
                  {/* ================ End ==================== */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Section6;
