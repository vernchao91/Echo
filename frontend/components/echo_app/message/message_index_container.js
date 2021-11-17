import { connect } from "react-redux";
import MessageIndex from "./messsage_index";
import { 
  fetchChannelMessages,
  fetchChannelMessage,
  createChannelMessage,
  updateChannelMessage,
  deleteChannelMessage
} from "../../../actions/message_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    channelId: ownProps.match.params.channelId,
    channel: state.entities.channels[ownProps.match.params.channelId],
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
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MessageIndex)