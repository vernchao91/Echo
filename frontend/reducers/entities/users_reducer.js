import {
  RECEIVE_USERS,
  CLEAR_USERS,
  RECEIVE_CURRENT_USER
} from "../../actions/user_actions"

const usersReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let newState = Object.assign({}, oldState)
  
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, newState, { [action.user.id]: action.user });

    case RECEIVE_USERS:
      return action.users
    
    case CLEAR_USERS:
      return {}

    default: 
      return oldState

  }
}

export default usersReducer