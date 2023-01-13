import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Blogs from "./components/Blogs";
import useFetch from "./useFetch";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About";
import BlogDetails from "./components/BlogDetails";
import Create from "./components/Create";

function App() {
  const {
    data: blogs,
    setData: setBlogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");
  console.log("rendering", blogs, isPending, error);
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <Search blogList={blogs} setBlogs={setBlogs} />
            <Blogs blogs={blogs} isPending={isPending} error={error} />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/blogs/:id">
            <BlogDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
