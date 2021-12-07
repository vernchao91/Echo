import {
  RECEIVE_SERVER,
  REMOVE_SERVER,
  RECEIVE_JOINED_SERVERS,
  JOIN_SERVER,
  LEAVE_SERVER,
  CLEAR_JOINED_SERVERS
} from "../../actions/server_actions";

const joinedServersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState)

  switch (action.type) {
    case RECEIVE_JOINED_SERVERS:
      return action.servers

    case RECEIVE_SERVER:
      newState[action.server.id] = action.server
      return newState

    case JOIN_SERVER:
      newState[action.server.id] = action.server
      return newState

    case LEAVE_SERVER:
      delete newState[action.serverId]
      return newState

    case CLEAR_JOINED_SERVERS:
      return {}

    case REMOVE_SERVER:
      delete newState[action.serverId]
      return newState

    default: 
      return oldState
  }
}

export default joinedServersReducer