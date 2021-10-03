import React from "react";

class ServerListItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        {this.props.server.name}
      </div>
    )
  }
}

export default ServerListItem