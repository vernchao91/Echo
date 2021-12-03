import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import ExplorePage from "./explore_page";
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ExplorePage))