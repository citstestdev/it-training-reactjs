import React, { useState } from "react";
import backendurl from "../../constant";
import Pagination from "./Pagination";
import "./Hello.css";

export default function SearchData(props) {
  // const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  const decsWord = (d) => {
    return d.substring(0, 50);
  };
  function Post(props) {
    const { heading, description, image, imagemiddile } = props.data;
    return (
      <div className="post">
        <div className="showtabledata">
          <div className="center-wrapper">
            <div>
              <div className="about-us-common-section clearfix">
                {image ? (
                  <div
                    className="common-img-blk our-philosophy-blk wow fadeInLeft"
                    data-wow-duration="2s"
                    data-wow-delay="0.5s"
                    style={{ float: "left", marginRight: "10px" }}
                  >
                    <div className="our-philosophy-img">
                      <figure>
                        <img
                          src={
                            imagemiddile
                              ? backendurl + "uploadimg/400x250/" + imagemiddile
                              : "http://192.168.16.39:3000/assets/dummy/dummy.png"
                          }
                          data-large={
                            imagemiddile
                              ? backendurl + "uploadimg/400x250/" + imagemiddile
                              : "http://192.168.16.39:3000/assets/dummy/dummy.png"
                          }
                          alt="testimonials-card-img-1"
                          style={{ width: "75%" }}
                        />
                      </figure>
                    </div>
                  </div>
                ) : (
                  <div
                    className="common-img-blk our-philosophy-blk wow fadeInLeft"
                    data-wow-duration="2s"
                    data-wow-delay="0.5s"
                    style={{ float: "left", marginRight: "10px" }}
                  >
                    <div className="our-philosophy-img">
                      <figure>
                        <img
                          src="/assets/images/0011ff.png"
                          alt="testimonials-card-img-1"
                          style={{ width: "75%" }}
                        />
                      </figure>
                    </div>
                  </div>
                )}
                <div
                  className="common-content-blk wow fadeInRight"
                  data-wow-duration="2s"
                  data-wow-delay="0.5s"
                >
                  <div className="our-philosophy-content">
                    <div className="our-philosophy-heading">
                      <h3>{heading}</h3>
                    </div>
                    <div className="common-blk-para">
                      <p
                        dangerouslySetInnerHTML={{
                          __html: decsWord(description) + "...Read More",
                        }}
                      ></p>
                    </div>
                  </div>
                </div>
                <div className="popup-bg-wr"></div>
                <div className="popup-content">
                  <div className="close-btn">
                    <a href={() => false}>X</a>
                  </div>
                </div>
              </div>
              <hr></hr>
              <br></br>
              <br></br>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (error) return <h1>{error}</h1>;

  return (
    <div>
      {props.cat.length > 0 ? (
        <>
          <Pagination
            data={props.cat}
            RenderComponent={Post}
            pageLimit={3}
            dataLimit={5}
          />
        </>
      ) : (
        <div className="center-wrapper">
          <h1 style={{ textAlign: "center", color: "red" }}>
            No Results Found
          </h1>
        </div>
      )}
    </div>
  );
}
