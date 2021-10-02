import React from "react";
import { Link } from "react-router-dom"
import ServerFormContainer from "./server/server_form_container"

class EchoApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="echoapp-wrapper">
        <div className="home-link-wrapper"> 
          <Link className="home-link" to="/">Home</Link>
        </div>

        <div className="server-wrapper">
          <ServerFormContainer />
          <h2>hi</h2>
        </div>
      </div>
    )
  }

}

export default EchoApp