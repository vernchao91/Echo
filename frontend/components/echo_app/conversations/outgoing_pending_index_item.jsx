import React from "react";
import { Link } from "react-router-dom";
import { IoCheckmarkCircleOutline, IoCloseCircleOutline } from "react-icons/io5";

class OutgoingPendingIndexItem extends React.Component {
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
        {/* <Link to={`/app/conversations/${this.props.conversation.id}/messages`}> */}
          {this.props.conversation.username}
        {/* </Link> */}
        <div className="pending-friends-index-item-button-wrapper">
          <IoCloseCircleOutline onClick={() => this.props.deleteConversation(this.props.conversation.id).then(this.setState({conversation: null}))}/>
        </div>
      </div>
    )
  }
}

export default OutgoingPendingIndexItem