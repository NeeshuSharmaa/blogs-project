import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Blogs from "./components/Blogs";

function App() {
  var [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setIsPending(false);
      });
  }, []);

  return (
    <div className="App">
      <Header />
      <Search blogList={blogs} setBlogs={setBlogs} />
      <Blogs blogs={blogs} isPending={isPending} />
    </div>
  );
}

export default App;
