import React from "react";
import { Route } from "react-router-dom";
import EchoAppContainer from "./echo_app/echo_app_container";

const Main = () => {
  return (
    <div className= "main">
      <Route component={EchoAppContainer}/>
      {/* <Route path="/servers" /> */}
      {/* <Route path="/servers/:serverId" /> */}
      <Route path="/servers/:serverId/channels" />
      <Route path="/servers/:serverId/channels/:channelId" />
    </div>
  )
}

export default Main;