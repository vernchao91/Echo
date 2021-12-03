import React from "react"
import { Link } from "react-router-dom"

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemoSubmit1 = this.handleDemoSubmit1.bind(this);
    this.handleDemoSubmit2 = this.handleDemoSubmit2.bind(this);
    this.handleDemoSubmit3 = this.handleDemoSubmit3.bind(this);
  }

  componentWillUnmount() {
    this.props.removeSessionErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }
  handleDemoSubmit1(e) {
    e.preventDefault();
    const demo1 = { email: "demo1@gmail.com", password: "password" }
    this.props.processForm(demo1);
  }
  handleDemoSubmit2(e) {
    e.preventDefault();
    const demo2 = { email: "demo2@gmail.com", password: "password" }
    this.props.processForm(demo2);
  }
  handleDemoSubmit3(e) {
    e.preventDefault();
    const demo3 = { email: "demo3@gmail.com", password: "password" }
    this.props.processForm(demo3);
  }

  update(field) {
    return (e) => {
      this.props.removeSessionErrors();
      this.setState({ [field]: e.currentTarget.value })
    }
  }

  demoLogin() {
    if (this.props.formType === "Login") {
      return (
        <div className="demo-wrapper">
          <span className="demo-text">Demo Login</span>
          <button className="demo-login" type="button" onClick={this.handleDemoSubmit1}>Demo 1</button>
          <button className="demo-login" type="button" onClick={this.handleDemoSubmit2}>Demo 2</button>
          <button className="demo-login" type="button" onClick={this.handleDemoSubmit3}>Demo 3</button>
        </div>
      )
    }
  }

  signupUsername() {
    if (this.props.formType === "Register") {
      return (
        <div className="username-wrapper">
          <label className="label-username">
            <h1 style={renderStyle}>Username{renderErrors}</h1>
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

  inquiryLink() {
    let otherLink;
    if (this.props.formType === "Login") {
      otherLink = 
      <div className="redirect-wrapper-login">
        <label className="register-account">Need an account?</label>
        <Link className="register-link" to="/register">Register</Link>
      </div>
    } else {
      otherLink = 
      <div className="redirect-wrapper-register"> 
        <label className="login-account">Already have an account? </label>
        <Link className="login-link" to="/login"> Login</Link>
      </div>
    };
    return otherLink
  }

  render() {
    const formBox = `form-box-${this.props.formType}`
    const { errors, formType } = this.props
    let renderStyle
    let renderErrors
    let renderBorderColor
    let renderTerms

    let renderUsernameError = ""
    let renderEmailError = ""
    let renderPasswordError = ""
    if (errors.includes("Email can't be blank")) {
      renderEmailError = "Email can't be blank"
    } else if (errors.includes("Password is too short (minimum is 6 characters)")) {
      renderPasswordError = "Password is too short (minimum is 6 characters)"
    } else if (errors.includes("Username can't be blank")) {
      renderUsernameError = "Username can't be blank"
    }
    console.log(errors);
    console.log(renderUsernameError);

    let renderHeaderHeight
    if (formType === "Login") {
      renderHeaderHeight = {height: "30vh"}
    } else {
      renderHeaderHeight = {height: "20vh"}
      renderTerms = <p className="terms">By registering, you agree to Echo's Terms of Service and Privay Policy</p>
    }

    if (errors.length > 0  && formType === "Login") {
      renderErrors = "- Invalid credentials, please try again."
      renderStyle = {color: "red"}
      renderBorderColor = {borderColor: "red"}
    }

    let header
    if (formType === "Login") {
      header = <p>Welcome back!</p>
    } else {
      header = <p>Create an Account</p>
    }

    let signupUsername
    if (formType === "Register") {
    signupUsername = <div className="username-wrapper">
      <label className="label-username">
        <h1 style={renderStyle}>Username{renderUsernameError}</h1>
        <input
          style={renderBorderColor}
          id="username"
          type="text"
          value={this.state.username}
          onChange={this.update("username")}
          />
        <br />
      </label>
    </div>
    }

    return (
      <div className="bg-container">

        <header style={renderHeaderHeight} className="session-header-wrapper">
          <Link className="session-home-link" to="/">
            Home
          </Link>
        </header>

        <div className="session-form-wrapper">
          <div className={ formBox }>

            <form className="session-form" onSubmit={this.handleSubmit}>
              <div className="session-form-header">{header}</div>
              {signupUsername}

              <div className="email-wrapper">
                <label className="label-email">
                  <h1 style={renderStyle}>Email {renderErrors}</h1>
                  <input
                    style={renderBorderColor}
                    type="email" 
                    value={this.state.email}
                    onChange={this.update("email")}>
                  </input>
                </label>
              </div>

              <div className="password-wrapper">
                <label className="label-password">
                  <h1 style={renderStyle}>Password {renderErrors}</h1>
                  <input
                    style={renderBorderColor}
                    id="password"
                    type="password"
                    value={this.state.password}
                    onChange={this.update("password")}>
                  </input>
                </label>
              </div>

              {renderTerms}

              <button className={`${this.props.formType}-button`} type="submit">{this.props.formType}</button>
              {this.inquiryLink()}

            </form>
            {this.demoLogin()}

          </div>
        </div>

      </div>
    )
  }

}

export default SessionForm;