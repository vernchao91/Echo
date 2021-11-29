import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import RootReducer from "../reducers/root_reducer";
// import logger from "redux-logger";

const middlewares = [thunk];

// if (process.env.NODE_ENV !== "production") {
//     const { logger } = require("redux-logger");
//     middlewares.push(logger);
// }

const configureStore = (preloadedState = {}) =>
    createStore(RootReducer, preloadedState, applyMiddleware(...middlewares));

// const middlewares = [thunk];
// if (process.env.NODE_ENV !== "production") {
//   middlewares.push(logger);
// }
// const configureStore = (preloadedState = {}) =>
//   createStore(RootReducer, preloadedState, applyMiddleware(...middlewares));

// const configureStore = (preloadedState = {}) => {
//   return (
//     createStore(RootReducer, preloadedState, applyMiddleware(thunk, logger))
//   )
// }

export default configureStore