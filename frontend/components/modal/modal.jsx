import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import  CreateServerFormContainer  from "../echo_app/servers/create_server_form_container"
import EditServerFormContainer from "../echo_app/servers/edit_server_container"

function Modal(props) {
  if (!props.modal) {
    return null;
  }
  let component;
  switch (props.modal) {
    // case 'createServer':
    //   component = <CreateServerFormContainer />;
    //   break;
    case 'editServer':
      component = <EditServerFormContainer {...props} />;
      break;
    case 'joinServer':
      break;
    case 'leaveServer':
      break;
    case 'createChannel':
      break;
    case 'editChannel':
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={props.closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal,
    errors: Object.values[state.errors]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal()),
    removeErrors:() => dispatch(removeErrors())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);