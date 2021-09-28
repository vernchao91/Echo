import React from "react";
import { Link } from "react-router-dom";

export default props => {

  return (
    <div className="error-404-wrapper">
      <h1>404</h1>
      <p>You look lost...</p>
      <Link to ="/">Let's get you back home...</Link>
    </div>
  )
}