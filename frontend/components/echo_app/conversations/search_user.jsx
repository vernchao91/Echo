import React from 'react';

class SearchUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_username: "",
      errors: this.props.errors
    }
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state.user_username);
    this.props.createConversation(user)
      .then(this.setState({user_username: ""}))
  }

  update(field) {
    return (e) => {
      this.setState({ [field]: e.currentTarget.value })
    }
  }

  render() {
    return (
      <div className="search-user-wrapper">

        <div className="search-user-header">
          <h1>ADD FRIEND</h1>
          <p>You can add a friend by their Username. It's cAsE sEnSiTiVe!</p>
        </div>

        <div className="search-user-input-form-wrapper">
          <form className="search-user-input-form" onSubmit={this.handleSubmit}>
            <input
              type="text"
              className="search-user-input"
              placeholder="Enter a Username"
              value={this.state.user_username}
              onChange={this.update("user_username")}
            />
            <button className="send-friend-request-button">Send Friend Request</button>
          </form>
        </div>

      </div>
    )
  }
}

export default SearchUser