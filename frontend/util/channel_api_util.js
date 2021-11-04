// fetches all channels in the current server
export const fetchChannels = (serverId) => {
  return $.ajax({
    url: `/api/servers/${serverId}/channels`,
    method: "GET"
  })
}
export const fetchChannel = (channelId) => {
  return $.ajax({
    url: `/api/servers/:server_id/channels/${channelId}`,
    method: "GET"
  })
}
export const createChannel = (channel) => {
  return $.ajax({
    url: `/api/servers/:server_id/channels`,
    method: "POST",
    data: { channel }
  })
}
export const updateChannel = (channel) => {
  return $.ajax({
    url: `/api/servers/${channel.serverId}/channels/${channel.id}`,
    method: "PATCH",
    data: { channel }
  })
}
export const deleteChannel = (channelId) => {
  return $.ajax({
    url: `/api/servers/:server_id/channels/${channelId}`,
    method: "DELETE"
  })
}