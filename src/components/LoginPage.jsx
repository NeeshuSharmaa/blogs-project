import React, { useRef, useState } from "react";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function LoginPage({ setLoggedIn }) {
  const email = useRef();
  const password = useRef();
  const loginForm = useRef();
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  //init auth
  const auth = getAuth();

  const signUpHandler = (e) => {
    e.preventDefault();
    var userEmail = email.current.value;
    var userPassword = password.current.value;

    createUserWithEmailAndPassword(auth, userEmail, userPassword)
      .then((cred) => {
        console.log("user created:", cred.user);
        navigate("/home");
        userEmail = "";
        userPassword = "";
      })
      .catch((err) => {
        console.log(err.code, err.message);
        setError(err.message);
      });
  };
  const loginHandler = (e) => {
    e.preventDefault();
    var userEmail = email.current.value;
    var userPassword = password.current.value;
    signInWithEmailAndPassword(auth, userEmail, userPassword)
      .then((cred) => {
        console.log("user signed in:", cred.user);

        setLoggedIn(true);
        navigate("/home");
        userEmail = "";
        userPassword = "";
      })
      .catch((err) => {
        console.log(err.code, err.message);
        setError(err.message);
      });
  };

  return (
    <div className="login-page">
      <center>
        <h1 style={{ margin: 0 }}>Intros-Blog World</h1>
      </center>
      <form className="login-form" ref={loginForm}>
        <div>
          <label htmlFor="email">Email </label>
          <input
            type="text"
            id="email"
            ref={email}
            onClick={() => setError(null)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            ref={password}
            onClick={() => setError(null)}
            required
          />
        </div>

        <button className="sign-in-btn" onClick={signUpHandler}>
          Sign Up
        </button>
        <button className="login-btn" onClick={loginHandler}>
          Login
        </button>
      </form>
      {error && (
        <center>
          <span>{error}</span>
        </center>
      )}
    </div>
  );
}
