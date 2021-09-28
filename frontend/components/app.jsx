import React from "react";
import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import Landing from "./landing/landing";
import SignupFormContainer from "./session/signup_form_container";
import LoginFormContainer from "./session/login_form_container"
import GreetingContainer from "./greeting/greeting_container"

const App = () => (
  <div className="app-wrapper">
      <h1>Welcome to Echo!
      </h1>
    <Route exact path="/" component={ GreetingContainer }/>
    <AuthRoute path="/register" component={SignupFormContainer} />
    <AuthRoute path="/login" component={LoginFormContainer} />
  </div>
)

export default App