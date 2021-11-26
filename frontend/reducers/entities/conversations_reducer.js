import {
  RECEIVE_CONVERSATIONS,
  RECEIVE_CONVERSATION,
  REMOVE_CONVERSATION,
  CLEAR_CONVERSATIONS,
} from "../../actions/conversation_actions"

const conversationsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState);

  switch (action.type) {
    case RECEIVE_CONVERSATIONS:
      return action.conversations

    case RECEIVE_CONVERSATION:
      newState[action.conversation.id] = action.conversation
      return newState

    case CLEAR_CONVERSATIONS:
      return {}

    case REMOVE_CONVERSATION:
      delete newState[action.conversationId]
      return newState

    default:
      return oldState
  }
}

export default conversationsReducer