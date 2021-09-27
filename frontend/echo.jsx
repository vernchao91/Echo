import React from 'react';
import ReactDOM from 'react-dom';
// import Root from './components/root';
// import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  // const store = configureStore();

  // window.getState = store.getSTate;
  // window.dispatch = store.dispatch;
  ReactDOM.render(<h1>ReactDOM is working!</h1>, root)
})