import React from "react";
import { Route } from "react-router-dom";
import EchoAppContainer from "./echo_app/echo_app_container";
import ChannelIndexContainer from "./echo_app/channels/channel_index_container"

const Main = () => {
  return (
    <div className= "main">
      <Route component={EchoAppContainer}/>
      {/* <Route path="/servers" /> */}
      {/* <Route path="/servers/:serverId" /> */}
      <Route path="/api/servers/:serverId/channels/:channelId" />
      <Route path="/api/servers/:serverId/channels" component={ChannelIndexContainer}/>
      <Route path="/app/servers" component={ Main }/>
    </div>
  )
}

export default Main;