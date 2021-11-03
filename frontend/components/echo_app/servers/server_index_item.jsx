import React from "react";
import { Link } from "react-router-dom";

class ServerIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      hover: false 
    }
    this.handleMouseIn = this.handleMouseIn.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this)
  }

  handleMouseIn() {
    this.setState({ hover: true })
  }
  
  handleMouseOut() {
    this.setState({ hover: false })
  }

  render() {
    const { server } = this.props
    const tooltipStyle = {
      display: this.state.hover ? 'block' : "none"
    }

    return (
      <div className="server-index-wrapper">
        <div className="server-name-tooltip" style={tooltipStyle}>
          {server.name}
        </div>
        <Link
          className="server-link"
          onMouseOver={this.handleMouseIn}
          onMouseOut={this.handleMouseOut}
          to={`/app/servers/${server.id}/channels`}>
          {server.name.charAt(0)}
        </Link>
      </div>
    )
  }

}

export default ServerIndex