import { combineReducers } from "redux";
import sessionErrorsReducer from "./session_errors_reducer";
import serverErrorsReducer from "./server_errors_reducer"
import userErrorsReducer from "./user_errors_reducer"

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  servers: serverErrorsReducer,
  users: userErrorsReducer
});

export default errorsReducer;