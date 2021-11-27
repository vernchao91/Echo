import React from "react";
import FeaturedServersContainer from "./featured_servers_container";

class ExploreHome extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchServers()
  }

  render() {
    if (!this.props.servers) return null
    return (
      <div className="explore-home-wrapper">

        {/* <div className="explore-home-background-image">
          <input
          className="explore=home-search-input"
          />
        </div> */}

        <div className=" explore-home-featured-header">
          <p className="explore-home-header">Featured Communities</p>
        </div>
          <div className="explore-home-featured-index">
            {Object.values(this.props.servers).map((server, i) => 
              <FeaturedServersContainer
                key={i}
                server={server}
              />
            )}
          </div>
      </div>
    )
  }
}

export default ExploreHome