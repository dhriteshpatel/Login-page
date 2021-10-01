import React, { useState } from "react";
import "./Login.css";

function Login() {
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const submitForm = () => {
    if (username !== "" && password !== "") {
      var newUsername = username.split("");
      var newPassword = password.split("");
      let count = 0;
      for (let char of newUsername) {
        if (char.toUpperCase() === char) {
          count++;
        }
      }
      if (!(count > 0)) {
        alert("Username should have atleast one Capital letter");
        return;
      }
      if (password.length < 8) {
        alert("Password length should be atleast 8");
        return;
      }
      let count2 = 0;
      for (let char of newPassword) {
        if (char.toUpperCase() === char) {
          count2++;
        }
      }
      if (!(count2 > 0)) {
        alert("Password should have atleast one Capital letter");
        return;
      }
      if (/(@[A-Za-z])\w+/.test(password)) {
        alert("Add symbols in the password");
        return;
      }
      localStorage.setItem(
        "user",
        JSON.stringify({ username: username, password: password })
      );
    } else {
      alert("Enter values for both username and password");
    }
  };
  return (
    <div className="form_container">
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <div className="field">
          <h1 className="login_heading">Login</h1>
        </div>
        <div className="field">
          <p className="heading">Username</p>
          <input
            placeholder="Enter your name"
            type="text"
            className="username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="field">
          <p className="heading">Password</p>
          <input
            placeholder="Enter password..."
            type="password"
            className="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="field">
          <button className="mybtn" onClick={submitForm}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
