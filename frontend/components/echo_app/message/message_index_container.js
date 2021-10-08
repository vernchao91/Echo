import { connect } from "react-redux"
import MessageIndex from "./messsage_index"
// import { 
//   receiveChannelMessages,
//   receiveUserMessages,
//   createMessage,
//   editMessage,
//   deleteMessage
// } from "../../../actions/message_actions"

const mapStateToProps = (state, ownProps) => {
  return {
    channel: state.entities.channels[ownProps.match.params.channelId],
    channels: Object.values(state.entities.channels)
  }
  
}
const mapDispatchToProps = dispatch => {
  return {
    // receiveChannelMessages: (channelId) => dispatch(receiveChannelMessages(channelId)),
    // receiveUserMessages:(userId) => dispatch(receiveUserMessages(userId)),
    // createMessage: (message) => dispatch(createMessage(message)),
    // editMessage: (message) => dispatch(editMessage(message)),
    // deleteMessage: () => dispatch(deleteMessage(message)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(MessageIndex)