import React from 'react';

class SearchUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_username: "",
      success: "",
      border: ""
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillUnmount() {
    this.props.removeConversationErrors();
    this.setState({user_username: ""})
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state.user_username;
    this.props.createConversation({user_username: user})
      .then(() => this.setState({success: `Success! Your friend request to ${user} was sent.`, user_username: "", border: "1px solid rgb(82, 189, 40)"}))
  }

  update(field) {
    return (e) => {
      this.props.removeConversationErrors();
      this.setState({ [field]: e.currentTarget.value, success: "", border: "" })
    }
  }

  renderCursor() {
    if(!this.state.user_username) {
      return { cursor: "not-allowed", opacity: "0.5" }
    }
  }

  render() {
    return (
      <div className="search-user-wrapper">

        <div className="search-user-header">
          <h1>ADD FRIEND</h1>
          <p>You can add a friend by their Username. It's cAsE sEnSiTiVe!</p>
        </div>

        <div className={
          this.props.errors.conversations.length === 0 ?
          "search-user-input-form-wrapper" :
          "search-user-input-form-wrapper2"
        }>
          <form style={{border: this.state.border, height: "50px", borderRadius: "5px"}} className="search-user-input-form" onSubmit={this.handleSubmit}>
            <input
              type="text"
              className="search-user-input"
              placeholder="Enter a Username"
              value={this.state.user_username}
              onChange={this.update('user_username')}
            />
            <button disabled={!this.state.user_username} style={this.renderCursor()} className="send-friend-request-button">Send Friend Request</button>
          </form>
        </div>
          {this.props.errors.conversations.map((error, i) => 
            <ul className="search-user-error" key={i}>{error}</ul>
          )}
            <p className="search-user-success">{this.state.success}</p>

      </div>
    )
  }
}

export default SearchUser