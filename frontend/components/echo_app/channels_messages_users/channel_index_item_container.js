import { connect } from "react-redux";
import ChannelIndexItem from "./channel_index_item"
import {
  fetchChannels,
  fetchChannel,
  updateChannel,
  deleteChannel,
  removeChannelErrors
} from "../../../actions/channel_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    servers: Object.values(state.entities.servers),
    channels: Object.values(state.entities.channels),
    errors: Object.values(state.errors.channels),
    currentUserId: state.session.id,
    // server: state.entities.servers[ownProps.match.params.serverId],
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchChannels: (channels) => dispatch(fetchChannels(channels)),
    fetchChannel: (channel) => dispatch(fetchChannel(channel)),
    updateChannel: (channel) => dispatch(updateChannel(channel)),
    deleteChannel:  (channelId) => dispatch(deleteChannel(channelId)),
    removeChannelErrors: () => dispatch(removeChannelErrors()),
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(ChannelIndexItem)