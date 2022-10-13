import React, { useEffect, useState } from "react";
import backendurl from "../../constant";
import "./Section2.css";

function Section2() {
  const [data, setData] = useState([]);
  const [item, setItem] = useState([]);
  // const [summry, setSummy] = useState("");

  useEffect(() => {
    fetch(backendurl + "getpageheading")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  useEffect(() => {
    fetch(backendurl + "getcourses/8")
      .then((res) => res.json())
      .then((item) => setItem(item));
  }, []);

  // const decsWord = (d) => {
  //   return d.substring(0, 50);
  // };

  const viewFullScreen = (e) => {
    e.preventDefault();
    // setTimeout(function () {
    var fullimage = document.getElementById(`full-image`);
    fullimage.src = e.target.src;
    var x = document.getElementById(`image-viewer`);
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    // }, 2000);
  };

  const viewDisplayScreen = (e) => {
    e.preventDefault();
    var x = document.getElementById(`image-viewer`);
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  };

  return (
    <>
      <section className="great-courses-wr align-center">
        <div className="center-wrapper">
          <div className="great-courses-content">
            <div
              className="great-courses-heading wow bounceInDown"
              data-wow-duration="2s"
              data-wow-delay="0.25s"
            >
              <h3>{data.heading}</h3>
            </div>
            <div className="great-courses-para">
              <p
                dangerouslySetInnerHTML={{
                  __html: data.description,
                }}
              ></p>
            </div>
            <div className="it-training-cards it-training-card-one clearfix">
              <div className="courses-slider">
                {/* ========= start ======== */}
                {item.map((post, index) => (
                  <div
                    className="it-training-card card left wow fadeIn"
                    data-wow-duration="2s"
                    data-wow-delay="0.25s"
                    key={post._id}
                  >
                    <figure>
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
                        onClick={viewFullScreen}
                        alt="course-basic-web-development"
                      />

                      <figcaption>
                        <a
                          href={"/courses/" + post.slugname}
                          className={
                            "card-bg-" +
                            post.designation.charAt(0).toLowerCase() +
                            post.designation.slice(1)
                          }
                        >
                          {post.designation.charAt(0).toUpperCase() +
                            post.designation.slice(1)}
                        </a>
                      </figcaption>
                    </figure>
                    <div className="it-training-card-detail">
                      <div className="it-training-card-heading">
                        <h6>
                          <a href={"/courses/" + post.slugname}>
                            {post.heading}
                          </a>
                        </h6>
                      </div>
                      <div className="it-training-card-para">
                        <p>{post.duration}</p>
                      </div>
                      <div className="it-training-card-btn">
                        <h6>
                          <a href={"/courses/" + post.slugname}>Details</a>
                        </h6>
                      </div>
                    </div>
                  </div>
                ))}
                {/* ========== end ======= */}
              </div>
            </div>
            <div className="great-courses-btn">
              <a href="/courses" className="site-btn">
                {data.btnheading}
              </a>
            </div>
          </div>
          <div id="image-viewer">
            <span class="close" onClick={viewDisplayScreen}>
              &times;
            </span>
            <img class="modal-content" id="full-image" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Section2;
