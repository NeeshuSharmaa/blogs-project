import { doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Blog = ({ blog, db, setSpecificBlog }) => {
  const navigate = useNavigate();
  function blogClickHandler(id) {
    const blogRef = doc(db, "blogs", id);
    getDoc(blogRef).then((doc) => {
      setSpecificBlog({ ...doc.data(), id: doc.id });
      console.log("blogRef:", { ...doc.data(), id: doc.id });
    });
  }

  return (
    <div
      className="blog"
      onClick={() => {
        blogClickHandler(blog.id);
        console.log(blog.id);
        navigate(`/blogs/${blog.id}`);
      }}
    >
      {/* <Link to={`/blogs/${blogId}`}> */}
      <div>
        <span className="blog-title">{blog.title}</span>
      </div>
      <p className="blog-preview">{blog.body}</p>
      <small className="published-date">{blog.publishedDate}</small>
      {/* </Link> */}
    </div>
  );
};

export default Blog;
