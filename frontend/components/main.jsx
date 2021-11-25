import React from "react";
import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import EchoAppContainer from "./echo_app/echo_app_container";
import ChannelIndexContainer from "./echo_app//channels_messages_users/channel_index_container";
import ConversationIndexContainer from "./echo_app/conversations/conversation_index_container";
import ConversationMessageContainer from "./echo_app/conversations/conversation_message_container";
import FriendPageContainer from "./echo_app/conversations/friendpage_container";
import ExploreServerContainer from "./echo_app/servers/explore_servers/explore_server_container";
import ExploreHomeContainer from "./echo_app/servers/explore_servers/explore_home_container"

const Main = () => {
  return (
    <div className="main">
      <Route path="/app" component={EchoAppContainer} />
      <Route path="/app/servers/:serverId/channels" component={ChannelIndexContainer}/>
      <Route path="/app/servers/explore" component={ExploreServerContainer}/>
      <Route path="/app/servers/explore/home" component={ExploreHomeContainer}/>
      {/* <Route path="/app/servers/explore/gaming" component={ExploreGamingContainer}/>
        <Route path="/app/servers/explore/music" component={ExploreMusicContainer}/>
        <Route path="/app/servers/explore/sciencetech" component={ExploreScienceTechContainer}/> */}
      <Route path="/app/conversations" component={ConversationIndexContainer}/>
      <Route path="/app/conversations/:conversationId/messages" component={ConversationMessageContainer}/>
      <Route path="/app/conversations/friendpage" component={FriendPageContainer} />
    </div>
  )
}

export default Main;