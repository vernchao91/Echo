import * as MessageApiUtil from "../util/message_api_util"

export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES";
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";
export const REMOVE_MESSAGE = "REMOVE_MESSAGE";

export const RECEIVE_MESSAGE_ERRORS = "RECEIVE_MESSAGE_ERRORS";
export const REMOVE_MESSAGE_ERRORS = "REMOVE_MESSAGE_ERRORS";
export const REMOVE_ERRORS = "REMOVE_ERRORS";

// regular sync actions
export const receiveMessages = messages => {
  return {
    type: RECEIVE_MESSAGES,
    messages
  }
}
export const receiveMessage = message => {
  return {
    type: RECEIVE_MESSAGE,
    message
  }
}
export const removeMessage = messageId => {
  return {
    type: REMOVE_MESSAGE,
    messageId
  }
}
export const receiveMessageErrors = errors => {
  return {
    type: RECEIVE_MESSAGE_ERRORS,
    errors
  }
}
export const removeMessageErrors = () => {
  return {
    type: REMOVE_MESSAGE_ERRORS,
  }
}
export const removeErrors = () => {
  return {
    type: REMOVE_ERRORS,
  }
}

// thunk async actions

export const fetchMessages = (channelId) => dispatch => {
  return MessageApiUtil.fetchMessages(channelId)
    .then(
      messages => (dispatch(receiveMessages(messages))),
      err => (dispatch(receiveMessageErrors(err.responseJSON)))
    )
}
export const createMessage = (message) => dispatch => {
  return MessageApiUtil.createMessage(message)
    .then(
      message => (dispatch(receiveMessage(message))),
      err => (dispatch(receiveMessageErrors(err.responseJSON)))
    )
}
export const updateMessage = (message) => dispatch => {
  return MessageApiUtil.updateMessage(message)
    .then(
      message => (dispatch(receiveMessage(message))),
      err => (dispatch(receiveMessageErrors(err.responseJSON)))
    )
}
export const deleteMessage = (messageId) => dispatch => {
  return MessageApiUtil.deleteMessage(messageId)
    .then(
      () => (dispatch(removeMessage(messageId))),
      err => (dispatch(receiveMessageErrors(err.responseJSON)))
    )
}