import React, { useEffect, useState } from "react";
// import { NavLink, Link } from "react-router-dom";
import axios from "axios";
import backendurl from "../../constant";

function Footer() {
  const [data, setData] = useState([]);
  const [social, setSocial] = useState([]);
  const [menu, setMenu] = useState([]);
  const [footerwidget, setFooterwidget] = useState([]);
  const [popularwidget, setPopularwidget] = useState([]);
  const [message, setMessage] = useState(false);
  const [errormsg, setErrormag] = useState(false);
  const [newsmessage, setNewsmessage] = useState(false);
  const [newerrormsg, setNewErrormag] = useState(false);
  const [news, setNewsdata] = useState(null);
  // const [post, setPost] = React.useState(null);
  const [cat, setCategory] = useState([]);

  setTimeout(function () {
    setMessage(false);
  }, 5000);

  useEffect(() => {
    fetch(backendurl + "option-show")
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  useEffect(() => {
    fetch(backendurl + "social-show")
      .then((res) => res.json())
      .then((social) => setSocial(social));
  }, []);

  useEffect(() => {
    fetch(backendurl + "getmenu")
      .then((resm) => resm.json())
      .then((menu) => setMenu(menu));
  }, []);

  useEffect(() => {
    fetch(backendurl + "getfooterwidget")
      .then((resf) => resf.json())
      .then((footerwidget) => setFooterwidget(footerwidget));
  }, []);

  useEffect(() => {
    fetch(backendurl + "getpopularwidget")
      .then((resp) => resp.json())
      .then((popularwidget) => setPopularwidget(popularwidget));
  }, []);

  useEffect(() => {
    fetch(backendurl + "getcategory/0")
      .then((resp) => resp.json())
      .then((cat) => setCategory(cat));
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    var mtype = document.getElementById(`mtype`).value;
    var yourname = document.getElementById(`name1`).value;
    var youremail = document.getElementById(`email1`).value;
    var yourphone = document.getElementById(`phone1`).value;
    var yourdesignation = document.getElementById(`designation1`).value;

    const postdata = {
      mtype: mtype,
      name: yourname,
      email: youremail,
      phone: yourphone,
      designation: yourdesignation,
    };

    let apiUrl = backendurl + "createperson";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(postdata),
    };

    setMessage(true);
    setErrormag(false);
    axios
      .post(apiUrl, options)
      .then((res) => res.json())
      .then((result) => {
        result.json();
      })
      .catch(function (error) {
        console.log("error", error.message);
        setMessage(false);
        setErrormag(true);
      });
    e.target.reset();
    setTimeout(function () {
      setMessage(false);
      setErrormag(false);
    }, 5000);

    // const myHeaders = new Headers();
    // myHeaders.append("Content-Type", "application/json");
    // myHeaders.append("Access-Control-Allow-Origin", "*");

    // const options = {
    //   method: "POST",
    //   body: JSON.stringify(postdata),
    //   myHeaders,
    // };

    // axios
    //   .post(apiUrl, options)
    //   .then((res) => res.json())
    //   .then((result) => {
    //     result.json();
    //   })
    //   .catch((error) => {
    //     return error;
    //   });

    // setMessage(true);
    // e.target.reset();
  };

  const submitSubscribe = async (e) => {
    e.preventDefault();

    var mtype = document.getElementById(`msubscribe`).value;
    var newsletter = document.getElementById(`newsletter-email`).value;

    const newsdata = {
      mtype: mtype,
      email: newsletter,
      createAt: new Date(),
    };

    let apiUrl = backendurl + "createnewsletter";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(newsdata),
    };

    setNewsmessage(true);
    setNewErrormag(false);
    axios
      .post(apiUrl, options)
      .then((res) => res.json())
      .then((result) => {
        result.json();
      })
      .catch(function (error) {
        console.log("error", error.message);
        setNewsmessage(false);
        setNewErrormag(true);
      });
    e.target.reset();
    setTimeout(function () {
      setNewsmessage(false);
      setNewErrormag(false);
    }, 5000);
  };

  return (
    <>
      <footer className="footer-wr">
        <div className="center-wrapper">
          <div className="footer-content">
            <div
              className="footer-keystroke-form  wow pulse"
              data-wow-duration="2s"
            >
              <div className="keystroke-quote-form">
                <div className="keystroke-form-content">
                  <div className="keystroke-form-heading">
                    <h4>
                      Get a free <span>keystroke quote</span>
                    </h4>
                  </div>
                  <div className="keystroke-form-con">
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
                      <div className="keystroke-form-name form-half-feild">
                        <span>
                          <img
                            src="/assets/images/form-user-icon.svg"
                            alt="form-user-icon"
                          />
                        </span>
                        <input
                          type="text"
                          name="name"
                          id="name1"
                          placeholder="Name"
                          autocomplete="off"
                          required
                        />
                      </div>
                      <div className="keystroke-form-email form-half-feild">
                        <span>
                          <img
                            src="/assets/images/form-email-icon.svg"
                            alt="form-user-icon"
                          />
                        </span>
                        <input
                          type="email"
                          name="email"
                          id="email1"
                          placeholder="Email"
                          autocomplete="off"
                          required
                        />
                      </div>
                      <div className="keystroke-form-phone form-half-feild">
                        <span>
                          <img
                            src="/assets/images/form-call-icon.svg"
                            alt="form-user-icon"
                          />
                        </span>
                        <input
                          type="text"
                          name="phone"
                          id="phone1"
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
                              src="/assets/images/form-course-icon.svg"
                              alt="form-user-icon"
                            />
                          </span>
                          <select
                            id="designation1"
                            name="designation1"
                            required
                          >
                            <option value="">Select Category</option>
                            {cat.map((post, index) => (
                              <option key={post._id}>{post.displayname}</option>
                            ))}
                          </select>
                        </div>
                      </div>
                      <div className="keystroke-form-para">
                        <p>
                          by submitting this form, you are agreeing to the{" "}
                          <a href="#"> privacy policy</a>
                        </p>
                      </div>
                      <div className="form-submit-btn">
                        <input
                          type="submit"
                          name="submit"
                          value="Send"
                          className="site-btn"
                        />
                      </div>
                    </form>
                    <br></br>
                    {message == true && (
                      <div
                        className="alert alert-success"
                        style={{
                          backgroundColor: "#d4edda",
                          bordercolor: "#c3e6cb",
                          padding: "12px",
                        }}
                        role="alert"
                      >
                        Send message successfully
                      </div>
                    )}
                    {errormsg == true && (
                      <div
                        className="alert alert-success"
                        style={{
                          backgroundColor: "#d4edda",
                          borderColor: "#c3e6cb",
                          padding: "12px",
                        }}
                        role="alert"
                      >
                        Mail is not send!
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-newsletter-footer-bottom">
          <div className="footer-newsletter">
            <div className="footer-newsletter-bg">
              <div className="center-wrapper">
                <div
                  className="footer-newsletter-inner wow fadeInRight"
                  data-wow-duration="2s"
                  data-wow-delay="0.25s"
                >
                  <div className="footer-newsletter-heading page-bold-heading">
                    <h4>Subscribe to our Newsletter</h4>
                  </div>
                  <div className="footer-newsletter-email">
                    <form
                      action="#"
                      onSubmit={submitSubscribe}
                      method="post"
                      className="clearfix"
                    >
                      <input
                        type="hidden"
                        name="msubscribe"
                        id="msubscribe"
                        value="subscribe"
                      />
                      <div className="footer-newsletter-input form-half-feild left">
                        <input
                          type="email"
                          name="newsletter-email"
                          id="newsletter-email"
                          placeholder="Enter Your Email"
                          autocomplete="off"
                          required
                        />
                      </div>
                      <div className="newsletter-submit-btn right">
                        <input type="submit" name="submit" value="Submit" />
                      </div>
                    </form>
                    <br></br>
                    {newsmessage == true && (
                      <div
                        className="alert alert-success"
                        style={{
                          backgroundColor: "#d4edda",
                          borderColor: "#c3e6cb",
                          padding: "12px",
                        }}
                        role="alert"
                      >
                        Send subscribe message successfully
                      </div>
                    )}
                    {newerrormsg == true && (
                      <div
                        className="alert alert-success"
                        style={{
                          backgroundColor: "#d4edda",
                          borderColor: "#c3e6cb",
                          padding: "12px",
                        }}
                        role="alert"
                      >
                        Mail is not send!
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="center-wrapper">
              <div className="footer-bottom-content clearfix">
                <div
                  className="footer-logo-blk left wow fadeIn"
                  data-wow-duration="2s"
                  data-wow-delay="0.5s"
                >
                  <figure>
                    <a href="/home">
                      <img
                        src={backendurl + "uploads/" + data.image}
                        alt="Conative logo"
                      />
                    </a>
                  </figure>
                  <div className="footer-location">
                    <a
                      href="https://goo.gl/maps/VUxpJgQX4daJNyLDA"
                      target="_blank"
                    >
                      {data.address}
                    </a>
                  </div>
                  <div className="footer-social-icon">
                    <div className="footer-social-icon-heading">
                      <h6>Follow us on:</h6>
                    </div>
                    <div className="social-icons">
                      {social.map((item, index) => (
                        <>
                          <span key={item._id}>
                            {item.socialurl === "https://www.behance.net/" && (
                              <a href="https://www.behance.net" target="_blank">
                                <i className="fa-brands fa-behance"></i>
                              </a>
                            )}
                            {item.socialurl ===
                              "https://www.facebook.com/conativeitsolutions" && (
                              <a
                                href="https://www.facebook.com/conativeitsolutions"
                                target="_blank"
                              >
                                <i className="fa-brands fa-facebook-f"></i>
                              </a>
                            )}
                            {item.socialurl ===
                              "https://www.linkedin.com/company/conative-it-solutions-pvt-ltd?trk=biz-companies-cym&original_referer=https%3A%2F%2Fconativeitsolutions.com%2F" && (
                              <a
                                href="https://www.linkedin.com/company/conative-it-solutions-pvt-ltd?trk=biz-companies-cym&original_referer=https%3A%2F%2Fconativeitsolutions.com%2F"
                                target="_blank"
                              >
                                <i className="fa-brands fa-linkedin-in"></i>
                              </a>
                            )}
                            {item.socialurl ===
                              "https://www.instagram.com/conative_it_solutions/" && (
                              <a
                                href="https://www.instagram.com/conative_it_solutions/"
                                target="_blank"
                              >
                                <i className="fa-brands fa-instagram"></i>
                              </a>
                            )}
                            {item.socialurl === "https://www.youtube.com/" && (
                              <a href="https://www.youtube.com" target="_blank">
                                <i className="fa-brands fa-youtube"></i>
                              </a>
                            )}
                            {item.socialurl === "https://www.skype.com/en/" && (
                              <a href="https://www.skype.com" target="_blank">
                                <i className="fa-brands fa-skype"></i>
                              </a>
                            )}
                          </span>
                        </>
                      ))}
                    </div>
                  </div>
                </div>
                <div
                  className="footer-about-us-blk footer-link-blk left wow fadeIn"
                  data-wow-duration="2s"
                  data-wow-delay="0.5s"
                >
                  <div className="footer-about-us-heading footer-links-heading">
                    <h6>About us</h6>
                  </div>
                  <div className="footer-links">
                    <div className="it-training-common-list">
                      <ul>
                        {menu.map((m, index) => (
                          <li key={m._id}>
                            <a href={"/" + m.slugname}>{m.title}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  className="footer-courses-blk footer-link-blk left wow fadeIn"
                  data-wow-duration="2s"
                  data-wow-delay="0.5s"
                >
                  <div className="footer-courses-us-heading footer-links-heading">
                    <h6>Courses</h6>
                  </div>
                  <div className="footer-links">
                    <div className="it-training-common-list">
                      <ul>
                        {footerwidget.map((f, index) => (
                          <li key={f._id}>
                            <a href={"/courses/" + f.slugname}>{f.title}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  className="footer-poplular-courses-blk footer-link-blk left wow fadeIn"
                  data-wow-duration="2s"
                  data-wow-delay="0.5s"
                >
                  <div className="footer-about-us-heading footer-links-heading">
                    <h6>Popular Courses</h6>
                  </div>
                  <div className="footer-links">
                    <div className="it-training-common-list">
                      <ul>
                        {popularwidget.map((p, index) => (
                          <li key={p._id}>
                            <a href={"/courses/" + p.slugname}>{p.title}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-copyright align-center">
            <div className="center-wrapper">
              <div
                className="footer-copyright-conyent wow pulse"
                data-wow-duration="2s"
                data-wow-delay="0.25s"
              >
                <p dangerouslySetInnerHTML={{ __html: data.footer }}></p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="popup-bg-wr"></div>
    </>
  );
}

export default Footer;
