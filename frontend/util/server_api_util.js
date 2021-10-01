// works
export const fetchServers = () => {
  return $.ajax({
    url: "/api/servers",
    method: "GET"
  })
}
//works
export const fetchServer = (serverId) => {
  return $.ajax({
    url: `/api/servers/${serverId}`,
    method: "GET"
  })
}
// works
export const fetchUsersFromServer = (serverId) => {
  return $.ajax({
    url: `api/servers/${serverId}/users`,
    method: "GET"
  })
}
// works
export const joinServer = (list) => {
  return $.ajax({
    url: "/api/lists",
    method: "POST",
    data: { list }
  })
}
// test 
export const leaveServer = (listId) => {
  return $.ajax({
    url: `/api/servers/:server_id/lists/${listId}`,
    method: "DELETE"
  })
}

// works
export const createServer = server => {
  return $.ajax({
    url: `/api/users/:user_id/servers`,
    method: "POST",
    data: { server }
  })
}

// test -- not working
export const updateServer = (server) => {
  return $.ajax({
    url: `/api/users/:user_id/servers/${server.id}`,
    method: "PATCH",
    data: { server }
  })
}

// works
export const deleteServer = (serverId) => {
  return $.ajax({
    url: `/api/users/:user_id/servers/${serverId}`,
    method: "DELETE"
  })
}