import { connect } from "react-redux";
import ExploreServer from "./explore_server";
import {
  fetchServers
} from "../../../../actions/server_actions"

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchServers: () => dispatchEvent(fetchServers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExploreServer)