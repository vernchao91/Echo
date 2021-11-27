import React from "react";
import { HiOutlineBadgeCheck, HiBadgeCheck } from "react-icons/hi";
import { Link } from "react-router-dom";
class FeaturedServers extends React.Component {
  constructor(props) {
    super(props)
  }

  displayMembers() {
    let membersLength = this.props.server.users.length
    return (
      <div className="server-index-members">
        <p>{membersLength} Members</p>
      </div>
    )
  }

  render() {
    return (
      <div className="featured-servers-index-item-wrapper">

        <div className="server-index-name-wrapper">
          <HiBadgeCheck className="verified-checkmark"/>
          <button className="server-index-name" onClick={() => this.props.joinServer({server_id: this.props.server.id})}>
            {this.props.server.name}
          </button>
        </div>
        {this.displayMembers()}

      </div>
    )
  }
}

export default FeaturedServers