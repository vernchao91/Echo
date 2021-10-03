import React from "react";
import { Link } from "react-router-dom"
import ServerFormContainer from "./server/server_form_container"

class EchoApp extends React.Component {
  constructor(props) {
    super(props)
    // this.state = {}
  }

  componentDidMount() {
    // this.props.fetchServers()
  }

  render() {
    return (
      <div className="echoapp-wrapper">
        <div className="home-link-wrapper"> 
          <Link className="home-link" to="/">Home</Link>
        </div>
          {this.props.servers.map(servers => servers.name)}
        <div className="server-wrapper">
          <ServerFormContainer />
          <h2>hi</h2>
        </div>
      </div>
    )
  }

}

export default EchoApp