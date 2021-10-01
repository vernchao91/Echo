# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user = User.create!(username: "guest", email: "guest@gmail.com", password: "password")
user1 = User.create!(username: "demo", email: "demo@gmail.com", password: "password")
user2 = User.create!(username: "Ashe", email: "ashe1@gmail.com", password: "password")
user3 = User.create!(username: "Alistar", email: "alistar1@gmail.com", password: "password")
user4 = User.create!(username: "Ryze", email: "ryze1@gmail.com", password: "password")

server1 = Server.create!(name: "Summoner's Rift", owner_id: 3)
server2 = Server.create!(name: "Twisted Treeline", owner_id: 4)
server3 = Server.create!(name: "Howling Abyss", owner_id: 5)

list1 = List.create!(server_id: 1, user_id: 3)
list2 = List.create!(server_id: 2, user_id: 3)
list3 = List.create!(server_id: 3, user_id: 3)

list4 = List.create!(server_id: 1, user_id: 4)
list5 = List.create!(server_id: 2, user_id: 4)
list6 = List.create!(server_id: 3, user_id: 4)

list7 = List.create!(server_id: 1, user_id: 5)

# channel1 = Channel.create!(name: "Tournament", server_id: 1)
# channel2 = Channel.create!(name: "Scrims", server_id: 1)
# channel3 = Channel.create!(name: "Ranked", server_id: 1)
# channel4 = Channel.create!(name: "3v3 Ranked", server_id: 2)
# channel5 = Channel.create!(name: "ARAM Inhouse", server_id: 3)
# channel6 = Channel.create!(name: "ARAM Public", server_id: 3)