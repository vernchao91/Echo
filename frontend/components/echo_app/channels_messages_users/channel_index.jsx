import React from "react";
import { Link } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import ChannelIndexItemContainer from "./channel_index_item_container";
import Modal from "../../modal/modal"
import MessageIndexContainer from "../message/message_index_container"

class ChannelIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      users: this.props.users,
      channels: this.props.channels
    }
  }

  componentDidMount() {
    this.props.fetchUsersFromServer(this.props.serverId)
      .then((state) => this.setState({users: this.props.users}))
    this.props.fetchChannels(this.props.serverId)
      .then((state) => this.setState({channels: this.props.channels}))
  }

  componentDidUpdate(prevProp) {
    if (prevProp.serverId !== this.props.serverId) {
      this.props.fetchUsersFromServer(this.props.serverId)
        .then((state) => this.setState({users: this.props.users}))
      this.props.fetchChannels(this.props.serverId)
        .then((state) => this.setState({channels: this.props.channels}))
    }
  }

  renderServerName() {
    return ( 
    <div className="server-name-text">
      {this.props.server ?  this.props.server.name : null}
    </div>
    )
  }

  renderEditDeleteJoinLeaveServer() {
    const { currentUserId, serverId, deleteServer, joinServer, leaveServer, openEditModal, users, server } = this.props
    if (server === undefined) return;
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
  
  render() {
    const { users, channels } = this.props
    let modal = <Modal errors={this.props.errors} name={this.props.modal} serverId={this.props.serverId}/>
    return (

      <div className="channels-servername-messages-users-wrapper">

        <div className="server-header-wrapper">
          {this.renderServerName()}
          {this.renderEditDeleteJoinLeaveServer()}
        </div>
        {modal}

        <div className="channel-messages-users-wrapper">

          <div className="channel-wrapper">
            {Object.values(channels).map(channel => 
            <ChannelIndexItemContainer
              className="channels-link"
              key={channel.id}
              channel={channel}
              serverId={channel.serverId}
            />
            )}
          </div>
          
            <Route path="/app/servers/:serverId/channels/:channelId/messages" component={MessageIndexContainer}/>
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