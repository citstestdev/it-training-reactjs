import React, { useEffect, useState } from "react";
import BlogSection3 from "./BlogSection3";
import BlogSection4 from "./BlogSection4";
import BlogSection5 from "./BlogSection5";

import backendurl from "../../constant";

const renderData = (data, blog, arr) => {
  function userExists(arrs, id) {
    let bname = "";
    arrs.filter((ucls) => {
      if (ucls._id === id) {
        // console.log(ucls.ud);
        bname = ucls.username;
      }
    });
    return bname;
  }
  function userProfile(arrs, id) {
    let bname = "";
    arrs.filter((ucls) => {
      if (ucls._id === id) {
        // console.log(ucls.ud);
        bname = ucls.imagemiddile;
      }
    });

    return bname;
  }

  return (
    <>
      <section className="it-training-blog-wr">
        <div className="center-wrapper">
          <div className="blog-page-content clearfix">
            <div className="blog-post-blk left">
              <div className="all-blog-post-card clearfix">
                {/* ===================== start blog section ========================= */}
                {data.map((post, index) => (
                  <div
                    className="blog-post-card left wow fadeIn"
                    data-wow-duration="2s"
                    data-wow-delay="0.25s"
                    key={post._id}
                  >
                    <div className="blog-post-main-img">
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
                          alt="blog-img-1"
                        />
                      </figure>
                    </div>
                    <div className="blog-post-card-detail">
                      <div className="blog-post-date page-mini-heading">
                        <h4>
                          <span>
                            <i className="fa-regular fa-clock"></i>
                          </span>
                          <span>
                            {new Date(post.createAt).toLocaleString("en-us", {
                              month: "long",
                            }) + ", "}
                            {new Date(post.createAt).toLocaleString("en-us", {
                              year: "numeric",
                            })}
                          </span>
                        </h4>
                      </div>
                      <div className="blog-post-heading">
                        <h6 style={{ textTransform: "capitalize" }}>
                          <a href={"/blogsingle/" + post.bslugname}>
                            {post.heading}
                          </a>
                        </h6>
                      </div>
                      <div className="blog-author-info">
                        <div className="blog-author-img">
                          <figure>
                            <a href={() => false}>
                              <img
                                src={
                                  userProfile(arr, post.uid)
                                    ? backendurl +
                                      "uploadimg/400x250/" +
                                      userProfile(arr, post.uid)
                                    : "images/user.png"
                                }
                                alt="blog-author"
                                width="50px"
                                height="50px"
                              />
                            </a>
                          </figure>
                        </div>
                        <div className="blog-author-name page-medium-heading">
                          <h4 style={{ textTransform: "capitalize" }}>
                            <a href={() => false}>
                              {userExists(arr, post.uid)}
                            </a>
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {/* ===================== End blog section ========================= */}
              </div>
              <div className="pager-controls-wr" style={{ display: "none" }}>
                <div className="blog-pager-controls">
                  <div className="pager-controls-content align-center">
                    <div className="courses-pager">
                      <a href={() => false}>1</a>
                      <a href={() => false}>2</a>
                      <a href={() => false}>3</a>
                    </div>
                    <div className="courses-controls">
                      <div className="controls-arrow-left controls-arrow">
                        <a href={() => false}>
                          <i className="fa-solid fa-arrow-left-long"></i>
                        </a>
                      </div>
                      <div className="controls-arrow-right controls-arrow">
                        <a href={() => false}>
                          <i className="fa-solid fa-arrow-right-long"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="recent-courses-tag-blk right">
              <div className="recent-courses-tag-blk-inner">
                <BlogSection3 blogs={blog} />

                <BlogSection4 />

                <BlogSection5 />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

function BlogSection2() {
  const [data, setData] = useState([]);
  const [blog, setBlog] = useState([]);

  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage, setitemsPerPage] = useState(6);

  const [pageNumberLimit, setpageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(0);

  const [username, setUsername] = useState([]);

  useEffect(() => {
    fetch(backendurl + "getusers")
      .then((respu) => respu.json())
      .then((json) => setUsername(json));
    // alert(json.username);
  }, []);
  console.log(username);

  useEffect(() => {
    fetch(backendurl + "getblog/0")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);
  // const bn = [];
  // data.forEach((n) => {
  // });

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
    fetch(backendurl + "getblog/0")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  useEffect(() => {
    fetch(backendurl + "getblog/3")
      .then((res) => res.json())
      .then((blog) => setBlog(blog));
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
      {renderData(currentItems, blog, username)}

      {/* <!-- Courses Pager-Controls Section Starts --> */}
      <section className="pager-controls-wr">
        <div className="center-wrapper">
          <div
            className="pager-controls-content align-center"
            style={{ width: "unset" }}
          >
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

export default BlogSection2;
