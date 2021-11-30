import { connect } from "react-redux";
import ChannelIndex from "./channel_index";
import {
  fetchUsersFromServer,
  clearUsers
} from "../../../actions/user_actions";
import {
  deleteServer,
  updateServer,
  joinServer,
  leaveServer,
} from "../../../actions/server_actions";
import { 
  openModal, 
  closeModal 
} from "../../../actions/modal_actions";
import { 
  fetchChannels,
  createChannel,
  removeChannelErrors,
  clearChannels
} from "../../../actions/channel_actions";
import {
  fetchCurrentUser
} from "../../../actions/user_actions";

const mapStateToProps = (state, ownProps) => {
  return {
    users: state.entities.users,
    channels: state.entities.channels,
    errors: Object.values(state.errors),
    server: state.entities.joinedServers[ownProps.match.params.serverId],
    serverId: ownProps.match.params.serverId,
    currentUserId: state.session.id,
    modal: state.ui.modal,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchChannels: (serverId) => dispatch(fetchChannels(serverId)),
    createChannel: (channel) => dispatch(createChannel(channel)),
    fetchUsersFromServer: (serverId) => dispatch(fetchUsersFromServer(serverId)),
    joinServer:(list) => dispatch(joinServer(list)),
    leaveServer:(serverId) => dispatch(leaveServer(serverId)),
    deleteServer: (serverId) => dispatch(deleteServer(serverId)),
    updateServer: (server) => dispatch(updateServer(server)),
    openEditModal: () => dispatch(openModal('editServer')),
    closeModal: () => dispatch(closeModal()),
    removeChannelErrors: () => dispatch(removeChannelErrors()),
    clearUsers: () => dispatch(clearUsers()),
    clearChannels: () => dispatch(clearChannels()),
    fetchCurrentUser: () => dispatch(fetchCurrentUser())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelIndex)