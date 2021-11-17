import React from "react";
import { Link } from "react-router-dom"
import { IoPeopleOutline } from "react-icons/io5";
import { Route } from "react-router-dom";
import AllFriendsIndexContainer from "./all_friends_index_container";
import PendingIndexContainer from "./pending_index_container";

class ConversationMessage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      message: {
        body: "",
        messageableId: this.props.conversationId,
        messageableType: "Conversation",
        authorId: this.props.currentUserId,
      },
      conversationId: this.props.conversationId,
      messages: Object.values(this.props.messages)
    };
    this.bottom = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  componentDidMount() {
    this.props.fetchConversationMessages(this.props.conversationId)
      .then(() => this.setState({
        conversationId: this.props.conversationId,
        messages: Object.values(this.props.messages)
      }))
    App.cable.subscriptions.create(
      { channel: "ChatChannel", id: this.props.conversationId},
      { received: data => {
        this.props.fetchConversationMessages(this.props.conversationId)
          .then((state) => this.setState({
            messages: Object.values(state.messages).concat(data.message)
          })
        )
      },
        speak: function(data) { return this.perform("speak", data) }
      }
    );
    if (this.bottom.current) {
      this.bottom.current.scrollIntoView();
    }
  }

  componentWillUnmount() {
    // console.log("unmount");
    App.cable.subscriptions.subscriptions[0].unsubscribe()
  }

  componentDidUpdate(prevProp, prevState) {
    if (prevProp.conversationId !== this.props.conversationId) {
      this.props.fetchChannelMessages(this.props.conversationId)
      .then(() => this.setState({
          message: {
            ...this.state.message,
            body: ""
          },
          conversationId: this.props.conversationId,
          messages: Object.values(this.props.messages)
        })
      )
    }
    if (prevState.conversationId !== this.state.conversationId) {
      this.setState({ conversationId: this.props.conversationId })
    }
    if (this.bottom.current) {
      this.bottom.current.scrollIntoView();
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const newMessage = Object.assign({}, this.state.message)
    newMessage.messageableId= this.state.conversationId
    App.cable.subscriptions.subscriptions[0].speak({ message: newMessage })
    this.setState(state => ({
      message: {
        ...this.state.message,
        body: ""
      },
      messages: this.state.messages.concat(newMessage),
      conversationId: this.props.conversationId
    }))
  }

  render() {
    return (
      <div className="conversation-message-wrapper">
        <div className="conversation-message-header-wrapper">
          Messages Header
        </div>
        <div className="conversation-message">
          Messages
        </div>
      </div>
    )
  }
}

export default ConversationMessage