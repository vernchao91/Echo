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
      border: "",
      modal: false,
    }
    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this)
  }

  componentWillUnmount() {
  }

  update(field) {
    return (e) => {
      this.props.removeChannelErrors();
      this.setState({ 
        channel: {
          ...this.state.channel,
          [field]: e.currentTarget.value 
        },
        border: "",
      })
    }
  }

  handleReset(e) {
    e.preventDefault();
    this.props.removeChannelErrors();
    this.setState({channel : { ...this.state.channel, name: this.props.channel.name}})
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.removeChannelErrors();
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
            <ul className="border-bottom"/>
            <button className="left-side-delete-button" onClick={() => this.props.deleteChannel(this.props.channel.id)}>Delete Channel</button>
          </div>
        </div>

        <div className={this.props.errors.length === 0 ? "edit-channel-right-wrapper-1" : "edit-channel-right-wrapper-2"}>
          <form className="edit-channel-form" >
            <h1>CHANNEL OVERVIEW</h1>
            <h2>CHANNEL NAME</h2>

            <input
              style={{border: this.state.border, borderRadius: "3px"}}
              className="edit-channel-input"
              type="text"
              value={this.state.channel.name}
              onChange={this.update("name")}
            />

            <div className="dummy-div-for-error"></div>

            {this.props.errors.map((error, i) => (
              <div className="channel-error-wrapper" key={i}>
                <ul className="channel-error">{error}</ul>
              </div>
            ))}

            <div className="edit-channel-right-button-wrapper">
              <button type="button" onClick={this.handleReset} className="reset-channel-button">
                Reset
              </button>
              <button type="submit" onClick={this.handleSubmit} className="edit-channel-button">Save Changes</button>
            </div>

          </form>
          <button className="edit-channel-right-close-modal" onClick={this.handleCloseModal} ><IoCloseCircleOutline/></button>
        </div>

      </div>
    )
  }

  renderEditChannelButton() {
    if(!this.props.server) return null
    const { channel } = this.props
    const pathName = this.props.history.location.pathname;
    const channelPath = `/app/servers/${channel.serverId}/channels/${channel.id}/messages`;

    if((this.props.server.ownerId === this.props.currentUserId) && (pathName === channelPath)) {
      return <button style={{display: "block"}} className="cog" onClick={() => this.handleOpenModal()}> <i className="fas fa-cog" /> </button>
    } else if ((this.props.server.ownerId === this.props.currentUserId) && (pathName !== channelPath)) {
      return <button className="cog" onClick={() => this.handleOpenModal()}> <i className="fas fa-cog" /> </button>
    }
  }

  render() {
    const { channel } = this.props;
    if (!channel) return null;
    if(!this.props.server) return null;

    const pathName = this.props.history.location.pathname;
    const channelPath = `/app/servers/${channel.serverId}/channels/${channel.id}/messages`;
    let renderStyle;
    let renderFontColor;

    if (pathName === channelPath) {
      renderStyle =  {backgroundColor: "rgb(58, 58, 58)"}
      renderFontColor = {color: "rgb(230, 230, 230)"}
    };

    return (
      <Link
        className="channel-index-wrapper" 
        to={`/app/servers/${channel.serverId}/channels/${channel.id}/messages`} 
        style={renderStyle}
      >
        <Modal isOpen={this.state.modal} className="overlay" ariaHideApp={false}>
          {this.editChannelForm()}
        </Modal>
        <div className="channel-index-item">
          <p style={renderFontColor}>#</p>
          <div style={renderFontColor} className="channel-button">{channel.name}</div>
        </div>
        {this.renderEditChannelButton()}
      </Link>
    )
  }
}

export default ChannelIndexItem