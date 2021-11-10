import React from "react";

class MessageIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      message: {
        body: "",
        messageableId: this.props.channelId,
        messageableType: "Channel",
        authorId: this.props.currentUserId,
      },
      messages: Object.values(this.props.messages)
    };
    this.bottom = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    App.cable.subscriptions.create(
      { channel: "ChatChannel" },
      { received: data => {
        this.props.fetchChannelMessages(this.props.channelId);
        this.setState({
          messages: Object.values(this.props.messages).concat(data)
        });
      },
        speak: function(data) { return this.perform("speak", data) }
      }
    );
    if (this.bottom.current) {
      this.bottom.current.scrollIntoView();
    }
  }

  componentDidUpdate(prevProp) {
    if (prevProp.channelId !== this.props.channelId) {
      this.props.fetchChannelMessages(this.props.channelId)
        this.setState({
          messages: Object.values(this.props.messages)
        })
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
    newMessage.messageableId= this.props.channelId
    App.cable.subscriptions.subscriptions[1].speak({ message: newMessage })
    this.props.fetchChannelMessages(this.props.channelId)
      .then(
        this.setState({
          message: {
            ...this.state.message,
            body: ""
          },
          messages: Object.values(this.props.messages)
        })
      )
  }

  displayUsernameAndBody(message, i) {
    if (!this.props.channel || !this.props.users || !this.props.users) return null
    const { users } = this.props
    const user = users[message.authorId]
    if (!user) return null
    return (
      <div className="message" key={i}>
        <h1>{user.username}</h1>
        <ul>{message.body}</ul>
      </div>
    )
  }
  
  render() {
    if (!this.props.channel || !this.props.users || !this.props.users) return null
    const { channel } = this.props
    return (
      <div className="messages-wrapper">

        <div className="messages-header">
          <h1>
            <em># {channel.name}</em>
          </h1>
        </div>

        <div className="messages-display-input-wrapper">
          <div className="messages-display">
            {Object.values(this.props.messages).map((message, i) => (
              this.displayUsernameAndBody(message, i)
            )
            )}
          <div ref={this.bottom}/>
          </div>
          <div className="message-form-wrapper">
            <form className="message-form" onSubmit={this.handleSubmit}>
              <input 
                className="message-input"
                type="text"
                value={this.state.message.body}
                onChange={this.update("body")}
                placeholder={`Message # ${channel.name}`}
              />
            </form>
          </div>
        </div>

      </div>
    )
  }
}

export default MessageIndex