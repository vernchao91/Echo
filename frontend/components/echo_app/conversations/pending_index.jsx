import React from "react";

class PendingIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log("cdm pending friends");
  }

  componentWillUnmount() {
    console.log("cwu pending friends");
  }

  render() {
    console.log("pending render");
    return (
      <div>
        PendingIndex
      </div>
    )
  }
}

export default PendingIndex