import * as ServerApiUtil from "../util/server_api_util"

export const RECEIVE_SERVERS = "RECEIVE_SERVERS"
export const RECEIVE_SERVER = "RECEIVE_SERVER"
export const REMOVE_SERVER = "REMOVE_SERVER"

export const RECEIVE_SERVER_ERRORS = "RECEIVE_SERVER_ERRORS"
export const REMOVE_SERVER_ERRORS = "REMOVE_SERVER_ERRORS";
export const REMOVE_ERRORS = "REMOVE_ERRORS"


// regular sync actions
export const receiveServers = servers => {
  return {
    type: RECEIVE_SERVERS,
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
export const receiveServerErrors = errors => {
  return {
    type: RECEIVE_SERVER_ERRORS,
    errors
  }
}
export const removeServerErrors = errors => {
  return {
    type: REMOVE_SERVER_ERRORS,
    errors
  }
}

// thunk async actions

// fetches all servers 
export const fetchServers = () => dispatch (
  ServerApiUtil.fetchServers()
    .then(servers => dispatch(receiveServers(servers))),
    err => dispatch(receiveServerErrors(err.responseJSON))
)

export const fetchServer = (serverId) => dispatch (
  ServerApiUtil.fetchServers(serverId)
    .then(server => dispatch(receiveServer(server))),
    err => dispatch(receiveServerErrors(err.responseJSON))
)
// fetches all servers the user has joined
export const fetchUsersFromServer = (serverId) => dispatch (
  ServerApiUtil.fetchUsersFromServer(serverId)
    .then(servers => dispatch(receiveServers(servers))),
    err => dispatch(receiveServerErrors(err.responseJSON))
)

export const createServer = (server) => dispatch => (
  ServerApiUtil.createServer(server)
    .then(server => dispatch(receiveServer(server))),
    err => dispatch(receiveServerErrors(err.responseJSON))
)

export const updateServer = (server) => dispatch => (
  ServerApiUtil.updateServer(server)
    .then(server => dispatch(receiveServer(server))),
    err => dispatch(receiveServerErrors(err.reponseJSON))
)

export const deleteServer = (serverId) => dispatch (
  ServerApiUtil.deleteServer(serverId)
    .then(() => dispatch(removeServer(serverId))),
    err => dispatch(receiveServerErrors(err.responseJSON))
)