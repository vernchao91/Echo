import React from "react";
import { Link } from "react-router-dom";
import ServerIndexItem from "./servers/server_index_item";
import Modal from "react-modal";

class EchoApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      servers: this.props.servers,
      modal: false,
      name: ""
    }
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchServers()
  }

  handleOpenModal() {
    this.setState({modal: true,  name: ""})
    this.props.removeServerErrors();
  }

  handleCloseModal() {
    this.setState({modal: false})
  }

  handleSubmit(e) {
    e.preventDefault();
    const server = Object.assign({}, this.state)
    this.props.createServer(server)
      .then(() => {this.handleCloseModal()
    })
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value })
    }
  }

  createServerForm() {
    return (
      <div className="create-server-form-wrapper-background" onClick={() => this.handleCloseModal()}>
        <div className="create-server-form-wrapper" onClick={e => e.stopPropagation()}>
          <form className="create-server-form" onSubmit={this.handleSubmit}>
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
      </div>
    )
  }

  showPublicServers() {
    this.props.fetchServersFromUser(this.props.currentUserId)
  }

  setServers(){

  }

  render() {
    const { servers } = this.props;

    return (
      <div className="echoapp-wrapper">

        <div className="home-link-wrapper"> 
          <Link className="home-link" to="/">Home</Link>
        </div>

        <div className="server-wrapper">
          {servers.map((server, idx) => (
            <ServerIndexItem
              key={idx}
              serverId={server.id}
              server={server}
            />
          ))}
        </div>
        <div className="create-server-button">
          <button className="open-modal-create" onClick={() => this.handleOpenModal()}>
            +
          </button>
          <Modal isOpen={this.state.modal} className="overlay" ariaHideApp={false}>
            {this.createServerForm()}
          </Modal>
        </div>

      </div>
    )
  }

}

export default EchoApp