import React from "react";

import BlogBanner from "./BlogBanner";
import BlogSingle from "./BlogSingle";

function BlogSingleLayout() {
  return (
    <div className="wrapper full-page">
      <BlogBanner />
      <BlogSingle />
    </div>
  );
}

export default BlogSingleLayout;
