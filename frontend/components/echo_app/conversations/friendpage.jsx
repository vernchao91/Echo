import React from "react";
import { Link } from "react-router-dom"
import { IoPeopleOutline } from "react-icons/io5";
import { Route } from "react-router-dom";
import{ ProtectedRoute } from "../../../util/route_util";
import AllFriendsIndexContainer from "./all_friends_index_container";
import PendingIndexContainer from "./pending_index_container";
import SearchUserContainer from "./search_user_container"

class FriendPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    
    let pathName = this.props.location.pathname
    const friendAll = "/app/conversations/friendpage/all";
    const friendPending = "/app/conversations/friendpage/pending";
    const friendSearchUser = "/app/conversations/friendpage/searchuser";
    let renderStyleSearch
    let renderSearchStyleFont

    const renderStyle = (path) => {
      if (pathName === path) return {backgroundColor: "rgb(78, 78, 78)"}
    }

    const renderFontColor = (path) => {
      if (pathName === path) return {color: "rgb(255, 255, 255)"}
    }
    if (pathName === friendSearchUser) {
      renderStyleSearch = { backgroundColor: "rgb(9, 167, 9)"}
      renderSearchStyleFont = { color: "rgb(255, 255, 255)"}
    }

    return (
      <div className="friendpage-wrapper">

        <div className="friendpage-header-wrapper">
          <IoPeopleOutline className="friend-icon"/>
          <div className="friendpage-friends">
            <h1 className="friend-text">Friends</h1>
          </div>

          <Link style={renderStyle(friendAll)} className="friendpage-all" to="/app/conversations/friendpage/all">
            <div style={renderFontColor(friendAll)} className="friendlist-buttons">All</div>
          </Link>

          <Link style={renderStyle(friendPending)} className="friendpage-pending" to="/app/conversations/friendpage/pending" >
            <div style={renderFontColor(friendPending)} className="friendlist-buttons">Pending</div>
          </Link>

          <Link style={renderStyleSearch} className="friendpage-add" to="/app/conversations/friendpage/searchuser">
            <div style={renderSearchStyleFont} className="friendlist-buttons">Add Friend</div>
          </Link>

        </div>

        <div className="friendpage-index-wrapper">
          <ProtectedRoute path="/app/conversations/friendpage/all" component={AllFriendsIndexContainer}/>
          <ProtectedRoute path="/app/conversations/friendpage/pending" component={PendingIndexContainer}/>
          <ProtectedRoute path="/app/conversations/friendpage/searchuser" component={SearchUserContainer}/>
        </div>

      </div>
    )
  }
}

export default FriendPage