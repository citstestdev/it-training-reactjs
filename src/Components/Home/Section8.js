import React, { useEffect, useState } from "react";
import backendurl from "../../constant";

function Section8() {
  const [data, setData] = useState([]);
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch(backendurl + "getjobguarantee")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  useEffect(() => {
    fetch(backendurl + "getjobguarantee/3")
      .then((res) => res.json())
      .then((item) => setItem(item));
  }, []);

  return (
    <>
      <section className="job-program-wr">
        <div className="center-wrapper">
          <div className="job-program-content align-center">
            <div
              className="job-program-heading wow bounceInDown"
              data-wow-duration="2s"
              data-wow-delay="0.25s"
            >
              <h3>{data.heading}</h3>
            </div>
            <div className="job-program-para">
              <p dangerouslySetInnerHTML={{ __html: data.description }}></p>
            </div>
            <div className="job-program-all-boxes clearfix">
              {/* ======================= Start ========================= */}
              {item.map((post, index) => (
                <div
                  className="job-program-box left money-back wow fadeIn"
                  data-wow-duration="2s"
                  data-wow-delay="0.25s"
                  key={post._id}
                >
                  <figure className="align-center">
                    <img
                      src={backendurl + "uploads/" + post.image}
                      alt="job-program-icon-1"
                    />
                  </figure>
                  <div className="job-program-box-heading">
                    <h4>{post.heading}</h4>
                  </div>
                  <div className="job-program-box-list">
                    <div className="it-training-common-list">
                      <ul>
                        <li>{post.point1}</li>
                        <li>{post.point2}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
              {/* ======================= End ========================= */}
            </div>
            <div className="job-program-btn">
              <a
                href="assets/images/job-program-icon-1.svg"
                download="Job Guarantee Brochure"
                className="site-btn"
              >
                Job Guarantee Brochure
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Section8;
