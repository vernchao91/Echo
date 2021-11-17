import { connect } from "react-redux";
import ConversationIndex from "./conversation_index";
import { 
  fetchChannelMessages,
  fetchChannelMessage,
  createConversationMessage,
  updateConversationMessage,
  deleteConversationMessage
} from "../../../actions/message_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    conversations: state.entities.conversations,
    currentUserId: state.session.id,
    conversationId: ownProps.match.params.convesationId
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchConversations: () => dispatch(fetchConversations()),
    fetchConversation: (conversationId) => dispatch(fetchConversation(conversationId)),
    fetchConversationMessages: (channelId) => dispatch(fetchChannelMessages(channelId)),
    fetchConversationMessage: (messageId) => dispatch(fetchChannelMessage(messageId)),
    createConversationMessage: (message) => dispatch(createConversationMessage(message)),
    updateConversationMessage: (message) => dispatch(updateConversationMessage(message)),
    deleteConversationMessage: () => dispatch(deleteConversationMessage(message)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConversationIndex)