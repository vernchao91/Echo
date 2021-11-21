import { connect } from "react-redux";
import SearchUser from "./search_user";
import {
  createConversation,
} from "../../../actions/conversation_actions"

const mapStateToProps = state => {
  return {
    currentUserId: state.session.id,
    errors: state.errors
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createConversation: conversation => dispatch(createConversation(conversation))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchUser)