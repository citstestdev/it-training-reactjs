import React, { useEffect, useState } from "react";
import backendurl from "../../../constant";
import BlogSection3 from "../BlogSection3";
import BlogSection4 from "../BlogSection4";
import BlogSection5 from "../BlogSection5";
import BlogBanner from "./BlogBanner";

function BlogSingle() {
  const [blog, setBlog] = useState([]);
  const [single, setSingle] = useState([]);
  useEffect(() => {
    fetch(backendurl + "getblog/3")
      .then((res) => res.json())
      .then((blog) => setBlog(blog));
  }, []);

  useEffect(() => {
    fetch("http://192.168.16.39:4000" + window.location.pathname)
      .then((resl) => resl.json())
      .then((single) => setSingle(single));
  }, []);

  return (
    <>
      <section className="it-training-blog-wr">
        <div className="center-wrapper">
          <div className="blog-page-content clearfix">
            <div className="course-detail-left-blk left">
              <div
                className="course-detail-heading wow bounceInDown"
                data-wow-duration="2s"
                data-wow-delay="0.5s"
              >
                <h3>{single.heading}</h3>
              </div>
              <div
                className="course-detail-image wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.5s"
              >
                <figure>
                  <img
                    src={
                      single.imagemiddile
                        ? backendurl +
                          "uploadimg/400x250/" +
                          single.imagemiddile
                        : "/assets/dummy/dummy.png"
                    }
                    data-large={
                      single.imagemiddile
                        ? backendurl +
                          "uploadimg/400x250/" +
                          single.imagemiddile
                        : "/assets/dummy/dummy.png"
                    }
                    alt="course-single-image"
                    width="100%"
                    height="400px"
                  />
                </figure>
              </div>
              <div
                className="course-overview-para wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.5s"
              >
                <p dangerouslySetInnerHTML={{ __html: single.heading }}></p>
              </div>
              <div
                className="course-overview-para wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.5s"
              >
                {new Date(single.createAt).toLocaleString("en-us", {
                  month: "long",
                }) + " "}
                {new Date(single.createAt).toLocaleString("en-us", {
                  day: "numeric",
                }) + ",  "}

                {new Date(single.createAt).toLocaleString("en-us", {
                  year: "numeric",
                })}
              </div>
            </div>
            <div className="recent-courses-tag-blk right">
              <div className="recent-courses-tag-blk-inner">
                <BlogSection3 blogs={blog} />

                <BlogSection4 />

                <BlogSection5 />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BlogSingle;
