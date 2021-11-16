// fetches all channels in the current server
export const fetchConversations = (userId) => {
  return $.ajax({
    url: `/api/users/${userId}/conversations`,
    method: "GET"
  })
}
export const fetchConversation = (conversationId) => {
  return $.ajax({
    url: `/api/users/:user_id/conversations/${conversationId}`,
    method: "GET"
  })
}
export const createConversation = (conversation) => {
  return $.ajax({
    url: `/api/users/${conversation.ownerId}/conversations`,
    method: "POST",
    data: { conversation }
  })
}
export const updateConversation = (conversation) => {
  return $.ajax({
    url: `/api/users/${conversation.userId}/conversations/${conversation.id}`,
    method: "PATCH",
    data: { conversation }
  })
}
export const deleteConversation = (conversationId) => {
  return $.ajax({
    url: `/api/users/:user_id/conversations/${conversationId}`,
    method: "DELETE"
  })
}