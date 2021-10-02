import { combineReducers } from "redux";
import serversReducer from "./servers_reducer"
import usersReducer from "./users_reducer";

const entitiesReducer = combineReducers({
  servers: serversReducer,
  users: usersReducer
})

export default entitiesReducer

