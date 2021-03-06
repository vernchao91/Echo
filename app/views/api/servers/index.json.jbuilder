# @servers.each do |server|
#   json.set! server.id do
#     json.users server.joined_users do |user|
#       json.user user.username
#       json.id user.id
#     end
#     json.partial! "api/servers/server", server: server
#   end
# end

@servers.each do |server|
  json.set! server.id do
    json.users server.joined_users.length
    #   json.user user.username
    #   json.id user.id
    # end
    json.partial! "api/servers/server", server: server
  end
end


# {
#   "2": {
#       users: {
#           
#       }
#       "id": 2,
#       "username": "demo",
#       "email": "demo@gmail.com"
#   },
#   "3": {
#       "id": 3,
#       "username": "Ashe",
#       "email": "ashe1@gmail.com"
#   },
#   "4": {
#       "id": 4,
#       "username": "Alistar",
#       "email": "alistar1@gmail.com"
#   }
# }