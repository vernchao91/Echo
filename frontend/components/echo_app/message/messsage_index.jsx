import React from "react";

class MessageIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = { 
      channelId: this.props.channelId,
      messages: []
    };
    this.bottom = React.createRef();
  }

  componentDidMount() {
    this.props.fetchChannelMessages(this.props.channelId);
  }

  componentDidUpdate(prevProp) {
    if (prevProp.channelId !== this.props.channelId) {
      this.props.fetchChannelMessages(this.props.channelId);
    }
    if (this.bottom.current) {
      this.bottom.current.scrollIntoView();
    }
  }
  
  render() {
    if (!this.props.channel || !this.props.users || !this.props.users) return null
    console.log(this.props);
    const { users, messages, channel, currentUserId } = this.props
    const user = users[currentUserId]
    if (!user) return null
    return (
      <div className="messages-wrapper">
        <div className="messages-header">
          <h1>
            <em># {channel.name}</em>
          </h1>
        </div>
        <div className="messages">
          {Object.values(messages).map((message, i) =>
            <div className="message" key={i}>
              <ul>{user.username}</ul>
              <ul>{message.body}</ul>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default MessageIndex