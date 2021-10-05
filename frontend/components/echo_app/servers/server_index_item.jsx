import React from "react";
import { Link } from "react-router-dom";

class ServerList extends React.Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    const { server } = this.props
    return (
      <div className="server-index-wrapper">
          <Link className="server-link" to={`/app/servers/${server.id}/channels`} >{server.name}</Link>
      </div>
    )
  }

}

export default ServerList