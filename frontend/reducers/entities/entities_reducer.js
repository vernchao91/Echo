import { combineReducers } from "redux";
import serversReducer from "./servers_reducer"
import usersReducer from "./users_reducer";
import channelsReducer from "./channels_reducer"
import messagesReducer from "./messages_reducer"

const entitiesReducer = combineReducers({
  servers: serversReducer,
  channels: channelsReducer, 
  messages: messagesReducer,
  users: usersReducer
})

export default entitiesReducer