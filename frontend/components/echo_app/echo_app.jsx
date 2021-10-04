import React from "react";
import { Link } from "react-router-dom"
import ServerFormContainer from "./servers/server_form_container"
import ServerIndexItem from "./servers/server_index_item"

class EchoApp extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // this.props.fetchServersFromUser(this.props.currentUserId)
    this.props.fetchServers()
  }

  showPublicServers() {
    // this.props.fetchServers()
  }

  render() {
    const { servers, currentUserId } = this.props;

    return (
      <div className="echoapp-wrapper">
        <div className="home-link-wrapper"> 
          <Link className="home-link" to="/">Home</Link>
        </div>
        <div className="server-wrapper">

        {servers.map((server, idx) => (
          <ServerIndexItem
            key={idx}
            serverId={server.id}
            server={server}
          />
        ))}

        </div>
        <ServerFormContainer />
      </div>
    )
  }

}

export default EchoApp