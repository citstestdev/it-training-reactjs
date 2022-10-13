import React, { useEffect, useState } from "react";
import backendurl from "../../constant";

function DetailSection4() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(backendurl + "getcourses/4")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  // console.log("fdsf", data);

  return (
    <>
      <div
        className="course-related-journals wow fadeIn"
        data-wow-duration="2s"
        data-wow-delay="0.5s"
      >
        <div className="course-related-haeding">
          <h6>Course Related journals</h6>
        </div>
        <div className="course-related-all-blocks">
          {data.map((post, index) => (
            <div className="course-related-blk">
              <figure>
                <a href="#">
                  <img
                    src={
                      post.imagemiddile
                        ? backendurl + "uploadimg/400x250/" + post.imagemiddile
                        : "/assets/dummy/dummy.png"
                    }
                    data-large={
                      post.imagemiddile
                        ? backendurl + "uploadimg/400x250/" + post.imagemiddile
                        : "/assets/dummy/dummy.png"
                    }
                    alt="course-related-img-1"
                  />
                </a>
              </figure>
              <div className="course-related-text">
                <h4>
                  <a
                    href={"/courses/" + post.slugname}
                    style={{ textTransform: "capitalize" }}
                  >
                    {post.heading}
                  </a>
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default DetailSection4;
