import React, { useEffect, useState } from "react";
import backendurl from "../../../constant";
import DetailSection4 from "./DetailSection4";
import DetailSection5 from "./DetailSection5";
import DetailSection6 from "./DetailSection6";

function DetailSection2() {
  const [data, setData] = useState([]);
  const [related, setRelated] = useState([]);
  const [faq, setFaq] = useState([]);

  useEffect(() => {
    fetch("http://192.168.16.39:4000" + window.location.pathname)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  // console.log("http://192.168.16.39:4000/relatedcourse/" + data.rc);
  useEffect(() => {
    fetch("http://192.168.16.39:4000/relatedcourse/" + data.designation)
      .then((res) => res.json())
      .then((related) => setRelated(related));
  }, [data.designation]);

  useEffect(() => {
    fetch(backendurl + "getFaqdata")
      .then((resf) => resf.json())
      .then((faq) => setFaq(faq));
  }, []);

  return (
    <>
      <section className="course-detail-wr">
        <div className="center-wrapper">
          <div className="course-detail-content clearfix">
            <div className="course-detail-left-blk left">
              <div className="course-name">
                <a href={() => false} className="card-bg-green">
                  {data.designation}
                </a>
              </div>
              <div
                className="course-detail-heading wow bounceInDown"
                data-wow-duration="2s"
                data-wow-delay="0.5s"
              >
                <h3>{data.heading}</h3>
              </div>
              <div
                className="course-detail-image wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.5s"
              >
                <figure>
                  <img
                    src={backendurl + "uploadimg/400x250/" + data.imagemiddile}
                    alt="course-single"
                    width="100%"
                    height="400px"
                  />
                </figure>
              </div>
              <div className="course-detail-btns">
                <a href={() => false}>Description</a>
                <a href={() => false}>FAQ’s</a>
                <a href={() => false}>Related Courses</a>
              </div>
              <div className="course-overview">
                <div
                  className="course-overview-heading wow bounceInDown"
                  data-wow-duration="2s"
                  data-wow-delay="0.5s"
                >
                  <h3>Course Overview</h3>
                </div>
                <div
                  className="course-overview-para wow fadeIn"
                  data-wow-duration="2s"
                  data-wow-delay="0.5s"
                >
                  <p
                    dangerouslySetInnerHTML={{
                      __html: data.description,
                    }}
                  ></p>
                </div>
              </div>
              <div className="get-course-con">
                <div
                  className="get-course-heading wow bounceInDown"
                  data-wow-duration="2s"
                  data-wow-delay="0.5s"
                >
                  <h3>Who can get this course?</h3>
                </div>
                <div className="get-course-list">
                  <div className="it-training-common-list">
                    <ul>
                      <li
                        className="wow fadeIn"
                        data-wow-duration="2s"
                        data-wow-delay="0.25s"
                      >
                        People who are new as well as intermediate both can
                        apply
                      </li>
                      <li
                        className="wow fadeIn"
                        data-wow-duration="2s"
                        data-wow-delay="0.45s"
                      >
                        Those who want to learn fundamentals of UI
                      </li>
                      <li
                        className="wow fadeIn"
                        data-wow-duration="2s"
                        data-wow-delay="0.65s"
                      >
                        Those who want to learn new potentials of UX
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Start FAQ’s Detail Related */}

              <DetailSection6 faqdata={faq} />

              {/* End  FAQ’s Detail  Related */}
            </div>
            <div className="course-detail-right-blk right">
              {/* Start Get Course Enquiry Detail */}

              <DetailSection5 shortdetail={data} />

              {/* End Get Course Enquiry Detail */}

              {/* Start Course Related journals Detail */}

              <DetailSection4 />

              {/* End Course Related journals Detail */}
            </div>
          </div>
        </div>
      </section>
      <section className="related-courses-wr">
        <div className="center-wrapper">
          <div className="related-courses-content">
            <div
              className="related-courses-heading wow bounceInDown"
              data-wow-duration="2s"
              data-wow-delay="0.5s"
            >
              <h3>Related Courses</h3>
            </div>
            <div className="related-courses-blk clearfix">
              {/* Start related course */}
              {related.length > 0 ? (
                <div>
                  {related.map((post, index) => (
                    <div
                      className="related-courses-cards left card wow fadeIn"
                      data-wow-duration="2s"
                      data-wow-delay="0.25s"
                      key={post._id}
                    >
                      <div className="related-courses-image">
                        <figure>
                          <img
                            src={
                              backendurl +
                              "uploadimg/400x250/" +
                              post.imagemiddile
                            }
                            alt="course-single"
                          />
                        </figure>
                      </div>
                      <div className="related-courses-details">
                        <div className="related-courses-card-heading">
                          <h6>{post.heading}</h6>
                        </div>
                        <div className="related-card-heading-text">
                          <div className="related-courses-info">
                            <div className="card-sub-heading page-mini-heading">
                              <h4>Regular</h4>
                            </div>
                            <div className="card-sub-heading-info page-mini-heading">
                              <h4>{post.duration}</h4>
                            </div>
                          </div>
                          <div className="related-courses-info">
                            <div className="card-sub-heading page-mini-heading">
                              <h4>Batch</h4>
                            </div>
                            <div className="card-sub-heading-info page-mini-heading">
                              <h4>{post.batchstart}</h4>
                            </div>
                          </div>
                          <div className="related-courses-info">
                            <div className="card-sub-heading page-mini-heading">
                              <h4>Batch size</h4>
                            </div>
                            <div className="card-sub-heading-info page-mini-heading">
                              <h4>{post.batchsize}</h4>
                            </div>
                          </div>
                        </div>
                        <div className="it-training-card-btn related-courses-btn">
                          <h6>
                            <a href={"/courses-detail/" + post._id}>Details</a>
                          </h6>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div></div>
              )}
              {/* End related course */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default DetailSection2;
