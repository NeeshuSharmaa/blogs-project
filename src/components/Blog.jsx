import Blogs from "./Blogs";

const Blog = ({ blog, deleteHandler }) => {
  return (
    <div className="blog">
      <div>
        <span className="blog-title">{blog.title}</span>
        <button
          className="blog-delete-btn"
          onClick={() => {
            deleteHandler(blog.id);
          }}
        >
          Delete
        </button>
      </div>

      <p className="blog-preview">{blog.body}</p>
      <br />
      <small className="published-date">{blog.publishedDate}</small>
    </div>
  );
};

export default Blog;
