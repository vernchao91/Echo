import React from 'react';
import { Link } from "react-router-dom";
import { IoCloseCircleOutline, IoChatboxOutline } from "react-icons/io5";

class AllFriendsIndexItem extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      conversation: this.props.conversation
    }
  }

  render() {
    if (this.state.conversation === null) return null
    return(
      <div className="all-friends-index-item">
          <ul>{this.state.conversation.username}</ul>
          <div className="all-friends-index-item-button-wrapper">
            <Link to={`/app/conversations/${this.state.conversation.id}/messages`}>
              <IoChatboxOutline/>
            </Link>
            <IoCloseCircleOutline onClick={() => this.props.deleteConversation(this.state.conversation.id).then(this.setState({conversation: null}))}/>
          </div>
        </div>
    )
  }
}

export default AllFriendsIndexItem