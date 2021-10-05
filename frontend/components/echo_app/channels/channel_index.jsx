import React from "react";

class ChannelIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = { severId: "",
      users: []
    }
  }

  componentDidMount() {
    this.props.fetchUsersFromServer(this.props.serverId).then(
      (res) => this.setState({ serverId: this.props.serverId,
        users: this.props.users
      })
    )
  }

  componentDidUpdate(prevProp) {
    if (prevProp.serverId !== this.props.serverId) {
      this.props.fetchUsersFromServer(this.props.serverId).then(
        (res) => this.setState({ serverId: this.props.serverId,
          users: this.props.users
      })
    )}
  }

  render() {
    const { users } = this.state
    return (
      <div className="channel-users-wrapper">
        <div className="channel-wrapper">
          <div className="channel-link">
            channel1
          </div>
        </div>
        <div className="users-wrapper">
          <div className="users-link">
            {users.map(user =>
              user.username
              )}
          </div>
        </div>
      </div>

    )
  }
  
}


export default ChannelIndex