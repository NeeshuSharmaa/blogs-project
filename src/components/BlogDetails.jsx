import { useParams, useNavigate } from "react-router-dom";
import useFetch from "../useFetch";
import { useState } from "react";

const BlogDetails = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const {
    data: blog,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs/" + id);

  function deleteHandler(event) {
    event.preventDefault();

    fetch("http://localhost:8000/blogs/" + blog.id, {
      method: "DELETE",
    }).then((res) => console.log(`blog with id: ${blog.id} got deleted`));
    navigate("/");
  }
  return (
    <div className="blog-details">
      {isPending && <div>Loading.....</div>}
      {error && <div>{Error}</div>}
      {blog && (
        <article className="blog-content">
          <h2>{blog.title}</h2>
          <p>{blog.body}</p>
          <small>{blog.publishedDate}</small>
          <button className="delete-btn" onClick={deleteHandler}>
            Delete
          </button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
