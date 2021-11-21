import React from "react";
import { Link } from "react-router-dom";
import { IoCloseCircleOutline, IoChatboxOutline } from "react-icons/io5"

class AllFriends extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      conversations: this.props.conversations
    }
    console.log("all friends constructor");
  }

  componentDidMount() {
    this.props.fetchConversations(this.props.currentUserId)
      .then(() => this.setState({conversations: this.props.conversations}))
    console.log(this.props.conversations);
    console.log("cdm all friends");
    console.log(this.props);
  }

  componentWillUnmount() {
    console.log("cwu all friends");
  }

  render() {
    let arr = []

    Object.values(this.state.conversations).map((conversation, i) => {
      if(conversation.ownerId === this.props.currentUserId) {
        if (!conversation.pending) {
          arr.push({displayId: conversation.userId, username: conversation.userUsername, id: conversation.id})
        }
      } else {
        if (!conversation.pending) {
          arr.push({displayId: conversation.ownerId, username: conversation.ownerUsername, id: conversation.id})
        }
      }
    })
    console.log(arr);

    console.log("all friends render");
    return (
      <div className="all-friends-index-wrapper">
        <div className="all-friends-index-header">
          <h1 className="all-friends-header">
            All Friends   -   {arr.length}
          </h1>
        </div>

        {arr.map((conversation, i) =>
        <div className="all-friends-index-item" key={i}>
          <ul>{conversation.username}</ul>
          <div className="all-friends-index-item-button-wrapper">
            <Link to={`/app/conversations/${conversation.id}/messages`}>
              <IoChatboxOutline/>
            </Link>
            <IoCloseCircleOutline/>
          </div>
        </div>
        )}

      </div>
    )
  }
}

export default AllFriends