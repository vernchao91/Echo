# Echo
Echo is a fullstack clone of Discord. Users can create servers, text channels, chat areas, and direct messaging.

## Technologies
* Ruby
* Rails
* PostgreSQL
* Javascript / JSX
* React
* Redux
* Webpack
* SCSS

## Features
The User can create servers and give it a server name. The server name may not be the same as an existing owned server. If a name is not entered it will default to the "${username}'s server".
When a server is created, a "General" chat channel is created automatically so you can start chatting right away! The Server owner can also edit or create more channels. Server owners may also invite and kick members. In the chat channels, the user may post a message through action cable websockets that updates live. Users may edit or delete their own messages in the channel. Direct Messaging are private message channels that are between two users. They have the same functions as would a regular chat channel

## In-Progress
* Channel, Message, and Conversation MVP's are not completed. Channel MVP's are halfway done, need to impliment create/edit/delete functions. Next MVP is Message and needs to impliment polymorphic associations and apply action cable web-sockets. Afterwards we can use the Message association to apply it to Conversation MVP and also create a live chat direct messaging component.