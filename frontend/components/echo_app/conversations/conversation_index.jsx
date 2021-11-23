import React from "react";
import { Link } from "react-router-dom";
import { IoPeopleOutline } from "react-icons/io5";
import Modal from "react-modal";

class ConversationIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      conversations: this.props.conversations,
      // modal: false
    }
    // this.handleOpenModal = this.handleOpenModal.bind(this)
    // this.handleCloseModal = this.handleCloseModal.bind(this)
  };

  componentDidMount() {
    console.log("cdm convesation");
    this.props.fetchConversations(this.props.currentUserId)
      .then(() => this.setState({conversations: this.props.conversations}))
  }

  componentDidUpdate(prevProps) {
    if (prevProps.conversations !== this.props.conversations) {
      this.setState({conversations: this.props.conversations})
    }
  }

  // handleOpenModal() {
  //   this.setState({
  //     modal: true,
  //   })
  // }

  // handleCloseModal() {
  //   this.setState({ modal: false });
  //   this.props.removeConversationErorrs();
  // }

  render() {
    let arr = []

    Object.values(this.state.conversations).map((conversation, i) => {
      if(conversation.ownerId === this.props.currentUserId && !conversation.pending) {
        arr.push({displayId: conversation.userId, username: conversation.userUsername, id: conversation.id})
      } else if (conversation.userId === this.props.currentUserId && !conversation.pending) {
        arr.push({displayId: conversation.ownerId, username: conversation.ownerUsername, id: conversation.id})
      }
    })

    return (
      <div className="conversation-page">

        <div className="conversation-index-wrapper">
          <div className="conversation-index-header-wrapper">
            Search Bar Maybe
          </div>

          <div className="conversation-list-wrapper">
            <Link className="conversation-friendpage-link" to="/app/conversations/friendpage/all">
              <IoPeopleOutline className="conversation-friendpage-icon"/>
              <p className="conversation-friendpage-text">Friends</p>
            </Link>
            <div className="conversation-dm-modal">
              <p>Direct Messages</p>
              {/* <button onClick={this.handleOpenModal}>+</button> */}
              {/* <Modal isOpen={this.state.modal} className="overlay" ariaHideApp={false}></Modal> */}
            </div>
            <div className="conversation-link-wrapper">
              {arr.map((conversation, i) =>
                <Link key={i} className="conversation-link" to={`/app/conversations/${conversation.id}/messages`}>
                  <ul>{conversation.username}</ul>
                </Link>
              )}
            </div>
          </div>
        </div>

      </div>
    )
  };
};

export default ConversationIndex