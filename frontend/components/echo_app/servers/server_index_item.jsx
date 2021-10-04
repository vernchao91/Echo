import React from "react";
import { Link } from "react-router-dom";

class ServerList extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // this.props.fetchUsersFromServer(this.props.serverId)
  }
  
  render() {
    const { server } = this.props
    return (
      <div className="server-index-wrapper">
        <h1 className={server.name}>
          <Link to={`/api/servers/${server.id}/channels`}>{server.name}</Link>
        </h1>
      </div>
    )
  }

}

export default ServerList