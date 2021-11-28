import { connect } from "react-redux";
import { updateServer, removeServerErrors } from "../../../actions/server_actions";
import EditServerForm from "./edit_server_form";
import { closeModal } from "../../../actions/modal_actions"

const mapStateToProps = (state) => {
  
  return {
    servers: state.entities.joinedServers,
    errors: Object.values(state.errors.servers)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateServer: server => dispatch(updateServer(server)),
    closeModal: () => dispatch(closeModal()),
    removeServerErrors: () => dispatch(removeServerErrors())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditServerForm)