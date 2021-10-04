import React from "react";

class ServerForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    const server = Object.assign({}, this.state)
    this.props.createServer(server)
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value })
    }
  }

  render() {
    return (
      <div className="server-form-wrapper">
        <form onSubmit={this.handleSubmit}>
          <label className="label-name">Name</label>
          <input
            id="name"
            type="text"
            value={this.state.name}
            onChange={this.update("name")}>
          </input>
          <button className="create-server-button">Create Server</button>
        </form>
      </div>
    )
  }
}

export default ServerForm