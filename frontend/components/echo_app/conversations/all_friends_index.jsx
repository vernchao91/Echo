import React from "react";

class AllFriends extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  componentDidMount() {
    console.log("cdm all friends");
  }

  componentWillUnmount() {
    console.log("cwu all friends");
  }

  render() {
    console.log("allfriends render");
    return (
      <div>
        All Friends
      </div>
    )
  }
}

export default AllFriends