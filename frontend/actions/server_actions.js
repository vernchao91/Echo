import * as ServerApiUtil from "../util/server_api_util"

export const RECEIVE_EXPLORE_SERVERS = "RECEIVE_EXPLORE_SERVERS";
export const RECEIVE_JOINED_SERVERS = "RECEIVE_JOINED_SERVERS";
export const RECEIVE_SERVER = "RECEIVE_SERVER";
export const REMOVE_SERVER = "REMOVE_SERVER";
export const CLEAR_EXPLORE_SERVERS = "CLEAR_EXPLORE_SERVERS";
export const CLEAR_JOINED_SERVERS = "CLEAR_JOINED_SERVERS";

export const RECEIVE_SERVER_ERRORS = "RECEIVE_SERVER_ERRORS";
export const REMOVE_SERVER_ERRORS = "REMOVE_SERVER_ERRORS";
export const REMOVE_ERRORS = "REMOVE_ERRORS";

export const JOIN_SERVER = "JOIN_SERVER";
export const LEAVE_SERVER = "LEAVE_SERVER";

export const RECEIVE_LIST_ERRORS = "RECEIVE_LIST_ERRORS";
export const REMOVE_LIST_ERRORS = "REMOVE_LIST_ERRORS";

// regular sync actions
export const receiveExploreServers = servers => {
  return {
    type: RECEIVE_EXPLORE_SERVERS,
    servers
  }
}
export const receiveJoinedServers = servers => {
  return {
    type: RECEIVE_JOINED_SERVERS,
    servers
  }
}
export const receiveServer = server => {
  return {
    type: RECEIVE_SERVER,
    server
  }
}
export const removeServer = serverId => {
  return {
    type: REMOVE_SERVER,
    serverId
  }
}
export const clearExploreServers = () => {
  return {
    type: CLEAR_EXPLORE_SERVERS,
  }
}
export const clearJoinedServers = () => {
  return {
    type: CLEAR_JOINED_SERVERS,
  }
}
export const receiveServerErrors = errors => {
  return {
    type: RECEIVE_SERVER_ERRORS,
    errors
  }
}
export const removeServerErrors = () => {
  return {
    type: REMOVE_SERVER_ERRORS,
  }
}
export const removeErrors = () => {
  return {
    type: REMOVE_ERRORS,
  }
}

// list table
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

// thunk async actions
// fetches all servers
export const fetchServers = () => dispatch => {
  return ServerApiUtil.fetchServers()
    .then(
      servers => (dispatch(receiveExploreServers(servers))),
      err => (dispatch(receiveServerErrors(err.responseJSON)))
    )
}
// fetches all servers from the current user has joined
export const fetchServersFromUser = (userId) => dispatch => {
  return ServerApiUtil.fetchServersFromUser(userId)
    .then(
      servers => dispatch(receiveJoinedServers(servers)),
      err => dispatch(receiveServerErrors(err.responseJSON))
    )
}
export const fetchServer = (serverId) => dispatch => {
  return ServerApiUtil.fetchServer(serverId)
    .then(
      server => (dispatch(receiveServer(server))),
      err => (dispatch(receiveServerErrors(err.responseJSON))
    ))
}

export const createServer = (server) => dispatch => {
  return ServerApiUtil.createServer(server)
    .then(
      server => (dispatch(receiveServer(server))),
      err => (dispatch(receiveServerErrors(err.responseJSON))
    ))
}

export const updateServer = (server) => dispatch => {
  return ServerApiUtil.updateServer(server)
    .then(
      server => (dispatch(receiveServer(server))),
      err => (dispatch(receiveServerErrors(err.responseJSON))
    ))
}

export const deleteServer = (serverId) => dispatch => {
  return ServerApiUtil.deleteServer(serverId)
    .then(
      () => (dispatch(removeServer(serverId))),
      err => (dispatch(receiveServerErrors(err.responseJSON))
    ))
}

export const joinServer = (list) => dispatch => (
  ServerApiUtil.joinServer(list)
    .then(
      (server) => dispatch(receiveServer(server)),
      err => dispatch(receiveListErrors(err.responseJSON))
    )
)
export const leaveServer = (serverId) => dispatch => (
  ServerApiUtil.leaveServer(serverId)
    .then(
      () => dispatch(removeServer(serverId)),
      err => dispatch(receiveListErrors(err.responseJSON))
    )
)