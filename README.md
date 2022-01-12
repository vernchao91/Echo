# Echo
<a href="https://echo-discordclone.herokuapp.com/#/">Live Link! <---</a>
</br>
Echo is a Full Stack clone of Discord. Users can create servers, text channels, chat areas, and direct messaging.

## Technologies
* Ruby / Rails
* Active Record
* PostgreSQL
* Javascript / JSX
* React / Redux
* HTML / CSS
* Webpack / Babel
* Heroku

## Features
The User can create servers and give it a server name. The server name may not be the same as an existing owned server. When a server is created, a "General" chat channel is created automatically so you can start chatting right away! The Server owner can also edit or create more channels. Server owners may also invite and kick members. In the chat channels, the user may post a message through action cable websockets that updates live. Users may edit or delete their own messages in the channel. Direct Messaging are private message channels that are between two users. They have the same functions as would a regular chat channel.

#### User Authentication (create, read)
Account registration and login are fully functional and error handled.
- Users can login and must provide the correct Email and Password they registered with. Failing to do so will provide an error message that displays in red font, "Invalid credentials, please try again." This way, a user with ill intentions would not be able to know if the email or password is incorrect.
- Users can register and must input a unique Email and Username that has not been registered before. This will display the user's username in public but still keep emails private so they stay protected during login. The password is restricted to a minimum of 6 characters. All errors are handled through the backend database and displays the correct error.
- <img src="/app/assets/images/EchoAuth.png" alt="UserAuth"/>

#### Servers CRUD (create, read, update, delete) and Channels CRUD (create, read, update, delete)
Server/Channel creation form is in a modal and modal input for name is also error handled. Server/Channel update form is on a separate modal that takes up the window size.
- <img src="/app/assets/images/EchoServer.png" alt="ServerCreate"/>
- <img src="/app/assets/images/EchoChannel.png" alt="ChannelCreate"/>
- Create Server/Channel button in the form is disabled and is not enabled until input has been filled.
- Once the input has been filled, the user may not create another server/channel with the same name. Red font errors will be displayed if the user attempts to.
- Server/Channel settings has a Name input that can be updated. If the user tries to update the name to an existing name, error is flashed in red font and may not be saved to the database.
- <img src="/app/assets/images/EchoServerSettings.png" alt="ServerSettings"/>
- <img src="/app/assets/images/EchoChannelSettings.png" alt="ChannelSettings"/>

#### Friends List (create, read, update, delete)
- Friends list shows a conversations page on the left that displays all your friends. The 'All' tab shows all your friends, a button to direct message and another button to remove them as a friend. The 'Pending' tab shows invitations that were sent or being received. This is the page where you can cancel your invitation or reject an invitation from another user. The last tab 'Add Friend' is an input form to add another user based on username. It has error edge cases that detects for 5 different errors. On an unsuccessful add, the input border and error flashes red. On successful add, input border and successful message flashes green.
1.  "User not found, Double check that the capitalization, spelling, or numbers are correct."
2.  "The user has already sent you a friend request. Awaiting your reponse."
3.  "You have already sent a friend request to this user. Awaiting response."
4.  "You are already friends with this user." 
5.  "You cannot add yourself as a friend. Sorry :( You can make friends in the Public Servers!" 
- <img src="/app/assets/images/EchoFLGreen.png" alt="FriendlistSettings"/>

#### Messages (create, read)
- Users can create and read messages in 2 different components, the Channels component and the Direct Messaging component. Just like Discord, everyone in a server are connected to the same websocket channel and can see chat messages via live, much like a groupchat. For Direct Messaging, it is between 2 users and their own distinct websocket channel.
- <img src="/app/assets/images/EchoChannelMessage.png" alt="ChannelMessageSettings"/>
- <img src="/app/assets/images/EchoDMMessage.png" alt="DMMessageSettings"/>


#### Future Feature's to add (create, read, update, delete)
- [ ] Server owner can kick joined members.
- [ ] Server invitation can be created by server owner.
- [ ] Allow image CRUD for User Avatar (Active Storage AWS).
- [ ] Allow image CRUD for Server Avatar (Active Storage AWS).
- [ ] Add Server cards for "verified" servers.
- [ ] Add more featured servers for Music, Science & Tech, and Gaming. (More Seeds for extra components. Server needs extra column for verified: true or false).
- [ ] Voice chat.
- [ ] Video chat.