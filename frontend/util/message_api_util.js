export const fetchChannelMessages = channelId => {
  return $.ajax({
    url: `api/channels/${channelId}/messages`,
    method: "GET"
  })
}
export const fetchChannelMessage = messageId => {
  return $.ajax({
    url: `api/channels/:channel_id/messages/${messageId}`,
    method: "GET"
  })
}
export const fetchConversationMessages = conversationId => {
  return $.ajax({
    url: `api/conversations/${conversationId}/messages`,
    method: "GET"
  })
}
export const fetchConversationMessage = messageId => {
  return $.ajax({
    url: `api/conversations/:conversation_id/messages/${messageId}`,
    method: "GET"
  })
}
export const createMessage = message => {
  return $.ajax({
    url: `/api/channels/${message.messageableId}/messages`,
    method: "POST",
    data: { message }
  })
}
export const updateMessage = (message) => {
  return $.ajax({
    url: `/api/channels/${message.messageableId}/messages/${message.id}`,
    method: "PATCH",
    data: { message }
  })
}
export const deleteMessage = (messageId) => {
  return $.ajax({
    url: `/api/channels/:channel_id/messages/${messageId}`,
    method: "DELETE"
  })
}