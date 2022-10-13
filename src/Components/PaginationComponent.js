import React, { useEffect, useState } from "react";
import "./style.css";
import backendurl from "../constant";

const renderData = (data) => {
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
                >
                  <figure>
                    <img
                      src={backendurl + "uploads/" + post.image}
                      alt="all-courses-img-1"
                    />
                    <figcaption>
                      <a href="/courses-detail" className="card-bg-green">
                        {post.designation}
                      </a>
                    </figcaption>
                  </figure>
                  <div className="it-training-card-detail">
                    <div className="it-training-card-heading">
                      <h6>
                        <a href="/courses-detail">{post.heading}</a>
                      </h6>
                    </div>
                    <div className="it-training-card-detial">
                      <p>{post.description}</p>
                    </div>
                    <div className="it-training-card-para">
                      <p>{post.duration}</p>
                    </div>
                    <div className="it-training-card-btn">
                      <h6>
                        <a href="/courses-detail">Details</a>
                      </h6>
                    </div>
                  </div>
                </div>
              ))}
              {/* ================== End ====================== */}
            </div>
            {/* <!-- /grid view block -->
				<!-- list view block --> */}
            <div className="it-training-cards it-training-card-one list-view-blk clearfix">
              {/* ========================== Start ====================== */}
              {data.map((post, index) => (
                <div className="it-training-card left card">
                  <figure>
                    <img
                      src={backendurl + "uploads/" + post.image}
                      alt="all-courses-img-1"
                    />
                    <figcaption>
                      <a href="courses-detail.html" className="card-bg-green">
                        {post.designation}
                      </a>
                    </figcaption>
                  </figure>
                  <div className="it-training-card-detail">
                    <div className="it-training-card-heading">
                      <h6>
                        <a href="/courses-detail">{post.heading}</a>
                      </h6>
                    </div>
                    <div className="it-training-card-detial">
                      <p>{post.description}</p>
                    </div>
                    <div className="it-training-card-para">
                      <p>{post.duration}</p>
                    </div>
                    <div className="it-training-card-btn">
                      <h6>
                        <a href="/courses-detail">Details</a>
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

      {/* <!-- Courses Pager-Controls Section Starts --> */}
      <section className="pager-controls-wr">
        <div className="center-wrapper">
          <div className="pager-controls-content align-center">
            <div className="courses-pager">
              <a href="javascript:;">1</a>
              <a href="javascript:;">2</a>
              <a href="javascript:;">3</a>
            </div>
            <div className="courses-controls">
              <div className="controls-arrow-left controls-arrow">
                <a href="javascript:;">
                  <i className="fa-solid fa-arrow-left-long"></i>
                </a>
              </div>
              <div className="controls-arrow-right controls-arrow">
                <a href="javascript:;">
                  <i className="fa-solid fa-arrow-right-long"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Courses Pager-Controls Section Ends --> */}
    </>
  );
};

function PaginationComponent() {
  const [data, setData] = useState([]);

  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage, setitemsPerPage] = useState(1);

  const [pageNumberLimit, setpageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  const handleClick = (event) => {
    setcurrentPage(Number(event.target.id));
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
    fetch(backendurl + "getcourses")
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
      <h1>Todo List</h1> <br />
      {renderData(currentItems)}
      <ul className="pageNumbers">
        <li>
          <button
            onClick={handlePrevbtn}
            disabled={currentPage == pages[0] ? true : false}
          >
            Prev
          </button>
        </li>
        {pageDecrementBtn}
        {renderPageNumbers}
        {pageIncrementBtn}

        <li>
          <button
            onClick={handleNextbtn}
            disabled={currentPage == pages[pages.length - 1] ? true : false}
          >
            Next
          </button>
        </li>
      </ul>
      <button onClick={handleLoadMore} className="loadmore">
        Load More
      </button>
    </>
  );
}

export default PaginationComponent;
