// works -- fetches all users from particular server
export const fetchUsersFromServer = (serverId) => {
  return $.ajax({
    url: `api/servers/${serverId}/users`,
    method: "GET"
  })
}
export const joinServer = (list) => {
  return $.ajax({
    url: "/api/lists",
    method: "POST",
    data: { list }
  })
}
export const leaveServer = (serverId) => {
  return $.ajax({
    url: `/api/servers/${serverId}/lists/:id`,
    method: "DELETE"
  })
}
export const fetchCurrentUser = () => {
  return $.ajax({
    url: `/api/users/:id`,
    method: "GET"
  })
}