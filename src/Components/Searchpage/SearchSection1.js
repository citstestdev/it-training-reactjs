import React, { useEffect, useState } from "react";
import backendurl from "../../constant";
// import { useParams } from "react-router-dom";

import SearchSection2 from "./SearchSection2";
import SearchData from "./SearchData";

function SearchSection1() {
  const [message, setMessage] = useState("");
  const [cat, setCategory] = useState([]);
  const [allcat, setAllcategory] = useState([]);
  const [isDone, setIsDone] = useState(true);

  const title = window.location.href.substring(
    window.location.href.lastIndexOf("/") + 1
  );

  const params = new URLSearchParams(window.location.search);
  var q = params.get("q");

  useEffect(() => {
    if (q != null) {
      fetch(backendurl + "getmarge/" + q)
        .then((response) => response.json())
        .then((cat) => setCategory(cat));
      setIsDone(false);
      setMessage(q);
    } else {
      fetch(backendurl + "getallmargedata")
        .then((response) => response.json())
        .then((allcat) => setAllcategory(allcat));
    }
  }, []);

  const submitSearch = (event) => {
    event.preventDefault();

    window.history.replaceState(null, null, "?q=" + message);
    fetch(backendurl + "getmarge/" + message)
      .then((response) => response.json())
      .then((cat) => setCategory(cat));
    setIsDone(false);
  };

  return (
    <>
      <div className="page-banner">
        <div className="page-banner-img">
          <figure>
            <img src="assets/images/courses-banner.jpg" alt="course-banner" />
          </figure>
        </div>
        <div className="page-banner-con">
          <div className="center-wrapper">
            <div className="page-banner-content">
              <div
                className="page-banner-heading wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.5s"
              >
                <h4>{title.replace("-", " ").toUpperCase()}</h4>
              </div>
              <div className="page-banner-links">
                <a href="/home">Home</a>
                <span>
                  <i className="fa-solid fa-chevron-right"></i>
                </span>
                <a href={() => false}>{title}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="center-wrapper">
        {/* <h1>SEARCH</h1> */}
        <div className="searchpagewraper">
          <form method="POST" action="#" onSubmit={submitSearch}>
            <div className="banner-form-input clearfix">
              <div className="banner-search-bar left">
                <input
                  type="text"
                  value={message}
                  placeholder="Enter a message"
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <div className="banner-search-btn right">
                <input type="submit" name="submit" value="" />
              </div>
            </div>
          </form>

          {isDone ? (
            <SearchSection2 allcat={allcat} />
          ) : (
            <SearchData data={message} cat={cat} />
          )}
        </div>
      </div>
    </>
  );
}

export default SearchSection1;
