import { connect } from "react-redux";
import ChannelIndex from "./channel_index";
import {

} from "../../../actions/channel_actions"
import {
  fetchUsersFromServer
} from "../../../actions/user_actions"

const mapStateToProps = (state, ownProps) => {
  return {
    users: Object.values(state.entities.users),
    serverId: state.entities.servers[ownProps.match.params.serverId]
    // channels: Object.values(state.enitties.channels),
    // errors: Object.values(state.errors.channels)
  }
}

const mapDispatchToProps= dispatch => {
  return {
    fetchUsersFromServer: (serverId) => dispatch(fetchUsersFromServer(serverId))
    // createChannel: (channel) => dispatch(createChannel(channel))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelIndex)