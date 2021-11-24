import * as UserApiUtil from "../util/user_api_util";

export const RECEIVE_USERS = "RECEIVE_USERS";
export const JOIN_SERVER = "JOIN_SERVER";
export const LEAVE_SERVER = "LEAVE_SERVER";

export const RECEIVE_LIST_ERRORS = "RECEIVE_LIST_ERRORS";
export const REMOVE_LIST_ERRORS = "REMOVE_LIST_ERRORS";

export const RECEIVE_USER_ERRORS = "RECEIVE_USER_ERRORS";
export const REMOVE_USER_ERRORS = "REMOVE_USER_ERRORS";
export const REMOVE_ERRORS = "REMOVE_ERRORS";

// regular sync actions
export const receiveUsers = users => {
  return {
    type: RECEIVE_USERS,
    users
  }
}

export const receiveUser = user => {
  return {
    type: JOIN_SERVER,
    user
  }
}

export const removeUser = user => {
  return {
    type: LEAVE_SERVER,
    user
  }
}

export const receiveUserErrors = errors => {
  return {
    type: RECEIVE_USER_ERRORS,
    errors
  }
}

export const removeUserErrors = errors => {
  return {
    type: REMOVE_USER_ERRORS,
    errors
  }
}

export const receiveListErrors = errors => {
  return {
    type: RECEIVE_LIST_ERRORS,
    errors
  }
}

export const removeListErrors = errors => {
  return {
    type: REMOVE_LIST_ERRORS,
    errors
  }
}

export const removeErrors = errors => {
  return {
    type: REMOVE_ERRORS,
    errors
  }
}

// thunk async actions
// fetches all users from particular server
export const fetchUsersFromServer = (serverId) => dispatch => (
  UserApiUtil.fetchUsersFromServer(serverId)
    .then(
      users => dispatch(receiveUsers(users)),
      err => dispatch(receiveUserErrors(err.responseJSON))
    )
)

export const joinServer = (list) => dispatch => (
  UserApiUtil.joinServer(list)
    .then(
      user => dispatch(receiveUser(user)),
      err => dispatch(receiveListErrors(err.responseJSON))
    )
)

export const leaveServer = (serverId) => dispatch => (
  UserApiUtil.leaveServer(serverId)
    .then(
      (user) => dispatch(removeUser(user)),
      err => dispatch(receiveListErrors(err.responseJSON))
    )
)