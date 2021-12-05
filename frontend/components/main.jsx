import React from "react";
import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import EchoAppContainer from "./echo_app/echo_app_container";
import ChannelIndexContainer from "./echo_app//channels_messages_users/channel_index_container";
import ConversationIndexContainer from "./echo_app/conversations/conversation_index_container";
import ConversationMessageContainer from "./echo_app/conversations/conversation_message_container";
import FriendPageContainer from "./echo_app/conversations/friendpage_container";
import ExplorePageContainer from "./echo_app/servers/explore_page/explore_page_container";
import ExploreHomeContainer from "./echo_app/servers/explore_page/explore_home_container"

const Main = () => {
  return (
    <div className="main">
      <ProtectedRoute path="/app" component={EchoAppContainer} />
      <ProtectedRoute path="/app/servers/:serverId/channels" component={ChannelIndexContainer}/>
      <ProtectedRoute path="/app/servers/explore" component={ExplorePageContainer}/>
      <ProtectedRoute path="/app/servers/explore/home" component={ExploreHomeContainer}/>
      {/* <ProtectedRoute path="/app/servers/explore/gaming" component={ExploreGamingContainer}/>
        <ProtectedRoute path="/app/servers/explore/music" component={ExploreMusicContainer}/>
        <ProtectedRoute path="/app/servers/explore/sciencetech" component={ExploreScienceTechContainer}/> */}
      <ProtectedRoute path="/app/conversations" component={ConversationIndexContainer}/>
      <ProtectedRoute path="/app/conversations/:conversationId/messages" component={ConversationMessageContainer}/>
      <ProtectedRoute path="/app/conversations/friendpage" component={FriendPageContainer} />
    </div>
  )
}

export default Main;