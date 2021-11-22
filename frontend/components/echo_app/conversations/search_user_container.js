import { connect } from "react-redux";
import SearchUser from "./search_user";
import {
  createConversation, 
  removeConversationErrors,
} from "../../../actions/conversation_actions"

const mapStateToProps = state => {
  return {
    currentUserId: state.session.id,
    errors: state.errors
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createConversation: conversation => dispatch(createConversation(conversation)),
    removeConversationErrors: () => dispatch(removeConversationErrors())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchUser)