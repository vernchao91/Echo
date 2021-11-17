# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#user = User.create!(username: "", email: "@gmail.com", password: "password")
guest = User.create!(username: "guest", email: "guest@gmail.com", password: "password")
demo = User.create!(username: "demo", email: "demo@gmail.com", password: "password")
ashe = User.create!(username: "Ashe", email: "ashe1@gmail.com", password: "password")
alistar = User.create!(username: "Alistar", email: "alistar1@gmail.com", password: "password")
ryze = User.create!(username: "Ryze", email: "ryze1@gmail.com", password: "password")
wraith = User.create!(username: "Wraith", email: "wraith1@gmail.com", password: "password")
pathfinder = User.create!(username: "Pathfinder", email: "pathfinder1@gmail.com", password: "password")
octane = User.create!(username: "Octane", email: "Octane2@gmail.com", password: "password")
jett = User.create!(username: "Jett", email: "Jett1@gmail.com", password: "password")
omen = User.create!(username: "Omen", email: "Omen1@gmail.com", password: "password")
cypher = User.create!(username: "Cypher", email: "Cypher1@gmail.com", password: "password")
omega = User.create!(username: "Omega", email: "Omega3@gmail.com", password: "password")
sylvanas = User.create!(username: "Sylvanas", email: "Sylvanas@gmail.com", password: "password")
rexxar = User.create!(username: "Rexxar", email: "Rexxar@gmail.com", password: "password")
agentpeely = User.create!(username: "Agent Peely", email: "AgentPeely@gmail.com", password: "password")
kuno = User.create!(username: "Kuno", email: "Kuno@gmail.com", password: "password")
sage = User.create!(username: "Sage", email: "Sage@gmail.com", password: "password")
brimstone = User.create!(username: "Brimstone", email: "Brimstone@gmail.com", password: "password")
mirage = User.create!(username: "Mirage", email: "Mirage@gmail.com", password: "password")
widowmaker = User.create!(username: "Widowmaker", email: "Widowmaker@gmail.com", password: "password")
tracer = User.create!(username: "Tracer", email: "Tracer@gmail.com", password:"password")
mei = User.create!(username: "Mei", email: "Mei@gmail.com", password:"password")
roadhog = User.create!(username: "Roadhog", email: "Roadhog@gmail.com", password:"password")
mercy = User.create!(username: "Mercy", email: "Mercy@gmail.com", password:"password")

#server = Server.create!(name: "", owner_id: )
server1 = Server.create!(name: "League of Legends", owner_id: 3)
server2 = Server.create!(name: "Apex Legends", owner_id: 6)
server3 = Server.create!(name: "Fortnite", owner_id: 12)
server4 = Server.create!(name: "World of Warcraft", owner_id: 13)
server5 = Server.create!(name: "Hearthstone", owner_id: 14)
server6 = Server.create!(name: "Valorant", owner_id: 9)
server7 = Server.create!(name: "Fishing", owner_id:8)
server8 = Server.create!(name: "Fantasy Football", owner_id:9)
server9 = Server.create!(name: "Movie Watch Parties", owner_id:10)
server10 = Server.create!(name: "App Academy", owner_id:17)
server11 = Server.create!(name: "Jett's server", owner_id:9)
server12 = Server.create!(name: "Wraith's server", owner_id:6)
server13 = Server.create!(name: "Manga Talks", owner_id: 20)
server14 = Server.create!(name: "Stack Overflow", owner_id: 17)
server15 = Server.create!(name: "Jimmy's Server", owner_id: 17)
server16 = Server.create!(name: "Overwatch", owner_id: 21)


# demo joined servers

#list = List.create!(server_id: , user_id: )
list = List.create!(server_id: 1, user_id: mercy.id)
list1 = List.create!(server_id: 1, user_id: 2)
list2 = List.create!(server_id: 2, user_id: 2)
list3 = List.create!(server_id: 3, user_id: 2)

# users joined LoL
list4 = List.create!(server_id: 1, user_id: 3)
list5 = List.create!(server_id: 1, user_id: 4)
list6 = List.create!(server_id: 1, user_id: 5)
list7 = List.create!(server_id: 1, user_id: 6)
list8 = List.create!(server_id: 1, user_id: 7)
list9 = List.create!(server_id: 1, user_id: 8)
list10 = List.create!(server_id: 1, user_id: 16)
list11 = List.create!(server_id: 1, user_id: 21)
list12 = List.create!(server_id: 1, user_id: 19)

# users joined Apex
list13 = List.create!(server_id: 2, user_id: 6)
list14 = List.create!(server_id: 2, user_id: 7)
list15 = List.create!(server_id: 2, user_id: 8)

# users joined Fortnite
list16 = List.create!(server_id: 3, user_id: 12)

# users joined WoW
list17 = List.create!(server_id: 4, user_id: 13)
list18 = List.create!(server_id: 4, user_id: 14)

# users joined Hearthstone
list19 = List.create!(server_id: 5, user_id: 13)
list20 = List.create!(server_id: 5, user_id: 14)

# users joined Valorant
list21 = List.create!(server_id: 6, user_id: 9)
list22 = List.create!(server_id: 6, user_id: 10)
list23 = List.create!(server_id: 6, user_id: 11)

# users joined Fishing
list24 = List.create!(server_id: 7, user_id: 3)
list25 = List.create!(server_id: 7, user_id: 6)
list26 = List.create!(server_id: 7, user_id: 10)

list27 = List.create!(server_id: 8, user_id: 10)
list28 = List.create!(server_id: 8, user_id: 4)
list29 = List.create!(server_id: 9, user_id: 6)
list30 = List.create!(server_id: 16, user_id: 21)
list31 = List.create!(server_id: 16, user_id: 22)
list32 = List.create!(server_id: 16, user_id: 23)
list33 = List.create!(server_id: 16, user_id: 24)
list34 = List.create!(server_id: 2, user_id: 17)
list35 = List.create!(server_id: 10, user_id: 17)
list36 = List.create!(server_id: 1, user_id: 13)
list37 = List.create!(server_id: 14, user_id: 13)
list38 = List.create!(server_id: 3, user_id: 16)
list39 = List.create!(server_id: 8, user_id: 13)
list40 = List.create!(server_id: 1, user_id: 14)
list41 = List.create!(server_id: 1, user_id: 9)
list42 = List.create!(server_id: 7, user_id: 13)
list43 = List.create!(server_id: 1, user_id: 11)
list44 = List.create!(server_id: 2, user_id: 20)
list45 = List.create!(server_id: 4, user_id: 16)
list46 = List.create!(server_id: 4, user_id: 7)
list47 = List.create!(server_id: 8, user_id: 3)
list48 = List.create!(server_id: 9, user_id: 13)
list49 = List.create!(server_id: 9, user_id: 3)
list50 = List.create!(server_id: 10, user_id: 13)
list50 = List.create!(server_id: 9, user_id: 1)

# channel = Channel.create!(name: "", server_id: )
channel1 = Channel.create!(name: "Tournament", server_id: 1)
channel2 = Channel.create!(name: "Scrims", server_id: 1)
channel3 = Channel.create!(name: "Ranked", server_id: 1)
channel4 = Channel.create!(name: "ARAM", server_id: 1)
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
channel15 = Channel.create!(name: "Split", server_id: 6)
channel16 = Channel.create!(name: "Icebox", server_id: 6)
channel17 = Channel.create!(name: "Breeze", server_id: 6)
channel18 = Channel.create!(name: "Fracture", server_id: 6)
channel19 = Channel.create!(name: "Spots", server_id: 7)
channel20 = Channel.create!(name: "Poles", server_id: 7)
channel21 = Channel.create!(name: "Baits", server_id: 7)
channel22 = Channel.create!(name: "Trades", server_id: 8)
channel23 = Channel.create!(name: "Smack Board", server_id: 8)
channel24 = Channel.create!(name: "Announcements", server_id: 10)
channel25 = Channel.create!(name: "Questions queue", server_id: 10)
channel26 = Channel.create!(name: "Standups", server_id: 10)
channel27 = Channel.create!(name: "ARAM?!?!?!", server_id: 15)
channel28 = Channel.create!(name: "Ranked", server_id: 5)
channel29 = Channel.create!(name: "Duels", server_id: 5)
channel30 = Channel.create!(name: "Questions queue", server_id: 14)
channel31 = Channel.create!(name: "Announcements", server_id: 14)

# conversation = Conversation.create!(owner_id: , user_id: )
conversation1 = Conversation.create!(owner_id: 2, user_id: ashe.id, owner_username: demo.username, user_username: ashe.username)
conversation2 = Conversation.create!(owner_id: alistar.id, user_id: 2, owner_username: alistar.username, user_username: demo.username)
conversation3 = Conversation.create!(owner_id: 2, user_id: ryze.id, owner_username: demo.username, user_username: ryze.username)
conversation4 = Conversation.create!(owner_id: wraith.id, user_id: 2, owner_username: wraith.username, user_username: demo.username)
conversation5 = Conversation.create!(owner_id: 2, user_id: pathfinder.id, owner_username: demo.username, user_username: pathfinder.username)
conversation6 = Conversation.create!(owner_id: jett.id, user_id: 2, owner_username: jett.username, user_username: demo.username)

