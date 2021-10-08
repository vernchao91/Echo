import React from "react"
import { Link } from "react-router-dom"

class ChannelIndexItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {channel: this.props.channel}
  }

  componentDidMount() {
  }
  componentDidUpdate() {
  }
  createChannel() {
  }
  editChannel() {
  }

  render() {
    const { channel } = this.props
    return (
      <div className="channel-index-wrapper">
        <Link className="channel-button" to={`/app/servers/${channel.serverId}/channels/${channel.id}/messages`}>{channel.name}</Link>
        <Link className="cog"> <i class="fas fa-cog" /> </Link>
      </div>
    )
  }
}

export default ChannelIndexItem