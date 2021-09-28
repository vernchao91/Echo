import React from "react";
import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import LandingContainer from "./landing/landing_container";
import SignupFormContainer from "./session/signup_form_container";
import LoginFormContainer from "./session/login_form_container"

const App = () => (
  <div className="app-wrapper">
    <Route exact path="/" component={ LandingContainer }/>
    <AuthRoute path="/register" component={SignupFormContainer} />
    <AuthRoute path="/login" component={LoginFormContainer} />
  </div>
)

export default App