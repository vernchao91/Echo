import { connect } from "react-redux"
import MessageIndex from "./messsage_index"
import { 
  fetchChannelMessages,
  fetchChannelMessage,
  createMessage,
  updateMessage,
  deleteMessage
} from "../../../actions/message_actions"

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
    createMessage: (message) => dispatch(createMessage(message)),
    updateMessage: (message) => dispatch(updateMessage(message)),
    deleteMessage: () => dispatch(deleteMessage(message)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MessageIndex)