import React from "react";
import Blog from "./Blog";
import NotFound from "./NotFound";

export default function BlogList({
  blogs,
  isPending,
  error,
  setSpecificBlog,
  db,
}) {
  return (
    <div className="blogsSection">
      <div className="blogs-div">
        {error && <div>{error}</div>}
        {isPending && <div>Loading....</div>}

        {blogs && blogs.length === 0 && <NotFound />}
        {blogs &&
          blogs.map((blog) => (
            <Blog
              blog={blog}
              key={blog.id}
              setSpecificBlog={setSpecificBlog}
              db={db}
            />
          ))}
      </div>
    </div>
  );
}
