@channels.each do |channel|
  json.set! channel.id do
    json.partial! "api/channels/channel", channel: channel
  end
end

# {
#   "2": {
#       "id": 2,
#       "name": "Welcome",
#       "server_id": 1
#   },
#   "3": {
#       "id": 3,
#       "name": "World's Edge",
#       "server_id": 2
#   },
#   "4": {
#       "id": 4,
#       "name": "Ascent",
#       "server_id": 3
#   }
# }