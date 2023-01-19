import React, { useRef } from "react";

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

  //init auth
  const auth = getAuth();

  const signUpHandler = (e) => {
    e.preventDefault();
    var userEmail = email.current.value;
    var userPassword = password.current.value;

    createUserWithEmailAndPassword(auth, userEmail, userPassword)
      .then((cred) => {
        console.log("user created:", cred.user);
      })
      .catch((err) => {
        console.log(err.code, err.message);
      });
    navigate("/home");
    userEmail = "";
    userPassword = "";
  };
  const loginHandler = (e) => {
    e.preventDefault();
    var userEmail = email.current.value;
    var userPassword = password.current.value;
    signInWithEmailAndPassword(auth, userEmail, userPassword)
      .then((cred) => {
        console.log("user signed in:", cred.user);

        setLoggedIn(true);
      })
      .catch((err) => {
        console.log(err.code, err.message);
      });
    navigate("/home");
    userEmail = "";
    userPassword = "";
  };

  return (
    <div className="login-form">
      <form className="login-form" ref={loginForm}>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" ref={email} required />
        <label htmlFor="password">Password</label>
        <input type="text" id="password" ref={password} required />
        <button className="sign-in-btn" onClick={signUpHandler}>
          Sign Up
        </button>
        <button className="login-in-btn" onClick={loginHandler}>
          Login
        </button>
      </form>
    </div>
  );
}
