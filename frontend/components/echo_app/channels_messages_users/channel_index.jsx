import React from "react";
import { Link } from "react-router-dom";
import ChannelIndexItemContainer from "./channel_index_item_container";
import Modal from "../../modal/modal"
// import EditServerForm from "../servers/edit_server_form";
// import EditServerContainer from "../servers/edit_server_container";

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
    this.props.fetchChannels(this.props.serverId)
    // .then((res) => this.setState({ serverId: this.props.serverId,
    //     users: this.props.users
    //   })
    // )
  }

  componentDidUpdate(prevProp) {
    if (prevProp.serverId !== this.props.serverId) {
      this.props.fetchUsersFromServer(this.props.serverId),
      this.props.fetchChannels(this.props.serverId)
    }
    // this.props.fetchUsersFromServer(this.props.serverId)
      // .then((res) => 
      // this.setState({ serverId: this.props.serverId,
      //     users: this.props.users
      //   })
      // )
    // } else {
      // if (prevProp.users !== this.props.users) {
      //   this.props.fetchUsersFromServer(this.props.serverId)
      // }
    //     .then((res) => this.setState({ serverId: this.props.serverId,
    //         users: this.props.users
    //       })
    //     )
      // }
  }

  // componentWillUnmount() {
  //   this.props.fetchUsersFromServer(this.props.serverId)
  // }

  handleDropdown(field) {
    return e => {
        e.preventDefault();
        this.setState({ dropdown: field })
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
    } else if (users[currentUserId] === undefined) {
      return (
        <div className="join-leave-server-button-wrapper">
          <button className="join-button" onClick={() => joinServer({server_id: serverId})}>Join Server</button>
        </div>
      )
    } else {
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
            <div
              key={channel.id}
              className="channels-link">
              {channel.name}
            </div>
              )}
          </div>

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