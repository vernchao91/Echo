import React from "react";

class EditServerForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      id: this.props.serverId
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    console.log(this.props.serverId);
    e.preventDefault();
    const server = Object.assign({}, this.state) 
    this.props.updateServer(server)
    this.props.closeModal()
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value })
    }
  }

  render() {
    return (
      <div className="edit-server-form-wrapper">
        <h1>Edit Server</h1>
          <form onSubmit={this.handleSubmit}>
            <label className="label-name">Name: </label>
            <input
              className="edit-server-input"
              type="text"
              value={this.state.name}
              onChange={this.update("name")}>
            </input>
            <button className="edit-server-button">Edit Server</button>
          </form>
      </div>
    )
  }
}

export default EditServerForm