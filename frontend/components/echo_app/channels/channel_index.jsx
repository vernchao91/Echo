import React from "react";

class ChannelIndex extends React.Component {
  constructor(props) {
    super(props)
    
  }

  componentDidMount() {
    console.log("mounted");
    this.props.fetchUsersFromServer(this.props.serverId)
  }

  render() {
    const { users } = this.props
    return (
      <div className="channel-users-wrapper">
        <div className="channel-wrapper">
          <li>
            channel1
          </li>
        </div>
        <div className="users-wrapper">
          <li>
            {users.map(user =>
              user.name
              )}
          </li>
        </div>
      </div>

    )
  }
  
}


export default ChannelIndex