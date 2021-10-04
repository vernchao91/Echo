import React from "react";
import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import EchoAppContainer from "./echo_app/echo_app_container"
import ChannelIndexContainer from "./echo_app/channels/channel_index_container"

const Main = () => {
  return (
    <div className= "main">
      <ProtectedRoute component={EchoAppContainer}/>
      {/* <Route path="/servers" /> */}
      {/* <Route path="/servers/:serverId" /> */}
      <Switch>
        <Route exact path="/servers/:serverId/channels" component={ChannelIndexContainer}/>
        <ProtectedRoute path="/api/servers/:serverId/channels/:channelId" />
      </Switch>
    </div>
  )
}

export default Main;