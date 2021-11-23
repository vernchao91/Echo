import React from "react";
import { Link } from "react-router-dom";
import { IoCheckmarkCircleOutline, IoCloseCircleOutline } from "react-icons/io5";

class OutgoingPendingIndexItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      conversation: this.props.conversation,
      hover: false
    }
    this.handleMouseIn = this.handleMouseIn.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }

  handleMouseIn() {
    this.setState({ hover: true })
  }
  
  handleMouseOut() {
    this.setState({ hover: false })
  }

  render() {
    if(this.state.conversation === null) return null

    const tooltipStyle = {
      display: this.state.hover ? 'block' : "none"
    }

    return (
      <div className="pending-friends-index-item">
        <div className="pending-friends-index-username">
          <i>{this.props.conversation.username}</i>
          <p>Outgoing Friend Request</p>
        </div>
        <div className="pending-friends-index-item-button-wrapper">
          <div className="incoming-pending-tooltip" style={tooltipStyle}>
            <p>Cancel</p>
          </div>
          <IoCloseCircleOutline 
            className="close-circle" 
            onClick={() => this.props.deleteConversation(this.props.conversation.id).then(this.setState({conversation: null}))}
            onMouseOver={this.handleMouseIn}
            onMouseOut={this.handleMouseOut}
          />
        </div>
      </div>
    )
  }
}

export default OutgoingPendingIndexItem