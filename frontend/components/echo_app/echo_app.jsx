import React from "react";
import { Link } from "react-router-dom";
import ServerIndexItemContainer from "./servers/server_index_container";
import Modal from "react-modal";
import { IoLogOutOutline, IoHomeOutline, IoCompassOutline } from "react-icons/io5";

class EchoApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      servers: this.props.servers,
      modal: false,
      name: "",
      hover: false
    }
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleMouseIn = this.handleMouseIn.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }

  componentDidMount() {
    this.props.fetchServersFromUser(this.props.currentUserId)
      .then(() => this.setState({servers: this.props.servers}))
  }

  componentDidUpdate() {
    
  }

  handleOpenModal() {
    this.setState({modal: true,  name: ""})
  }
  
  handleCloseModal() {
    this.setState({modal: false, name: ""})
    this.props.removeServerErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    const server = Object.assign({}, this.state)
    this.props.createServer(server)
      .then(() => {this.handleCloseModal()})
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value })
    }
  }

  handleMouseIn() {
    this.setState({ hover: true })
  }
  
  handleMouseOut() {
    this.setState({ hover: false })
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
                <div className="server-error-wrapper" key={i}>
                  <li className="server-error">{error}</li>
                </div>
              ))}
          </form>
        </div>  
      </div>
    )
  }

  render() {
    if (!this.state.servers) return null
    return (
      <div className="echoapp-wrapper">

        <div className="conversation-link-wrapper"> 
          <Link className="conversation-link" to="/app/conversations">DMs</Link>
        </div>

        <div className="server-wrapper">
          {Object.values(this.state.servers).map((server, idx) => (
            <ServerIndexItemContainer
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

        <div className="explore-icon-wrapper">
            <Link to="/app/servers/explore">
              <IoCompassOutline className="explore-icon"/>
            </Link>
        </div>

        <div className="home-icon-wrapper">
          <Link to="/"><IoHomeOutline className="home-icon"/></Link>
        </div>

        <div className="logout-icon-wrapper">
          <IoLogOutOutline onClick={this.props.logout} className="logout-icon"/>
        </div>

      </div>
    )
  }

}

export default EchoApp