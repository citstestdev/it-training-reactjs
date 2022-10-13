import React, { useEffect, useState } from "react";
import axios from "axios";
import backendurl from "../../constant";

function GetEnquiry() {
  const [messageshow, setMessageshow] = useState(false);
  const [errormsg, setErrormag] = useState(false);
  const [cat, setCategory] = useState([]);
  const [radiocourse, setRadiocourse] = useState("");
  const [duration, setDuration] = useState("");

  useEffect(() => {
    fetch(backendurl + "getcategory/0")
      .then((resp) => resp.json())
      .then((cat) => setCategory(cat));
  }, []);

  function onChangeJoin(event) {
    setDuration(event.target.value);
  }

  function onChangeRadioCourse(event) {
    setRadiocourse(event.target.value);
  }

  const curiousSubmitHandler = (e) => {
    e.preventDefault();
    var name = document.getElementById(`curiousname`).value;
    var email = document.getElementById(`curiousemail`).value;
    var phone = document.getElementById(`curiousphone`).value;
    var course = document.getElementById(`curiouscourse`).value;
    var message = document.getElementById(`curiousmessage`).value;

    if (radiocourse == "") {
      alert("Please fill the field");
      return false;
    }

    if (duration == "") {
      alert("Please fill the field");
      return false;
    }

    const postdata = {
      name: name,
      email: email,
      phone: phone,
      course: course,
      message: message,
      duration: duration,
      radiocourse: radiocourse,
    };

    let apiUrl = backendurl + "createcurious";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify(postdata),
    };

    setMessageshow(true);
    setErrormag(false);
    axios
      .post(apiUrl, options)
      .then((res) => res.json())
      .then((result) => {
        result.json();
      })
      .catch(function (error) {
        console.log(error.message);
        setMessageshow(false);
        setErrormag(true);
      });
    e.target.reset();
    setTimeout(function () {
      window.location.reload();
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
    //   .then(
    //     (result) => {
    //       result.json();
    //     },
    //     (error) => {
    //       console.log("Error code");
    //     }
    //   );
    // setMessageshow(true);
    // e.target.reset();
    // setTimeout(function () {
    //   window.location.reload();
    // }, 3000);
  };

  return (
    <>
      <div className="back-to-top align-center">
        <a href="javascript:;">
          <i className="fa-solid fa-angles-up fa-bounce"></i>
        </a>
        <h4>Back to top</h4>
      </div>
      <div className="get-enquiry">
        <div className="page-medium-heading">
          <h4>Get Enquiry</h4>
        </div>
        <figure>
          <img
            src="/assets/images/get-enquiry-icon.svg"
            alt="get-enquiry-icon"
          />
        </figure>
      </div>
      <div className="popup-form">
        <div className="popup-form-content align-center">
          <div className="popup-form-content-inner scroller">
            <div className="form-heading-con">
              <figure>
                <img src="/assets/images/form-img.svg" alt="fomr-img" />
              </figure>
              <div className="form-heading">
                <h4>Hey Curious!</h4>
              </div>
              <div className="popup-form-con">
                <form
                  method="POST"
                  action="#"
                  onSubmit={curiousSubmitHandler}
                  id="curiousformreset"
                >
                  <div className="form-name-email clearfix">
                    <div className="keystroke-form-name form-half-feild left">
                      <span>
                        <img
                          src="/assets/images/form-user-icon.svg"
                          alt="form-user-icon"
                        />
                      </span>
                      <input
                        type="text"
                        name="name"
                        id="curiousname"
                        placeholder="Name"
                        autocomplete="off"
                        required
                      />
                    </div>
                    <div className="keystroke-form-email form-half-feild right">
                      <span>
                        <img
                          src="/assets/images/form-email-icon.svg"
                          alt="form-user-icon"
                        />
                      </span>
                      <input
                        type="email"
                        name="email"
                        id="curiousemail"
                        placeholder="Email"
                        autocomplete="off"
                        required
                      />
                    </div>
                  </div>
                  <div className="form-phone-course clearfix">
                    <div className="keystroke-form-phone form-half-feild left">
                      <span>
                        <img
                          src="/assets/images/form-call-icon.svg"
                          alt="form-user-icon"
                        />
                      </span>
                      <input
                        type="text"
                        name="phone"
                        id="curiousphone"
                        placeholder="Phone"
                        autocomplete="off"
                        minLength="10"
                        maxLength="10"
                        pattern="[0-9]*"
                        required
                      />
                    </div>
                    <div className="keystroke-form-course form-half-feild right">
                      <div className="keystroke-form-input">
                        <span>
                          <img
                            src="/assets/images/form-course-icon.svg"
                            alt="form-user-icon"
                          />
                        </span>
                        <select id="curiouscourse" name="course" required>
                          <option value="">Select Category</option>
                          {cat.map((post, index) => (
                            <option key={post._id}>{post.displayname}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="popup-form-blk form-all-radio-btn scroller">
                    <div className="form-radio-btn-con form-radio-btn-one">
                      <div className="form-sub-heading">
                        <h6>How soon you want to join IT Training?</h6>
                      </div>
                      <div
                        className="form-radio-btn clearfix"
                        onChange={onChangeJoin}
                      >
                        <div className="form-radio-btn-input left">
                          <input
                            type="radio"
                            name="curiousduration"
                            value="this-week"
                            id="this-week"
                          />
                          <label for="this-week">This Week</label>
                        </div>
                        <div className="form-radio-btn-input left">
                          <input
                            type="radio"
                            name="curiousduration"
                            value="upcoming-week"
                            id="upcoming-week"
                          />
                          <label for="upcoming-week">Upcoming week</label>
                        </div>
                        <div className="form-radio-btn-input left">
                          <input
                            type="radio"
                            name="curiousduration"
                            value="in-a-month"
                            id="in-a-month"
                          />
                          <label for="in-a-month">In a month</label>
                        </div>
                      </div>
                    </div>
                    <div className="form-radio-btn-con form-radio-btn-second">
                      <div className="form-sub-heading">
                        <h6>Courses you are looking for?</h6>
                      </div>
                      <div
                        className="form-radio-btn clearfix"
                        onChange={onChangeRadioCourse}
                      >
                        <div className="form-radio-btn-input left">
                          <input
                            type="radio"
                            name="rcources"
                            value="ui-ux"
                            id="ui-ux"
                          />
                          <label for="ui-ux">UI and UX</label>
                        </div>
                        <div className="form-radio-btn-input left">
                          <input
                            type="radio"
                            name="rcources"
                            value="web-development"
                            id="web-development"
                          />
                          <label for="web-development">Web Development</label>
                        </div>
                        <div className="form-radio-btn-input left">
                          <input
                            type="radio"
                            name="rcources"
                            value="digital-solution"
                            id="digital-solution"
                          />
                          <label for="digital-solution">Digital Solution</label>
                        </div>
                        <div className="form-radio-btn-input left">
                          <input
                            type="radio"
                            name="rcources"
                            value="server-management"
                            id="server-management"
                          />
                          <label for="server-management">
                            Server management
                          </label>
                        </div>
                        <div className="form-radio-btn-input left">
                          <input
                            type="radio"
                            name="rcources"
                            value="animation"
                            id="animation"
                          />
                          <label for="animation">Animation</label>
                        </div>
                        <div className="form-radio-btn-input left">
                          <input
                            type="radio"
                            name="rcources"
                            value="graphic-designing"
                            id="graphic-designing"
                          />
                          <label for="graphic-designing">
                            Graphic Designing
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-textarea-msg popup-form-blk">
                    <div className="form-sub-heading">
                      <h6>Your Message</h6>
                    </div>
                    <div className="form-textarea-con">
                      <textarea
                        rows="2"
                        id="curiousmessage"
                        placeholder="Type your message"
                      ></textarea>
                    </div>
                  </div>
                  <div className="form-submit-btn">
                    <input
                      type="submit"
                      name="submit"
                      value="Send"
                      className="site-btn"
                    />
                  </div>
                  <div className="popup-form-cross-btn">
                    <a href="javascript:;">
                      <i className="fa-solid fa-xmark"></i>
                    </a>
                  </div>
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
    </>
  );
}

export default GetEnquiry;
