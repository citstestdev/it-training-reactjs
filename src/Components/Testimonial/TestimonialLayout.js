import React, { useEffect, useState } from "react";
import backendurl from "../../constant";
import { Helmet } from "react-helmet";

import TestimonialSection1 from "./TestimonialSection1";
import TestimonialSection2 from "./TestimonialSection2";

function TestimonialLayout() {
  const [meta, setMeta] = useState(null);

  useEffect(() => {
    fetch(backendurl + "testimonialmetadata")
      .then((response) => response.json())
      .then((meta) => setMeta(meta));
  }, []);
  return (
    <div className="wrapper full-page">
      <Helmet>
        <title>{meta ? meta.title : "Testimonial Page"}</title>
        <meta name="description" content={meta ? meta.description : ""} />
        <meta name="keyword" content={meta ? meta.keyword : ""} />
      </Helmet>
      <TestimonialSection1 />
      <TestimonialSection2 />
    </div>
  );
}

export default TestimonialLayout;
