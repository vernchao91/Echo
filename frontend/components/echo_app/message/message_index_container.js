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

const mapStateToProps = (state, ownProps) => {
  return {
    channel: state.entities.channels[ownProps.match.params.channelId],
    channelId: ownProps.match.params.channelId,
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
    clearMessages: () => dispatch(clearMessages())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MessageIndex)