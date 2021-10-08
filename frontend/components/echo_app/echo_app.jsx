import React from "react";
import { Link } from "react-router-dom";
import ServerIndexItem from "./servers/server_index_item";

class EchoApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      servers: this.props.servers,
    }
    console.log(this.state);
    console.log("ea-constructor");
  }

  componentDidMount() {
    // this.props.fetchServersFromUser(this.props.currentUserId)
    this.props.fetchServers()
    // .then(reponse => {
    //   this.setState({
    //     servers: reponse.servers
    //   })
    // })
    console.log("ea-mount");
    console.log(this.state);
  }

  componentDidUpdate() {
  }

  showPublicServers() {
    this.props.fetchServersFromUser(this.props.currentUserId)
  }
  setServers(){
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
        {/* <Modal  */}

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