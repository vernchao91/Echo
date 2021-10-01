@users.each do |user|
  json.set! user.id do 
    json.partial! "api/users/user", user: user
  end
end

# {
#   "1": {
#       "id": 1,
#       "name": "Summoner's Rift",
#       "ownerId": 3
#   },
#   "2": {
#       "id": 2,
#       "name": "Twisted Treeline",
#       "ownerId": 4
#   },
#   "3": {
#       "id": 3,
#       "name": "Howling Abyss",
#       "ownerId": 5
#   }
# }