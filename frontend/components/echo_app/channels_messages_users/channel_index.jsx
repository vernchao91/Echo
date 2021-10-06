import React from "react";
import ChannelIndexItem from "./channel_index_item"

class ChannelIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = { severId: "",
      users: []
    }
  }

  componentDidMount() {
    this.props.fetchUsersFromServer(this.props.serverId)
    .then((res) => this.setState({ serverId: this.props.serverId,
        users: this.props.users
      })
    )
  }

  componentDidUpdate(prevProp) {
    if (prevProp.serverId !== this.props.serverId) {
      this.props.fetchUsersFromServer(this.props.serverId)
      .then((res) => this.setState({ serverId: this.props.serverId,
          users: this.props.users
        })
      )
    }

  }

  renderServerName() {
    console.log(this.props.server);
    return ( 
    <div className="server-name-text">
      {this.props.server ?  this.props.server.name : null}
    </div>
    )
  }

  renderLeaveOrJoinServer() {
    if (this.props.currentUserId !== this.props.serverId) {
      return (
        <button>Leave Server</button>
      )
    } else { return (
        <button>Join Server</button>
      )
    }
  }
  
  render() {
    const { users } = this.state
    return (
      <div className="channels-servername-messages-users-wrapper">

        <div className="server-header-wrapper">
          {this.renderServerName()}
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