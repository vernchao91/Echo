import { connect } from "react-redux";
import EchoApp from "./echo_app";
import { 
  fetchServers,
  createServer,
  fetchServersFromUser
} from "../../actions/server_actions"

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
    fetchServersFromUser: userId => dispatch(fetchServersFromUser(userId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EchoApp)