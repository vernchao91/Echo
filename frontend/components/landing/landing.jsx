import React from "react";
import { Link } from "react-router-dom";

class Landing extends React.Component  {
  constructor(props) {
    super(props);
  }

  loginOrLogout() {
    if (this.props.user) {
      return (
        <div className="logout-wrapper">
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
          <Link className="app-link" to="/app/servers">Join Servers!</Link>
        </div>
      )
    }
  }

  render() {
  return (
    <div className="landing-wrapper">

      <div className="background-header-wrapper">
        <div className="header-wrapper">
          <div className="logo-wrapper">
            <div className="logo-text">
              Welcome to Echo!
            </div>
          </div>
          <ul className="social-links-wrapper">
            <a href="https://www.linkedin.com/in/vern-chao-a8201a1ba/">LinkedIn</a>
            <a href="https://github.com/vernchao91">GitHub</a>
            <a href="https://angel.co/u/vern-chien-chao">AngelList</a>
            {/* <a href="https://vernchao91.github.io/Maze_Runner/">MazeRunner</a> */}
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