import React from "react";

class EditServerForm extends React.Component {
  constructor(props) {
    super(props)
    const { servers, serverId } = this.props;
    if (serverId !== undefined ) {
      this.state = {
        name: servers[serverId].name,
        id: this.props.serverId
      }
    } else {
      this.state = {
        name: "",
        id: this.props.serverId
      }
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    const server = Object.assign({}, this.state);
    console.log(this.props.errors);
    this.props.updateServer(server)
    // .then(()=> {
      // this.props.closeModal()
    // })
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

export default EditServerForm