#message = Message.create!(body: "", author_id: , messageable_id: , messageable_type: "")
message1 = Message.create!(body: "I am hosting a tournament on Saturday at 12:00pm PST", author_id: 3, messageable_id: 17, messageable_type: "Channel")
message2 = Message.create!(body: "Please Sign up online", author_id: 4, messageable_id: 17, messageable_type: "Channel")
message3 = Message.create!(body: "Deadlines are due Friday 9:00pm PST", author_id: 5, messageable_id: 17, messageable_type: "Channel")
message4 = Message.create!(body: "There will be 4 scrim games being streamed", author_id: 4, messageable_id: 18, messageable_type: "Channel")
message5 = Message.create!(body: "Signup and information will be posted online if you would like your game to be streamed", author_id: 4, messageable_id: 18, messageable_type: "Channel")
message6 = Message.create!(body: "If you would like to scrim other teams, post your availability here so you can coordinate games.", author_id: 4, messageable_id: 18, messageable_type: "Channel")
message7 = Message.create!(body: "This is a public chat channel!", author_id: 5, messageable_id: 18, messageable_type: "Channel")
message8 = Message.create!(body: "When you joined the server, you agreed to our terms and conditions, please abide by the rules or you will be banned", author_id: 5, messageable_id: 18, messageable_type: "Channel")
message9 = Message.create!(body: "If you are looking for a parter or maybe members for your flex ranked games, this is the place!", author_id: 5, messageable_id: 18, messageable_type: "Channel")
message10 = Message.create!(body: "Looking for a duo to play ranked in silver-gold ELO", author_id: 6, messageable_id: 19, messageable_type: "Channel")
message11 = Message.create!(body: "I'm in silver! let's play!", author_id: 11, messageable_id: 19, messageable_type: "Channel")
message12 = Message.create!(body: "anyone ARAM", author_id: 7, messageable_id: 20, messageable_type: "Channel")
message13 = Message.create!(body: "im in!", author_id: 8, messageable_id: 20, messageable_type: "Channel")
message14 = Message.create!(body: "count me in", author_id: 16, messageable_id: 20, messageable_type: "Channel")
message15 = Message.create!(body: "i can play!", author_id: 9, messageable_id: 20, messageable_type: "Channel")
message16 = Message.create!(body: "one more spot left!", author_id: 7, messageable_id: 20, messageable_type: "Channel")
message17 = Message.create!(body: "i can play 1 game!", author_id: 13, messageable_id: 20, messageable_type: "Channel")
message18 = Message.create!(body: "Welcome to the official League of Legends Channel!", author_id: ryze.id, messageable_id: 1, messageable_type: "Channel")
message19 = Message.create!(body: "Welcome to the official Apex Legends Channel!", author_id: wraith.id, messageable_id: 2, messageable_type: "Channel")
message20 = Message.create!(body: "anyone down for games!?", author_id: widowmaker.id, messageable_id: 22, messageable_type: "Channel")
message21 = Message.create!(body: "LFG silver rank", author_id: sage.id, messageable_id: 24, messageable_type: "Channel")
message22 = Message.create!(body: "LFG diamond rank", author_id: octane.id, messageable_id: 24, messageable_type: "Channel")
message23 = Message.create!(body: "LFG plat rank", author_id: pathfinder.id, messageable_id: 24, messageable_type: "Channel")
message24 = Message.create!(body: "Setting up a weekly raid for Nax every Sunday 10am PST", author_id: sylvanas.id, messageable_id: 25, messageable_type: "Channel")
message25 = Message.create!(body: "Reply here if anyone is interested and reserve your spot!", author_id: sylvanas.id, messageable_id: 25, messageable_type: "Channel")
message26 = Message.create!(body: "Setting up a weekly raid for OL every Sunday 1pm PST", author_id: sylvanas.id, messageable_id: 26, messageable_type: "Channel")
message27 = Message.create!(body: "Reply here if anyone is interested and reserve your spot!", author_id: sylvanas.id, messageable_id: 26, messageable_type: "Channel")
message28 = Message.create!(body: "Setting up a weekly raid for DS every Sunday morning 4pm PST", author_id: sylvanas.id, messageable_id: 27, messageable_type: "Channel")
message29 = Message.create!(body: "Reply here if anyone is interested and reserve your spot!", author_id: sylvanas.id, messageable_id: 27, messageable_type: "Channel")
#message30 = Message.create!(body: "", author_id: , messageable_id: , messageable_type: "Channel")
#message31 = Message.create!(body: "", author_id: , messageable_id: , messageable_type: "Channel")
#message32 = Message.create!(body: "", author_id: , messageable_id: , messageable_type: "Channel")
#message33 = Message.create!(body: "", author_id: , messageable_id: , messageable_type: "Channel")
#message34 = Message.create!(body: "", author_id: , messageable_id: , messageable_type: "Channel")
#message35 = Message.create!(body: "", author_id: , messageable_id: , messageable_type: "Channel")
#message36 = Message.create!(body: "", author_id: , messageable_id: , messageable_type: "Channel")
#message37 = Message.create!(body: "", author_id: , messageable_id: , messageable_type: "Channel")
#message38 = Message.create!(body: "", author_id: , messageable_id: , messageable_type: "Channel")
#message39 = Message.create!(body: "", author_id: , messageable_id: , messageable_type: "Channel")
#message40 = Message.create!(body: "", author_id: , messageable_id: , messageable_type: "Channel")
#message41 = Message.create!(body: "", author_id: , messageable_id: , messageable_type: "Channel")
#message42 = Message.create!(body: "", author_id: , messageable_id: , messageable_type: "Channel")
#message43 = Message.create!(body: "", author_id: , messageable_id: , messageable_type: "Channel")
#message44 = Message.create!(body: "", author_id: , messageable_id: , messageable_type: "Channel")
#message45 = Message.create!(body: "", author_id: , messageable_id: , messageable_type: "Channel")
#message46 = Message.create!(body: "", author_id: , messageable_id: , messageable_type: "Channel")
message47 = Message.create!(body: "Hello World", author_id: 2, messageable_id: 2, messageable_type: "Conversation")
message48 = Message.create!(body: "Hi", author_id: alistar.id, messageable_id: 2, messageable_type: "Conversation")
#message49 = Message.create!(body: "", author_id: , messageable_id: , messageable_type: "")
#message50 = Message.create!(body: "", author_id: , messageable_id: , messageable_type: "")
#message51 = Message.create!(body: "", author_id: , messageable_id: , messageable_type: "")
#message52 = Message.create!(body: "", author_id: , messageable_id: , messageable_type: "")
#message53 = Message.create!(body: "", author_id: , messageable_id: , messageable_type: "")
#message54 = Message.create!(body: "", author_id: , messageable_id: , messageable_type: "")
#message55 = Message.create!(body: "", author_id: , messageable_id: , messageable_type: "")
#message56 = Message.create!(body: "", author_id: , messageable_id: , messageable_type: "")
#message57 = Message.create!(body: "", author_id: , messageable_id: , messageable_type: "")
#message58 = Message.create!(body: "", author_id: , messageable_id: , messageable_type: "")
#message59 = Message.create!(body: "", author_id: , messageable_id: , messageable_type: "")
#message60 = Message.create!(body: "", author_id: , messageable_id: , messageable_type: "")
#message61 = Message.create!(body: "", author_id: , messageable_id: , messageable_type: "")
#message62 = Message.create!(body: "", author_id: , messageable_id: , messageable_type: "")
#message63 = Message.create!(body: "", author_id: , messageable_id: , messageable_type: "")
#message64 = Message.create!(body: "", author_id: , messageable_id: , messageable_type: "")
#message65 = Message.create!(body: "", author_id: , messageable_id: , messageable_type: "")
#message66 = Message.create!(body: "", author_id: , messageable_id: , messageable_type: "")
#message67 = Message.create!(body: "", author_id: , messageable_id: , messageable_type: "")
#message68 = Message.create!(body: "", author_id: , messageable_id: , messageable_type: "")
#message69 = Message.create!(body: "", author_id: , messageable_id: , messageable_type: "")
#message70 = Message.create!(body: "", author_id: , messageable_id: , messageable_type: "")
#message71 = Message.create!(body: "", author_id: , messageable_id: , messageable_type: "")
#message72 = Message.create!(body: "", author_id: , messageable_id: , messageable_type: "")
#message73 = Message.create!(body: "", author_id: , messageable_id: , messageable_type: "")
#message74 = Message.create!(body: "", author_id: , messageable_id: , messageable_type: "")
#message75 = Message.create!(body: "", author_id: , messageable_id: , messageable_type: "")
#message76 = Message.create!(body: "", author_id: , messageable_id: , messageable_type: "")
#message77 = Message.create!(body: "", author_id: , messageable_id: , messageable_type: "")
#message78 = Message.create!(body: "", author_id: , messageable_id: , messageable_type: "")
#message79 = Message.create!(body: "", author_id: , messageable_id: , messageable_type: "")
#message80 = Message.create!(body: "", author_id: , messageable_id: , messageable_type: "")
