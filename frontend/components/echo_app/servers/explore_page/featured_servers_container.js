import { connect } from "react-redux";
import FeaturedServers from "./featured_servers";
import { 
  joinServer
} from "../../../../actions/server_actions";

const mapStateToProps = state => {
  return {

  }
}

const mapDispatchToProps = dispatch => {
  return {
    joinServer: (list) => dispatch(joinServer(list)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedServers)