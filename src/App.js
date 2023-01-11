import "./App.css";
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import Blogs from "./components/Blogs";
import useFetch from "./useFetch";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";
function App() {
  const {
    data: blogs,
    setData: setBlogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");

  return (
    <Router>
      <div className="App">
        <Header />
        <Search blogList={blogs} setBlogs={setBlogs} />
        <Switch>
          <Route path="/">
            <Blogs blogs={blogs} isPending={isPending} error={error} />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
