import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Blogs from "./components/Blogs";

function App() {
  var [blogs, setBlogs] = useState([
    {
      title: "The Existential Crisis",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat....",
      publishedDate: "October 13, 2014",
      id: "1",
    },
    {
      title: "The Paradigm of Decisions",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat....",
      publishedDate: "December 13, 2014",
      id: "2",
    },
    {
      title: "Sloth ready to Grind",
      body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat....",
      publishedDate: "January 13, 2014",
      id: "3",
    },
  ]);
  function deleteHandler(id) {
    var newBlogs = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlogs);
  }
  return (
    <div className="App">
      <Header />
      <Search blogList={blogs} setBlogs={setBlogs} />
      <Blogs blogs={blogs} deleteHandler={deleteHandler} />
    </div>
  );
}

export default App;
