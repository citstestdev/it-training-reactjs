import React, { useEffect, useState } from "react";
import backendurl from "../../constant";
import { Helmet } from "react-helmet";

import BlogSection1 from "./BlogSection1";
import BlogSection2 from "./BlogSection2";

function BlogLayout() {
  const [meta, setMeta] = useState("");
  const [pagedetails, setPagedetails] = useState("");

  useEffect(() => {
    fetch(backendurl + "getblog")
      .then((response) => response.json())
      .then((json) => setPagedetails(json));
  }, []);
  useEffect(() => {
    fetch(backendurl + "blogmetadata")
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
      <BlogSection1 />
      <BlogSection2 />
    </div>
  );
}

export default BlogLayout;
