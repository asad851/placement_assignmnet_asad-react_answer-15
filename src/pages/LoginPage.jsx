import React, { useEffect, useReducer } from "react";
import { useState } from "react";
import axios from "axios";

export default function LoginPage() {
  const [signedUp, setSignedUp] = useState(false);
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSwitch = () => {
    signedUp ? setSignedUp(false) : setSignedUp(true);
    setEmail("");
    setPassword("");
    setUserName("");
  };
  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://jsonplaceholder.typicode.com/users",
        {
          username: username,
          email: email,
          password: password,
        }
      );
      const existingData = JSON.parse(localStorage.getItem("myData")) || [];
      existingData?.push(res?.data);
      localStorage.setItem("myData", JSON.stringify(existingData));
    } catch (err) {
      console.log(`error:${err}`);
    }
    setEmail("");
    setPassword("");
    setUserName("");
  };
  const handleSignin = (e) => {
    e.preventDefault();
    try {
      const existingData = JSON.parse(localStorage.getItem("myData"));
      if (existingData?.email === email && existingData.password === password) {
      } else if (
        existingData?.email === email &&
        existingData.password != password
      ) {
      } else {
      }
    } catch (err) {
      console.log(`error:${err}`);
    }
    setEmail("");
    setPassword("");
    setUserName("");
  };

  return (
    <div className="formBoxContainer">
      <div className="formBox">
        <form className="form">
          {!signedUp && (
            <>
              <label htmlFor="name">Name :</label>
              <input
                type="text"
                name="name"
                value={username}
                tabIndex={1}
                placeholder="Enter your name"
                onChange={(e) => setUserName(e.target.value)}
              />
            </>
          )}

          <label htmlFor="email">Email :</label>
          <input
            type="email"
            name="email"
            value={email}
            required
            tabIndex={2}
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            value={password}
            name="password"
            required
            tabIndex={3}
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />

          {signedUp ? (
            <button type="submit" onClick={handleSignin}>
              sign in
            </button>
          ) : (
            <button type="submit" onClick={handleSignup}>
              Sign up
            </button>
          )}
          
          <span >
            Click to {""}
            <span type="button" onClick={handleSwitch}>{signedUp ? "Sign up" : "Sign in"}</span>
          </span>
        </form>
      </div>
    </div>
  );
}
