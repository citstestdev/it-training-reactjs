import React from "react";
import axios from "axios";
import backendurl from "../../constant";

URL = backendurl + "getallcategory";

class SearchGroup extends React.Component {
  state = {
    post: [],
    allPosts: [],
  };

  componentDidMount() {
    axios
      .get(URL, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then(({ data }) => {
        this.setState({
          post: data,
          allPosts: data,
        });
      })
      .catch((err) => {});
  }

  _onKeyUp = (e) => {
    const post = this.state.allPosts.filter((item) => {
      item.heading.toLowerCase().includes(e.target.value.toLowerCase());
    });
    this.setState({ post });
  };

  render() {
    return (
      <>
        <div className="wrapper full-page">
          <div className="page-banner">
            <div className="page-banner-img">
              <figure>
                <img
                  src="assets/images/courses-banner.jpg"
                  alt="course-banner-image"
                />
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
                    <h4>Search</h4>
                  </div>
                  <div className="page-banner-links">
                    <a href="/home">Home</a>
                    <span>
                      <i className="fa-solid fa-chevron-right"></i>
                    </span>
                    <a href={() => false}>Search</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <form
            role="search"
            method="get"
            id="searchform"
            className="searchform"
            action=""
          >
            <input
              type="search"
              onChange={this._onKeyUp}
              name="s"
              id="s"
              placeholder="Search"
            />
            <button type="submit" id="searchsubmit">
              <i className="fa fa-search" aria-hidden="true" />
            </button>
          </form>
          <ul className="data-list">
            {this.state.post.map((item, index) => (
              <li key={item._id}>
                <h3>{item.heading ? item.heading : item.categoryname}</h3>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default SearchGroup;
