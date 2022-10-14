import React, { useEffect, useState, useHistory } from "react";
import axios from "axios";
import backendurl from "../../constant";
import SearchLayout from "../Searchpage/SearchLayout";

function Section1(props) {
  const [data, setData] = useState([]);
  const [header, setHeader] = useState([]);
  const [cat, setCategory] = useState([]);
  const [message, setMessage] = useState("");
  const [messageshow, setMessageshow] = useState(false);

  setTimeout(function () {
    setMessageshow(false);
  }, 5000);

  useEffect(() => {
    fetch(backendurl + "option-show")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  useEffect(() => {
    fetch(backendurl + "getheader")
      .then((res) => res.json())
      .then((header) => setHeader(header));
  }, []);

  useEffect(() => {
    fetch(backendurl + "getcategory/3")
      .then((resp) => resp.json())
      .then((cat) => setCategory(cat));
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    var mtype = document.getElementById(`mtype`).value;
    var yourname = document.getElementById(`name`).value;
    var youremail = document.getElementById(`email`).value;
    var yourphone = document.getElementById(`phone`).value;
    var yourdesignation = document.getElementById(`designation`).value;

    const postdata = {
      mtype: mtype,
      name: yourname,
      email: youremail,
      phone: yourphone,
      designation: yourdesignation,
    };

    let apiUrl = backendurl + "createperson";

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Access-Control-Allow-Origin", "*");

    const options = {
      method: "POST",
      body: JSON.stringify(postdata),
      myHeaders,
    };

    axios
      .post(apiUrl, options)
      .then((res) => res.json())
      .then(
        (result) => {
          console.log("hello code");
          result.json();
        },
        (error) => {
          console.log("Error code");
        }
      );
    setMessageshow(true);
    e.target.reset();
  };

  const submitSearch = (event) => {
    event.preventDefault();
    window.location.href = "search?q=" + message;
  };

  return (
    <>
      <div className="home-banner-wr">
        <div className="center-wrapper">
          <div className="banner-content clearfix">
            <div className="banner-job-oriented left">
              <div className="banner-sub-heading">
                <h4>Get course now</h4>
              </div>
              <div
                className="banner-heading wow fadeIn"
                data-wow-duration="2s"
                data-wow-delay="0.25s"
              >
                <h1 dangerouslySetInnerHTML={{ __html: header.heading }}></h1>
              </div>
              <div className="banner-para">
                <p>The experience of our instructors benefits your career</p>
              </div>
              <div className="banner-seaech-bar">
                <form method="POST" action="#" onSubmit={submitSearch}>
                  <div className="banner-form-input clearfix">
                    <div className="banner-search-bar left">
                      <input
                        type="text"
                        value={message}
                        placeholder="Enter a message"
                        onChange={(e) => setMessage(e.target.value)}
                        required
                      />
                    </div>
                    <div className="banner-search-btn right">
                      <input type="submit" name="submit" value="" />
                    </div>
                  </div>
                </form>
                {message == true && (
                  <div
                    className="alert alert-success"
                    style={{
                      "background-color": "#d4edda",
                      "border-color": "#c3e6cb",
                      padding: "12px",
                    }}
                    role="alert"
                  >
                    Send message successfully
                  </div>
                )}
              </div>
              <div className="banner-popular-search">
                <div className="popular-search-heading page-medium-heading">
                  <h4>Popular Searches</h4>
                </div>
                <div className="popular-search-links">
                  {cat.map((post, index) => (
                    <a href={"/search?q=" + post.displayname} key={post._id}>
                      {post.displayname}
                    </a>
                  ))}
                </div>
              </div>
              <div className="banner-course-links">
                <div className="banner-course-link">
                  <img
                    src="assets/images/banner-course-link-img-1.png"
                    alt="banner-course-link-img-1"
                  />
                  <a href="/search?q=Web Development">Web Development</a>
                </div>
                <div className="banner-course-link">
                  <img
                    src="assets/images/banner-course-link-img-2.png"
                    alt="banner-course-link-img-2"
                  />
                  <a href="/search?q=Graphic Designing">Graphic Designing</a>
                </div>
                <div className="banner-course-link">
                  <img
                    src="assets/images/banner-course-link-img-3.png"
                    alt="banner-course-link-img-3"
                  />
                  <a href="/search?q=Digital Marketing">Digital Marketing</a>
                </div>
              </div>
            </div>
            <div
              className="banner-images right wow fadeIn"
              data-wow-duration="2s"
            >
              <figure>
                <img
                  src="assets/images/banner-girl-image.png"
                  alt="banner-girl-image"
                />
                <figcaption>
                  <div className="banner-right-call-icon">
                    <img
                      src="assets/images/banner-call-icon.png"
                      alt="phone-icon"
                    />
                  </div>
                  <div className="banner-right-call">
                    <a href={"tel:  +(91) " + data.phone}>
                      {"+(91)" + data.phone}
                    </a>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
      <div className="keystroke-quote-form">
        <div className="center-wrapper">
          <div
            className="keystroke-form-content clearfix wow bounceInDown"
            data-wow-duration="2s"
            data-wow-delay="0.25s"
          >
            <div className="keystroke-form-heading left">
              <h4>
                Get a free <span>keystroke quote</span>
              </h4>
            </div>
            <div className="keystroke-form-con right">
              <form
                method="POST"
                action="#"
                onSubmit={submitHandler}
                id="contactformreset"
              >
                <input
                  type="hidden"
                  name="mtype"
                  id="mtype"
                  value="keystroke"
                />
                <br></br>
                <div className="keystroke-form-name form-half-feild">
                  <span>
                    <img
                      src="assets/images/form-user-icon.svg"
                      alt="form-user-icon"
                    />
                  </span>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    autocomplete="off"
                    required
                  />
                </div>
                <div className="keystroke-form-email form-half-feild">
                  <span>
                    <img
                      src="assets/images/form-email-icon.svg"
                      alt="form-user-icon"
                    />
                  </span>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email"
                    autocomplete="off"
                    required
                  />
                </div>
                <div className="keystroke-form-phone form-half-feild">
                  <span>
                    <img
                      src="assets/images/form-call-icon.svg"
                      alt="form-user-icon"
                    />
                  </span>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Phone"
                    autocomplete="off"
                    minLength="10"
                    maxLength="10"
                    pattern="[0-9]*"
                    required
                  />
                </div>
                <div className="keystroke-form-course">
                  <div className="keystroke-form-input form-half-feild">
                    <span>
                      <img
                        src="assets/images/form-course-icon.svg"
                        alt="form-user-icon"
                      />
                    </span>
                    <select id="designation" name="designation" required>
                      <option value="">Select Category</option>
                      {cat.map((post, index) => (
                        <option key={post._id}>{post.displayname}</option>
                      ))}
                    </select>
                  </div>
                  <div className="form-submit-btn">
                    <input
                      type="submit"
                      name="submit"
                      value="Send"
                      className="site-btn"
                    />
                  </div>
                </div>
                <p>
                  by submitting this form, you are agreeing to the
                  <a href={() => false}> privacy policy</a>
                </p>
              </form>
              <br></br>
              {messageshow == true && (
                <div
                  className="alert alert-success"
                  style={{
                    "background-color": "#d4edda",
                    "border-color": "#c3e6cb",
                    padding: "12px",
                  }}
                  role="alert"
                >
                  Send message successfully
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Section1;
