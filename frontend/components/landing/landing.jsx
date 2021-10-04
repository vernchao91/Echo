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
        <div>
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
        <div className="header-wrapper">
          <h1 className="logo-wrapper">Welcome to Echo!</h1>
          <ul className="social-links-wrapper">
            <li>LinkedIn</li>
            <li>GitHub</li>
            <li>AngelList</li>
            <li>MazeRunner</li>
          </ul>
          <div className="button-wrapper">
            {this.loginOrLogout()}
          </div>
        </div>

        <div className="paragraph">
          <p>Your place to chat</p>
        </div>
        {this.renderApp()}
          
      </div>
    )
  }
}

export default Landing