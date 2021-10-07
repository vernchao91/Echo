import { 
  RECEIVE_CHANNEL_ERRORS,
  REMOVE_CHANNEL_ERRORS,
  REMOVE_ERRORS
} from "../../actions/channel_actions"

const channelErrorReducer = (oldState = [], action) => {
  Object.freeze(oldState);

  switch(action.type) {
    case RECEIVE_CHANNEL_ERRORS:
      return action.errors

    case REMOVE_CHANNEL_ERRORS:
      return []

    case REMOVE_ERRORS:
      return []

    default:
      return oldState
  }
}

export default channelErrorReducer