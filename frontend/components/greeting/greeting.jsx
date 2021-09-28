import React from "react";
import { Link } from "react-router-dom";

const Greeting = (props) => {
  if (props.user) {
    return (
      <div>
        <p>Welcome {props.user.username}, start your own server or join others!</p>
        <button onClick={props.logout}>Log Out</button>
      </div>
    )
  } else {
    return (
      <div>
        <Link className="register-button" to="/register">Register</Link>
        <Link className="login-button" to="/login">Log In </Link>
      </div>
    )
  }
}

export default Greeting