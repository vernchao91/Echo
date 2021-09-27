import React from "react"
import { Link } from "react-router-dom"

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
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
          <label>Email:
            <input
              type="text" 
              value={this.state.username}
              onChange={this.update("username")}>
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