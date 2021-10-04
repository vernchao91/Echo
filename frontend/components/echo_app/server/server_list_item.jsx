import React from "react";
import { Link } from "react-router-dom"

class ServerList extends React.Component {
  constructor(props) {
    super(props)
    // this.state = this.props.users
  }

  componentDidMount() {
    // this.props.fetchUsersfromServer(this.props.serverId)
  }
  
  render() {
    return (
      <div className="server-index-wrapper">
        <h1>
          <Link to="/app/server">{this.props.server.name}</Link>
        </h1>
      </div>
    )
  }

}

export default ServerList