import {
  RECEIVE_SESSION_ERRORS, 
  RECEIVE_CURRENT_USER, 
  REMOVE_SESSION_ERRORS, 
  LOGOUT_CURRENT_USER 
} from "../../actions/session_actions";


const sessionErrorsReducer = (oldState = [], action) => {
  Object.freeze(oldState);

  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return action.errors;

    case RECEIVE_CURRENT_USER:
      return [];

    case REMOVE_SESSION_ERRORS:
      return [];

    case LOGOUT_CURRENT_USER:
      return [];

    default:
      return oldState;

  }
};

export default sessionErrorsReducer;