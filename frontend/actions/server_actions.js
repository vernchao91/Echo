import * as ServerApiUtil from "../util/server_api_util"

export const RECEIVE_SERVER = "RECEIVE_SERVER"


// regular sync actions
export const receiveServer = server => {
  console.log(server);
  
  return {
    type: RECEIVE_SERVER,
    server
  }
}
// export const 
// export const 
// export const 
// export const


// thunk async actions

export const createServer = server => dispatch => (
  ServerApiUtil.createServer(server)
    .then(server => dispatch(receiveServer(server)))
    // ,
    // err => dispatch(receiveServerErrors(err.responseJSON))
)
