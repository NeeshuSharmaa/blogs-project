import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import useFetch from "./useFetch";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import BlogDetails from "./components/BlogDetails";
import Create from "./components/Create";
import Home from "./components/Home";
import LoginPage from "./components/LoginPage";

import { initializeApp } from "firebase/app";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [imageDisplay, setImageDisplay] = useState(true);

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

  return (
    <Router>
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
              (<Route exact path="/home" element={<Home />}></Route>
              <Route
                path="/create"
                element={<Create setImageDisplay={setImageDisplay} />}
              ></Route>
              <Route
                path="/about"
                element={<About setImageDisplay={setImageDisplay} />}
              ></Route>
              <Route
                path="/blogs/:id"
                element={<BlogDetails setImageDisplay={setImageDisplay} />}
              ></Route>
              )
            </>
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
