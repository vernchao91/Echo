import { connect } from "react-redux";
import { updateServer } from "../../../actions/server_actions";
import EditServerForm from "./edit_server_form";
import { closeModal } from "../../../actions/modal_actions"

const mapStateToProps = (state) => {
  
  return {
    servers: state.entities.servers,
    errors: Object.values(state.errors.servers)
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateServer: server => dispatch(updateServer(server)),
    closeModal: () => dispatch(closeModal())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditServerForm)