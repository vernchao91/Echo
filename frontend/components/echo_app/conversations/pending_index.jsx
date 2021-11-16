import React from "react";
import { IoCheckmarkCircleOutline, IoCloseCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";


class PendingIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      conversations: this.props.conversations,
    }
  }

  componentDidMount() {
    console.log("cdm pending friends");
    this.props.fetchConversations(this.props.currentUserId)
      .then(() => this.setState({conversations: this.props.conversations}))
  }

  componentWillUnmount() {
    console.log("cwu pending friends");
  }

  render() {
    let arr = []

    Object.values(this.state.conversations).map((conversation, i) => {
      if(conversation.ownerId === this.props.currentUserId) {
        if (conversation.pending) {
          arr.push({displayId: conversation.userId, username: conversation.userUsername, id: conversation.id})
        }
      } else {
        if (conversation.pending) {
          arr.push({displayId: conversation.ownerId, username: conversation.ownerUsername, id: conversation.id})
        }
      }
    })
    console.log("pending render");
    return (
      <div className="pending-index-wrapper">

        <div className="pending-index-header">
          <h1 className="pending-header">
            Pending Header
          </h1>
        </div>

        {arr.map((conversation, i) =>
        <div className="pending-friends-index-item" key={i}>
          <ul>{conversation.username}</ul>
          <div className="all-friends-index-item-button-wrapper">
            <Link to={`/app/conversations/${conversation.id}/messages`}>
              <IoCheckmarkCircleOutline/>
            </Link>
            <IoCloseCircleOutline onClick={() => this.props.deleteConversation(conversation.id)}/>
          </div>
        </div>
        )}

      </div>
    )
  }
}

export default PendingIndex