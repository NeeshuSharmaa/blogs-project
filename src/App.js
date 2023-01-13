import "./App.css";
import React from "react";
import Header from "./components/Header";
import useFetch from "./useFetch";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import BlogDetails from "./components/BlogDetails";
import Create from "./components/Create";
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/create" element={<Create />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/blogs/:id" element={<BlogDetails />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
