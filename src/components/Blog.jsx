import { Link } from "react-router-dom";

const Blog = ({ blog }) => {
  return (
    <div className="blog">
      <Link to={`/blogs/${blog.id}`}>
        <div>
          <span className="blog-title">{blog.title}</span>
        </div>

        <p className="blog-preview">{blog.body}</p>

        <small className="published-date">{blog.publishedDate}</small>
      </Link>
    </div>
  );
};

export default Blog;
