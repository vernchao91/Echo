import { combineReducers } from "redux";
import sessionErrorsReducer from "./session_errors_reducer";
import serverErrorsReducer from "./server_errors_reducer";
import userErrorsReducer from "./user_errors_reducer";
import channelErrorReducer from "./channel_errors_reducer";
import messageErrorReducer from "./message_errors_reducer"

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  servers: serverErrorsReducer,
  channels: channelErrorReducer,
  messages: messageErrorReducer,
  users: userErrorsReducer
});

export default errorsReducer;