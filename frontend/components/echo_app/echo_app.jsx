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
  }

  showPublicServers() {
    this.props.fetchServersFromUser(this.props.currentUserId)
  }

  render() {
    const { servers, openCreateModal, currentUserId } = this.props;

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

        <div className="create-server-button">
          {/* <div className="open-modal-tooltip" >Create Server</div> */}
          <button className="open-modal-create" onClick={openCreateModal}>
          +
        </button>
      {/* {openModal} */}
        </div>

      </div>
    )
  }

}

export default EchoApp