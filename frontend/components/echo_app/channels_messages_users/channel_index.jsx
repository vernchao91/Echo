import React from "react";
import { Link } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import ChannelIndexItemContainer from "./channel_index_item_container";
import Modal from "../../modal/modal";
import MessageIndexContainer from "../message/message_index_container";
import Modal2 from "react-modal";
import { IoCloseCircleOutline } from "react-icons/io5";

class ChannelIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      users: this.props.users,
      channels: this.props.channels,
      modal: false,
      serverId: this.props.serverId,
      channel: {
        name: "",
        serverId: this.props.serverId
      }
    }
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    console.log("cwu channel index");
  }

  componentDidMount() {
    this.props.fetchUsersFromServer(this.props.serverId)
      .then((state) => this.setState({users: this.props.users}))
    this.props.fetchChannels(this.props.serverId)
      .then((state) => this.setState({channels: this.props.channels}))
  }
  
  componentDidUpdate(prevProp) {
    console.log("cdu channel index");
    if (prevProp.serverId !== this.props.serverId) {
      this.props.fetchUsersFromServer(this.props.serverId)
        .then((state) => this.setState({users: this.props.users, serverId: this.props.serverId}))
      this.props.fetchChannels(this.props.serverId)
        .then((state) => this.setState({channels: this.props.channels, serverId: this.props.serverId}))
    }
  }
  
  update(field) {
    return (e) => {
      this.setState({ 
        channel: {
        ...this.state.channel,
        [field]: e.currentTarget.value }
    })}
  }

  handleSubmit(e) {
    e.preventDefault();
    const channel = Object.assign({}, this.state.channel)
    channel.serverId = this.props.serverId
    this.props.createChannel(channel)
      .then(() => {this.handleCloseModal()})
  }

  handleOpenModal() {
    this.setState({
      modal: true,
      channel: {
        ...this.state.channel,
        name: ""
      }
    })
  }

  handleCloseModal() {
    this.setState({modal: false})
    this.props.removeChannelErrors();
  }

  // create channel function
  createChannelForm() {
    return (
      <div className="create-channel-form-wrapper">
        <button onClick={this.handleCloseModal}><IoCloseCircleOutline/></button>
        <form className="create-channel-form" onSubmit={this.handleSubmit}>
          <h1>Create Text Channel</h1>
          <label className="create-channel-label">Channel Name:</label>
          <input
            className="create-channel-input"
            type="text"
            value={this.state.channel.name}
            onChange={this.update("name")}
          />
          {this.props.errors.map((error, i) => (
            <div className="channel-error-wrapper" key={i}>
              <ul className="channel-error">{error}</ul>
            </div>
          ))}
          <button> Create Channel</button>
        </form>
      </div>
    )
  }

  renderEditDeleteJoinLeaveServer() {
    const { currentUserId, serverId, deleteServer, joinServer, leaveServer, openEditModal, users, server } = this.props
    if (server === undefined) return null;
    if (currentUserId === server.ownerId) {
      return (
        <div className="server-owner-button-wrapper">
          <Link className="delete-button" to="/app/servers" onClick={() => deleteServer(serverId)}>Delete Server</Link>
          <button className="edit-button" onClick={openEditModal}>Edit Server</button>
        </div>
      )
    } else if (!users[currentUserId]) {
      return (
        <div className="join-leave-server-button-wrapper">
          <button className="join-button" onClick={() => joinServer({server_id: serverId})}>Join Server</button>
        </div>
      )
    } else if (users[currentUserId]) {
      return (
        <div className="join-leave-server-button-wrapper">
          <Link className="leave-button" to="/app/servers" onClick={() => leaveServer(serverId)}>Leave Server</Link>
        </div>
      )
    }
  }

  renderServerName() {
    return ( 
    <div className="server-name-text">
      {this.props.server ?  this.props.server.name : null}
    </div>
    )
  }

  renderCreateChannelButton() {
    if(!this.props.server) return null
    if(this.props.server.ownerId === this.props.currentUserId) return <button className="create-channel-button" onClick={this.handleOpenModal}>+</button>
  }

  render() {
    const { users, channels, server } = this.props
    let modal = <Modal errors={this.props.errors} name={this.props.modal} serverId={this.props.serverId}/>
    if (!users || !channels || !server) return null
    return (
      <div className="channels-servername-messages-users-wrapper">

        <div className="server-header-wrapper">
          {this.renderServerName()}
          {this.renderEditDeleteJoinLeaveServer()}
        </div>
        {modal}

        <div className="channel-messages-users-wrapper">

          <div className="channel-wrapper">

            <div className="channel-header-wrapper">
              <h1 className="channel-header">Text Channels</h1>
              {this.renderCreateChannelButton()}
            </div>

            <Modal2 isOpen={this.state.modal} className="overlay" ariaHideApp={false}>
              {this.createChannelForm()}
            </Modal2> 
            {Object.values(channels).map(channel => 
            <ChannelIndexItemContainer
              className="channels-link"
              key={channel.id}
              channel={channel}
              channelId={channel.id}
              serverId={channel.serverId}
              server={this.props.server}
            />
            )}
          </div>

          <Route path="/app/servers/:serverId/channels/:channelId/messages" component={MessageIndexContainer} />

          <div className="users-wrapper">
            {Object.values(users).map(user => 
              <div 
                key={user.id}
                className="users-link">
                {user.username}
              </div>
            )}
          </div>
          
        </div>

      </div>
    )
  }
  
}


export default ChannelIndex