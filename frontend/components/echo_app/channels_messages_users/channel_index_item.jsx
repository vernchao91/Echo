import React from "react"

class ChannelIndexItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {channel: this.props.channel}
  }

  componentDidMount() {
    console.log("cii-mount");
  }
  componentDidUpdate() {

  }
  createChannel() {
    // this.setState((prevState))
  }
  // editChannel() {
  //   this.setState((prevState) => ({channel: this.state.channel}))
  // }

  render() {
    const { channel, channels } = this.props
    return (
      <div className="channel-index-wrapper">
        <p>{channel.name}</p>
      </div>
    )
  }
}

export default ChannelIndexItem