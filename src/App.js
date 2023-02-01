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
import PrivateRoute from "./routes/PrivateRoute";
import { getFirestore, collection } from "firebase/firestore";

import { initializeApp } from "firebase/app";
import { createContext } from "react";
export const userContext = createContext();

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
      {/* <userContext.Provider value={loggedIn}> */}
      {loggedIn ? (
        <Header setLogged In={setLoggedIn} imageDisplay={imageDisplay} />
      ) : null}
      <Routes>
        <Route path="/" component={<LoginPage setLoggedIn={setLoggedIn} />} />
        <PrivateRoute
          path="/home"
          component={
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
        />
        <PrivateRoute
          path="/create"
          element={
            <Create
              setImageDisplay={setImageDisplay}
              blogs={blogs}
              setBlogs={setBlogs}
              colRef={colRef}
            />
          }
        />
        <PrivateRoute
          path="/about"
          element={<About setImageDisplay={setImageDisplay} />}
        />
        <PrivateRoute
          path={`/blogs/:id`}
          element={
            <BlogDetails
              setImageDisplay={setImageDisplay}
              blogs={blogs}
              db={db}
              specificBlog={specificBlog}
            />
          }
        />
      </Routes>
      {/* </userContext.Provider> */}
    </div>
  );
}

export default App;
