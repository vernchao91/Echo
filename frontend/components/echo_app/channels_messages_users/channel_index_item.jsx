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
      <div className="edit-channel-form-wrapper" >

        <div className="edit-channel-left-wrapper">
          <div className="edit-channel-left">
            <ul className="left-side-channel-name"># {this.state.channel.name}</ul>
            <ul className="left-side-overview">Overview</ul>
            <button className="left-side-delete-button" onClick={() => this.props.deleteChannel(this.props.channel.id)}>Delete Channel</button>
          </div>
        </div>

        <div className="edit-channel-right-wrapper">
          <form className="edit-channel-form">
            <h1>OVERVIEW</h1>
            <h2>CHANNEL NAME</h2>

            <input
              className="edit-channel-input"
              type="text"
              value={this.state.channel.name}
              onChange={this.update("name")}
            />

            <div className="edit-channel-right-button-wrapper">
              <button onClick={() => this.setState({channel : { ...this.state.channel, name: this.props.channel.name}})} className="reset-channel-button">
                Reset
              </button>
              <button onClick={this.handleSubmit} className="edit-channel-button">Save Changes</button>
            </div>

            {this.props.errors.map((error, i) => (
              <div className="channel-error-wrapper" key={i}>
                <li className="channel-error">{error}</li>
              </div>
            ))}

          </form>
          <button className="edit-channel-right-close-modal" onClick={this.handleCloseModal} ><IoCloseCircleOutline/></button>
        </div>

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