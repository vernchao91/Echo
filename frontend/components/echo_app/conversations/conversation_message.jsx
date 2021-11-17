import React from "react";
import { Link } from "react-router-dom"
import { IoPeopleOutline } from "react-icons/io5";
import { Route } from "react-router-dom";
import AllFriendsIndexContainer from "./all_friends_index_container";
import PendingIndexContainer from "./pending_index_container";

class ConversationMessage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }
  
  componentDidMount() {
    
  }

  render() {
    return (
      <div className="conversation-message-wrapper">
        <div className="conversation-message-header-wrapper">
          Messages Header
        </div>
        <div className="conversation-message">
          Messages
        </div>
      </div>
    )
  }
}

export default ConversationMessage