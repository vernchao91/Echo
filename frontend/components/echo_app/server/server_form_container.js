import { connect } from "react-redux";
import ServerForm from "./server_form";
import { fetchServers, createServer, updateServer, deleteServer } from "../../../actions/server_actions"

const mapStateToProps = state => {
  console.log(state);
  
  return {
    // server: {
    //   name: "",
    //   ownerId: state.session.id
    // },
    errors: Object.values(state.errors.servers),
  }
}

const mapDispatchToProps = dispatch => {
  return {
    createServer: server => dispatch(createServer(server)),
    updateServer: server => dispatch(updateServer(server))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServerForm)