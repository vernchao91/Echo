import React from "react";
import ChannelIndexItem from "./channel_index_item"

class ChannelIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = { dropdown: false }
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
      // .then((res) => 
      // this.setState({ serverId: this.props.serverId,
      //     users: this.props.users
      //   })
      // )
    // } else {
    //   if (prevProp.users !== this.props.users) {
    //     this.props.fetchUsersFromServer(this.props.serverId)
    //     .then((res) => this.setState({ serverId: this.props.serverId,
    //         users: this.props.users
    //       })
    //     )
      // }
    }

  }

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

  renderLeaveOrJoinServer() {

    const { currentUserId, serverId, leaveServer, users, server, joinServer} = this.props
    if (server === undefined) return;
    if (currentUserId === server.ownerId) {
      return (
        <button onClick={() => leaveServer(serverId)}>Leave Server</button>
      )
    } else { return (
        <button onClick={() => joinServer({server_id: serverId})}>Join Server</button>
      )
    }
  }
  
  render() {
    const { users } = this.props
    return (
      <div className="channels-servername-messages-users-wrapper">

        <div className="server-header-wrapper">
          {this.renderServerName()}
          {this.renderLeaveOrJoinServer()}
        </div>

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