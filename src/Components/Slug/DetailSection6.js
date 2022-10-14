import React from "react";

function DetailSection6(props) {
  return (
    <>
      <div className="course-faq-con">
        <div
          className="course-faq-heading wow bounceInDown"
          data-wow-duration="2"
          data-wow-dealy="0.5s"
        >
          <h3>FAQ’s</h3>
        </div>
        <div className="course-faq-accordion">
          {/* faq start */}
          {props.faqdata.map((post, index) => (
            <div
              className="course-accordion-section wow fadeIn"
              data-wow-duration="2s"
              data-wow-delay="0.25s"
              key={post._id}
            >
              <div className="course-accordion-btn">
                <a href={() => false}>{post.question}</a>
                <div className="course-accordion-icon">
                  <i className="fa-solid fa-chevron-down"></i>
                </div>
              </div>
              <div className="course-accordion-content">
                <p>{post.answer}</p>
              </div>
            </div>
          ))}
          {/* faq end */}
        </div>
      </div>
    </>
  );
}

export default DetailSection6;
