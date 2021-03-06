import { connect } from "react-redux";
import EchoApp from "./echo_app";
import {
  fetchServers,
  fetchServersFromUser,
  createServer,
  removeServerErrors
} from "../../actions/server_actions";
import { logout } from "../../actions/session_actions";

const mapStateToProps = (state) => {
  return {
    servers: (state.entities.joinedServers),
    errors: Object.values(state.errors.servers),
    currentUser: state.session,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout()),
    fetchServers: () => dispatch(fetchServers()),
    fetchServersFromUser: userId => dispatch(fetchServersFromUser(userId)),
    createServer: server => dispatch(createServer(server)),
    removeServerErrors: () => dispatch(removeServerErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EchoApp);