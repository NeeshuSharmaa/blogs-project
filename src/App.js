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
import PrivateRoute from "./routes/PrivateRoute";
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
      <userContext.Provider value={loggedIn}>
        {loggedIn ? (
          <Header setLoggedIn={setLoggedIn} imageDisplay={imageDisplay} />
        ) : null}

        <Routes>
          <Route
            exact
            path="/"
            element={<LoginPage setLoggedIn={setLoggedIn} />}
          />
          <Route
            path="/home"
            element={
              <PrivateRoute
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
            }
          />
          <Route
            path="/create"
            element={
              <PrivateRoute
                component={
                  <Create
                    setImageDisplay={setImageDisplay}
                    blogs={blogs}
                    setBlogs={setBlogs}
                    colRef={colRef}
                  />
                }
              />
            }
          />
          <Route
            path="/about"
            element={
              <PrivateRoute
                component={<About setImageDisplay={setImageDisplay} />}
              />
            }
          />
          <Route
            path={`/blogs/:id`}
            element={
              <PrivateRoute
                component={
                  <BlogDetails
                    setImageDisplay={setImageDisplay}
                    blogs={blogs}
                    db={db}
                    specificBlog={specificBlog}
                  />
                }
              />
            }
          />
        </Routes>
      </userContext.Provider>
    </div>
  );
}

export default App;
