import React from "react";
import backendurl from "../../constant";

function BlogSection3(props) {
  return (
    <>
      <div
        className="recent-posts-blk blog-right-con wow fadeIn"
        data-wow-duration="2s"
        data-wow-delay="0.5s"
      >
        <div className="recent-courses-tag-main-heading">
          <h6>Recent Blogs</h6>
        </div>
        <div className="recent-courses-tag-con">
          {/* =================== Start post ============================= */}
          {props.blogs.map((post, index) => (
            <div className="recent-courses-tag-content" key={post._id}>
              <div className="recent-courses-tag-img">
                <figure>
                  <a href={() => false}>
                    <img
                      src={
                        post.imagemiddile
                          ? backendurl +
                            "uploadimg/400x250/" +
                            post.imagemiddile
                          : "/assets/dummy/dummy.png"
                      }
                      data-large={
                        post.imagemiddile
                          ? backendurl +
                            "uploadimg/400x250/" +
                            post.imagemiddile
                          : "/assets/dummy/dummy.png"
                      }
                      alt="recent-post-img-1"
                    />
                  </a>
                </figure>
              </div>
              <div className="recent-courses-tag-heading">
                <div className="blog-post-date page-mini-heading">
                  <h4>
                    {new Date(post.createAt).toLocaleString("en-us", {
                      month: "long",
                    }) + " "}
                    {new Date(post.createAt).toLocaleString("en-us", {
                      day: "numeric",
                    }) + ",  "}

                    {new Date(post.createAt).toLocaleString("en-us", {
                      year: "numeric",
                    })}
                  </h4>
                </div>
                <div className="recent-posts-content-heading page-medium-heading">
                  <h4>
                    <a
                      href={"/blogsingle/" + post.bslugname}
                      style={{ textTransform: "capitalize" }}
                    >
                      {post.heading}
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          ))}
          {/* =================== End post ========================= */}
        </div>
      </div>
    </>
  );
}

export default BlogSection3;
