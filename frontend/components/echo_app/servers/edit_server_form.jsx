import React from "react";
import { IoCloseCircleOutline } from "react-icons/io5";

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
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  handleReset(e) {
    e.preventDefault();
    this.props.removeServerErrors();
    this.setState({name: this.props.server.name})
  }

  handleSubmit(e) {
    e.preventDefault();
    const server = Object.assign({}, this.state);
    this.props.updateServer(server)
    .then(()=> {
      this.props.closeModal()
    })
  }

  componentWillUnmount() {
    this.props.removeServerErrors();
  }

  update(field) {
    return (e) => {
      this.props.removeServerErrors();
      this.setState({ [field]: e.currentTarget.value })
    }
  }

  render() {
    return (
      <div className="edit-server-form-wrapper">

        <div className="edit-server-left-wrapper">
          <div className="edit-server-left">
            <ul className="left-side-server-name">{this.state.name ? this.state.name : "SERVER SETTINGS"}</ul>
            <ul className="left-side-overview">OVERVIEW</ul>
            <ul className="border-bottom"/>
            <button className="left-side-delete-button" onClick={() => this.props.deleteServer(this.props.serverId).then(this.props.closeModal())}>Delete Server</button>
          </div>
        </div>

        <div className={this.props.errors.length === 0 ? "edit-server-right-wrapper-1" : "edit-server-right-wrapper-2"}>
          <form className="edit-server-form">
            <h1>SERVER OVERVIEW</h1>
            <h2>SERVER NAME</h2>

            <input
              className="edit-server-input"
              type="text"
              value={this.state.name}
              onChange={this.update("name")}>
            </input>
            <div className="dummy-div-for-error"></div>

            {this.props.errors.map((error, i) => (
              <div className="server-error-wrapper" key={i}>
                <ul className="server-error">{error}</ul>
              </div>
            ))}

            <div className="edit-server-right-button-wrapper">
              <button type="button" onClick={this.handleReset} className="reset-server-button">
                Reset
              </button>
              <button type="submit" className="edit-server-button" onClick={this.handleSubmit}>Save Changes</button>
            </div>
          </form>
          <button className="edit-server-right-close-modal" onClick={() => this.props.closeModal()} ><IoCloseCircleOutline/></button>

        </div>

      </div>
    )
  }
}

export default EditServerForm