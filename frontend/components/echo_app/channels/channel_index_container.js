import { connect } from "react-redux";
import ChannelIndex from "./channel_index";
import {

} from "../../../actions/channel_actions"

const mapStateToProps = state => {
  return {
    // channels: Object.values(state.enitties.channels),
    // errors: Object.values(state.errors.channels)
  }
}

const mapDispatchToProps= dispatch => {
  return {
    // createChannel: (channel) => dispatch(createChannel(channel))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelIndex)