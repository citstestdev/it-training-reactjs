import React, { useEffect, useState } from "react";
import backendurl from "../../constant";

function BlogSection4() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(backendurl + "getcategoryitem/4")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <>
      <div
        className="our-categories-blk blog-right-con wow fadeIn"
        data-wow-duration="2s"
        data-wow-delay="0.5s"
      >
        <div className="recent-courses-tag-main-heading">
          <h6>Our Courses Categories</h6>
        </div>
        <div className="recent-courses-tag-con">
          {/* ===================== Start =========================== */}
          {data.map((post, index) => (
            <div className="recent-courses-tag-content" key={post._id}>
              <div className="recent-courses-tag-img">
                <figure className={"testimonial-" + post.color + "-bg"}>
                  <a href={() => false}>
                    <img
                      src={backendurl + "uploads/" + post.image}
                      alt="blog-our-course-categories-01"
                    />
                  </a>
                </figure>
              </div>
              <div className="recent-courses-tag-heading">
                <div className="course-categories recent-posts-content-heading page-medium-heading">
                  <h4>
                    <a
                      href="/home#homecategory"
                      className={post.color + "-color-hover"}
                    >
                      {post.heading}
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          ))}
          {/* ========================= End =========================== */}
        </div>
      </div>
    </>
  );
}

export default BlogSection4;
