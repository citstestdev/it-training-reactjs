import React, { useEffect, useState } from "react";
import backendurl from "../../constant";
import CourseSection3 from "./CourseSection3";
import CourseFilter from "./CourseFilter";

function CourseSection2() {
  const [data, setData] = useState([]);
  const [cfilter, setFilter] = useState("");
  const [isDone, setIsDone] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [cat, setCategory] = useState([]);

  useEffect(() => {
    fetch(backendurl + "getcourses/0")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  useEffect(() => {
    fetch(backendurl + "getcategory/0")
      .then((resp) => resp.json())
      .then((cat) => setCategory(cat));
  }, []);

  const selectHandler = (event) => {
    setFilter(event.target.value);
    setIsDone(true);
    setTimeout(function () {
      setIsDone(false);
    }, 100);
  };

  return (
    <>
      <div className="courses-filter-wr">
        <div className="center-wrapper">
          <div className="courses-filter-content clearfix">
            <div className="all-courses-blk left form-half-feild">
              <select
                className="select-css"
                id="designation"
                name="designation"
                onChange={selectHandler}
              >
                <option value="">Select Category</option>
                {cat.map((post, index) => (
                  <option key={post._id} value={post.categoryname}>
                    {post.displayname}
                  </option>
                ))}
              </select>
            </div>
            <div className="showing-numbers-blk right">
              <div className="courses-grid-img filter-right-blk course-grid-list-img active">
                <a href="javascript:;">
                  <figure className="course-grid-img">
                    <img
                      src="assets/images/course-grid-image.svg"
                      alt="course-grid-img"
                    />
                  </figure>
                </a>
              </div>
              <div className="course-download-img filter-right-blk">
                <a href="javascript:;">
                  <figure className="course-grid-img">
                    <img
                      src="assets/images/filter-download.svg"
                      alt="filter-download"
                    />
                  </figure>
                </a>
              </div>
              <div className="filter-showing-text page-medium-heading filter-right-blk">
                <h4>Showing 1-6 of {data.length}</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* {cfilter !== "" && <CourseSection3 />} */}
      {isDone ? <CourseSection3 /> : <CourseFilter cfilter={cfilter} />}
    </>
  );
}

export default CourseSection2;
