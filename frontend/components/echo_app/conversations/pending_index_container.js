import { connect } from "react-redux";
import PendingIndex from "./pending_index"
import {
  fetchConversations,
  updateConversation,
  deleteConversation,
} from "../../../actions/conversation_actions"

const mapStateToProps = (state, ownProp) => {
  return {
    conversations: state.entities.conversations,
    currentUserId : state.session.id
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchConversations: () => dispatch(fetchConversations()),
    updateConversation: (conversation) => dispatch(updateConversation(conversation)),
    deleteConversation: (conversationId) => dispatch(deleteConversation(conversationId))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(PendingIndex)