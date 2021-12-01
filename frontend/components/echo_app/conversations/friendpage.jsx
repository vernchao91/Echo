import React from "react";
import { Link } from "react-router-dom"
import { IoPeopleOutline } from "react-icons/io5";
import { Route } from "react-router-dom";
import AllFriendsIndexContainer from "./all_friends_index_container";
import PendingIndexContainer from "./pending_index_container";
import SearchUserContainer from "./search_user_container"

class FriendPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  
  componentDidMount() {
  }

  render() {
    
    const friendAll = "/app/conversations/friendpage/all";
    const friendPending = "/app/conversations/friendpage/pending";
    const friendSearchUser = "/app/conversations/friendpage/searchuser";
    let pathName = this.props.location.pathname

    let renderStyle = {}
    let renderStyleSearch

    return (
      <div className="friendpage-wrapper">

        <div className="friendpage-header-wrapper">
          <IoPeopleOutline className="friend-icon"/>
          <div className="friendpage-friends">
            <h1 className="friend-text">Friends</h1>
          </div>

          <Link className="friendpage-all" to="/app/conversations/friendpage/all">
            <div className="friendlist-buttons">All</div>
          </Link>

          <Link className="friendpage-pending" to="/app/conversations/friendpage/pending" >
            <div className="friendlist-buttons">Pending</div>
          </Link>

          <Link className="friendpage-add" to="/app/conversations/friendpage/searchuser">
            <div className="friendlist-buttons">Add Friend</div>
          </Link>

        </div>

        <div className="friendpage-index-wrapper">
          <Route path="/app/conversations/friendpage/all" component={AllFriendsIndexContainer}/>
          <Route path="/app/conversations/friendpage/pending" component={PendingIndexContainer}/>
          <Route path="/app/conversations/friendpage/searchuser" component={SearchUserContainer}/>
        </div>

      </div>
    )
  }
}

export default FriendPage