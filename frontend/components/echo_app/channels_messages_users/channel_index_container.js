import { connect } from "react-redux";
import ChannelIndex from "./channel_index";
// import {

// } from "../../../actions/channel_actions"
import {
  fetchUsersFromServer,
  joinServer,
  leaveServer
} from "../../../actions/user_actions"

const mapStateToProps = (state, ownProps) => {
  // const server = state.entities.servers[ownProps.match.params.serverId]
  // console.log(server);
  
  return {
    users: Object.values(state.entities.users),
    server: state.entities.servers[ownProps.match.params.serverId],
    serverId: ownProps.match.params.serverId,
    currentUserId: state.session.id,
    // channels: Object.values(state.enitties.channels),
    errors: Object.values(state.errors)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsersFromServer: (serverId) => dispatch(fetchUsersFromServer(serverId)),
    joinServer:(list) => dispatch(joinServer(list)),
    leaveServer:(serverId) => dispatch(leaveServer(serverId))
    // createChannel: (channel) => dispatch(createChannel(channel))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelIndex)