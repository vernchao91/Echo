import {
  RECEIVE_SERVERS,
  RECEIVE_SERVER,
  REMOVE_SERVER,
} from "../../actions/server_actions"

const serversReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState)

  switch (action.type) {
    case RECEIVE_SERVERS:
      // console.log(action.servers);
      return Object.assign({}, oldState, action.servers)

    case RECEIVE_SERVER:
      newState[action.server.id] = action.server
      return newState
      // return Object.assign({}, oldState, { [action.server.id]: action.server });

    case REMOVE_SERVER:
      delete newState[action.serverId]
      return newState

    default: 
      return oldState
  }
}

export default serversReducer