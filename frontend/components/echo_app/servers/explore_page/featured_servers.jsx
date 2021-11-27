import React from "react";

class FeaturedServers extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="featured-servers-index-item-wrapper">
        <div className="server-index-item">
          {this.props.server.name}
        </div>
      </div>
    )
  }
}

export default FeaturedServers