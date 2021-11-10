import { 
  RECEIVE_MESSAGE_ERRORS,
  REMOVE_MESSAGE_ERRORS,
  REMOVE_ERRORS
} from "../../actions/message_actions"

const messageErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);

  switch(action.type) {
    case RECEIVE_MESSAGE_ERRORS:
      return action.errors

    case REMOVE_MESSAGE_ERRORS:
      return []

    case REMOVE_ERRORS:
      return []

    default:
      return oldState
  }
}

export default messageErrorsReducer