import React from "react";
import Blog from "./Blog";

export default function Blogs({ blogs, deleteHandler, isPending }) {
  return (
    <div className="blogsSection">
      <div className="blogs-div">
        {isPending && <div>Loading....</div>}
        {blogs &&
          blogs.map((blog) => (
            <Blog blog={blog} key={blog.id} deleteHandler={deleteHandler} />
          ))}
      </div>
    </div>
  );
}
