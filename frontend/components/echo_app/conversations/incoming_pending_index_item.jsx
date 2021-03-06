import React from "react";
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
          <i>{this.props.conversation.username}</i>
          <p>Incoming Friend Request</p>
        </div>
        <div className="pending-friends-index-item-button-wrapper">
          <IoCheckmarkCircleOutline className="checkmark-circle" onClick={() => this.props.updateConversation(({id: this.props.conversation.id, pending: false})).then(this.setState({conversation: null}))}/>
          <IoCloseCircleOutline className="close-circle" onClick={() => this.props.deleteConversation(this.props.conversation.id).then(this.setState({conversation: null}))}/>
        </div>
      </div>
    )
  }
}

export default IncomingPendingIndexItem