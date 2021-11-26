import * as MessageApiUtil from "../util/message_api_util"

export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES";
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";
export const REMOVE_MESSAGE = "REMOVE_MESSAGE";
export const CLEAR_MESSAGES = "CLEAR_MESSAGES";

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
export const clearMessages = () => {
  return {
    type: CLEAR_MESSAGES
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

// channel message functions
export const fetchChannelMessages = (channelId) => dispatch => {
  return MessageApiUtil.fetchChannelMessages(channelId)
    .then(
      messages => (dispatch(receiveMessages(messages))),
      err => (dispatch(receiveMessageErrors(err.responseJSON)))
    )
}
export const fetchChannelMessage = (messageId) => dispatch => {
  return MessageApiUtil.fetchChannelMessage(messageId)
    .then(
      message => (dispatch(receiveMessage(message))),
      err => (dispatch(receiveMessageErrors(err.responseJSON)))
    )
}
export const createChannelMessage = (message) => dispatch => {
  return MessageApiUtil.createChannelMessage(message)
    .then(
      message => (dispatch(receiveMessage(message))),
      err => (dispatch(receiveMessageErrors(err.responseJSON)))
    )
}
export const updateChannelMessage = (message) => dispatch => {
  return MessageApiUtil.updateChannelMessage(message)
    .then(
      message => (dispatch(receiveMessage(message))),
      err => (dispatch(receiveMessageErrors(err.responseJSON)))
    )
}
export const deleteChannelMessage = (messageId) => dispatch => {
  return MessageApiUtil.deleteChannelMessage(messageId)
    .then(
      () => (dispatch(removeMessage(messageId))),
      err => (dispatch(receiveMessageErrors(err.responseJSON)))
    )
}

// conversaion message functions
export const fetchConversationMessages = (conversationId) => dispatch => {
  return MessageApiUtil.fetchConversationMessages(conversationId)
    .then(
      messages => (dispatch(receiveMessages(messages))),
      err => (dispatch(receiveMessageErrors(err.responseJSON)))
    )
}
export const fetchConversationMessage = (messageId) => dispatch => {
  return MessageApiUtil.fetchConversationMessage(messageId)
    .then(
      message => (dispatch(receiveMessage(message))),
      err => (dispatch(receiveMessageErrors(err.responseJSON)))
    )
}
export const createConversationMessage = (message) => dispatch => {
  return MessageApiUtil.createConversationMessage(message)
    .then(
      message => (dispatch(receiveMessage(message))),
      err => (dispatch(receiveMessageErrors(err.responseJSON)))
    )
}
export const updateConversationMessage = (message) => dispatch => {
  return MessageApiUtil.updateConversationMessage(message)
    .then(
      message => (dispatch(receiveMessage(message))),
      err => (dispatch(receiveMessageErrors(err.responseJSON)))
    )
}
export const deleteConversationMessage = (messageId) => dispatch => {
  return MessageApiUtil.deleteConversationMessage(messageId)
    .then(
      () => (dispatch(removeMessage(messageId))),
      err => (dispatch(receiveMessageErrors(err.responseJSON)))
    )
}