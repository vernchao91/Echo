import { connect } from "react-redux";
import ServerForm from "./server_form";
import { createServer } from "../../../actions/server_actions"

const mapStateToProps = state => {
  return {
    errors: Object.values(state.errors.servers),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createServer: server => dispatch(createServer(server))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServerForm)