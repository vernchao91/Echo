import React from "react";
import { Link, Route } from "react-router-dom"
import { 
  IoCompassOutline ,
  // IoGameControllerOutline, 
  // IoMusicalNotesOutline, 
} from "react-icons/io5";
// import { GiAtom } from "react-icons/gi";

class ExploreServer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="explore-server-wrapper">
        <div className="explore-server-index-wrapper">

          <div className="explore-header-wrapper">
            <p>Discover</p>
          </div>

            <Link to="/app/servers/explore/home" className="explore-server-index">
              <IoCompassOutline className="explore-compass-icon"/><p>Home</p>
            </Link>
            {/* <Link to="/app/servers/explore/gaming">
              <IoGameControllerOutline className="explore-gaming-icon"/><p>Gaming</p>
            </Link>
            <Link to="/app/servers/explore/music">
              <IoMusicalNotesOutline/><p>Music</p>
            </Link>
            <Link to="/app/servers/explore/sciencetech">
              <GiAtom/><p>Science & Tech</p>
            </Link> */}
        </div>
      </div>
    )
  }
}

export default ExploreServer