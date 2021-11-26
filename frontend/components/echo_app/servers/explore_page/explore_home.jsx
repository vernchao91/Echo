import React from "react";
import FeaturedServers from "./featured_servers";

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

        <div className=" explore-home-featured-index-wrapper">
          <p>Featured Communities</p>
          <div className="explore-home-featured-index">
            {Object.values(this.props.servers).map((server, i) => 
              <FeaturedServers
                key={i}
                server={server}
              />
            )}
          </div>
        </div>

      </div>
    )
  }
}

export default ExploreHome