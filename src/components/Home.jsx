import Search from "./Search";
import BlogList from "./BlogList";
import useFetch from "../useFetch";
import { useEffect } from "react";
import { getDocs } from "firebase/firestore";
const Home = ({
  setImageDisplay,
  blogs,
  setBlogs,
  error,
  setError,
  isPending,
  setIsPending,
  colRef,
  db,
  setSpecificBlog,
}) => {
  // const {
  //   data: blogs,
  //   setData: setBlogs,
  //   isPending,
  //   error,
  // } = useFetch("http://localhost:8000/blogs");
  useEffect(() => {
    setImageDisplay(true);
    // setBlogs([]);
    console.log("useffect ran");
    getDocs(colRef)
      .then((snapshot) => {
        let bloglist = [];
        snapshot.docs.forEach((doc) => {
          bloglist.push({ ...doc.data(), id: doc.id });
        });
        console.log(bloglist);
        setBlogs(bloglist);
        setIsPending(false);
      })
      .catch((err) => {
        console.log(err.message);
        setError(err.message);
        setIsPending(false);
      });
  }, []);
  console.log("renderd");

  return (
    <>
      <Search
        blogs={blogs}
        setBlogs={setBlogs}
        setSpecificBlog={setSpecificBlog}
      />

      <BlogList
        blogs={blogs}
        isPending={isPending}
        error={error}
        setSpecificBlog={setSpecificBlog}
        db={db}
      />
    </>
  );
};

export default Home;
