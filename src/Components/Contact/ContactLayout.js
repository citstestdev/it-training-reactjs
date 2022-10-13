import React, { useEffect, useState, useHistory } from "react";
import backendurl from "../../constant";
import { Helmet } from "react-helmet";

import ContactSection1 from "./ContactSection1";
import ContactSection2 from "./ContactSection2";
import ContactSection3 from "./ContactSection3";

function ContactLayout() {
  const [meta, setMeta] = useState("");
  const [pagedetails, setPagedetails] = useState("");

  useEffect(() => {
    fetch(backendurl + "contactdata")
      .then((response) => response.json())
      .then((json) => setPagedetails(json));
  }, []);

  useEffect(() => {
    fetch(backendurl + "contactmetadata")
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
      <ContactSection1 />
      <ContactSection2 />
      <ContactSection3 />
    </div>
  );
}

export default ContactLayout;
