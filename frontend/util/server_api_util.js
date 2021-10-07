export const fetchServers = () => {
  return $.ajax({
    url: "/api/servers",
    method: "GET"
  })
}
export const fetchServersFromUser = (userId) => {
  return $.ajax({
    url: `/api/users/${userId}/servers`,
    method: "GET"
  })
}
export const fetchServer = (serverId) => {
  return $.ajax({
    url: `/api/servers/${serverId}`,
    method: "GET"
  })
}
export const createServer = server => {
  return $.ajax({
    url: `/api/users/:user_id/servers`,
    method: "POST",
    data: { server }
  })
}
export const updateServer = (server) => {
  return $.ajax({
    url: `/api/users/:user_id/servers/${server.id}`,
    method: "PATCH",
    data: { server }
  })
}
export const deleteServer = (serverId) => {
  return $.ajax({
    url: `/api/users/:user_id/servers/${serverId}`,
    method: "DELETE"
  })
}