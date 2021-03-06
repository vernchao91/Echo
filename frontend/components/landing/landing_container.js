import { connect } from "react-redux";
import { logout } from "../../actions/session_actions"
import Landing from "./landing"

const mSTP = (state) => {
  return {
    userId: state.session.id
  };
};

const mDTP = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  };
};

export default connect(mSTP, mDTP)(Landing);