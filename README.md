# Echo
https://echo-discordclone.herokuapp.com/#/

Echo is a fullstack clone of Discord. Users can create servers, text channels, chat areas, and direct messaging.

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
The User can create servers and give it a server name. The server name may not be the same as an existing owned server. If a name is not entered it will default to the "${username}'s server".
When a server is created, a "General" chat channel is created automatically so you can start chatting right away! The Server owner can also edit or create more channels. Server owners may also invite and kick members. In the chat channels, the user may post a message through action cable websockets that updates live. Users may edit or delete their own messages in the channel. Direct Messaging are private message channels that are between two users. They have the same functions as would a regular chat channel.

#### User Authentication (create, read)
Account registration and login are fully functional and error handled.
- Users can login and must provide the correct Email and Password they registered with. Failing to do so will provide an error message that displays in red font, "Invalid credentials, please try again." This way, a user with ill intentions would not be able to know if the email or password is incorrect.
- Users can register and must input a unique Email and Username that has not been registered before. This will display the user's username in public but still keep emails private so they stay protected during login. The password is restricted to a minimum of 6 characters. All errors are handled through the backend database and displays the correct error.
<img src="/app/assets/images/EchoAuth.png" alt="UserAuth">

#### Server CRUD(create, read, update, delete)