import { useParams } from "react-router-dom";
import useFetch from "../useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const {
    data: blog,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs/" + id);
  return (
    <div className="blog-details">
      {isPending && <div>Loading.....</div>}
      {error && <div>{Error}</div>}
      {blog && (
        <article className="blog-content">
          <h2>{blog.title}</h2>
          <p>{blog.body}</p>
          <small>{blog.publishedDate}</small>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;
