import React from "react";
import InputEmoji from "react-input-emoji";

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
      { channel: "DMChannel", id: this.props.conversationId},
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
    App.cable.subscriptions.subscriptions[0].unsubscribe();
    this.props.clearMessages();
  }

  componentDidUpdate(prevProp, prevState) {
    if (prevProp.conversationId !== this.props.conversationId) {
      this.props.fetchConversationMessages(this.props.conversationId)
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

  update(field) {
    return (e) => this.setState({
        message : {
        ...this.state.message,
        [field]: e.currentTarget.value 
        } 
    });
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

  renderUsername() {
    const { currentUserId, conversation } = this.props
    if (!currentUserId || !conversation) return null
    if(conversation.ownerId === currentUserId) {
      return (
        <div className="conversation-message-header-wrapper"> 
          <ul className="conversation-messages-header-at">@</ul> 
          <ul className="@username">{conversation.userUsername}</ul>
        </div>
      )
    } else {
      return (
        <div className="conversation-message-header-wrapper"> 
          <ul className="conversation-message-header-at">@</ul> 
          <ul className="conversation-message-header-username">{conversation.ownerUsername}</ul>
        </div>
      )
    }
  }

  renderPlaceholder() {
    const { currentUserId, conversation } = this.props
    if (!currentUserId || !conversation) return null
    if(conversation.ownerId === currentUserId) {
      return `Message @ ${conversation.userUsername}`
    } else {
      return `Message @ ${conversation.ownerUsername}`
    }
  }

  render() {
    const { currentUserId, conversation } = this.props
    if (!currentUserId || !conversation) return null
    console.log(conversation);
    return (
      <div className="conversation-messages-wrapper">

        {this.renderUsername()}

        <div className="messages-display-input-wrapper">
          <div className="messages-display">
            <div className="messages-pushed-to-bottom"/>
            {Object.values(this.props.messages).map((message, i) => {
              let username
              if (message.authorId === conversation.userId) {
                username = conversation.userUsername
              } else {
                username = conversation.ownerUsername
              }
              return (
                <div className="message" key={i}>
                  <h1>{username}</h1>
                  <ul>{message.body}</ul>
                </div>
              )
            })}
            <div ref={this.bottom}/>
          </div>

            <div className="message-form-wrapper">
              <form className="message-form" onSubmit={this.handleSubmit}>
                <input 
                  className="message-input"
                  type="text"
                  value={this.state.message.body}
                  onChange={this.update("body")}
                  placeholder={this.renderPlaceholder()}
                />
                {/* <InputEmoji 
                  className="message-emoji-input"
                  value={this.state.message.body}
                  onChange={this.update("body")}
                  onEnter={this.ha}
                /> */}
              </form>
            </div>
            
        </div>
      </div>
    )
  }
}

export default ConversationMessage