import { connect } from "react-redux";
import EchoApp from "./echo_app";
import { 
  fetchServers,
  updateServer,
  fetchServersFromUser,
  createServer
} from "../../actions/server_actions"

const mapStateToProps = (state, ownProps) => {
  return {
    servers: Object.values(state.entities.servers),
    currentUserId: state.session.id,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchServers: () => dispatch(fetchServers()),
    fetchServersFromUser: userId => dispatch(fetchServersFromUser(userId)),
    updateServer: server => dispatch(updateServer(server))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EchoApp)