import { connect } from "react-redux";
import SessionForm from "./session_form"
import { signup } from"../../actions/session_actions"

const mapStateToProps = (state, ownProps) => ({
  user: {
    email: "",
    username: "",
    password: ""
  },
  errors: state.errors.session,
  formType: "Register"
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: (user) => dispatch(signup(user)),
  removeErrors: () => dispatch(removeErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)