import { connect } from "react-redux";
import EchoApp from "./echo_app";
import { fetchUsersFromServers, fetchServers } from "../../actions/server_actions"


const mapStateToProps = (state, ownProps) => {
  return {
    servers: Object.values(state.entities.servers),
    currentUserId: state.session.id,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // fetchServers: () => dispatch(fetchServers()),
    // fetchUsersFromServers: serverId => dispatch(fetchUsersFromServers(serverId))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EchoApp)