import { connect } from "react-redux";
import ConversationIndex from "./conversation_index";
import { 
  fetchConversations,
  fetchConversation,
  createConversation,
  updateConversation,
  deleteConversation,
} from "../../../actions/conversation_actions"

const mapStateToProps = (state, ownProps) => {
  return {
    conversations: state.entities.conversations,
    currentUserId: state.session.id
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchConversations: () => dispatch(fetchConversations()),
    fetchConversation: (conversationId) => dispatch(fetchConversation(conversationId)),
    createConversation: (conversation) => dispatch(createConversation(conversation)),
    updateConversation: (conversation) => dispatch(updateConversation(conversation)),
    deleteConversation: (conversationId) => dispatch(deleteConversation(conversationId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConversationIndex)