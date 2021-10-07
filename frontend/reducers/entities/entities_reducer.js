import { combineReducers } from "redux";
import serversReducer from "./servers_reducer"
import usersReducer from "./users_reducer";
import channelsReducer from "./channels_reducer"

const entitiesReducer = combineReducers({
  servers: serversReducer,
  channels: channelsReducer,
  users: usersReducer
})

export default entitiesReducer