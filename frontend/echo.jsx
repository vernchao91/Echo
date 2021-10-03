import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root"
import configureStore from "./store/store";
import { fetchServersFromUser, fetchUsersFromServer } from "./util/server_api_util"


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");

  let store;
  if (window.currentUser) {
    const preloadedState = {
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { id: window.currentUser.id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  // let store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.fetchServersFromUser = fetchServersFromUser
  window.fetchUsersFromServer = fetchUsersFromServer


  ReactDOM.render(<Root store={store}/>, root)
})