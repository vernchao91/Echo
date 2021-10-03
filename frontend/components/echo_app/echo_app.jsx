import React from "react";
import { Link } from "react-router-dom"
import ServerFormContainer from "./server/server_form_container"
import ServerListItem from "./server/server_list_item"

class EchoApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidMount() {
    this.props.fetchServers()
  }

  render() {
    const { servers, fetchUsersFromServer, updateServer } = this.props;
    const serverItems = servers.map(server => (
      <ServerListItem
        key={server.id}
        server={server}
        updateServer={updateServer}
        fetchUsersFromServer={fetchUsersFromServer}
      />
    ))
    return (
      <div className="echoapp-wrapper">
        <div className="home-link-wrapper"> 
          <Link className="home-link" to="/">Home</Link>
        </div>
        <div className="server-wrapper">
          {serverItems}
          <ServerFormContainer />
        </div>
      </div>
    )
  }

}

export default EchoApp