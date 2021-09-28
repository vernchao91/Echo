import { connect } from "react-redux";
import SessionForm from "./session_form"
import { login } from"../../actions/session_actions"

const mapStateToProps = (state, ownProps) => ({
  user: {
    email: "",
    password: ""
  },
  errors: state.errors.session,
  formType: "Login"
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: (user) => dispatch(login(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)