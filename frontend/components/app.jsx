import React from "react";
import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import LandingContainer from "./landing/landing_container";
import SignupFormContainer from "./session/signup_form_container";
import LoginFormContainer from "./session/login_form_container"
import Error404 from "./error_404/error_404"
import EchoAppContainer from "./echo_app/echo_app_container"

const App = () => (
    <Switch>

      <ProtectedRoute exact path="/app" component={EchoAppContainer}/>
      <AuthRoute path="/register" component={SignupFormContainer} />
      <AuthRoute path="/login" component={LoginFormContainer} />
      <Route exact path="/" component={ LandingContainer }/>
      <Route component={ Error404 }/>
    </Switch>
)

export default App