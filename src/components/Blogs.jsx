import React from "react";
import { Link } from "react-router-dom";
import Blog from "./Blog";

export default function Blogs({ blogs, isPending, error }) {
  return (
    <div className="blogsSection">
      <div className="blogs-div">
        {error && <div>{error}</div>}
        {isPending && <div>Loading....</div>}
        {blogs && blogs.map((blog) => <Blog blog={blog} key={blog.id} />)}
      </div>
    </div>
  );
}
