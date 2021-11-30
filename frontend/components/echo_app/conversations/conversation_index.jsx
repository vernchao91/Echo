import React from "react";
import { Link } from "react-router-dom";
import { IoPeopleOutline } from "react-icons/io5";
import Modal from "react-modal";

class ConversationIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      conversations: this.props.conversations,
      style: {
        backgroundColor: "",
      }
    }
    // this.handleOpenModal = this.handleOpenModal.bind(this)
    // this.handleCloseModal = this.handleCloseModal.bind(this)
  };

  componentDidMount() {
    this.props.fetchConversations(this.props.currentUserId)
      .then(() => this.setState({conversations: this.props.conversations}));
  }

  // componentWillUnmount() {
    // console.log("unmount");
    // this.setState({style: { backgroundColor: ""}})
  // }

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

    const pathName = this.props.history.location.pathname;
    const friendpage = "/app/conversations/friendpage/all";
    const pending =  "/app/conversations/friendpage/pending";
    const searchuser = "/app/conversations/friendpage/searchuser";
    let renderStyle
    let renderFontColor
    if (pathName === friendpage || pathName === pending || pathName === searchuser) {
      renderStyle = {backgroundColor: "rgb(58, 58, 58)"}
      renderFontColor = {color: "white"}
    }

    const conversationStyle = (id) => {
      const conversation = `/app/conversations/${id}/messages`
      if (pathName === conversation) {
        return {backgroundColor: "rgb(58, 58, 58)", color: "white"}
      }
    }

    return (
      <div className="conversation-page">

        <div className="conversation-index-wrapper">
          <div className="conversation-index-header-wrapper">
            Conversations
          </div>

          <div className="conversation-list-wrapper">
            <Link style={renderStyle} className="conversation-friendpage-link" to="/app/conversations/friendpage/all">
              <IoPeopleOutline style={renderFontColor} className="conversation-friendpage-icon"/>
              <p style={renderFontColor} className="conversation-friendpage-text">Friends</p>
            </Link>
            <div className="conversation-dm-modal">
              <p>Direct Messages</p>
              {/* <button onClick={this.handleOpenModal}>+</button> */}
              {/* <Modal isOpen={this.state.modal} className="overlay" ariaHideApp={false}></Modal> */}
            </div>
            <div className="conversation-link-wrapper">
              {arr.map((conversation, i) =>
                <Link key={i} className="conversation-link" to={`/app/conversations/${conversation.id}/messages`}>
                  <ul style={conversationStyle(conversation.id)}>{conversation.username}</ul>
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