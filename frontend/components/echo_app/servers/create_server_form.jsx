import React from "react";

class CreateServerForm extends React.Component {
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
      .then(() => {this.props.closeModal()
    })
  }
  
  componentWillUnmount() {
    this.props.removeServerErrors();
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value })
    }
  }

  render() {
    return (
      <div className="create-server-form-wrapper" onClick={e => e.stopPropagation()}>
        <form className="create-server-form" onSubmit={this.handleSubmit} >
        <h1>Create a Server</h1>
          <label className="label-name">Name: </label>
          <input
            className="create-server-input"
            type="text"
            value={this.state.name}
            onChange={this.update("name")}>
          </input>
          <button className="create-server-button">Create Server</button>

          {this.props.errors.map((error, i) => (
            <div className="session-error-wrapper" key={i}>
              <li className="session-error">{error}</li>
            </div>
          ))}
        </form>
      </div>
    )
  }
}

export default CreateServerForm