// works -- fetches all users from particular server
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