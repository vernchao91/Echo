import React from "react";
import { HiOutlineBadgeCheck, HiBadgeCheck } from "react-icons/hi";
import { Link } from "react-router-dom";
class FeaturedServers extends React.Component {
  constructor(props) {
    super(props)
  }

  displayMembers() {
    let membersLength = this.props.server.users
    return (
      <div className="server-index-members">
        <p>{membersLength} Members</p>
      </div>
    )
  }

  render() {
    const { server, joinServer } = this.props
    return (
      <Link className="featured-servers-index-item-wrapper" to={`/app/servers/${server.id}/channels`} onClick={() => joinServer({server_id: server.id})}>

        <div className="server-index-name-wrapper">
          <HiBadgeCheck className="verified-checkmark"/>
          <div className="server-index-name">
            {server.name}
          </div>
        </div>
        {this.displayMembers()}

      </Link>
    )
  }
}

export default FeaturedServers