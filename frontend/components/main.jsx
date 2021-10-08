import React from "react";
import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import EchoAppContainer from "./echo_app/echo_app_container"
import ChannelIndexContainer from "./echo_app//channels_messages_users/channel_index_container"
import MessageIndexContainer from "./echo_app/message/message_index_container"
import Modal from "./modal/modal"

const Main = () => {
  return (
    <div className="main">
      {/* <Modal /> */}
      {/* <Route component={EchoAppContainer} /> */}
      <Route path="/app/servers/" component={EchoAppContainer} />
      <Route path="/app/servers/:serverId/channels" component={ChannelIndexContainer}/>
      {/* <Route path="/app/servers/:serverId/channels/:channelId/messages" component={MessageIndexContainer}/> */}
      {/* <EchoAppContainer /> */}
      {/* <Route path="/servers" /> */}
      {/* <Route path="/servers/:serverId" /> */}
      {/* <Route path="/app/servers" component={ChannelIndexContainer}/> */}
    </div>
  )
}

export default Main;