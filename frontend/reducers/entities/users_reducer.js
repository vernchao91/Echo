import { 
  RECEIVE_CURRENT_USER,
} from "../../actions/session_actions"

import {
  RECEIVE_USERS,
  JOIN_SERVER,
  LEAVE_SERVER,
} from "../../actions/user_actions"

const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState)
  
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      // newState[action.user.id] = action.user
      // return newState
      return Object.assign({}, oldState, { [action.user.id]: action.user });

    case RECEIVE_USERS:
      // return Object.assign({}, oldState, action.users)
      return action.users

    case JOIN_SERVER:
      newState[action.user.id] = action.user
      return newState

    case LEAVE_SERVER:
      delete newState[action.listId]
      return newState

    default: 
      return oldState

  }
}

export default usersReducer