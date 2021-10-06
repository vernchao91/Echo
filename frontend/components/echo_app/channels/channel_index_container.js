import { connect } from "react-redux";
import ChannelIndex from "./channel_index";
// import {

// } from "../../../actions/channel_actions"
import {
  fetchUsersFromServer
} from "../../../actions/user_actions"

const mapStateToProps = (state, ownProps) => {
  const server = state.entities.servers
  
  return {
    users: Object.values(state.entities.users),
    // users: user,
    // server: state.entities.servers[ownProps.match.params.serverId],
    serverId: ownProps.match.params.serverId,
    // channels: Object.values(state.enitties.channels),
    errors: Object.values(state.errors)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsersFromServer: (serverId) => dispatch(fetchUsersFromServer(serverId))
    // createChannel: (channel) => dispatch(createChannel(channel))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelIndex)