import React from "react";
import { Link } from "react-router-dom"
import ServerIndexItem from "./servers/server_index_item"

class EchoApp extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // this.props.fetchServersFromUser(this.props.currentUserId)
    this.props.fetchServers()
  }

  componentDidUpdate() {
    this.props.closeModal
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

        <div className="create-server-form">
          {this.props.openModal}
        </div>

      </div>
    )
  }

}

export default EchoApp