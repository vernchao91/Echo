# json.extract! @list, :id, :server_id, :user_id
json.extract! @list.user, :id, :username, :email

# @users.each do |user|
#   json.set! user.id do 
#     json.partial! "api/users/user", user: user
#   end
# end

# {
#   id: "1", 
#   server_id: 1,   
#   user_id: 2
# }