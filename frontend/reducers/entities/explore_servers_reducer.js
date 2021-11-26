import {
  RECEIVE_EXPLORE_SERVERS,
  CLEAR_EXPLORE_SERVERS
} from "../../actions/server_actions"

const explreServersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_EXPLORE_SERVERS:
      return action.servers

    case CLEAR_EXPLORE_SERVERS:
        return {}

    default: 
      return oldState
  }
}

export default explreServersReducer