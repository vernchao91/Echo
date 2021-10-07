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
user5 = User.create!(username: "Wraith", email: "wraith1@gmail.com", password: "password")
user6 = User.create!(username: "Pathfinder", email: "pathfinder1@gmail.com", password: "password")
user7 = User.create!(username: "Octane", email: "Octane2@gmail.com", password: "password")
user8 = User.create!(username: "Jett", email: "Jett1@gmail.com", password: "password")
user9 = User.create!(username: "Omen", email: "Omen1@gmail.com", password: "password")
user10 = User.create!(username: "Cypher", email: "Cypher1@gmail.com", password: "password")
user11 = User.create!(username: "Omega", email: "Omega3@gmail.com", password: "password")
user12 = User.create!(username: "Sylvanas", email: "Sylvanas@gmail.com", password: "password")
user13 = User.create!(username: "Rexxar", email: "Rexxar@gmail.com", password: "password")

server1 = Server.create!(name: "League of Legends", owner_id: 3)
server2 = Server.create!(name: "Apex Legends", owner_id: 6)
server3 = Server.create!(name: "Fortnite", owner_id: 12)
server4 = Server.create!(name: "World of Warcraft", owner_id: 13)
server5 = Server.create!(name: "Hearthstone", owner_id: 14)
server6 = Server.create!(name: "Valorant", owner_id: 9)
server7 = Server.create!(name: "Fishing", owner_id:8)
server8 = Server.create!(name: "Basketball", owner_id:9)
server9 = Server.create!(name: "Movie Watch Parties", owner_id:10)

# demo joined servers
list = List.create!(server_id: 1, user_id: 2)
list1 = List.create!(server_id: 2, user_id: 2)
list2 = List.create!(server_id: 3, user_id: 2)

# users joined LoL
list3 = List.create!(server_id: 1, user_id: 3)
list4 = List.create!(server_id: 1, user_id: 4)
list5 = List.create!(server_id: 1, user_id: 5)

# users joined Apex
list6 = List.create!(server_id: 2, user_id: 6)
list7 = List.create!(server_id: 2, user_id: 7)
list8 = List.create!(server_id: 2, user_id: 8)

# users joined Fortnite
list9 = List.create!(server_id: 3, user_id: 12)

# users joined WoW
list10 = List.create!(server_id: 4, user_id: 13)
list11 = List.create!(server_id: 4, user_id: 14)

# users joined Hearthstone
list12 = List.create!(server_id: 5, user_id: 13)
list13 = List.create!(server_id: 5, user_id: 14)

# users joined Valorant
list14 = List.create!(server_id: 6, user_id: 9)
list15 = List.create!(server_id: 6, user_id: 10)
list16 = List.create!(server_id: 6, user_id: 11)

# users joined Fishing
list17 = List.create!(server_id: 7, user_id: 3)
list18 = List.create!(server_id: 7, user_id: 6)
list19 = List.create!(server_id: 7, user_id: 10)

# users joined Basketball
list20 = List.create!(server_id: 8, user_id: 10)
list20 = List.create!(server_id: 8, user_id: 4)

# users joined Dog Meet
list20 = List.create!(server_id: 9, user_id: 6)
list20 = List.create!(server_id: 9, user_id: 13)

channel1 = Channel.create!(name: "Tournament", server_id: 1)
channel2 = Channel.create!(name: "Scrims", server_id: 1)
channel3 = Channel.create!(name: "Ranked", server_id: 1)
channel4 = Channel.create!(name: "ARAM Inhouse", server_id: 1)
channel5 = Channel.create!(name: "Custom Maps", server_id: 3)
channel6 = Channel.create!(name: "Unranked", server_id: 2)
channel7 = Channel.create!(name: "Tournament", server_id: 2)
channel8 = Channel.create!(name: "Ranked", server_id: 2)
channel9 = Channel.create!(name: "Naxxramas", server_id: 4)
channel10 = Channel.create!(name: "Onyxia's Lair", server_id: 4)
channel11 = Channel.create!(name: "Dragon Soul", server_id: 4)
channel12 = Channel.create!(name: "Ascent", server_id: 6)
channel13 = Channel.create!(name: "Haven", server_id: 6)
channel14 = Channel.create!(name: "Bind", server_id: 6)