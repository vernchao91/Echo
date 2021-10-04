import { connect } from "react-redux";
import ServerIndex from "./server_index_item";
import {
  updateServer
} from "../../../actions/server_actions";

import {
  fetchUsersFromServer
} from "../../../actions/user_actions"

const mapStateToProps = state => {
  return {
    users: Object.values(state.entities.users),
    currentUserId: state.session.id,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchUsersFromServer: serverId => dispatch(fetchUsersFromServer(serverId)),
    updateServer: server => dispatch(updateServer(server))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ServerIndex)