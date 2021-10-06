import { connect } from "react-redux";
import React from "react";
import EchoApp from "./echo_app";
import { 
  fetchServers,
  fetchServersFromUser
} from "../../actions/server_actions"
import { openModal, closeModal } from "../../actions/modal_actions"

const mapStateToProps = (state) => {
  return {
    servers: Object.values(state.entities.servers),
    errors: Object.values(state.errors.servers),
    currentUserId: state.session.id,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchServers: () => dispatch(fetchServers()),
    fetchServersFromUser: userId => dispatch(fetchServersFromUser(userId)),
    openCreateModal: () => dispatch(openModal('createServer')),
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EchoApp)