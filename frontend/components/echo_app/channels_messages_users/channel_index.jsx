import React from "react";
import { Link } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../../../util/route_util";
import ChannelIndexItemContainer from "./channel_index_item_container";
import Modal from "../../modal/modal";
import MessageIndexContainer from "../message/message_index_container";
import Modal2 from "react-modal";
import { FaCrown } from "react-icons/fa";

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
    this.props.clearUsers();
    this.props.clearChannels();
  }
  
  componentDidMount() {
    this.props.clearUsers();
    this.props.clearChannels();
    this.props.fetchUsersFromServer(this.props.serverId)
      .then(() => this.props.fetchCurrentUser())
    this.props.fetchChannels(this.props.serverId)
      .then(() => this.props.history.push(`/app/servers/${this.props.serverId}/channels/${Object.values(this.props.channels)[0].id}/messages`))
    this.props.fetchCurrentUser();
  }
  
  componentDidUpdate(prevProp) {
    if (prevProp.serverId !== this.props.serverId) {
      this.props.fetchUsersFromServer(this.props.serverId)
        .then(() => this.props.fetchCurrentUser())
      this.props.fetchChannels(this.props.serverId)
        .then(() => this.props.history.push(`/app/servers/${this.props.serverId}/channels/${Object.values(this.props.channels)[0].id}/messages`))
      this.props.fetchCurrentUser();
    }
  }
  
  update(field) {
    return (e) => {
      this.props.removeChannelErrors();
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

  renderCursor() {
    if(!this.state.channel.name) {
      return { cursor: "not-allowed", opacity: "0.5" }
    }
  }

  renderUserOwner(id) {

  }

  // create channel function
  createChannelForm() {
    return (
      <div className="create-channel-form-wrapper-background" onClick={() => this.handleCloseModal()}>
        <div className="create-channel-form-wrapper" onClick={e => e.stopPropagation()}>

          <form className="create-channel-form">
            
            <div className="create-channel-header-type-input-wrapper">

              <div className="create-channel-header-wrapper">
                <h1>Create Text Channel</h1>
                <p>in Text Channels</p>
              </div>

              <div className="create-channel-type-wrapper">
                <h1>Channel Type</h1>
                <div className="create-channel-texttype-wrapper">
                  <h2>#</h2>
                  <div className="create-channel-texttype">
                    <h2>Text Channel</h2>
                    <p>Send Messages, opinions, puns, and emoji stickers</p>
                  </div>
                </div>
              </div>

              <div className="create-channel-label-error-wrapper">
                <label className={this.props.errors.length === 0 ? "create-channel-label" : "create-channel-label-2"}>Channel Name</label>
                {this.props.errors.map((error, i) => (
                  <div className="channel-error-wrapper" key={i}>
                    <ul className="channel-error">- {error}</ul>
                  </div>
                ))}
              </div>
              <input
                className="create-channel-input"
                type="text"
                value={this.state.channel.name}
                onChange={this.update("name")}
                placeholder="new-channel"
              />
              <label className="guidelines">By creating a channel, you agree to Echo's Community Guidelines</label>

            </div>

            <div className="create-channel-button-wrapper">
              <button className="cancel-channel-button" type="button" onClick={this.handleCloseModal}>Cancel</button>
              <button className="create-channel-button" type="submit" style={this.renderCursor()} disabled={!this.state.channel.name} onClick={this.handleSubmit}>Create Channel</button>
            </div>

          </form>

        </div>
      </div>
    )
  }

  renderEditDeleteJoinLeaveServer() {
    const { currentUserId, serverId, deleteServer, joinServer, leaveServer, openEditModal, users, server } = this.props
    if (server === undefined) return null;
    if (currentUserId === server.ownerId) {
      return (
        <div className="server-owner-button-wrapper">
          {/* <Link className="delete-button" to="/app" onClick={() => deleteServer(serverId)}>Delete Server</Link> */}
          <button className="edit-button" onClick={openEditModal}>Server Settings</button>
        </div>
      )
    // } else if (!users[currentUserId]) {
    //   return (
    //     <div className="join-leave-server-button-wrapper">
    //       <button className="join-button" onClick={() => joinServer({server_id: serverId})}>Join Server</button>
    //     </div>
    //   )
    } else {
      return (
        <div className="join-leave-server-button-wrapper">
          <Link className="leave-button" to="/app" onClick={() => leaveServer(serverId)}>Leave Server</Link>
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
    if ( !users || !channels || !server ) return null
    let modal = <Modal errors={this.props.errors} name={this.props.modal} server={this.props.server} serverId={this.props.serverId}/>
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
              key={channel.id}
              channel={channel}
              channelId={channel.id}
              serverId={channel.serverId}
              server={this.props.server}
            />
            )}
          </div>

          <ProtectedRoute path="/app/servers/:serverId/channels/:channelId/messages" component={MessageIndexContainer} />
            
          <div className="users-wrapper">
            <div className="users-total">
              Members - {Object.values(users).length}
            </div>
            {Object.values(users).map(user => {
              let userDisplay;
              if (server.ownerId === user.id) {
                userDisplay = <ul className="username-text">{user.username}<FaCrown className="crown"/></ul>
              } else {
                userDisplay = <ul className="username-text">{user.username}</ul>
              }
              return (
                <div key={user.id} className="users-link">
                  {userDisplay}
                </div>
              )
            })}
          </div>
          
        </div>

      </div>
    )
  }
  
}


export default ChannelIndex