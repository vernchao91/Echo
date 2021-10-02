import { 
  RECEIVE_SERVER_ERRORS,
  REMOVE_SERVER_ERRORS,
  REMOVE_ERRORS
} from "../../actions/server_actions"

const serverErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);

  switch(action.type) {
    case RECEIVE_SERVER_ERRORS:
      return action.errors

    case REMOVE_SERVER_ERRORS:
      return []

    case REMOVE_ERRORS:
      return []

    default:
      return oldState
  }
}

export default serverErrorsReducer