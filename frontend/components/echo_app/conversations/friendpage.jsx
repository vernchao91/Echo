import React from "react";
import { Link } from "react-router-dom"
import { IoPeopleOutline } from "react-icons/io5";
import { Route } from "react-router-dom";
import AllFriendsIndexContainer from "./all_friends_index_container";
import PendingIndexContainer from "./pending_index_container";

class FriendPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  
  componentDidMount() {
    
  }

  render() {
    return (
      <div className="friendpage-wrapper">

        <div className="friendpage-header-wrapper">
          <IoPeopleOutline className="friend-icon"/>
          <div className="friendpage-friends"><h1 className="friendlist-buttons">Friends</h1></div>
          <div className="friendpage-all">
            <Link to="/app/conversations/friendpage/all" className="friendlist-buttons">All</Link>
          </div>
          <div className="friendpage-pending">
            <Link to="/app/conversations/friendpage/pending" className="friendlist-buttons">Pending</Link>
          </div>
        </div>

        <div className="friendpage-index-wrapper">
          <Route path="/app/conversations/friendpage/all" component={AllFriendsIndexContainer}/>
          <Route path="/app/conversations/friendpage/pending" component={PendingIndexContainer}/>
        </div>

      </div>
    )
  }
}

export default FriendPage