import React, { useEffect, useState } from "react";
import backendurl from "../../constant";

function AboutSection5() {
  const [achieve, setAchieve] = useState([]);

  useEffect(() => {
    fetch(backendurl + "getachievement/4")
      .then((res) => res.json())
      .then((achieve) => setAchieve(achieve));
  }, []);

  return (
    <>
      <section className="proud-stats-wr">
        <div className="center-wrapper">
          <div className="proud-stats-content align-center">
            <div
              className="proud-stats-heading wow bounceInDown"
              data-wow-duration="2s"
              data-wow-delay="0.5s"
            >
              <h3>We feel proud about our Stats</h3>
            </div>
            <div className="our-achievement-counter-blk proud-stats-counter clearfix">
              {/* start loop  */}
              {achieve.map((post, index) => (
                <div
                  className="counter-blk left wow fadeIn"
                  data-wow-duration="2s"
                  data-wow-delay="0.5s"
                  key={post._id}
                >
                  <div className="counter-con">
                    <h4
                      className="counter-value"
                      data-count={post.numofdata}
                    ></h4>
                    <span>{post.range}</span>
                  </div>
                  <p>{post.title}</p>
                </div>
              ))}
              {/* end loop  */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutSection5;
