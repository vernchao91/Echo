import { connect } from "react-redux";
import { createServer } from "../../../actions/server_actions";
import CreateServerForm from "./create_server_form"
// import React from "react";
import { closeModal } from "../../../actions/modal_actions"


const mapStateToProps = (state,ownProps) => {
  
  return {
    errors: Object.values(state.errors.servers),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createServer: server => dispatch(createServer(server)),
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateServerForm)