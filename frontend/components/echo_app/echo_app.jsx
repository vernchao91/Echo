import React from "react";
import { Link } from "react-router-dom";
import ServerIndexItemContainer from "./servers/server_index_container";
import Modal from "react-modal";
import { 
  IoLogOutOutline, 
  IoHomeOutline, 
  IoCompassOutline,
  IoLogoGithub,
  IoLogoLinkedin,
} from "react-icons/io5";
import { SiAngellist } from "react-icons/si";

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
    this.props.fetchServersFromUser(this.props.currentUser.id)
      .then(() => this.setState({servers: this.props.servers}))
  }

  componentWillUnmount() {
    
  }

  handleOpenModal() {
    this.setState({modal: true, name: ""})
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
      this.props.removeServerErrors();
      this.setState({ [field]: e.currentTarget.value })
    }
  }

  handleMouseIn() {
    this.setState({ hover: true })
  }
  
  handleMouseOut() {
    this.setState({ hover: false })
  }

  renderCursor() {
    if(!this.state.name) {
      return { cursor: "not-allowed", opacity: "0.5" }
    }
  }

  createServerForm() {
    return (
      <div className="create-server-form-wrapper-background" onClick={() => this.handleCloseModal()}>
        <div className="create-server-form-wrapper" onClick={e => e.stopPropagation()}>
          <form className="create-server-form">

            <div className="create-server-top">
              <h1>Create your Server</h1>
              <p>Give your new server a personality with a name. You can always change it later.</p>
            </div>

            <div className={this.props.errors.length === 0 ? "create-server-bottom-1" : "create-server-bottom-2"}>

              <div className="label-error-wrapper">
                <label className="label-name">Server Name</label>
                {this.props.errors.map((error, i) => (
                  <div className="server-error-wrapper" key={i}>
                    <ul className="server-error">- {error}</ul>
                  </div>
                ))}
              </div>

              <input
                className="create-server-input"
                type="text"
                value={this.state.name}
                onChange={this.update("name")}>
              </input>

              <label className="guidelines">By creating a server, you agree to Echo's Community Guidelines</label>
              <div className="create-server-button-wrapper">
                <button type="button" onClick={this.handleCloseModal} className="cancel-server-button">Cancel</button>
                <button type="submit" onClick={this.handleSubmit} disabled={!this.state.name} style={this.renderCursor()} className="create-server-button">Create Server</button>
              </div>
            </div>
          </form>


        </div>  
      </div>
    )
  }

  render() {
    const pathName = this.props.history.location.pathname;
    const directMessaging = "/app/conversations";
    const explore = "/app/servers/explore";
    let renderStyleDM
    let renderStyleExplore
    let renderStyleExploreIcon
    if (pathName.includes(directMessaging)) {
      renderStyleDM = {backgroundColor: "rgb(58, 94, 211)", borderRadius: "10px", color: "rgb(255, 255, 255)"}
    } else if (pathName.includes(explore)) {
      renderStyleExplore = {backgroundColor: "rgb(18, 168, 85)", borderRadius: "10px", color: "rgb(255, 255, 255)"}
      renderStyleExploreIcon = {color: "rgb(255, 255, 255)"}
    }

    if (!this.props.servers) return null
    return (
      <div className="echoapp-wrapper">

        <div className="conversation-link-wrapper"> 
          <Link style={renderStyleDM} className="conversation-link" to="/app/conversations">DMs</Link>
        </div>

        <div className="server-wrapper">
          {Object.values(this.props.servers).map((server, idx) => (
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

        <Link to="/app/servers/explore/home" style={renderStyleExplore} className="explore-icon-wrapper">
          <div>
            <IoCompassOutline style={renderStyleExploreIcon} className="explore-icon"/>
          </div>
        </Link>

        <a href="https://github.com/vernchao91" target="_blank" className="github-icon-wrapper">
          <div><IoLogoGithub className="github-icon"/></div>
        </a>

        <a href="https://www.linkedin.com/in/vern-chao-a8201a1ba/" target="_blank" className="linkedin-icon-wrapper">
          <IoLogoLinkedin className="linkedin-icon"/>
        </a>

        <a href="https://angel.co/u/vern-chien-chao" target="_blank" className="angellist-icon-wrapper">
          <div><SiAngellist className="angellist-icon"/></div>
        </a>

        <Link to="/" className="home-icon-wrapper">
          <div><IoHomeOutline className="home-icon"/></div>
        </Link>

        <button onClick={this.props.logout} className="logout-icon-wrapper">
          <IoLogOutOutline className="logout-icon"/>
        </button>

      </div>
    )
  }

}

export default EchoApp