import React from "react"
import { Link } from "react-router-dom"

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.target.value })
    }
  }

  signupUsername() {
    if (this.props.formType === "signup") {
      return (
        <label>
          Username:
          <input 
            type="text"
            value={this.state.username}
            onChange={this.update("username")}
          />
          <br />
        </label>
      )
    }
  }

  render() {
    let otherLink ;
    if (this.props.formType === "login") {
      otherLink = <Link to="/signup">Sign Up</Link>
    } else {
      otherLink = <Link to="/login">Login</Link>
    };

    return (
      <div>
        <h3>{this.props.formType} or {otherLink}</h3>
        <form onSubmit={this.handleSubmit}>
          {this.signupUsername()}
          <label>Email:
            <input
              type="text" 
              value={this.state.email}
              onChange={this.update("email")}>
              </input>
          </label>
          <br />
          <label>Password:
            <input
              type="password" 
              value={this.state.password}
              onChange={this.update("password")}>
              </input>
          </label>
          <br/>
          <button type="submit">{this.props.formType}</button>
        </form>
      </div>
    )
  }

}

export default SessionForm;