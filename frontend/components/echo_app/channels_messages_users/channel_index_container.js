import { connect } from "react-redux";
import ChannelIndex from "./channel_index";
import {
  fetchUsersFromServer,
  joinServer,
  leaveServer,
} from "../../../actions/user_actions"
import {
  deleteServer,
  updateServer
} from "../../../actions/server_actions"
import { openModal, closeModal } from "../../../actions/modal_actions"
import { 
  fetchChannels 
} from "../../../actions/channel_actions"

const mapStateToProps = (state, ownProps) => {
  return {
    users: state.entities.users,
    server: state.entities.servers[ownProps.match.params.serverId],
    channels: state.entities.channels,
    serverId: ownProps.match.params.serverId,
    currentUserId: state.session.id,
    modal: state.ui.modal,
    errors: Object.values(state.errors)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsersFromServer: (serverId) => dispatch(fetchUsersFromServer(serverId)),
    fetchChannels: (serverId) => dispatch(fetchChannels(serverId)),
    joinServer:(list) => dispatch(joinServer(list)),
    leaveServer:(serverId) => dispatch(leaveServer(serverId)),
    deleteServer: (serverId) => dispatch(deleteServer(serverId)),
    updateServer: (server) => dispatch(updateServer(server)),
    openEditModal: () => dispatch(openModal('editServer')),
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelIndex)