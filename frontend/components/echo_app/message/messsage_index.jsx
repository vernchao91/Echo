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

  renderChannelName() {
    if (!this.props.channel) return 
    return (
      <h1>
        <em># {this.props.channel.name}</em>
      </h1>
    )
  }
  
  render() {
    if (!this.props.channel) return null
    return (
      <div className="message-wrapper">
        <div className="message-header">
          {this.renderChannelName()}
        </div>
        <div className="messages">
          {Object.values(this.props.messages).map((message, i) => 
            <ul key={i}>{message.body}</ul>
          )}
        </div>
      </div>
    )
  }
}

export default MessageIndex