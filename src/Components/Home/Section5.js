import React, { useEffect, useState } from "react";
import backendurl from "../../constant";

function Section5() {
  const [data, setData] = useState([]);
  const [item, setItem] = useState([]);

  useEffect(() => {
    fetch(backendurl + "geteducator")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  useEffect(() => {
    fetch(backendurl + "geteducator/3")
      .then((res) => res.json())
      .then((item) => setItem(item));
  }, []);

  return (
    <>
      <section className="best-educators-wr">
        <div className="center-wrapper">
          <div className="best-educators-content clearfix">
            <div className="best-educators-text left">
              <div
                className="best-educators-heading wow bounceInDown"
                data-wow-duration="2s"
                data-wow-delay="0.25"
              >
                <h3>{data.heading}</h3>
              </div>
              <div className="best-educators-para">
                <p dangerouslySetInnerHTML={{ __html: data.description }}></p>
              </div>
              <div className="best-educators-list">
                <div className="it-training-common-list">
                  <ul>
                    {item.map((post, index) => (
                      <li key={post._id}>{post.title}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="best-educators-btn">
                <a href="#" className="site-btn">
                  Read more
                </a>
              </div>
            </div>
            <div
              className="best-educators-image right wow fadeInRight"
              data-wow-duration="2s"
            >
              <figure>
                <img
                  src="assets/images/best-educators-image.svg"
                  alt="best-educators-image"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Section5;
