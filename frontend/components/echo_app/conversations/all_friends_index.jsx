import React from "react";
import { Link } from "react-router-dom";
import { IoEllipsisVerticalOutline, IoChatboxEllipsesOutline } from "react-icons/io5"

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
    // this.setState({conversations: this.props.conversations})
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
        arr.push({id: conversation.userId, username: conversation.userUsername})
      } else {
        arr.push({id: conversation.ownerId, username: conversation.ownerUsername})
      }
    })

    console.log("all friends render");
    return (
      <div className="all-friends-index-wrapper">
        <div className="all-friends-index-header">
          <h1 className="all-friends-header">
            ALL FRIENDS - {arr.length}
          </h1>
        </div>

        {arr.map((conversation, i) =>
        <div className="all-friends-index-item" key={i}>
          <ul>{conversation.username}</ul>
          <div className="all-friends-index-item-button-wrapper">
            <Link to={`/app/conversations/${conversation.id}/messages`}>
              <IoChatboxEllipsesOutline/>
            </Link>
            <IoEllipsisVerticalOutline/>
          </div>
        </div>
        )}

      </div>
    )
  }
}

export default AllFriends