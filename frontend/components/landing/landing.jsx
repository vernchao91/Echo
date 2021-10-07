import React from "react";
import { Link } from "react-router-dom";

class Landing extends React.Component  {
  constructor(props) {
    super(props);
  }

  loginOrLogout() {
    if (this.props.user) {
      return (
        <div className="Logout">
          <button className="logout-button" onClick={this.props.logout}>Log Out</button>
        </div>
      )
    } else {
      return (
        <div className="button-wrapper">
          <Link className="register-button" to="/register">Register</Link>
          <Link className="login-button" to="/login">Login </Link>
        </div>
      )
    }
  }

  renderApp(){
    if (this.props.user) {
      return (
        <div className="app-link-wrapper">
          <Link className="app-link" to="/app">Join Servers!</Link>
        </div>
      )
    }
  }

  render() {
  return (
    <div className="landing-wrapper">

      <div className="background-header-wrapper">
        <div className="header-wrapper">
          <h1 className="logo-wrapper">Welcome to Echo!</h1>
          <ul className="social-links-wrapper">
            <li>LinkedIn</li>
            <li>GitHub</li>
            <li>AngelList</li>
            <li>MazeRunner</li>
          </ul>
            {this.loginOrLogout()}
        </div>

        <div className="paragraph">
          <p>Your place to belong.</p>
          <p>Imagine a community that brings people together.</p>
          <p>You could be in a coding bootcamp, having a gaming session, or even in a study group.</p>
          <p>Echo makes it convenient to connect and communicate!</p>
        </div>
        {this.renderApp()}
      </div>

      <div>
      
      </div>

    </div>
    )
  }
}

export default Landing