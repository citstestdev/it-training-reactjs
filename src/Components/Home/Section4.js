import React, { useEffect, useState } from "react";
import backendurl from "../../constant";

function Section4() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(backendurl + "getcategoryitem/5")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <section className="explore-categories-wr" id="homecategory">
        <div className="center-wrapper">
          <div className="explore-categories-content">
            <div
              className="explore-categories-heading wow bounceInDown"
              data-wow-duration="2s"
            >
              <h3>Explore the Categories</h3>
            </div>
            <div className="it-training-cards-second">
              <div className="explore-categories-slider">
                {/*  ================= start =====================  */}
                {data.map((post, index) => (
                  <div
                    className={
                      "it-training-second-card card-img-" +
                      post.color +
                      "-bg yellow-border-hover"
                    }
                    id={"card-" + index + "-color"}
                    key={post._id}
                  >
                    <figure>
                      <img
                        src={backendurl + "uploads/" + post.image}
                        alt="blog-our-course-categories-01"
                      />
                    </figure>
                    <div className="it-training-second-card-heading">
                      <h5>{post.heading}</h5>
                    </div>
                    <div className="it-training-second-card-para">
                      <p
                        dangerouslySetInnerHTML={{ __html: post.description }}
                      ></p>
                    </div>
                    <div className="it-training-second-card-btn">
                      <h6>
                        <a
                          href={() => false}
                          className={"card-" + post.color + "-color"}
                          id={"card-" + index + "-color"}
                        >
                          Explore
                        </a>
                      </h6>
                    </div>
                  </div>
                ))}
                {/*  ================= end =====================  */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Section4;
