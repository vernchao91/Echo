import React from "react";

class ConversationIndex extends React.Component {
  constructor(props) {
    super(props)
  };

  render() {
    return (
      <div className="conversation-page">

          <div className="conversation-index-wrapper">
            <div className="conversation-index-header-wrapper">
              List Header
            </div>
            <div className="conversation-list-wrapper">
              List
            </div>
          </div>

          <div className="conversation-friendpage-wrapper">
            
          </div>

          <div className="conversation-message-wrapper">
            <div className="conversation-message-header-wrapper">
              Messages Header
            </div>
            <div className="conversation-message">
              Messages
            </div>
          </div>

      </div>
    )
  };
};

export default ConversationIndex