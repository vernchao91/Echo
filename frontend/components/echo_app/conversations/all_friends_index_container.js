import { connect } from "react-redux";
import AllFriends from "./all_friends_index";
import {
  fetchConversations,
  deleteConversation
} from "../../../actions/conversation_actions";


const mapStateToProps = (state, ownProp) => {
  return {
    conversations: state.entities.conversations,
    currentUserId : state.session.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchConversations: () => dispatch(fetchConversations()),
    deleteConversation: (conversationId) => dispatch(deleteConversation(conversationId))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AllFriends);