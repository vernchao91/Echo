import * as ConversationApiUtil from "../util/conversation_api_util"

export const RECEIVE_CONVERSATIONS = "RECEIVE_CONVERSATIONS";
export const RECEIVE_CONVERSATION = "RECEIVE_CONVERSATION";
export const REMOVE_CONVERSATION = "REMOVE_CONVERSATION";

export const RECEIVE_CONVERSATION_ERRORS = "RECEIVE_CONVERSATION_ERRORS";
export const REMOVE_CONVERSATION_ERRORS = "REMOVE_CONVERSATION_ERRORS";
export const REMOVE_ERRORS = "REMOVE_ERRORS";

// regular sync actions
export const receiveConversations = conversations => {
  return {
    type: RECEIVE_CONVERSATIONS,
    conversations
  }
}
export const receiveConversation = conversation => {
  return {
    type: RECEIVE_CONVERSATION,
    conversation
  }
}
export const removeConversation = conversationId => {
  return {
    type: REMOVE_CONVERSATION,
    conversationId
  }
}
export const receiveConversationErrors = errors => {
  return {
    type: RECEIVE_CONVERSATION_ERRORS,
    errors
  }
}
export const removeConversationErrors = () => {
  return {
    type: REMOVE_CONVERSATION_ERRORS,
  }
}
export const removeErrors = () => {
  return {
    type: REMOVE_ERRORS,
  }
}

// thunk async actions

export const fetchConversations = (userId) => dispatch => {
  return ConversationApiUtil.fetchConversations(userId)
    .then(
      conversations => (dispatch(receiveConversations(conversations))),
      err => (dispatch(receiveConversationErrors(err.responseJSON)))
    )
}
export const fetchConversation = (conversationId) => dispatch => {
  return ConversationApiUtil.fetchConversation(conversationId)
    .then(
      conversation => (dispatch(receiveConversation(conversation))),
      err => (dispatch(receiveConversationErrors(err.responseJSON)))
    )
}
export const createConversation = (conversation) => dispatch => {
  return ConversationApiUtil.createConversation(conversation)
    .then(
      conversation => (dispatch(receiveConversation(conversation))),
      err => (dispatch(receiveConversationErrors(err.responseJSON)))
    )
}
export const updateConversation = (conversation) => dispatch => {
  return ConversationApiUtil.updateConversation(conversation)
    .then(
      conversation => (dispatch(receiveConversation(conversation))),
      err => (dispatch(receiveChannelErrors(err.responseJSON)))
    )
}
export const deleteConversation = (conversationId) => dispatch => {
  return ConversationApiUtil.deleteConversation(conversationId)
    .then(
      () => (dispatch(removeConversation(conversationId))),
      err => (dispatch(receiveChannelErrors(err.responseJSON)))
    )
}