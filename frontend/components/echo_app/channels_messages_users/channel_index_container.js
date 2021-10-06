import { connect } from "react-redux";
import ChannelIndex from "./channel_index";
// import {

// } from "../../../actions/channel_actions"
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

const mapStateToProps = (state, ownProps) => {
  
  return {
    users: state.entities.users,
    server: state.entities.servers[ownProps.match.params.serverId],
    serverId: ownProps.match.params.serverId,
    currentUserId: state.session.id,
    modal: state.ui.modal,
    // channels: Object.values(state.enitties.channels),
    errors: Object.values(state.errors)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsersFromServer: (serverId) => dispatch(fetchUsersFromServer(serverId)),
    joinServer:(list) => dispatch(joinServer(list)),
    leaveServer:(serverId) => dispatch(leaveServer(serverId)),
    deleteServer: (serverId) => dispatch(deleteServer(serverId)),
    updateServer: (server) => dispatch(updateServer(server)),
    openEditModal: () => dispatch(openModal('editServer')),
    closeModal: () => dispatch(closeModal())
    // createChannel: (channel) => dispatch(createChannel(channel))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelIndex)