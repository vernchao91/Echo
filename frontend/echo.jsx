import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root"
import configureStore from "./store/store";
// import { createServer } from "./actions/server_actions"
import { login } from "./util/session_api_util"
import { leaveServer, updateServer, deleteServer } from "./util/server_api_util"

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  // let store;
  // if (window.currentUser) {
  //   const preloadedState = {
  //     entities: {
  //       users: { [window.currentUser.id]: window.currentUser }
  //     },
  //     session: { id: window.currentUser.id }
  //   };
  //   store = configureStore(preloadedState);
  //   delete window.currentUser;
  // } else {
  //   store = configureStore();
  // }

  let store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  window.leaveServer = leaveServer
  window.deleteServer = deleteServer
  window.updateServer = updateServer

  ReactDOM.render(<Root store={store}/>, root)
})