import React, { useEffect, useState } from "react";
import HomeLayout from "../Home/HomeLayout";
import CourseLayout from "../Course/CourseLayout";
import DetailLayout from "../Course/Detail/DetailLayout";
import AboutLayout from "../Aboutus/AboutLayout";
import BlogLayout from "../Blog/BlogLayout";
import BlogSingleLayout from "../Blog/BlogSingle/BlogSingleLayout";
import TestimonialLayout from "../Testimonial/TestimonialLayout";
import SearchLayout from "../Searchpage/SearchLayout";
import SlugLayout from "../Slug/SlugLayout";
// import Table from "../Search/Table";
import ContactLayout from "../Contact/ContactLayout";
import GetEnquiry from "../Common/GetEnquiry";
// import SearchGroup from "../Search/SearchGroup";
import Wc from "../watch/wc";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import backendurl from "../../constant";

function Header() {
  const [data, setData] = useState([]);
  const [social, setSocial] = useState([]);
  const [menu, setMenu] = useState([]);

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
      .then((m) => m.json())
      .then((m) => setMenu(m));
  }, []);

  return (
    <>
      {data != "" ? (
        <BrowserRouter>
          <header className="header-wr">
            <div className="header-top">
              <div className="center-wrapper">
                <div className="header-top-content clearfix">
                  <div className="header-social-icon-links left">
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
                    <div className="header-call-email">
                      <div className="header-call header-icon">
                        <span>
                          <img
                            src="/assets/images/phone-icon.svg"
                            alt="phone-icon"
                          />
                        </span>
                        <span>Call us now</span>
                        <a href={"tel:  +(91) " + data.phone}>
                          {"+(91)" + data.phone}
                        </a>
                      </div>
                      <div className="header-email header-icon">
                        <span>
                          <img
                            src="/assets/images/email-icon.svg"
                            alt="email-icon"
                          />
                        </span>
                        <a href={"mailto: " + data.clientemail}>
                          {data.clientemail}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="header-popular-courses right align-right">
                    <div className="popular-courses-btn">
                      <figure>
                        <img
                          src="/assets/images/telegram-icon.svg"
                          alt="images/telegram-icon"
                        />
                      </figure>
                      <a href="/courses">Popular Courses</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="header-botttom">
              <div className="center-wrapper">
                <div className="header-bottom-content clearfix">
                  <div className="header-logo left">
                    <figure>
                      <a href="/home">
                        <img
                          src={backendurl + "uploads/" + data.image}
                          alt="Conative logo"
                        />
                      </a>
                    </figure>
                  </div>
                  <nav className="navbar-wr right align-right">
                    <ul className="menu">
                      {menu.map((slug, index) => (
                        <li key={slug._id}>
                          <a
                            href={"/" + slug.slugname}
                            data-hover={slug.title}
                            id={slug.slugname}
                          >
                            {slug.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                  <div className="header-top-mob-view">
                    <a href="javascript:;" className="top-checklist-icon">
                      <i className="fa-solid fa-list-check"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <Routes>
            <Route path="/" element={<HomeLayout />} />
            <Route path="/home" element={<HomeLayout />} />
            <Route path="/courses" element={<CourseLayout />} />
            <Route path="/about-us" element={<AboutLayout />} />
            <Route path="/blog" element={<BlogLayout />} />
            <Route path="/testimonial" element={<TestimonialLayout />} />
            <Route path="/contact-us" element={<ContactLayout />} />
            <Route path="/courses-detail/:id" element={<DetailLayout />} />
            <Route path="/courses/:slug" element={<SlugLayout />} />
            <Route path="/blogsingle/:id" element={<BlogSingleLayout />} />
            <Route path="/search" element={<SearchLayout />} />
            <Route path="/Wc" element={<Wc />} />
          </Routes>
        </BrowserRouter>
      ) : (
        <div style={{ textAlign: "center" }}>
          <h1>API Not Found!</h1>
        </div>
      )}
      <GetEnquiry />
    </>
  );
}

export default Header;
