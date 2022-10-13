import React, { useEffect, useState } from "react";
import backendurl from "../../constant";

function Section7() {
  const [data, setData] = useState([]);
  const [blog, setBlog] = useState([]);

  useEffect(() => {
    fetch(backendurl + "getblog")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  useEffect(() => {
    fetch(backendurl + "getblog/3")
      .then((res) => res.json())
      .then((blog) => setBlog(blog));
  }, []);

  return (
    <>
      <section className="latest-blog-wr">
        <div
          className="latest-blog-image wow fadeInLeft"
          data-wow-duration="2s"
          data-wow-delat="0.25s"
        >
          <figure>
            <img src="assets/images/our-blogs.jpg" alt="our-blogs-image" />
          </figure>
        </div>
        <div className="latest-blog-con">
          <div className="center-wrapper">
            <div className="latest-blog-content clearfix">
              <div
                className="latest-blog-blk right wow fadeInRight"
                data-wow-duration="2s"
                data-wow-delay="0.25s"
              >
                <div
                  className="latest-blog-heading wow bounceInDown"
                  data-wow-duration="2s"
                  data-wow-delay="1s"
                >
                  <h3 style={{ textTransform: "capitalize" }}>
                    {data.heading}
                  </h3>
                </div>
                <div className="latest-blog-para">
                  <p dangerouslySetInnerHTML={{ __html: data.description }}></p>
                </div>
                <div className="latest-blog-mob-image">
                  <figure>
                    <img
                      src={backendurl + "uploads/" + data.image}
                      alt="our-blogs-image"
                    />
                  </figure>
                </div>
                <div className="latest-blog-detail-con">
                  {/* ====================== Start ========================= */}
                  {blog.map((post, index) => (
                    <div className="latest-blog-detail clearfix" key={post._id}>
                      <div className="latest-blog-heading-blk left">
                        <div className="latest-blog-date align-center">
                          <div className="latest-blog-date-in">
                            <h6 className="card-violet-color">
                              {new Date(post.createAt).toLocaleString("en-us", {
                                day: "numeric",
                              }) + "th"}
                            </h6>
                            <h5>
                              {new Date(post.createAt).toLocaleString("en-us", {
                                month: "short",
                              })}
                            </h5>
                          </div>
                        </div>
                        <div className="latest-blog-heading-in">
                          <h4 style={{ textTransform: "capitalize" }}>
                            {post.heading}
                            <span
                              className="card-violet-color"
                              style={{ textTransform: "capitalize" }}
                            >
                              {post.blogtype}
                            </span>
                          </h4>
                        </div>
                      </div>
                      <div className="latest-blog-btn right">
                        <h6>
                          <a href={"blogsingle/" + post.bslugname}>Read More</a>
                        </h6>
                      </div>
                    </div>
                  ))}
                  {/* ====================== End ========================= */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Section7;
