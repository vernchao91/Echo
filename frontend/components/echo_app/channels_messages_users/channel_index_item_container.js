import { connect } from "react-redux";
import ChannelIndexItem from "./channel_index_item";
import { withRouter } from "react-router-dom";
import {
  fetchChannels,
  fetchChannel,
  updateChannel,
  deleteChannel,
  removeChannelErrors
} from "../../../actions/channel_actions";
import {
  fetchChannelMessages
} from "../../../actions/message_actions"

const mapStateToProps = (state, ownProps) => {
  return {
    servers: Object.values(state.entities.joinedServers),
    channels: Object.values(state.entities.channels),
    errors: Object.values(state.errors.channels),
    currentUserId: state.session.id,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchChannels: (channels) => dispatch(fetchChannels(channels)),
    fetchChannel: (channel) => dispatch(fetchChannel(channel)),
    updateChannel: (channel) => dispatch(updateChannel(channel)),
    deleteChannel:  (channelId) => dispatch(deleteChannel(channelId)),
    removeChannelErrors: () => dispatch(removeChannelErrors()),
    fetchChannelMessages: channelId => dispatch(fetchChannelMessages(channelId))
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ChannelIndexItem))