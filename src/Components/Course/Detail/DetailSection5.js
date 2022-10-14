import React, { useEffect, useState } from "react";
import axios from "axios";
import backendurl from "../../../constant";
// import ObjectID from mongodb;

function DetailSection5(props) {
  const [data, setData] = useState([]);
  const [count, setCount] = useState("");
  const [message, setMessage] = useState(false);
  // const [exits, setExits] = useState(false);

  setTimeout(function () {
    setMessage(false);
    // setExits(false);
  }, 5000);

  const cid = window.location.href.substring(
    window.location.href.lastIndexOf("/") + 1
  );

  useEffect(() => {
    fetch(backendurl + "getEnrolled/" + cid)
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  const submitHandler = (e) => {
    e.preventDefault();
    var courseid = document.getElementById(`courseid`).value;
    var name = document.getElementById(`name`).value;
    var email = document.getElementById(`email`).value;
    var phone = document.getElementById(`phone`).value;
    var message = document.getElementById(`message`).value;

    const postdata = {
      courseid: courseid,
      name: name,
      email: email,
      phone: phone,
      message: message,
    };

    let apiUrl = backendurl + "coursecontact";
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
          result.json();
        },
        (error) => {
          console.log("Error code");
        }
      );
    e.target.reset();
    setMessage(true);
    setCount(count + 1);
  };

  return (
    <>
      <div
        className="course-enquiry-form wow fadeIn"
        data-wow-duration="2s"
        data-wow-delay="0.5s"
      >
        <div className="enquiry-form-img">
          <figure>
            <img
              src={
                backendurl +
                "uploadimg/400x250/" +
                props.shortdetail.imagemiddile
              }
              alt="course-single"
            />
          </figure>
        </div>
        <div className="form-duration-enrolled">
          <div className="form-duration duration-enrolled">
            <h4>
              Duration: <span>{props.shortdetail.duration}</span>
            </h4>
          </div>
          <div className="form-enrolled duration-enrolled">
            <h4>
              Enrolled: <span>{data.length + " Students"} </span>
            </h4>
          </div>
        </div>
        <div className="enquiry-form-content">
          <div className="enquiry-form-heading">
            <h4>Get Course Enquiry</h4>
          </div>
          <div className="keystroke-form-con">
            <form method="POST" action="#" onSubmit={submitHandler}>
              <div className="keystroke-form-email form-half-feild">
                <input
                  type="hidden"
                  name="courseid"
                  id="courseid"
                  placeholder="Please enter message"
                  value={props.shortdetail._id}
                  autocomplete="off"
                />
              </div>

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
                  id="name"
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
                  id="email"
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
                  id="phone"
                  placeholder="Phone"
                  autocomplete="off"
                  minlength="10"
                  required
                />
              </div>
              <div className="keystroke-form-course">
                <div className="keystroke-form-input form-half-feild">
                  <span>
                    <img
                      src="/assets/images/enquiry-form-msg.svg"
                      alt="enquiry-form-msg"
                    />
                  </span>
                  <textarea
                    rows="1"
                    id="message"
                    placeholder="Message"
                  ></textarea>
                </div>
              </div>
              <div className="form-submit-btn">
                <input
                  type="submit"
                  name="submit"
                  value="Send Form"
                  className="site-btn"
                />
              </div>
            </form>
            <br></br>
            {message === true && (
              <div
                className="alert alert-success"
                style={{
                  "background-color": "#d4edda",
                  "border-color": "#f8d7da",
                  padding: "12px",
                }}
                role="alert"
              >
                Send message
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default DetailSection5;
