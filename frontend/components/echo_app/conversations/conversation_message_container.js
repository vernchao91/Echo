import { connect } from "react-redux";
import ConversationMessage from "./conversation_message";
import { 

} from "../../../actions/conversation_actions"

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
    createConversation: (conversation) => dispatch(createConversation(conversation)),
    updateConversation: (conversation) => dispatch(updateConversation(conversation)),
    deleteConversation: (conversationId) => dispatch(deleteConversation(conversationId)),
    removeConversationErrors: () => dispatch(removeConversationErrors())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConversationMessage)