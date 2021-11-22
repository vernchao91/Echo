import React from 'react';

class SearchUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_username: "",
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
      .then(() => this.setState({user_username: ""}))
  }

  update(field) {
    return (e) => {
      this.props.removeConversationErrors();
      this.setState({ [field]: e.currentTarget.value })
    }
  }

  renderCursor() {
    if(!this.state.user_username.length) {
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
          <form className="search-user-input-form" onSubmit={this.handleSubmit}>
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

      </div>
    )
  }
}

export default SearchUser