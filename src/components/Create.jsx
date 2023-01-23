import { addDoc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = ({ setImageDisplay, colRef, blogs, setBlogs }) => {
  useEffect(() => {
    setImageDisplay(false);
  }, []);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

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
    setIsPending(true);
    var month = months[new Date().getMonth()];
    var year = new Date().getFullYear();
    var date = new Date().getDate();
    var publishedDate = `${month} ${date}, ${year}`;

    addDoc(colRef, { title: title, body: body, publishedDate: publishedDate })
      .then((doc) => {
        setBlogs([...blogs, { ...doc, id: doc.id }]);
        console.log("blog added to collection");
      })
      .catch((err) => console.log(err.message));
    // fetch("http://localhost:8000/blogs", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(newBlog),
    // })
    //   .then((res) => res.json())
    //   .then(() => {
    //     console.log("new blog added", newBlog);
    //     setIsPending(false);
    //   });
    navigate("/home");
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
        {isPending === true ? (
          <button
            style={{ backgroundColor: "rgb(179, 178, 178)", color: "#000000" }}
            disabled
          >
            Adding Blog...
          </button>
        ) : (
          <button>Submit</button>
        )}
      </form>
    </div>
  );
};

export default Create;
