import React from "react";
import { Link } from "react-router-dom"
import ServerFormContainer from "./server/server_form_container"
import ServerListContainer from "./server/server_list_container"

class EchoApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedServer: 0
    }
    this.selectServer = this.selectServer.bind(this)
  }

  componentDidMount() {
    // this.props.fetchServers()
    this.props.fetchServersFromUser(this.props.currentUserId)
  }

  showPublicServers() {
    this.props.fetchServers()
  }

  selectServer() {
dfgfd
  }

  render() {
    const { servers, updateServer } = this.props;
    const serverItems = servers.map((server, idx) => (
      <ServerListContainer
        key={idx}
        serverId={server.id}
        server={server}
        updateServer={updateServer}
      />
    ))

    return (
      <div className="echoapp-wrapper">
        <div className="home-link-wrapper"> 
          <Link className="home-link" to="/">Home</Link>
        </div>
        <div className="server-wrapper">
          {serverItems}
        </div>
        <ServerFormContainer />
      </div>
    )
  }

}

export default EchoApp