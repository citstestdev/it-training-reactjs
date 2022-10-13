import React, { useEffect, useState } from "react";
import backendurl from "../../constant";
import { Helmet } from "react-helmet";

import Section1 from "./Section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";
import Section6 from "./Section6";
import Section7 from "./Section7";
import Section8 from "./Section8";

function HomeLayout() {
  const [meta, setMeta] = useState(null);
  const [pagetitle, setPagetitle] = useState("");

  useEffect(() => {
    fetch(backendurl + "homemetadata")
      .then((response) => response.json())
      .then((meta) => setMeta(meta));
  }, []);

  useEffect(() => {
    fetch(backendurl + "getheader")
      .then((res) => res.json())
      .then((pagetitle) => setPagetitle(pagetitle));
  }, []);
  // console.log("mettata", metaarr);
  return (
    <div className="wrapper full-page">
      <Helmet>
        <title>{meta ? meta.title : pagetitle.pagetitle}</title>
        <meta name="description" content={meta ? meta.description : ""} />
        <meta name="keyword" content={meta ? meta.keyword : ""} />
      </Helmet>
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
    </div>
  );
}

export default HomeLayout;
