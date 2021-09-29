import React from "react"
import { Link } from "react-router-dom"

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user;
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
          <span></span>
          <button type="submit" onClick={this.handleDemoSubmit}>Demo Login</button>
        </div>
      )
    }
  }

  signupUsername() {
    if (this.props.formType === "Register") {
      return (
        <div className="username-wrapper">
          <label className="label-username">
            Username
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
      <div className="redirect-wrapper-register">
        <label>Need an Account? </label>
        <Link className="register-link" to="/register"> Register</Link>
      </div>
    } else {
      otherLink = 
      <div className="redirect-wrapper-login"> 
        <label>Already have an account? </label>
        <Link className="login-link" to="/login"> Login</Link>
      </div>
    };
    return otherLink
  }

  render() {

    // div-wrapper
    const formBox = `form-box-${this.props.formType}`

    return (
      <>
        <div className="bg-container">
          
        </div>
        <header className="session-header-wrapper">
          <Link className="session-home-link" to="/">
            Home
          </Link>
        </header>
        <div className="session-form-wrapper">
          <div className={ formBox }>
            <div className="form-wrapper">
              <form className="session-form" onSubmit={this.handleSubmit}>
                {this.inquiryLink()}

                {this.signupUsername()}

                  <div className="email-wrapper">
                    <label className="label-email">Email
                      <input
                        id="email"
                        type="email" 
                        value={this.state.email}
                        onChange={this.update("email")}>
                        </input>
                    </label>
                  </div>

                  <div className="password-wrapper">
                    <label className="label-password">Password
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
                      <li className="session-error">{error}</li>
                    </div>
                  ))}
                  
                <button type="submit">{this.props.formType}</button>
                  {this.demoLogin()}

              </form>
            </div>
          </div>
        </div>
      </>
    )
  }

}

export default SessionForm;