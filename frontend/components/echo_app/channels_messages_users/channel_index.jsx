import React from "react";
import EditServerForm from "../servers/edit_server_form";
import ChannelIndexItem from "./channel_index_item";
import Modal from "../../modal/modal"
import EditServerContainer from "../servers/edit_server_container";

class ChannelIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = { users: this.props.users} 
  }

  componentDidMount() {
    this.props.fetchUsersFromServer(this.props.serverId)
    // .then((res) => this.setState({ serverId: this.props.serverId,
    //     users: this.props.users
    //   })
    // )
  }

  componentDidUpdate(prevProp) {
    if (prevProp.serverId !== this.props.serverId) {
      this.props.fetchUsersFromServer(this.props.serverId)
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

  renderLeaveJoinEditDeleteServer() {
    const { currentUserId, serverId, deleteServer, openEditModal, server, joinServer, leaveServer} = this.props
  
    if (server === undefined) return;
    if (currentUserId === server.ownerId) {
      return (
        <div className="server-owner-button-wrapper">
          <button onClick={() => deleteServer(serverId)}>Delete Server</button>
          <button onClick={openEditModal}>Edit Server</button>
        </div>
      )
    } else { return (
      <div className="join-leave-server-button-wrapper">
        <button onClick={() => joinServer({server_id: serverId})}>Join Server</button>
        <button onClick={() => leaveServer(serverId)}>Leave Server</button>
      </div>
      )
    }
  }
  
  render() {
    const { currentUserId, serverId, deleteServer, openEditModal, users, joinServer} = this.props
    let modal = <Modal name={this.props.modal} serverId={this.props.serverId}/>

    return (
      <div className="channels-servername-messages-users-wrapper">

        <div className="server-header-wrapper">
          {this.renderServerName()}
          {this.renderLeaveJoinEditDeleteServer()}
        </div>
        {modal}

        <div className="channel-messages-users-wrapper">

          <div className="channel-wrapper">
            <div className="channel-link">
              <ChannelIndexItem />
            </div>
          </div>

          <div className="users-wrapper">
              {users.map(user =>
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