import React from "react";
import { Link } from "react-router-dom";

const Landing = (props) => {
  if (props.user) {
    return (
      <div>
        <p>Welcome {props.user.username}, start your own server or join others!</p>
        <button onClick={props.logout}>Log Out</button>
      </div>
    )
  } else {
    return (
      <div className="landing-wrapper">

        <div className="header-wrapper">
          <h1 className="logo-wrapper">Welcome to Echo!</h1>
          <ul className="social-links-wrapper">
            <li>LinkedIn</li>
            <li>GitHub</li>
            <li>AngelList</li>
            <li>MazeRunner</li>
          </ul>
          <div className="button-wrapper">
            <Link className="register-button" to="/register">Register</Link>
            <Link className="login-button" to="/login">Login </Link>
          </div>
        </div>

        <div className="paragraph">
          <p>Your place to chat</p>
        </div>
          
      </div>
    )
  }
}

export default Landing