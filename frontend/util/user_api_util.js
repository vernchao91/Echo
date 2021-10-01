// retrieve all users in a particular server
// export const fetchUsersFromServer = () => {
//   return $.ajax({

//   })
// }

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