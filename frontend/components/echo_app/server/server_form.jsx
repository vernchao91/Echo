import React from "react";

class ServerForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.server
  }

  render() {
    return (
      <div className="server-form-wrapper">
        <h1>ServerForm</h1>
      </div>
    )
  }
}

export default ServerForm