import { connect } from "react-redux";
import { createServer, removeServerErrors } from "../../../actions/server_actions";
import CreateServerForm from "./create_server_form"
// import React from "react";
import { closeModal } from "../../../actions/modal_actions"


const mapStateToProps = (state) => {
  return {
    errors: Object.values(state.errors.servers),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createServer: server => dispatch(createServer(server)),
    closeModal: () => dispatch(closeModal()),
    removeServerErrors: () => dispatch(removeServerErrors())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateServerForm)