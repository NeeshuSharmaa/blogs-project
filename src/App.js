import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import useFetch from "./useFetch";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import About from "./components/About";
import BlogDetails from "./components/BlogDetails";
import Create from "./components/Create";
import Home from "./components/Home";
import LoginPage from "./components/LoginPage";
import { getFirestore, collection } from "firebase/firestore";

import { initializeApp } from "firebase/app";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const [imageDisplay, setImageDisplay] = useState(true);
  const [blogs, setBlogs] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  const [specificBlog, setSpecificBlog] = useState(null);
  const navigate = useNavigate();
  // console.log("app.js ran");

  const firebaseConfig = {
    apiKey: "AIzaSyC8nlDMiONXQxrTC8mzx5Er5QQo4sMTOHo",
    authDomain: "blogs-project-d2bf9.firebaseapp.com",
    projectId: "blogs-project-d2bf9",
    storageBucket: "blogs-project-d2bf9.appspot.com",
    messagingSenderId: "901186626762",
    appId: "1:901186626762:web:a7d596ee5de24c56c48033",
  };
  //init app
  initializeApp(firebaseConfig);

  //firestore data fetch
  const db = getFirestore();
  const colRef = collection(db, "blogs");

  return (
    <div className="App">
      {loggedIn ? (
        <Header setLoggedIn={setLoggedIn} imageDisplay={imageDisplay} />
      ) : null}
      <Routes>
        {!loggedIn ? (
          <Route
            path="/"
            element={<LoginPage setLoggedIn={setLoggedIn} />}
          ></Route>
        ) : (
          <>
            (
            <Route
              exact
              path="/home"
              element={
                <Home
                  setImageDisplay={setImageDisplay}
                  blogs={blogs}
                  setBlogs={setBlogs}
                  db={db}
                  colRef={colRef}
                  error={error}
                  setError={setError}
                  ispending={isPending}
                  setIsPending={setIsPending}
                  setSpecificBlog={setSpecificBlog}
                />
              }
            ></Route>
            <Route
              path="/create"
              element={
                <Create
                  setImageDisplay={setImageDisplay}
                  blogs={blogs}
                  setBlogs={setBlogs}
                  colRef={colRef}
                />
              }
            ></Route>
            <Route
              path="/about"
              element={<About setImageDisplay={setImageDisplay} />}
            ></Route>
            <Route
              path={`/blogs/:id`}
              element={
                <BlogDetails
                  setImageDisplay={setImageDisplay}
                  blogs={blogs}
                  db={db}
                  specificBlog={specificBlog}
                />
              }
            ></Route>
            )
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
