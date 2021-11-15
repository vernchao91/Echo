import React from "react";

class ConversationIndex extends React.Component {
  constructor(props) {
    super(props)
  };

  render() {
    return (
      <div className="conversation-page">

        <div className="conversation-page-header"> 
          Header
        </div>

        <div className="conversation-index-message-wrapper">
          <div className="conversation-index-wrapper">
            List
          </div>
          <div className="conversation-message-wrapper">
            Messages
          </div>
        </div>

      </div>
    )
  };
};

export default ConversationIndex