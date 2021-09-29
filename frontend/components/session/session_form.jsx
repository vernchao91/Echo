import React from "react"
import { Link } from "react-router-dom"

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = props.user;
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleDemoSubmit = this.handleDemoSubmit.bind(this)
  }

  componentWillUnmount() {
    this.props.removeSessionErrors();
  }

  insertErorrs() {

  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  handleDemoSubmit(e) {
    e.preventDefault();
    const user = {
      email: "demo@gmail.com",
      password: "password"
    }
    this.props.processForm(user);
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value })
    }
  }

  demoLogin() {
    if (this.props.formType === "Login") {
      return (
        <div className="demo-wrapper">
          <button type="submit" onClick={this.handleDemoSubmit}>Demo Login</button>
        </div>
      )
    }
  }

  signupUsername() {
    if (this.props.formType === "Register") {
      return (
        <div className="username-wrapper">
          <label>
            Username:
            <input
              id="username"
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
      otherLink = <div>
        <label>Need an Account? </label>
        <Link to="/register">Register</Link>
      </div>
    } else {
      otherLink = <div> 
        <label>Already have an account? </label>
        <Link to="/login">Login</Link>
      </div>
    };
    return otherLink
  }

  render() {

    return (
      <div className="session-form-wrapper">
        <h3>{this.registerOtherLink()}</h3>
        <form onSubmit={this.handleSubmit}>

          {this.signupUsername()}
          {this.demoLogin()}

            <div className="email-wrapper">
              <label>Email:
                <input
                  id="email"
                  type="email" 
                  value={this.state.email}
                  onChange={this.update("email")}>
                  </input>
              </label>
            </div>

            <div className="password-wrapper">
              <label>Password:
                <input
                  id="password"
                  type="password" 
                  value={this.state.password}
                  onChange={this.update("password")}>
                  </input>
              </label>
            </div>

            {this.props.errors.map((error, i) => (
              <div className="session-error-wrapper" key={i}>
                <li>{error}</li>
              </div>
            ))}
            
          <button type="submit">{this.props.formType}</button>

        </form>
      </div>
    )
  }

}

export default SessionForm;