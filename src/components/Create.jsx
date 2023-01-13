import { useState } from "react";
import useFetch from "../useFetch";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  function submitHandler(event) {
    event.preventDefault();
    var month = months[new Date().getMonth()];
    var year = new Date().getFullYear();
    var date = new Date().getDate();
    var publishedDate = `${month} ${date}, ${year}`;
    const newBlog = { title: title, body: body, publishedDate: publishedDate };
    console.log(newBlog);
    fetch("http://localhost:8000/blogs", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(newBlog),
    })
      .then((res) => res.json())
      .then(() => console.log(newBlog));
  }

  return (
    <div className="add-blog">
      <h2>¡Hola! Add New Blog Here</h2>
      <form className="blog-form" onSubmit={submitHandler}>
        <label htmlFor="newblog-title">Blog Title:</label>
        <input
          type="text"
          id="newblog-title"
          onChange={(e) => setTitle(e.target.value)}
          required
        ></input>
        <label htmlFor="newblog-body">Blog Body:</label>
        <textarea
          type="text"
          rows="10"
          cols="50"
          id="newblog-body"
          onChange={(e) => setBody(e.target.value)}
          required
        ></textarea>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Create;
