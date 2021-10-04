import React from "react";
import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import EchoAppContainer from "./echo_app/echo_app_container"
import ChannelIndexContainer from "./echo_app/channels/channel_index_container"

const Main = () => {
  return (
    <div className= "main">
      <EchoAppContainer />
      {/* <Route path="/servers" /> */}
      {/* <Route path="/servers/:serverId" /> */}
        <Route path="/app/servers/:serverId/channels" component={ChannelIndexContainer}/>
      {/* <Route path="/app/servers" component={ChannelIndexContainer}/> */}
      {/* <ProtectedRoute path="/app/servers/:serverId/channels/:channelId" /> */}
    </div>
  )
}

export default Main;