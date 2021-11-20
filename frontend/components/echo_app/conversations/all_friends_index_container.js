import { connect } from "react-redux";
import AllFriends from "./all_friends_index";
import {
  fetchConversations,
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AllFriends)