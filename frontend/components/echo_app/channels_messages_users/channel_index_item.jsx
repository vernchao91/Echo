import React from "react";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import { IoCloseCircleOutline } from "react-icons/io5";


class ChannelIndexItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      channel: this.props.channel,
      channelId: this.props.channel.id,
      modal: false,
    }
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    console.log("cwu channel index item");
  }
  update(field) {
    return (e) => {
      this.setState({ channel: {
      ...this.state.channel,
      [field]: e.currentTarget.value }
    })}
  }

  handleSubmit(e) {
    e.preventDefault();
    const channel = Object.assign({}, this.state.channel)
    this.props.updateChannel(channel)
      .then(() => {this.handleCloseModal()})
  }

  handleOpenModal() {
    this.setState({
      modal: true,
      channel: {
        ...this.state.channel,
        name: this.props.channel.name
      }
    })
  }

  handleCloseModal() {
    this.props.removeChannelErrors();
    this.setState({ modal: false })
  }

  editChannelForm() {
    return (
      <div className="create-channel-form-wrapper" >
        <button onClick={this.handleCloseModal}><IoCloseCircleOutline/></button>
        <form className="create-channel-form" onSubmit={this.handleSubmit}>
          <h1>Overview</h1>
          <input
            className="create-channel-input"
            type="text"
            value={this.state.channel.name}
            onChange={this.update("name")}
          />
          <button className="create-channel-button">Update Channel</button>
          {this.props.errors.map((error, i) => (
            <div className="channel-error-wrapper" key={i}>
              <li className="channel-error">{error}</li>
            </div>
          ))}
        </form>
        <button onClick={() => this.props.deleteChannel(this.props.channel.id)}>Delete Channel</button>
      </div>
    )
  }

  renderEditChannelButton() {
    if(!this.props.server) return null
    if(this.props.server.ownerId === this.props.currentUserId) return <button className="cog" onClick={() => this.handleOpenModal()}> <i className="fas fa-cog" /> </button>
  }

  render() {
    const { channel } = this.props
    if (!channel) return null
    return (
      <div className="channel-index-wrapper">
        <Modal isOpen={this.state.modal} className="overlay" ariaHideApp={false}>
          {this.editChannelForm()}
        </Modal>
        <div className="channel-index-item">
          <p>#</p>
          <Link className="channel-button" to={`/app/servers/${channel.serverId}/channels/${channel.id}/messages`}>{channel.name}</Link>
        </div>
        {this.renderEditChannelButton()}
      </div>
    )
  }
}

export default ChannelIndexItem