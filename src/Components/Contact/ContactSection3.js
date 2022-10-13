import React, { useEffect, useState } from "react";
import axios from "axios";
import backendurl from "../../constant";

function ContactSection3() {
  const [message, setMessageshow] = useState(false);
  const [errormsg, setErrormag] = useState(false);
  const [contact, setContact] = useState([]);
  const [cat, setCategory] = useState([]);

  useEffect(() => {
    fetch(backendurl + "contactdata")
      .then((response) => response.json())
      .then((data) => setContact(data));
  }, []);

  useEffect(() => {
    fetch(backendurl + "getcategory/0")
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
    var yourmessage = document.getElementById(`message`).value;

    const postdata = {
      mtype: mtype,
      name: yourname,
      email: youremail,
      phone: yourphone,
      designation: yourdesignation,
      message: yourmessage,
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
      setMessageshow(false);
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
  };

  return (
    <>
      <section className="map-form-wr">
        <div className="map-con">
          <iframe
            src={contact.mapdata}
            width="600"
            height="450"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="center-wrapper">
          <div className="map-form-content clearfix">
            <div
              className="get-in-touch-form right wow fadeInRight"
              data-wow-duration="2s"
              data-wow-delay="0.5s"
            >
              <div className="contact-us-form">
                <div className="contact-form-heading">
                  <h3>{contact.formheading}</h3>
                </div>
                <div className="contact-form-para">
                  <p>{contact.formdescription}</p>
                </div>
                <div className="contact-form-con">
                  <form action="#" method="POST" onSubmit={submitHandler}>
                    <div className="contact-form-name-email clearfix">
                      <input
                        type="hidden"
                        name="mtype"
                        id="mtype"
                        value="contact"
                      />
                      <div className="contact-form-name contact-form-half-feild left">
                        <input
                          type="text"
                          name="name"
                          id="name"
                          placeholder="Name"
                          autocomplete="off"
                          required
                        />
                      </div>
                      <div className="contact-form-email contact-form-half-feild right">
                        <input
                          type="email"
                          name="email"
                          id="email"
                          placeholder="Email"
                          autocomplete="off"
                          required
                        />
                      </div>
                    </div>
                    <div className="contact-form-phone-course clearfix">
                      <div className="contact-form-phone contact-form-half-feild left">
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
                      <div className="contact-form-course contact-form-half-feild right">
                        <select id="designation" name="designation" required>
                          <option value="">Select Category</option>
                          {cat.map((post, index) => (
                            <option key={post._id}>{post.displayname}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div className="contact-form-textarea contact-form-half-feild">
                      <textarea
                        rows="6"
                        id="message"
                        placeholder="Message..."
                      ></textarea>
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
                  <br></br>

                  {message == true && (
                    <div
                      className="alert alert-success"
                      style={{
                        backgroundColor: "#d4edda",
                        borderColor: "#c3e6cb",
                        fontSize: "15px",
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
      </section>
    </>
  );
}

export default ContactSection3;
