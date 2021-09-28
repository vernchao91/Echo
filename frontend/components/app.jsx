import React from "react";
import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import Home from "./home/home";
import SignupFormContainer from "./session/signup_form_container";
import LoginFormContainer from "./session/login_form_container"
import GreetingContainer from "./greeting/greeting_container"

const App = () => (
  <div>
    <header>
      <h1>Echo</h1>
      <GreetingContainer />
    </header>
    <Route exact path="/" component={ Home }/>
    <AuthRoute path="/signup" component={SignupFormContainer} />
    <AuthRoute path="/login" component={LoginFormContainer} />
  </div>
)

export default App