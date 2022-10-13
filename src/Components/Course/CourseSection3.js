import React, { useEffect, useState } from "react";
import "./style.css";
import backendurl from "../../constant";

const renderData = (data) => {
  const decsWord = (d) => {
    return d.substring(0, 50);
  };
  return (
    <>
      <section className="all-courses-wr">
        <div className="center-wrapper">
          <div className="all-courses-content">
            {/* <!-- grid view block --> */}
            <div className="it-training-cards it-training-card-one grid-view-blk clearfix">
              {/* ========================== Start ====================== */}
              {data.map((post, index) => (
                <div
                  className="it-training-card left card wow fadeIn"
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
                      alt="all-courses-img-1"
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
                        <a
                          href={"/courses/" + post.slugname}
                          style={{ textTransform: "capitalize" }}
                        >
                          {post.heading}
                        </a>
                      </h6>
                    </div>
                    <div className="it-training-card-detial">
                      {/* <p>{post.description}</p> */}
                      <p
                        dangerouslySetInnerHTML={{
                          __html:
                            decsWord(post.description) +
                            "<a href='/courses/" +
                            post.slugname +
                            "'>...Read More</a>",
                        }}
                      ></p>
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
              {/* ==================  End ====================== */}
            </div>
            {/* <!-- /grid view block -->
				     <!-- list view block --> */}
            <div className="it-training-cards it-training-card-one list-view-blk clearfix">
              {/* ========================== Start ====================== */}
              {data.map((post, index) => (
                <div className="it-training-card left card" key={post._id}>
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
                      alt="all-courses-img-1"
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
                        <a
                          href={"/courses/" + post.slugname}
                          style={{ textTransform: "capitalize" }}
                        >
                          {post.heading}
                        </a>
                      </h6>
                    </div>
                    <div className="it-training-card-detial">
                      <p
                        dangerouslySetInnerHTML={{
                          __html:
                            decsWord(post.description) +
                            "<a href='/courses/" +
                            post.slugname +
                            "'>...Read More</a>",
                        }}
                      ></p>
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
              {/* ========================== End ====================== */}
            </div>
            {/* /list view block  */}
          </div>
        </div>
      </section>
    </>
  );
};

function CourseSection3() {
  const [data, setData] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage, setitemsPerPage] = useState(6);
  const [pageNumberLimit, setpageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  const handleClick = (event) => {
    setcurrentPage(Number(event.target.id));
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const pages = [];
  for (let i = 1; i <= Math.ceil(data.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <li
          key={number}
          id={number}
          onClick={handleClick}
          className={currentPage == number ? "active" : null}
        >
          {number}
        </li>
      );
    } else {
      return null;
    }
  });

  useEffect(() => {
    fetch(backendurl + "getcourses/0")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  const handleNextbtn = () => {
    setcurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevbtn = () => {
    setcurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit == 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = <li onClick={handleNextbtn}> &hellip; </li>;
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = <li onClick={handlePrevbtn}> &hellip; </li>;
  }

  const handleLoadMore = () => {
    setitemsPerPage(itemsPerPage + 5);
  };

  return (
    <>
      {renderData(currentItems)}

      {/* <!-- Courses Pager-Controls Section Starts --> */}
      <section className="pager-controls-wr">
        <div className="center-wrapper">
          <div className="pager-controls-content align-center">
            <ul className="pageNumbers">
              <li>
                <button
                  spy={true}
                  smooth={true}
                  onClick={handlePrevbtn}
                  disabled={currentPage == pages[0] ? true : false}
                >
                  <i className="fa-solid fa-arrow-left-long"></i>
                </button>
              </li>
              {pageDecrementBtn}
              {renderPageNumbers}
              {pageIncrementBtn}

              <li>
                <button
                  spy={true}
                  smooth={true}
                  onClick={handleNextbtn}
                  disabled={
                    currentPage == pages[pages.length - 1] ? true : false
                  }
                >
                  <i className="fa-solid fa-arrow-right-long"></i>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/* <!-- Courses Pager-Controls Section Ends --> */}
    </>
  );
}

export default CourseSection3;
