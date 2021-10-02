import { connect } from "react-redux";
import EchoApp from "./echo_app";


const mapStateToProps = (state, ownProps) => {
  return {
    servers: Object.values(state.entities.servers),
    currentUserId: state.session.id,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EchoApp)