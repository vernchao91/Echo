import { connect } from "react-redux";
import EchoApp from "./echo_app";
import {
  fetchServers,
  fetchServersFromUser,
  createServer, 
  removeServerErrors
} from "../../actions/server_actions"

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
    createServer: server => dispatch(createServer(server)),
    removeServerErrors: () => dispatch(removeServerErrors())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EchoApp)