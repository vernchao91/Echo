import React from "react"
import { Link } from "react-router-dom"
import Modal from "react-modal"

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
    this.setState({modal: true,  name: ""})
  }

  handleCloseModal() {
    this.setState({modal: false})
    this.props.removeChannelErrors();
  }

  createEditChannel() {
    return (
      <div className="create-channel-form-wrapper" >
        <button onClick={() => this.handleCloseModal()}>X</button>
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
        <button onClick={() => this.props.deleteChannel(this.props.channel.id).then(() => this.handleCloseModal())}>Delete Channel</button>
      </div>
    )
  }

  render() {
    const { channel } = this.props
    return (
      <div className="channel-index-wrapper">
        <Modal isOpen={this.state.modal} className="overlay" ariaHideApp={false}>
          {this.createEditChannel()}
        </Modal>
        <Link className="channel-button" to={`/app/servers/${channel.serverId}/channels/${channel.id}/messages`}>{channel.name}</Link>
        <button className="cog" onClick={() => this.handleOpenModal()}> <i className="fas fa-cog" /> </button>
      </div>
    )
  }
}

export default ChannelIndexItem