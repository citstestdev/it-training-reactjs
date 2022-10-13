import React, { useState, useEffect } from "react";
import backendurl from "../../constant";
import Pagination from "../Testing/Pagination";
import "../Testing/Hello.css";

export default function Coursepagination(props) {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");

  function Post(props) {
    const { heading, description, image } = props.data;
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
                          src={backendurl + "uploads/" + image}
                          alt="testimonials-card-img-1"
                          style={{ width: "75%" }}
                        />
                      </figure>
                    </div>
                  </div>
                ) : (
                  ""
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
                          __html: description,
                        }}
                      ></p>
                    </div>
                  </div>
                </div>
                <div className="popup-bg-wr"></div>
                <div className="popup-content">
                  <div className="close-btn">
                    <a href="javascript:;">X</a>
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
      {props.datas.length > 0 ? (
        <>
          <Pagination
            data={props.datas}
            RenderComponent={Post}
            pageLimit={1}
            dataLimit={1}
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
