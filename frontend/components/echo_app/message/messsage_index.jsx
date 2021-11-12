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
      channelId: this.props.channelId,
      messages: Object.values(this.props.messages)
    };
    this.bottom = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
    this.subscription = null
  }

  componentDidMount() {
    // console.log("cdm1");
    // console.log(this.state.channelId);
    this.props.fetchChannelMessages(this.props.channelId)
      .then(() => this.setState({
        channelId: this.props.channelId,
        messages: Object.values(this.props.messages)
      }))
    // this.setState({channelId: this.props.channelId})
    App.cable.subscriptions.create(
      { channel: "ChatChannel", id: this.props.channelId},
      { received: data => {
        // console.log("cdm2state");
        // console.log(this.state.channelId);
        // console.log("cdm2props");
        // console.log(this.props.channelId);
        // console.log("data")
        // console.log(data);
        // console.log("State");
        // console.log(this.state);
        this.props.fetchChannelMessages(this.props.channelId)
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

  componentDidUpdate(prevProp, prevState) {
    if (prevProp.channelId !== this.props.channelId) {
      // console.log("cdu");
      // console.log(prevProp.channelId);
      // console.log("^prevPropCID");
      // console.log(this.state.channelId);
      // console.log("^statePropCID");
      // console.log(this.props.channelId);
      // console.log("^propCID");
      this.props.fetchChannelMessages(this.props.channelId)
      .then(() => this.setState({
          message: {
            ...this.state.message,
            body: ""
          },
          channelId: this.props.channelId,
          messages: Object.values(this.props.messages)
        })
      )
      // console.log(this.state.channelId);
    }
    if (prevState.channelId !== this.state.channelId) {
      this.setState({ channelId: this.props.channelId })
      // console.log("-3");
      // console.log(this.state.channelId);
    }
    if (this.bottom.current) {
      this.bottom.current.scrollIntoView();
    }
  }
  componentWillUnmount() {
    // console.log("unmount");
    App.cable.subscriptions.subscriptions[0].unsubscribe()
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
    newMessage.messageableId= this.state.channelId
    App.cable.subscriptions.subscriptions[0].speak({ message: newMessage })
    this.setState(state => ({
      message: {
        ...this.state.message,
        body: ""
      },
      messages: this.state.messages.concat(newMessage),
      channelId: this.props.channelId
    }))
  }

  displayUsernameAndBody(message, i) {
    if (!this.props.channel || !this.props.users || !this.props.messages) return null
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
    if (!this.props.channel || !this.props.users || !this.props.messages) return null;
    const { channel } = this.props;
    const { users } = this.props;
    return (
      <div className="messages-wrapper">

        <div className="messages-header">
          <h1>
            <em># {channel.name}</em>
          </h1>
        </div>

        <div className="messages-display-input-wrapper">
          <div className="messages-display">
            <div className="messages-pushed-to-bottom"/>
            {Object.values(this.state.messages).map((message, i) => {
              // this.displayUsernameAndBody(message, i)
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