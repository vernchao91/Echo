import { connect } from "react-redux";
import SessionForm from "./session_form"
import { login, removeSessionErrors } from"../../actions/session_actions"

const mapStateToProps = (state, ownProps) => ({
  user: {
    email: "",
    password: ""
  },
  errors: Object.values(state.errors.session),
  formType: "Login"
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  processForm: (user) => dispatch(login(user)),
  removeSessionErrors: () => dispatch(removeSessionErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)