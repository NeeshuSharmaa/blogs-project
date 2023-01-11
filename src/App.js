import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Blogs from "./components/Blogs";
import useFetch from "./useFetch";

function App() {
  const {
    data: blogs,
    setData: setBlogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <div className="App">
      <Header />
      <Search blogList={blogs} setBlogs={setBlogs} />
      <Blogs blogs={blogs} isPending={isPending} error={error} />
    </div>
  );
}

export default App;
