import { connect } from "react-redux";
import MessageIndex from "./messsage_index";
import { 
  fetchChannelMessages,
  fetchChannelMessage,
  createChannelMessage,
  updateChannelMessage,
  deleteChannelMessage,
  clearMessages
} from "../../../actions/message_actions";
import {
  fetchUsersFromServer
} from "../../../actions/user_actions";
import {
  fetchChannels
} from "../../../actions/channel_actions";
import {
  fetchServersFromUser
} from "../../../actions/server_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    channel: state.entities.channels[ownProps.match.params.channelId],
    channelId: ownProps.match.params.channelId,
    serverId: ownProps.match.params.serverId,
    messages: state.entities.messages,
    currentUserId: state.session.id,
    users: state.entities.users
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchChannelMessages: (channelId) => dispatch(fetchChannelMessages(channelId)),
    fetchChannelMessage: (messageId) => dispatch(fetchChannelMessage(messageId)),
    createChannelMessage: (message) => dispatch(createChannelMessage(message)),
    updateChannelMessage: (message) => dispatch(updateChannelMessage(message)),
    deleteChannelMessage: () => dispatch(deleteChannelMessage(message)),
    fetchUsersFromServer: (serverId) => dispatch(fetchUsersFromServer(serverId)),
    fetchChannels: (serverId) => dispatch(fetchChannels(serverId)),
    fetchServersFromUser: (userId) => dispatch(fetchServersFromUser(userId)),
    clearMessages: () => dispatch(clearMessages())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageIndex)