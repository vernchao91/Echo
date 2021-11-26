import { connect } from "react-redux";
import ExploreHome from "./explore_home";
import {
  fetchServers
} from "../../../../actions/server_actions";

const mapStateToProps = state => {
  return {
    servers: state.entities.exploreServers
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchServers: () => dispatch(fetchServers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExploreHome)