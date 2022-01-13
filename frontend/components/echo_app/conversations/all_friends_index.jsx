import React from "react";
import AllFriendsIndexItem from "./all_friends_index_item";

class AllFriends extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      conversations: this.props.conversations
    };
  }

  componentDidMount() {
    this.props.fetchConversations(this.props.currentUserId)
      .then(() => this.setState({conversations: this.props.conversations}));
  };

  render() {
    let arr = []

    Object.values(this.state.conversations).map((conversation, i) => {
      if(conversation.ownerId === this.props.currentUserId) {
        if (!conversation.pending) {
          arr.push({displayId: conversation.userId, username: conversation.userUsername, id: conversation.id});
        };
      } else {
        if (!conversation.pending) {
          arr.push({displayId: conversation.ownerId, username: conversation.ownerUsername, id: conversation.id});
        };
      };
    });

    return (
      <div className="all-friends-index-wrapper">
        <div className="all-friends-index-header">
          <h1 className="all-friends-header">
            All Friends
          </h1>
        </div>

        {arr.map((conversation, i) =>
        <AllFriendsIndexItem 
          key={i}
          conversation={conversation}
          deleteConversation={this.props.deleteConversation}
        />
        )}

      </div>
    )
  }
}

export default AllFriends