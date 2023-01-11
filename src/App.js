import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Blogs from "./components/Blogs";

function App() {
  var [blogs, setBlogs] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="App">
      <Header />
      <Search blogList={blogs} setBlogs={setBlogs} />
      <Blogs blogs={blogs} />
    </div>
  );
}

export default App;
