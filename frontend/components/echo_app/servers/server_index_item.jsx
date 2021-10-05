import React from "react";
import { Link } from "react-router-dom";

class ServerIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hover: false }
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
        <div className="server-name-tooltip" style={tooltipStyle}>{server.name}</div>
        <Link
          className="server-link" 
          onMouseOver={this.handleMouseIn.bind(this)}
          onMouseOut={this.handleMouseOut.bind(this)}
          to={`/app/servers/${server.id}/channels`}>
          {server.name.charAt(0)}
        </Link>
      </div>
    )
  }

}

export default ServerIndex