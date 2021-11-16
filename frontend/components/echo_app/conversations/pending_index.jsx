import React from "react";
import IncomingPendingIndexItem from "./incoming_pending_index_item";
import OutgoingPendingIndexItem from "./outgoing_pending_index_item"

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
    let incomingArr = []
    let outgoingArr = []

    Object.values(this.state.conversations).map((conversation, i) => {
      if(conversation.ownerId === this.props.currentUserId) {
        if (conversation.pending) {
          outgoingArr.push({displayId: conversation.userId, username: conversation.userUsername, id: conversation.id})
        }
      } else if(conversation.pending) {
        incomingArr.push({displayId: conversation.ownerId, username: conversation.ownerUsername, id: conversation.id})
      }
    })
    console.log("pending render");
    return (
      <div className="pending-index-wrapper">

        <div className="pending-incoming-index-wrapper">
          <h1>Incoming Pending Invites</h1>
          {incomingArr.map((conversation, i) =>
          <IncomingPendingIndexItem
            key={i}
            currentUserId={this.props.currentUserId}
            conversation={conversation}
            updateConversation={this.props.updateConversation}
            deleteConversation={this.props.deleteConversation}
          />
          // <div className="pending-friends-index-item" key={i}>
          //   <Link to={`/app/conversations/${conversation.id}/messages`}>
          //     {conversation.username}
          //   </Link>
          //   <div className="pending-friends-index-item-button-wrapper">
          //     <IoCheckmarkCircleOutline onClick={() => this.props.updateConversation()}/>
          //     <IoCloseCircleOutline onClick={() => this.props.deleteConversation(conversation.id)}/>
          //   </div>
          // </div>
          )}
        </div>

        <div className="pending-outgoing-index-wrapper">
          <h1>Outgoing Pending Invites</h1>
          {outgoingArr.map((conversation, i) =>
            <OutgoingPendingIndexItem
            key={i}
            currentUserId={this.props.currentUserId}
            conversation={conversation}
            deleteConversation={this.props.deleteConversation}
          />
            // <div className="pending-friends-index-item" key={i}>
            //   <Link to={`/app/conversations/${conversation.id}/messages`}>
            //     {conversation.username}
            //   </Link>
            //   <div className="all-friends-index-item-button-wrapper">
            //     <IoCheckmarkCircleOutline onClick={() => this.props.updateConversation()}/>
            //     <IoCloseCircleOutline onClick={() => this.props.deleteConversation(conversation.id)}/>
            //   </div>
            // </div>
          )}
        </div>

      </div>
    )
  }
}

export default PendingIndex