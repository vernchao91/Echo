import { connect } from "react-redux";
import SessionForm from "./session_form"
import { signup, removeSessionErrors } from"../../actions/session_actions"

const mapStateToProps = (state) => ({
  user: {
    email: "",
    username: "",
    password: ""
  },
  errors: Object.values(state.errors.session),
  formType: "Register"
})

const mapDispatchToProps = (dispatch) => ({
  processForm: (user) => dispatch(signup(user)),
  removeSessionErrors: () => dispatch(removeSessionErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)