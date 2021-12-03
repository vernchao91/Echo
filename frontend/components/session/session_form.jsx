import React from "react";
import { Link } from "react-router-dom";
import { IoHomeOutline } from "react-icons/io5";

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
        <Link className="login-link" to="/login">Already have an account?</Link>
      </div>
    };
    return otherLink
  }

  render() {
    const formBox = `form-box-${this.props.formType}`
    const { errors, formType } = this.props
    let renderTerms

    let renderUsernameError = ""
    let classNameUsername = "label-username"
    let renderEmailError = ""
    let classNameEmail = "label-email"
    let renderPasswordError = ""
    let classNamePassword = "label-password"
    let header

    this.props.errors.forEach(error => {
      if (error.includes("Username can't be blank")) {
        classNameUsername = "label-error-username"
        renderUsernameError = " - This field is required"
      }
      if (error.includes("Username has already been taken")) {
        classNameUsername = "label-error-username"
        renderUsernameError = " - Username has already been taken"
      }
      if (error.includes("Email can't be blank")) {
        classNameEmail = "label-error-email"
        renderEmailError = " - This field is required"
      }  
      if (error.includes("Email has already been taken")) {
        classNameEmail = "label-error-email"
        renderEmailError = " - Email has already been taken"
      }
      if (error.includes("Invalid credentials, please try again.")) {
        classNameEmail = "label-error-email"
        renderEmailError = " - Invalid credentials, please try again."
      }
      if (error.includes("Password is too short (minimum is 6 characters)")) {
        classNamePassword = "label-error-password"
        renderPasswordError = " - Password is too short (minimum is 6 characters)"
      }
      if (error.includes("Invalid credentials, please try again.")) {
        classNamePassword = "label-error-password"
        renderPasswordError = " - Invalid credentials, please try again."
      }  
    })

    let renderHeaderHeight
    if (formType === "Login") {
      renderHeaderHeight = {height: "30vh"}
      header = <p>Welcome back!</p>
    } else if (formType === "Register") {
      renderHeaderHeight = {height: "20vh"}
      renderTerms = <p className="terms">By registering, you agree to Echo's Terms of Service and Privay Policy</p>
      header = <p>Create an Account</p>
    }

    let signupUsername
    if (formType === "Register") {
    signupUsername = <div className="username-wrapper">
      <label className={classNameUsername}>
        <h1>Username{renderUsernameError}</h1>
        <input
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
            <IoHomeOutline/>
          </Link>
        </header>

        <div className="session-form-wrapper">
          <div className={ formBox }>

            <form className="session-form" onSubmit={this.handleSubmit}>
              <div className="session-form-header">{header}</div>
              {signupUsername}

              <div className="email-wrapper">
                <label className={classNameEmail}>
                  <h1>Email {renderEmailError}</h1>
                  <input
                    type="email" 
                    value={this.state.email}
                    onChange={this.update("email")}>
                  </input>
                </label>
              </div>

              <div className="password-wrapper">
                <label className={classNamePassword}>
                  <h1>Password {renderPasswordError}</h1>
                  <input
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