import React from "react";
import { Link } from "react-router-dom"
import { 
  IoCompassOutline ,
  IoGameControllerOutline, 
  IoMusicalNotesOutline, 
} from "react-icons/io5";
import { GiAtom } from "react-icons/gi";
// import ExploreHomeContainer from "./explore_home_container";
// import ExploreGamingContainer from "./explore_gaming_container";
// import ExploreMusicContainer from "./explore_music_container";
// import ExploreScienceTechContainer from "./explore_sciencetech_container";

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
        {/* <Route path="/app/servers/explore/home" component={ExploreHomeContainer}/> */}
        {/* <Route path="/app/servers/explore/gaming" component={ExploreGamingContainer}/>
        <Route path="/app/servers/explore/music" component={ExploreMusicContainer}/>
        <Route path="/app/servers/explore/sciencetech" component={ExploreScienceTechContainer}/> */}
      </div>
    )
  }
}

export default ExploreServer