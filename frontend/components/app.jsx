import React from "react";
import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import LandingContainer from "./landing/landing_container";
import SignupFormContainer from "./session/signup_form_container";
import LoginFormContainer from "./session/login_form_container";
import Error404 from "./error_404/error_404";
import Main from "./main";
import Modal from "./modal/modal"

const App = () => (
  <div className="app">
      <Modal />
    <Switch>

      <Route exact path="/" component={ LandingContainer }/>
      <AuthRoute path="/register" component={SignupFormContainer} />
      <AuthRoute path="/login" component={LoginFormContainer} />
      <ProtectedRoute path="/app" component={ Main }/>
      <Route component={ Error404 }/>
    </Switch>
  </div>
)

export default App