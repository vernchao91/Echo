import React from "react";
import { Link } from "react-router-dom";
import { IoCheckmarkCircleOutline, IoCloseCircleOutline } from "react-icons/io5";

class IncomingPendingIndexItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      conversation: this.props.conversation
    }
  }

  render() {
    if(this.state.conversation === null) return null
    return (
      <div className="pending-friends-index-item">
        <div className="pending-friends-index-username">
          {this.props.conversation.username}
          <p>Incoming Friend Request</p>
        </div>
        <div className="pending-friends-index-item-button-wrapper">
          <IoCheckmarkCircleOutline onClick={() => this.props.updateConversation(({id: this.props.conversation.id, pending: false})).then(this.setState({conversation: null}))}/>
          <IoCloseCircleOutline onClick={() => this.props.deleteConversation(this.props.conversation.id).then(this.setState({conversation: null}))}/>
        </div>
      </div>
    )
  }
}

export default IncomingPendingIndexItem