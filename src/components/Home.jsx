import Search from "./Search";
import BlogList from "./BlogList";
import useFetch from "../useFetch";

const Home = () => {
  const {
    data: blogs,
    setData: setBlogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");
  return (
    <>
      <Search blogs={blogs} setBlogs={setBlogs} />

      <BlogList blogs={blogs} isPending={isPending} error={error} />
    </>
  );
};

export default Home;
