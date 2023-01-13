import React from "react";
import Blog from "./Blog";
import Notfound from "./Not Found";

export default function BlogList({ blogs, isPending, error }) {
  return (
    <div className="blogsSection">
      <div className="blogs-div">
        {error && <div>{error}</div>}
        {isPending && <div>Loading....</div>}
        {blogs === 0 ? (
          <Notfound />
        ) : (
          blogs && blogs.map((blog) => <Blog blog={blog} key={blog.id} />)
        )}
      </div>
    </div>
  );
}
