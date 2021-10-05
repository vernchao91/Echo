import { connect } from "react-redux";
import React from "react";
import EchoApp from "./echo_app";
import { 
  fetchServers,
  createServer,
  fetchServersFromUser
} from "../../actions/server_actions"
import { openModal, closeModal } from "../../actions/modal_actions"

const mapStateToProps = (state, ownProps) => {
  return {
    servers: Object.values(state.entities.servers),
    errors: Object.values(state.errors.servers),
    currentUserId: state.session.id,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchServers: () => dispatch(fetchServers()),
    createServer: server => dispatch(createServer(server)),
    fetchServersFromUser: userId => dispatch(fetchServersFromUser(userId)),
    openModal: (
      <button className="open-modal" onClick={() => dispatch(openModal('createServer'))}>
        +
      </button>
    ),
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EchoApp)