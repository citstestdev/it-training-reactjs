import React, { useEffect, useState } from "react";
import backendurl from "../../constant";
import { Helmet } from "react-helmet";

import CourseSection1 from "./CourseSection1";
import CourseSection2 from "./CourseSection2";

function CourseLayout() {
  const [meta, setMeta] = useState("");
  const [pagedetails, setPagedetails] = useState("");

  useEffect(() => {
    fetch(backendurl + "getpageheading")
      .then((resp) => resp.json())
      .then((json) => setPagedetails(json));
  }, []);

  useEffect(() => {
    fetch(backendurl + "coursemetadata")
      .then((response) => response.json())
      .then((meta) => setMeta(meta));
  }, []);

  return (
    <div className="wrapper full-page">
      <Helmet>
        <title>{meta ? meta.title : pagedetails.pagetitle}</title>
        <meta name="description" content={meta ? meta.description : ""} />
        <meta name="keyword" content={meta ? meta.keyword : ""} />
      </Helmet>
      <CourseSection1 />
      <CourseSection2 />
    </div>
  );
}

export default CourseLayout;
