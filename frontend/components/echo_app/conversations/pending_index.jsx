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

  componentDidUpdate(prevProps, prevState) {
    console.log("cdu");
    let hash = {};
    if (Object.values(prevProps.conversations).length !== Object.values(this.props.conversations).length || this.checkFalse()) {
      console.log(this.state.conversations);
      const conversations = Object.values(this.props.conversations)
      for (let i = 0; i < conversations.length; i++) {
        if (conversations[i].pending) {
          hash[i + 1] = conversations[i]
        }
      }
      console.log(hash);
      this.setState({ conversations: hash });
    }
  }

  checkFalse() { 
    let falseConvo = false 
    Object.values(this.props.conversations).forEach(convo => { 
      if (!convo.pending) falseConvo = true
    })
    return falseConvo 
  }

  componentWillUnmount() {
    console.log("cwu pending friends");
  }

  render() {
    let incomingArr = []
    let outgoingArr = []

    Object.values(this.state.conversations).map((conversation, i) => {
      if (conversation.ownerId === this.props.currentUserId) {
        if (conversation.pending) {
          outgoingArr.push({displayId: conversation.userId, username: conversation.userUsername, id: conversation.id, pending: conversation.pending})
        }
      } else if(conversation.pending) {
        incomingArr.push({displayId: conversation.ownerId, username: conversation.ownerUsername, id: conversation.id, pending: conversation.pending})
      }
    })
    console.log("pending render");
    return (
      <div className="pending-index-wrapper">

        <div className="pending-incoming-index-wrapper">
          <h1>Incoming Pending Invites - {incomingArr.length}</h1>
          {incomingArr.map((conversation, i) =>
          <div className="pending-friends-index-item" key={i}>
            <Link to={`/app/conversations/${conversation.id}/messages`}>
              {conversation.username}
            </Link>
            <div className="pending-friends-index-item-button-wrapper">
              <IoCheckmarkCircleOutline onClick={() => this.props.updateConversation(({id: conversation.id, pending: false}))}/>
              <IoCloseCircleOutline onClick={() => this.props.deleteConversation(conversation.id)}/>
            </div>
          </div>
          )}
        </div>

        <div className="pending-outgoing-index-wrapper">
          <h1>Outgoing Pending Invites - {outgoingArr.length}</h1>
          {outgoingArr.map((conversation, i) =>
            <div className="pending-friends-index-item" key={i}>
              <Link to={`/app/conversations/${conversation.id}/messages`}>
                {conversation.username}
              </Link>
              <div className="all-friends-index-item-button-wrapper">
                <IoCheckmarkCircleOutline onClick={() => this.props.updateConversation()}/>
                <IoCloseCircleOutline onClick={() => this.props.deleteConversation(conversation.id)}/>
              </div>
            </div>
          )}
        </div>

      </div>
    )
  }
}

export default PendingIndex