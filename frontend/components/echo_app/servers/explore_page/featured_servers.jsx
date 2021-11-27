import React from "react";

class FeaturedServers extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let membersLength = this.props.server.users.length
    return (
      <div className="featured-servers-index-item-wrapper">

        <div className="server-index-item">
          <div className="server-index-name">
            {this.props.server.name}
          </div>
          <div className="server-index-members">
            {membersLength}
          </div>
        </div>

      </div>
    )
  }
}

export default FeaturedServers