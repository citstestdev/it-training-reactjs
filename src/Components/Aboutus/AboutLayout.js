import React, { useEffect, useState } from "react";
import backendurl from "../../constant";
import { Helmet } from "react-helmet";

import AboutSection1 from "./AboutSection1";
import AboutSection2 from "./AboutSection2";
import AboutSection3 from "./AboutSection3";
import AboutSection4 from "./AboutSection4";
import AboutSection5 from "./AboutSection5";

function AboutLayout() {
  const [meta, setMeta] = useState(null);
  const [pagedetails, setPagedetails] = useState("");

  useEffect(() => {
    fetch(backendurl + "getaboutus")
      .then((resp) => resp.json())
      .then((json) => setPagedetails(json));
  }, []);

  useEffect(() => {
    fetch(backendurl + "aboutmetadata")
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
      <AboutSection1 />
      <AboutSection2 />
      <AboutSection3 />
      <AboutSection4 />
      <AboutSection5 />
    </div>
  );
}

export default AboutLayout;
