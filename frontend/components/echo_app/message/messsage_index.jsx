import React from "react";

class MessageIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = { }
    // console.log(this.props);
  }

  componentDidMount() {
    // this.props.channels(this.props.channelId)
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
    return (
      <div className="message-wrapper">
        <div className="message-header">
          {this.renderChannelName()}
        </div>
        <div className="messages">
          <p>Message PlaceHolder</p>
          <p>message 2</p>
          <p>message 3</p>

        </div>
      </div>
    )
  }
}

export default MessageIndex