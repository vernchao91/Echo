import React from "react";
import { IoPeopleOutline } from "react-icons/io5";

class FriendPage extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {
    return (
      <div className="friendpage-wrapper">

        <div className="friendpage-header-wrapper">
          <IoPeopleOutline className="friend-icon"/>
          <div className="friendpage-friends"><ul>Friends</ul></div>
          <div className="friendpage-all"><ul>All</ul></div>
          <div className="friendpage-pending"><ul>Pending</ul></div>
        </div>
        <div className="friendpage-index-wrapper">
          Friend Page  
        </div>
      </div>
    )
  }
}

export default FriendPage