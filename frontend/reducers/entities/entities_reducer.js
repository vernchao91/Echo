import { combineReducers } from "redux";
import joinedServersReducer from "./joined_servers_reducer";
import exploreServersReducer from "./explore_servers_reducer";
import usersReducer from "./users_reducer";
import channelsReducer from "./channels_reducer";
import messagesReducer from "./messages_reducer";
import conversationsReducer from "./conversations_reducer";

const entitiesReducer = combineReducers({
  // servers: serversReducer,
  exploreServers: exploreServersReducer,
  joinedServers: joinedServersReducer,
  channels: channelsReducer, 
  messages: messagesReducer,
  users: usersReducer,
  conversations: conversationsReducer
})

export default entitiesReducer