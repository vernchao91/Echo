import { 
  RECEIVE_CONVERSATION_ERRORS,
  REMOVE_CONVERSATION_ERRORS,
  REMOVE_ERRORS
} from "../../actions/conversation_actions"

const conversationErrorReducer = (oldState = [], action) => {
  Object.freeze(oldState);

  switch(action.type) {
    case RECEIVE_CONVERSATION_ERRORS:
      return action.errors

    case REMOVE_CONVERSATION_ERRORS:
      return []

    case REMOVE_ERRORS:
      return []

    default:
      return oldState
  }
}

export default conversationErrorReducer