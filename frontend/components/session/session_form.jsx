import React from "react"
import { Link } from "react-router-dom"

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.user;
    this.handleSubmit = this.handleSubmit.bind(this)
    this.demoLogin = this.demoLogin.bind(this)
  }

  componentWillUmount() {
    this.props.removeSessionErrors();
  }

  insertErorrs() {
    this.props.errors;
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  demoLogin() {

  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value })
    }
  }

  signupUsername() {
    if (this.props.formType === "Register") {
      return (
        <div className="username-wrapper">
          <label>
            Username:
            <input 
              type="text"
              value={this.state.username}
              onChange={this.update("username")}
              />
            <br />
          </label>
        </div>
      )
    }
  }

  registerOtherLink() {
    let otherLink ;
    if (this.props.formType === "Login") {
      otherLink = <Link to="/register">Register</Link>
    } else {
      otherLink = <Link to="/login">Already have an account?</Link>
    };
    return otherLink
  }

  render() {

    return (
      <div className="session-form-wrapper">
        <h3>{this.registerOtherLink()}</h3>
        <form onSubmit={this.handleSubmit}>

          {this.signupUsername()}

            <div className="email-wrapper">
              <label>Email:
                <input
                  type="text" 
                  value={this.state.email}
                  onChange={this.update("email")}>
                  </input>
              </label>
            </div>

            <div className="password-wrapper">
              <label>Password:
                <input
                  type="password" 
                  value={this.state.password}
                  onChange={this.update("password")}>
                  </input>
              </label>
            </div>

            {this.props.errors}
          <button type="submit">{this.props.formType}</button>
        </form>
      </div>
    )
  }

}

export default SessionForm;