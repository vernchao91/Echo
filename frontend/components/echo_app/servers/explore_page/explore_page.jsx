import React from "react";
import { Link, Route } from "react-router-dom"
import { 
  IoCompassOutline ,
  // IoGameControllerOutline, 
  // IoMusicalNotesOutline, 
} from "react-icons/io5";
// import { GiAtom } from "react-icons/gi";

class ExplorePage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const pathName = this.props.history.location.pathname;
    const homePath = `/app/servers/explore/home`;
    let renderStyle;
    let renderFontColor;

    if (pathName === homePath) {
      renderStyle =  {backgroundColor: "rgb(58, 58, 58)"}
      renderFontColor = {color: "rgb(230, 230, 230)"}
    };

    return (
      <div className="explore-server-wrapper">

        <div className="explore-header-wrapper">
          <p>Discover</p>
        </div>

        <div className="explore-server-index-wrapper">
          <Link style={renderStyle} to="/app/servers/explore/home" className="explore-server-home-link">
            <IoCompassOutline className="explore-home-icon"/><p>Home</p>
          </Link>
          {/* <Link to="/app/servers/explore/gaming" className="explore-server-gaming-link">
            <IoGameControllerOutline className="explore-gaming-icon"/><p>Gaming</p>
          </Link>
          <Link to="/app/servers/explore/music" className="explore-server-music-link">
            <IoMusicalNotesOutline className="explore-music-icon/><p>Music</p>
          </Link>
          <Link to="/app/servers/explore/sciencetech className="explore-server-sciencetech-link"">
            <GiAtom className="explore-sciencetech-icon/><p>Science & Tech</p>
          </Link> */}
        </div>

      </div>
    )
  }
}

export default ExplorePage