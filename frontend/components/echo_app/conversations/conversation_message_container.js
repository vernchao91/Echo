import { connect } from "react-redux";
import ConversationMessage from "./conversation_message";
import { 
  fetchConversationMessages,
  fetchConversationMessage,
  createConversationMessage,
  updateConversationMessage,
  deleteConversationMessage,
  clearMessages
} from "../../../actions/message_actions";
import { 
  fetchConversations,
  fetchConversation
} from "../../../actions/conversation_actions"

const mapStateToProps = (state, ownProps) => {
  return {
    conversations: state.entities.conversations,
    conversationId: ownProps.match.params.conversationId,
    conversation: state.entities.conversations[ownProps.match.params.conversationId],
    messages: state.entities.messages,
    currentUserId: state.session.id,
    users: state.entities.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchConversations: () => dispatch(fetchConversations()),
    fetchConversation: (conversationId) => dispatch(fetchConversation(conversationId)),
    fetchConversationMessages: (conversationId) => dispatch(fetchConversationMessages(conversationId)),
    fetchConversationMessage: (messageId) => dispatch(fetchConversationMessage(messageId)),
    createConversationMessage: (message) => dispatch(createConversationMessage(message)),
    updateConversationMessage: (message) => dispatch(updateConversationMessage(message)),
    deleteConversationMessage: () => dispatch(deleteConversationMessage(message)),
    clearMessages: () => dispatch(clearMessages())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ConversationMessage)