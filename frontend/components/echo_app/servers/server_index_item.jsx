import React from "react";
import { Link } from "react-router-dom";

class ServerIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      hover: false 
    }
    this.handleMouseIn = this.handleMouseIn.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
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

    const pathName = this.props.history.location.pathname;

    const serverStyle = (id) => {
      const server = `/app/servers/${id}/channels`
      if (pathName.includes(server)) {
        return {backgroundColor: "rgb(58, 94, 211)", borderRadius: "10px", color: "rgb(255, 255, 255)"}
      }
    }

    // if (server.name === undefined) return null
    return (
      <div className="server-index-wrapper">
        <div className="server-name-tooltip" style={tooltipStyle}>
          {server.name}
        </div>
        <Link
          className="server-link"
          style={serverStyle(server.id)}
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