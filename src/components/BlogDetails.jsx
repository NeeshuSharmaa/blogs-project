import { Navigate, useNavigate, useParams } from "react-router-dom";
import useFetch from "../useFetch";
import { useState, useEffect } from "react";
import { deleteDoc, doc, getDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

const BlogDetails = ({
  setImageDisplay,
  db,
  error,
  setError,
  isPending,
  setIsPending,

  specificBlog,
}) => {
  useEffect(() => {
    setImageDisplay(false);
  }, []);

  const { id } = useParams();
  const navigate = useNavigate();
  // const {
  //   data: blog,
  //   isPending,
  //   error,
  // } = useFetch("http://localhost:8000/blogs/" + id);

  function deleteHandler(event, id) {
    event.preventDefault();
    // deleteDoc(specificBlog)
    deleteDoc(doc(db, "blogs", id))
      .then((doc) => console.log(`doc with id ${id} got deleted`))
      .catch((err) => console.log(err.message, err.code));
    navigate("/home");

    //   fetch("http://localhost:8000/blogs/" + blog.id, {
    //     method: "DELETE",
    //   }).then((res) => console.log(`blog with id: ${blog.id} got deleted`));
    //   navigate("/home");
  }

  return (
    <div className="blog-details">
      {isPending && <div>Loading.....</div>}
      {error && <div>{Error}</div>}
      {specificBlog && (
        <article className="blog-content">
          <h2>{specificBlog.title}</h2>
          <p>{specificBlog.body}</p>
          <small>{specificBlog.publishedDate}</small>
          <button
            className="delete-btn"
            onClick={(e) => deleteHandler(e, specificBlog.id)}
          >
            Delete
          </button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
